import {
  setUserToken,
  setUserId,
  setUserName,
  setSettings,
  getSettings,
} from "../datastore/userDataStore";
import { emitter } from "../service/event";
import axios from "../config/axiosConfig";
import { BASE_URL } from "../config/urlConfig";
import Log from '../lib/log'

export default function signin() {
  var token = "";
  var localToken = localStorage.getItem("data-user-token");
  if (process.env.NODE_ENV === "development") {
    token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJ1c2VyTmFtZSI6InRlc3TlpKrpg44iLCJzZXR0aW5nIjp7ImlzRGVsZXRlTW9kYWxTaG93IjoxfSwiaWF0IjoxNjY4NTMwNjMyfQ.c4V2xZves6gyJS8SPBD7a-gaaom4BL2QkXcEkU5MY2o";
  } else if (localToken !== null) {
    token = localToken;
  }

  if (token === null || token === undefined) {
    window.location.href = BASE_URL + "/singin";
    return;
  }

  if (token.length !== 0) {
    setTimeout(() => {
      Log.v("token exists local storage");
      setUserToken(token);
      getUserInfo(token);
      emitter.emit("signin-ok");
    }, 200);
    return;
  } else {
    window.location.href = BASE_URL + "/signin";
    return;
  }
}

function getUserInfo(token: string) {
  axios.get("/user", { headers: { token: token } }).then((result) => {
    Log.v(result);
    setUserId(Number(result.data.userId));
    setUserName(result.data.userName);
    emitter.emit("update-user-info");
  });
  // ユーザー設定の取得
  axios.get("/user/settings", { headers: { token: token } }).then((result) => {
    Log.v(result);
    setSettings(result.data);
    Log.v(getSettings());
    emitter.emit("update-settings");
  });
}
