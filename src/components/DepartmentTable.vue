<template>
  <v-data-table
    :headers="headers"
    :items="department"
    :search="search"
    sort-by="name"
    class="elevation-4 mb-15 text-capitalize letter"
    dark
  >
    <template v-slot:top>
      <v-toolbar flat color="#eaab00">
        <v-toolbar-title>Create Department</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          dark
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark class="mb-2" v-bind="attrs" v-on="on">
              Create Department
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2 success--text" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)" class="error--text">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import customAxios from "../helpers/axios";
export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    token: sessionStorage.getItem("token"),
    headers: [
      { text: "Name", value: "name" },
      { text: "Action", value: "actions", sortable: false },
    ],
    department: [],
    editedIndex: -1,
    editedItem: {
      name: "",
    },
    defaultItem: {
      name: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Create New Department"
        : "Edit Department";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      await customAxios
        .get("/admin/departments", {
          headers: {
            AUTHORIZATION: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.department = response.data.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },

    async editItem(item) {
      this.editedIndex = this.department.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.department.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      let id = this.editedItem.id;
      //  this.department.splice(this.editedIndex, 1);

      await customAxios
        .delete(`/admin/departments/${id}`, {
          headers: {
            AUTHORIZATION: "Bearer " + this.token,
          },
        })
        .then(() => {
          this.$toast.success("Successfully deleted");
          this.initialize();
        })
        .catch((error) => {
          // handle error
          console.log(error);
          this.$toast.error("Something went wrong :(");
        });
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedItem.name === "") {
        this.$toast.error("Name cannot be empty");
      } else {
        if (this.editedIndex > -1) {
          let id = this.editedItem.id;
          let name = this.editedItem;
          await customAxios
            .put(`/admin/departments/${id}`, name, {
              headers: {
                AUTHORIZATION: "Bearer " + this.token,
              },
            }).then(() => {
              this.$toast.success("Successfully updated");
              this.initialize()
            })
            .catch((error) => {
              // handle error
              console.log(error);
            });
        } else {
          let name = this.editedItem;
          await customAxios
            .post("/admin/departments/create", name, {
              headers: {
                AUTHORIZATION: "Bearer " + this.token,
              },
            }).then(() => {
              this.$toast.success("Successfully created");
              this.initialize()
            })
            .catch((error) => {
              // handle error
              console.log(error);
            });
        }
        this.close();
      }
    },
  },
};
</script>
