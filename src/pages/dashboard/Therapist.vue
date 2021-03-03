<template>
  <main>
    <section class="mx-3 my-3" id="panel">
      <div class="container my-4">
        <div class="d-flex justify-content-center">
          <div>
            <div class="border rounded p-4">
              <p class="fs-5">Invite Using Link</p>
              <p class="text-muted">
                Import therapist details from other website below 
              </p>
              <div>
                <form>
                  <div class="mb-3">
                    <label for="urlLink" class="form-label">URL Link</label>
                    <input type="url" class="form-control" id="urlLink" />
                  </div>
                  <router-link to="/preview" class="btn btn-primary px-4">Continue</router-link>
                </form>
              </div>
            </div>
            <div class="my-5">
              <div class="position-relative my-4">
                <div class="progress" style="height: 1px;">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 0%;"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <button
                  type="button"
                  class="position-absolute top-0 start-50 translate-middle btn btn-md btn-outline btn-light rounded-pill border text-secondary"
                  style="width: 2.8rem; height:2.7rem;"
                >
                  OR
                </button>
              </div>
            </div>
            <div class="border rounded p-4">
              <div>
              <p class="fs-5">Lorem ipsum</p>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br> invidunt ut
              </p>
              </div>
              <div>
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="first_name" class="form-label">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="first_name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="last_name" class="form-label">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="last_name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="phone_number" class="form-label">Phone Number</label>
                        <input
                          type="tel"
                          class="form-control"
                          id="phone_number"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="gender" class="form-label">Gender</label>
                        <input type="text" class="form-control" id="gender" />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" />
                  </div>
                  <button type="submit" @click.prevent="()=>{this.$router.push('/preview');}" class="btn btn-primary px-4">
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      click: 0
    };
  },
  computed: {},
  methods: {
  },
  mounted() {
    //document.getElementById("panel").style.display = "none";
  },
  
};
</script>

<style  scoped>

</style>
