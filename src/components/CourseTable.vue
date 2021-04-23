<template>
  <v-data-table
    :headers="headers"
    :items="course"
    sort-by="name"
    class="elevation-4 mb-15 text-capitalize"
    dark
  >
    <template v-slot:top>
      <v-toolbar flat color="#eaab00">
        <v-toolbar-title>Create Course</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn  dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
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
                      label="Course Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.code"
                      label="CourseCode"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.section"
                      label="CourseCode"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.semester"
                      label="CourseCode"
                    ></v-text-field>
                  </v-col>
                 <v-col cols="12" sm="6">
                    <v-select
                      v-model="editedItem.department"
                      :items="department"
                      label="Department"
                      dense
                    ></v-select>
                 </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="editedItem.lecturer"
                      :items="lecturer"
                      label="Lecturer"
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.startTime"
                      label="StartTime"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.endTime"
                      label="EndTime"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editedItem.day"
                      label="Day"
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
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
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
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Name", value: "name", align: "start" },
      { text: "Code", value: "code" },
      { text: "Section", value: "section" },
      { text: "Semester", value: "semester" },
      { text: "Department", value: "department" },
      { text: "Lecturer", value: "lecturer" },
      { text: "StartTime", value: "startTime" },
      { text: "EndTime", value: "endTime" },
      { text: "Day", value: "day" },
      { text: "Action", value: "actions", sortable: false },
    ],
    course: [],
    lecturer: [],
    department: [],
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

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.course = [
        {
          code: 1022,
          name: "Web App",
          section: 3,
          semester: 4,
          department: "Computer Science",
          lecturer: "Andrew",
          startTime: '13:00',
          endTime: "17:00",
          day: "Wednesday",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.course.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.course.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.course.splice(this.editedIndex, 1);
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.course[this.editedIndex], this.editedItem);
      } else {
        this.course.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
