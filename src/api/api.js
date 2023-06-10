import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "510398e3-42d1-460c-bc59-c1458b58cf6a",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollowing(userId) {
    return instance.delete(`follow/${userId}`);
  },
  following(userId) {
    return instance.post(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn("Obsolve method. Please profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get("profile/status/" + userId)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => response.data);
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post("auth/login", {
        email,
        password,
        rememberMe,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete("auth/login").then((response) => response.data);
  },
};
