<template>
  <main class="d-flex">

     <Sidebar />
    <div class="flex-grow-1">
      <Header />
      <router-view />
    </div>

    
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar
  },
  data() {
    return {
    };
  },
  computed: {
  }
};
</script>

