var userId = 0;
var userName = "";
var userToken = "";

export function getUserId() {
  return userId;
}

export function setUserId(newUserId: number) {
  userId = newUserId;
}

export function getUserName() {
  return userName;
}

export function setUserName(newUserName: string) {
  userName = newUserName;
}

export function getUserToken() {
  return userToken;
}

export function setUserToken(token: string) {
  userToken = token;
}

export default {
  getUserId,
  setUserId,
  getUserName,
  setUserName,
  setUserToken,
  getUserToken,
};
