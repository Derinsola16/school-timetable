import axios from "axios";
const state = {
  user: {},
  accessToken: ''
};
const getters = {};
const actions = {
  async login({ commit }, credentials) {
    console.log(credentials)
    await axios.post("/auth/login", )
    .then((response) => {
      console.log(response.data)
      // if (Object.keys(response.data.user).length !== 0) {
      //   // const token = response.data.token;
      //   const loggedInUser = response.data.user;
      //   // console.log(loggedInUser);
      //   // console.log(token);
      //   // // save the user to the window session
      //   // sessionStorage.setItem('user', JSON.stringify(loggedInUser));
      //   // getting user details from storage
      //   // let obj = JSON.parse(sessionStorage.getItem('user'));
      //   // save the token, somewhere, anywhere but localstorage
      //   this._determineLoginRoute(loggedInUser.role);
      // }
      // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      commit('SET_TOKEN', response.data)
    })
   
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
  },
  // async LogOut({ commit }) {
  //   let user = null;
  //   commit("logout", user);
  // },
};
const mutations = {
  SET_TOKEN(state, data) {
		state.accessToken = data.token;
    state.user = data.user;
	},
};
export default {
  state,
  getters,
  actions,
  mutations,
};
