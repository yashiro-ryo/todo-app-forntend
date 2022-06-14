# Frontend

Todo-appのフロントエンド

## 起動方法

### ソースコード取得
`git clone https://github.com/yashiro-ryo/todo-app-forntend.git`

### 必要なパッケージのインストール
`npm install`

### 起動
`npm run start`

## 起動した様子

### dashboard

タスクがない時

<img width="1440" alt="スクリーンショット 2022-06-14 14 59 11" src="https://user-images.githubusercontent.com/90020478/173510032-b32f86f4-f5f3-4797-ba93-71fb5ad1bb21.png">

タスクが追加された時

<img width="1440" alt="スクリーンショット 2022-06-14 14 59 58" src="https://user-images.githubusercontent.com/90020478/173510181-132c27fb-b1b4-4feb-a649-f0f3dd93d465.png">

タスクを削除する際の確認画面

<img width="1440" alt="スクリーンショット 2022-06-14 15 40 52" src="https://user-images.githubusercontent.com/90020478/173510295-1f451eda-8a87-4cb0-ab36-5bdf37212237.png">

タスクを更新するモーダル

<img width="1440" alt="スクリーンショット 2022-06-14 15 41 29" src="https://user-images.githubusercontent.com/90020478/173510399-6b178142-5fd9-4304-a473-79947c86b77a.png">


## 使用している技術

言語: Typescript, scss

UIフレームワーク: React, React-Form-hook

cssフレームワーク: Bootstrap-React

apiリクエスト部分: axios

## ファイル構造

<pre>
.
├── README.md
├── build     ビルドファイル
├── package-lock.json
├── package.json
├── public  
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── components    UIコンポーネント
│   │   ├── DashBoard.tsx
│   │   ├── Footer.tsx
│   │   ├── Logout.tsx
│   │   ├── NavBar.tsx
│   │   ├── Profile.tsx
│   │   └── Setting.tsx
│   ├── config
│   │   └── axiosConfig.ts    axiosの設定
│   ├── datastore
│   │   └── userDataStore.ts  User情報とアプリケーションの状態を保存しておくdatastore
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── service
│   │   ├── authService.ts
│   │   └── event.ts
│   ├── setupTests.ts
│   └── style
│       ├── App.scss
│       ├── DashBoard.scss
│       ├── Footer.scss
│       ├── NavBar.scss
│       ├── Profile.scss
│       ├── Setting.scss
│       └── index.scss
└── tsconfig.json
</pre>

## デプロイ

準備中（herokuにデプロイ予定)
