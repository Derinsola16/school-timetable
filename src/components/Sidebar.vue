<template>
  <nav>
    <div class="highlight position-sticky top-0" style="width:256px; height: 100vh">
      <div class="text-center p-5">
        <img src="../assets/image.png" alt="" class="" width="100" />
      </div>
      <div>
       <div v-if="currentPath == '/admin'">
          <router-link
          to="department"
          class="py-3 text-white d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Department',
          }"
        >
          <i class="fas fa-table me-3"></i>
          <p class="m-0">Department</p>
        </router-link>

        <router-link
          to="lecturer"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Lecturer',
          }"
        >
          <i class="fas fa-user me-3"></i>
          <p class="m-0">Lecturer</p>
        </router-link>

        <router-link
          to="student"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Student',
          }"
        >
          <i class="fas fa-user me-3"></i>
          <p class="m-0">Student</p>
        </router-link>

        <router-link
          to="course"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Course',
          }"
        >
          <i class="fas fa-book me-3"></i>
          <p class="m-0">Course</p>
        </router-link>
       </div>

        <router-link
          to="todo"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Todo',
          }"
        >
          <i class="fas fa-list-ul me-3"></i>
          <p class="m-0">Todo</p>
        </router-link>

        <router-link
          to="timetable"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Timetable',
          }"
        >
          <i class="fas fa-list-ul me-3"></i>
          <p class="m-0">Timetable</p>
        </router-link>

        <router-link
          to="/"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
        >
          <i class="fas fa-list-ul me-3"></i>
          <p class="m-0" @click="logout">Log Out</p>
        </router-link>
        
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Sidebar",
  components: {},
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem('user')),
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    currentPath() {
      return this.$route.matched[0].path;
    },
  },
  methods: {
    logout() {
     sessionStorage.removeItem('token')
     sessionStorage.removeItem('user')
    }
  },
};
</script>

<style scoped lang="scss">
.active {
  background: rgba(255, 254, 254, 0.089);
  border-right: 10px solid #eaab00;
  color: #ffffff;
}
</style>
