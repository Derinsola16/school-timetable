<template>
  <main class="position-sticky top-0 highlight head">
    <div class="border-bottom">
      <div class="d-flex justify-content-between p-3">
        <div class="d-flex">
          <i class="fas fa-search mt-2 text-muted"></i>
          <input
            style="width: 240px; background: transparent"
            type="text"
            class="form-control border-0"
            id="search"
            placeholder="Search therapist"
          />
        </div>
        <img
          src="../assets/profile-pic.jpeg"
          width="36"
          height="36"
          class="float-end rounded-circle"
        />
      </div>
    </div>
    <!-- <div class="px-3">
     <div class="d-flex justify-content-between border-bottom p-3">
        <span class="mt-2">{{ currentPage }}</span>
      <button
        type="button"
        class="btn btn-primary"
        v-if="currentRoute !== 'User'"
        @click="showForm"
      >
        Invite Therapist
      </button>
     </div>
    </div> -->

    <!-- <div class="d-flex justify-content-between">
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a href="#" class="text-decoration-none"><small>Therapist</small></a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <small>Invite Therapist</small>
              </li>
            </ol>
          </nav>
          <p class="m-0">Invite Therapist</p>
        </div>
      </div> -->
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    currentPage() {
      return this.$route.name;
    },
  },
  methods: {
    showForm() {
       document.getElementById("panel").style.display = "block";
      
    }
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
