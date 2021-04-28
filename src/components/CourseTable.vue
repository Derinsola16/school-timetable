<template>
  <v-data-table
    :headers="headers"
    :items="courses"
    :search="search"
    sort-by="name"
    class="elevation-4 mb-15 text-capitalize letter"
    dark
  >
    <template v-slot:top>
      <v-toolbar flat color="#eaab00">
        <v-toolbar-title>Create Course</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark class="mb-2" v-bind="attrs" v-on="on">
              Create Course
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
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.code"
                      label="Code"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.section"
                      label="Section"
                      hint="Year or Level"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.semester"
                      label="Semester"
                      hint="1 or 2"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="editedItem.department"
                      :items="departments"
                      item-text="name"
                      item-value="id"
                      label="Department"
                      persistent-hint
                      return-object
                      single-line
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="editedItem.lecturer"
                      :items="lecturers"
                      item-text="name"
                      item-value="id"
                      label="lecturer"
                      dense
                      return-object
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.start"
                      label="StartTime"
                      hint="Time is 24hrs format eg: 13:30"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.end"
                      label="EndTime"
                      hint="Time is 24hrs format eg: 17:30"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.day"
                      label="Day"
                      hint="Between Monday - Sunday"
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
    dialog: false,
    search: "",
    dialogDelete: false,
    headers: [
      { text: "Name", value: "name", align: "start" },
      { text: "Code", value: "code" },
      { text: "Year", value: "section" },
      { text: "Semester", value: "semester" },
      { text: "Department", value: "department.name" },
      { text: "Lecturer", value: "lecturer.name" },
      { text: "StartTime", value: "start" },
      { text: "EndTime", value: "end" },
      { text: "Day", value: "day" },
      { text: "Action", value: "actions", sortable: false },
    ],
    courses: [],
    lecturers: [],
    departments: [],
    editedIndex: -1,
    editedItem: {
      code: "",
      name: "",
      section: "",
      semester: "",
      department: "",
      lecturer: "",
      startTime: "",
      endTime: "",
      day: "",
    },
    defaultItem: {
      code: "",
      name: "",
      section: "",
      semester: "",
      department: "",
      lecturer: "",
      startTime: "",
      endTime: "",
      day: "",
    },
    token: sessionStorage.getItem("token"),
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Create New Course" : "Edit Course";
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

  async created() {
    this.initialize();
    await customAxios
      .get("/admin/departments", {
        headers: {
          AUTHORIZATION: "Bearer " + this.token,
        },
      })
      .then((response) => {
        this.departments = response.data.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    await customAxios
      .get("/admin/lecturers", {
        headers: {
          AUTHORIZATION: "Bearer " + this.token,
        },
      })
      .then((response) => {
        this.lecturers = response.data.data;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },

  methods: {
    async initialize() {
      await customAxios
        .get("/admin/courses", {
          headers: {
            AUTHORIZATION: "Bearer " + this.token,
          },
        })
        .then((response) => {
          this.courses = response.data.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = this.courses.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.courses.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      let id = this.editedItem.id;
      await customAxios
        .delete(`/admin/courses/${id}`, {
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
          this.$toast.error("Something went wrong :(.");
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
      if (this.editedIndex > -1) {
        const id = this.editedItem.id;
        const data = {
          name: this.editedItem.name,
          code: this.editedItem.code,
          section: this.editedItem.section,
          semester: this.editedItem.semester,
          department: this.editedItem.department.id,
          lecturer: this.editedItem.lecturer.id,
          startTime: this.editedItem.start,
          endTime: this.editedItem.end,
          day: this.editedItem.day,
        };
        await customAxios
          .put(`/admin/courses/${id}`, data, {
            headers: {
              AUTHORIZATION: "Bearer " + this.token,
            },
          })
          .then(() => {
            this.$toast.success("Successfully created");
            this.initialize();
          })
          .catch((error) => {
            // handle error
            this.$toast.error(
              "Something went wrong :(  Make sure time is in format XX:XX"
            );
            console.log(error);
          });
      } else {
        const data = {
          name: this.editedItem.name,
          code: this.editedItem.code,
          section: this.editedItem.section,
          semester: this.editedItem.semester,
          department: this.editedItem.department.id,
          lecturer: this.editedItem.lecturer.id,
          startTime: this.editedItem.start,
          endTime: this.editedItem.end,
          day: this.editedItem.day,
        };
        await customAxios
          .post("/admin/courses/create", data, {
            headers: {
              AUTHORIZATION: "Bearer " + this.token,
            },
          })
          .then(() => {
            this.$toast.success("Successfully created");
            this.initialize();
          })
          .catch((error) => {
            // handle error
            this.$toast.error(
              "Something went wrong :(  Make sure time is in format XX:XX"
            );
            console.log(error);
          });
      }
      this.close();
    },
  },
};
</script>
