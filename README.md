# [JSON Server](https://github.com/typicode/json-server)

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
      "content": "This is the first post",
      "author": { "username": "user1", "fullname": "User 1" },
      "userId": 1
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
  "content": "This is the first post",
  "author": { "username": "user1", "fullname": "User 1" },
  "userId": 1
}
```

<!-- Tương tự, bạn có thể tạo requests với các phương thức khác, nhưng có vài lưu ý là:

- Nếu bạn tạo POST, PUT, PATCH hoặc DELETE requests, những thay đổi sẽ được lưu một cách tự động và an toàn vào file db.json (nhờ việc sử dụng [lowdb](https://github.com/typicode/lowdb))
- Phần body truyền lên của request phải là một đối tượng JSON, giống như kết quả cuả phương thức GET (ví dụ: `{"name": "The first post"}`)
- Trường `id` là không thể thay đổi. Nếu có bất kì trường `id` nào trong phần body của PUT hoặc PATCH request sẽ được bỏ qua. Nếu là trong POST request thì sẽ được chấp nhận, nhưng chỉ khi giá trị `id` đó chưa được sử dụng.
- Một POST, PUT, PATCH request phải `Content-Type: application/json` trong phần header để sử dụng JSON strong phần body của request. Nếu không thì vẫn sẽ trả về status code 2XX, nhưng phần data sẽ không được thay đổi. -->

# Fetch from Server

- Sử dụng bộ API có sẵn của [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
