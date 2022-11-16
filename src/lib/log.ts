// 開発環境(development)でのみ表示するLog
function v(logText: any) {
  if (process.env.NODE_ENV === "development") {
    console.log(logText);
  }
}

function e(logText: any) {
  if (process.env.NODE_ENV === "development") {
    console.error(logText);
  }
}

export default {
  v,
  e,
} as const;
