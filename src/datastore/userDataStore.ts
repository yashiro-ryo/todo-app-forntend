import { TaskContents } from "../components/DashBoard";

var userId = 0;
var userName = "";
var userToken = "";
var task: Array<TaskContents> = [];

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

export function setTasks(addTasks: Array<TaskContents>) {
  task = addTasks;
}

export function getTasks() {
  return task;
}

export function addOneTask(addTask: TaskContents) {
  task.push(addTask);
}
