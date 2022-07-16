import {
  setUserToken,
  setUserId,
  setUserName,
  setSettings,
  getSettings,
} from "../datastore/userDataStore";
import { emitter } from "../service/event";
import axios from "../config/axiosConfig";

export default function signin() {
  const token = localStorage.getItem("data-user-token");
  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJ1c2VyTmFtZSI6IuW-s-WztuWkqumDjiIsInNldHRpbmciOnsiaXNEZWxldGVNb2RhbFNob3ciOjF9LCJpYXQiOjE2NTQ5NTg4ODZ9.3QRqu_-DMA-nlhKvx39-ihsacMb0mKVhXMO5j0nE4no";
  if (token?.length !== 0 && token !== null) {
    setTimeout(() => {
      console.log("token exists local storage");
      setUserToken(token);
      getUserInfo(token);
      emitter.emit("signin-ok");
    }, 200);
    return;
  } else {
    window.location.href = "https://todo-app-yashiro.herokuapp.com/signin";
    return;
  }
}

function getUserInfo(token: string) {
  axios.get("/user", { headers: { token: token } }).then((result) => {
    console.log(result);
    setUserId(Number(result.data.userId));
    setUserName(result.data.userName);
    emitter.emit("update-user-info");
  });
  // ユーザー設定の取得
  axios.get("/user/settings", { headers: { token: token } }).then((result) => {
    console.log(result);
    setSettings(result.data);
    console.log(getSettings());
    emitter.emit("update-settings");
  });
}
