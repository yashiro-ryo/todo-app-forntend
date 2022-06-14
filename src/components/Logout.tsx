import {
  setUserId,
  setUserName,
  setUserToken,
} from "../datastore/userDataStore";
import { emitter } from "../service/event";

export default function Logout() {
  const deleteCache = () => {
    setUserId(0);
    setUserName("");
    setUserToken("");
    localStorage.setItem("data-user-token", "");
    console.log("called signout");
    emitter.emit("do-signout");
  };

  setTimeout(() => {
    deleteCache();
  }, 200);

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="logout">ログアウトしました</div>
      <div className="go-to-signin">
        <a href="http://localhost:3030/signin">ログイン</a>
      </div>
    </div>
  );
}
