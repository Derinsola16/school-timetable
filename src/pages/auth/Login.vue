<template>
  <main>
    <div
      class="d-flex justify-content-center container content-margin content-padding"
    >
      <form
        class="border rounded-3 p-4"
        style="width: 457px;"
      >
        <div class="p-3">
          <img src="../../assets/Pow-logo.svg" alt="" />
          <p class="fs-4 text-dark">Sign In</p>
        </div>
        <div class="p-3">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Use this mock mail 'user@gmail.com'"
              required
            />
          </div>
          <div class="mb-4">
            <div class="d-flex justify-content-between">
              <label for="exampleFormControlInput1" class="form-label">
                Password</label>
              <a href="#" class="text-decoration-none">Forgot password?</a>
            </div>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              required
            />
          </div>
          <button type="button" class="btn btn-primary" @click="login">
            Continue
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "user@gmail.com",
      password: "123456789",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (
        this.user.email === this.email &&
        this.user.password === this.password
      ) {
        this.$router.push("/dashboard");
      } else {
        alert("Wrong Login Details");
      }
    },
  },
};
</script>

<style scoped></style>
