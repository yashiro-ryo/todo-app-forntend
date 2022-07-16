import { TaskContents } from "../components/DashBoard";

type Settings = {
  isDeleteModalShow: boolean;
};

var userId = 0;
var userName = "";
var userToken = "";
var task: Array<TaskContents> = [];
var localSettings = {
  isDeleteModalShow: true,
};

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

export function setSettings(settings: Settings) {
  localSettings = settings;
}

export function getSettings() {
  return localSettings;
}
