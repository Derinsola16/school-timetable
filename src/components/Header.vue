<template>
  <main class="position-sticky top-0 highlight head">
    <div class="border-bottom border-warning border-2">
      <div class="d-flex justify-content-between p-3">
          <h2 class="text-white">{{currentRoute}}</h2>
          <div class="text-white">
            <p class="">Hello, {{name.name }}</p>
          <strong class="text-uppercase">{{name.role}}</strong>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: JSON.parse(sessionStorage.getItem('user')),
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
  mounted() {
    console.log(this.name)
  }
};
</script>

<style scoped>
::placeholder {
  color: #70839f;
  opacity: 100%;
  font-size: 15px;
}

.head {
  z-index: 1000;
}
</style>
