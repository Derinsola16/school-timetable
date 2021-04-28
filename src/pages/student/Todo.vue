<template>
  <main class="py-5 px-4">
   <todo />
  </main>
</template>

<script>
import Todo from '../../components/Todo.vue';
export default {
  name: "Todo",
  components: {Todo},
  data() {
    return {};
  },
  computed: {},
};
</script>