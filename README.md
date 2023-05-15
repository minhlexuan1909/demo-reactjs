## Table of Content

- [JSON Server](#1-json-server)
- [Fetch from Server](#2-fetch-from-server)

#

## 1. [JSON Server](https://github.com/typicode/json-server)

- Là một thư viện giúp ta có thể tạo 1 máy chủ giả cung cấp RESTful API một cách đầy đủ trong 1 khoảng thời gian ngắn mà không cần code.

Cài JSON Server:

```bash
npm install --dev-save json-server
```

hoặc nếu dùng `yarn`:

```bash
yarn add json-server -D json-server
```

Thêm một đoạn script cho JSON Server trong khối `scripts` trong file `package.json`:

```json
"scripts": {
  ...,
  "start-server": "json-server --watch db.json --port 3001",
  ...
}
```

Tạo một file database (Ví dụ: `db.json`) cùng cấp folder với file `package.json` với 1 vài dữ liệu:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "The first post",
      "body": "This is the first post",
      "author": { "username": "user1", "fullname": "User 1" }
    }
  ],
  "comments": [{ "body": "comment 1", "postId": "1", "id": 1 }],
  "authors": [
    { "id": 1, "username": "user1", "address": "Vietnam", "fullname": "User 1" }
  ]
}
```

Bắt đầu chạy JSON Server

```bash
npm run start-server
```

or

```bash
yarn start-server
```

Khi đã chạy server xong, nếu bạn call đến api [http://localhost:3001/posts/1]('http://localhost:3001/posts/1'), bạn sẽ nhận được:

```json
{
  "id": 1,
  "title": "The first post",
  "body": "This is the first post",
  "author": { "username": "user1", "fullname": "User 1" }
}
```

<!-- Tương tự, bạn có thể tạo requests với các phương thức khác, nhưng có vài lưu ý là:

- Nếu bạn tạo POST, PUT, PATCH hoặc DELETE requests, những thay đổi sẽ được lưu một cách tự động và an toàn vào file db.json (nhờ việc sử dụng [lowdb](https://github.com/typicode/lowdb))
- Phần body truyền lên của request phải là một đối tượng JSON, giống như kết quả cuả phương thức GET (ví dụ: `{"name": "The first post"}`)
- Trường `id` là không thể thay đổi. Nếu có bất kì trường `id` nào trong phần body của PUT hoặc PATCH request sẽ được bỏ qua. Nếu là trong POST request thì sẽ được chấp nhận, nhưng chỉ khi giá trị `id` đó chưa được sử dụng.
- Một POST, PUT, PATCH request phải `Content-Type: application/json` trong phần header để sử dụng JSON strong phần body của request. Nếu không thì vẫn sẽ trả về status code 2XX, nhưng phần data sẽ không được thay đổi. -->

## 2. Fetch from Server

- Sử dụng bộ API có sẵn của [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Ta sử dụng method fetch() của Javascript

```javascript
fetch(resource, options);
```

Trong đó:

- resource: Tham số này chỉ định đường dẫn của tài nguyên mà bạn muốn truy xuất (có thể là tương đối hoặc tuyệt đối).
- options: Là một object chứa bất kì cài đặt tùy chỉnh request mà bạn muốn. Những options có thể là:
  - method: Chỉ định method cho request. Ví dụ: GET, POST, PUT,...
  - headers: Một object chứa bất kỳ tiêu đề nào bạn muốn đưa vào yêu cầu.
  - body: Là phần payload (hay data) được gửi kèm request, thường được dùng kèm với các methods như POST, PUT hoặc PATCH.
  - Khác: Ngoài ra còn nhiều options khác ví dụ như: mode, credentials, cache, redirect

Kết quả trả về của methods fetch() là một [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Để xử lý bất đồng bộ khi call api, chúng ta thể dùng callback, hoặc Promise, hoặc async await (từ ES6).

Ví dụ sử dụng Promise ở trang home ('/'), hoặc trang tạo mới bài viết ('/post/add-new'). Ví dỵ sử dụng async/await ở trang chi tiết bài viết (/posts/:id)
