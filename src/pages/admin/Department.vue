<template>
  <main class="py-5 px-4">
    <department-table />
  </main>
</template>

<script>
import DepartmentTable from '../../components/DepartmentTable.vue';
export default {
  name: "Timetable",
  components: {DepartmentTable},
  data() {
    return {};
  },
  computed: {},
};
</script>
