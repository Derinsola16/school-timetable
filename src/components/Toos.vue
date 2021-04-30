<template>
  <main>
    <v-container>
      <!-- Form -->
      <div
        class="d-flex bg-light border-0 text-white border rounded rounded-3 p-3 mb-5"
      >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="editedItem.title"
                  label="Title"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="editedItem.description"
                  label="Description"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-btn elevation="2" raised class="mt-16" @click="createTodo"
          >Add Todo</v-btn
        >
      </div>

      <!-- list -->
      <v-container>
        <ul
          id="myUL"
          v-for="item in todos"
          :key="item.id"
          class=" bg-dark text-white rounded rounded-3"
        >
          <li
          @click="check"
            class="d-flex justify-content-between rounded rounded-3 mb-2 border-3 border-top border-start border-end border-bottom border-warning"
          >
            <!-- @click="checked(item)" -->
            <div>
              <h2>{{ item.title }}</h2>
              <p class="text-break">{{ item.description }}</p>
            </div>
            <p
              class="fs-3 p-3 mt-4 text-danger flex-end d-flex"
              @click="deleteItem(item)"
            >
              X
            </p>
          </li>
        </ul>
      </v-container>

      <!-- Pop up -->
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline"
            >Are you sure you want to delete this item?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" text @click="deleteItemConfirm"
              >OK</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </main>
</template>

<script>
import customAxios from "../helpers/axios";
export default {
  data: () => ({
    todos: [],
    editedItem: {
      title: "",
      description: "",
    },
    editedIndex: -1,
    dialogDelete: false,
    token: sessionStorage.getItem("token"),
  }),

  created() {
    this.initialize();
  },
  methods: {
    check(ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
      // this.checked();
    },
    async initialize() {
      await customAxios
        .get("/todos", {
          headers: {
            AUTHORIZATION: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.todos = response.data.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    deleteItem(item) {
      this.editedIndex = this.todos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
      closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    async deleteItemConfirm() {
      let id = this.editedItem.id;
      await customAxios
        .delete(`/todos/${id}`, {
          headers: {
            AUTHORIZATION: "Bearer " + this.token,
          },
        })
        .then(() => {
          this.$toast.success("Successfully deleted :)");
          this.initialize();
        })
        .catch((error) => {
          // handle error
          console.log(error);
          this.$toast.error("Something went wrong :(");
        });
      this.closeDelete();
    },

    async createTodo() {
      if (this.editedItem.title === "" && this.editedItem.description === "") {
        this.$toast.error("Fields cannot be empty");
      } else {
        const data = {
          title: this.editedItem.title,
          description: this.editedItem.description,
        };
        await customAxios
          .post("/todos/create", data, {
            headers: {
              AUTHORIZATION: "Bearer " + this.token,
            },
          })
          .then(() => {
            this.$toast.success("Successfully created");
            this.initialize();
            this.editedItem.title = ''
            this.editedItem.description = ''

          })
          .catch((error) => {
            // handle error
            this.$toast.error("Something went wrong :( Check again");
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  font-size: 18px;
  transition: 0.2s;
}

/* When clicked on, add a background color and strike out text */
.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}
</style>
