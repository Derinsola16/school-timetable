<template>
  <nav>
    <div class="highlight position-sticky top-0" style="width:256px; height: 100vh">
      <div class="text-center p-5">
        <img src="../assets/Pow-logo.svg" alt="" class="" />
      </div>
      <div>
        <router-link
          to="/admin"
          class="py-3 text-white d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Timetable',
          }"
        >
          <i class="fas fa-table me-3"></i>
          <p class="m-0">Department</p>
        </router-link>

        <router-link
          to="/lecturer"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Lecturer',
          }"
        >
          <i class="fas fa-user me-3"></i>
          <p class="m-0">Lecturer</p>
        </router-link>

        <router-link
          to="/student"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Student',
          }"
        >
          <i class="fas fa-user me-3"></i>
          <p class="m-0">Student</p>
        </router-link>

        <router-link
          to="/course"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Course',
          }"
        >
          <i class="fas fa-book me-3"></i>
          <p class="m-0">Course</p>
        </router-link>

        <router-link
          to="/todo"
          class="py-3 text-light d-flex px-4 mb-1 text-decoration-none"
          :class="{
            active: currentRoute == 'Todo',
          }"
        >
          <i class="fas fa-list-ul me-3"></i>
          <p class="m-0">Todo</p>
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
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
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
