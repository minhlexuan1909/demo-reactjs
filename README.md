### Cài đặt project

- Clone repository từ github https://github.com/minhlexuan1909/demo-reactjs.git

```
git clone https://github.com/minhlexuan1909/demo-reactjs.git
```


Hiển thị list branch của repository
```
git branch -r
```

<img src="https://firebasestorage.googleapis.com/v0/b/guide-app-6b862.appspot.com/o/Screenshot%202023-05-17%20210635.png?alt=media&token=37a67a92-fff7-4921-84dc-0ddf93ca1f8a"/>

Chuyển qua lại giữa các branch
```
git branch checkout [name-branch]
```

Ví dụ:
```
git branch checkout origin/redux
```
> Lưu ý: Chỉ chuyển branch khi mà code của project chưa thay đổi hoặc code mới của branch đã được commit.

- Cài đặt `yarn` cho máy tính

```
npm install -g yarn
```

- Cài đặt thư viện được định nghĩa trong package.json và các dependencies của projects thông qua `yarn`

```
yarn
```

- Khởi chạy project
```
yarn start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

<img src="https://i.stack.imgur.com/8SHQU.png"/>

<img src="https://www.w3schools.com/react/screenshot_myfirstreact.png"/>

```
yarn test
```
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

```
yarn build
```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!



- Thêm, nâng cấp và xóa Dependencies

```
yarn add [package-name]
```

```
yarn add [package]@[version-or-tag]
```

```
yarn remove [package-name]
```

