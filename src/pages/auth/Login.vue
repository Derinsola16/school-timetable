<template>
  <main>
    <div
      class="d-flex justify-content-center container content-margin content-padding"
    >
      <form
        class="border rounded-3 p-4"
        style="width: 457px;"
      >
        <div class="p-3 text-center">
          <img src="../../assets/image.png" alt="" width="100" />
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
import customAxios from '../../helpers/axios';
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      if (
        this.user.email&&
        this.user.password
      ) {
        await customAxios.post('/auth/login', {
          email: this.user.email,
          password: this.user.password,
        }).then((response) => {

          if (Object.keys(response.data.user).length !== 0) {
            const token = response.data.token;
            const loggedInUser = response.data.user;
            // save the user to the window session
            sessionStorage.setItem('user', JSON.stringify(loggedInUser));
            sessionStorage.setItem('token', token);
            this._determineLoginRoute(loggedInUser.role);
          }
          this.$toast.success("Login Successfully")
        }).catch((error) => {
          console.log(error)
          this.$toast.error("Wrong Login Details");
        })
        
      } else {
        this.$toast.error("Fields cannot be empty");
      }
    },
    _determineLoginRoute: function(role) {
      switch (role) {
        case 'administrator':
          this.$router.push("/admin/department");
          break;
        case 'lecturer':
          this.$router.push('/');
          break;
        case 'student':
          this.$router.push('/');
          break;
        default:
          break;
      }
    }
  },
};
</script>

<style scoped></style>
