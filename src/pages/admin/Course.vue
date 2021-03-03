<template>
  <main class="py-5 px-4">
   <course-table />
  </main>
</template>

<script>
import CourseTable from '../../components/CourseTable.vue';
export default {
  name: "Timetable",
  components: {CourseTable},
  data() {
    return {};
  },
  computed: {},
};
</script>
