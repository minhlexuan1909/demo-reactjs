
Trong React.js, có hai phương pháp để xử lý biểu mẫu: biểu mẫu kiểm soát (controlled forms) và biểu mẫu không kiểm soát (uncontrolled forms). Sự khác biệt chính giữa chúng nằm ở cách quản lý và cập nhật dữ liệu biểu mẫu.

# Controlled Forms
Biểu mẫu kiểm soát là các biểu mẫu mà dữ liệu biểu mẫu được quản lý bởi các ```React components```. Trong ```Controlled Forms```, các phần tử form input (ví dụ: ```input fields, checkboxes, selects```) được liên kết với ```component's state```, và bất kỳ thay đổi nào trong các phần tử input đều kích hoạt việc cập nhật ```component's state```. Sau đó, ```components``` được cập nhật và hiển thị dữ liệu biểu mẫu đã được cập nhật.

### Đặc điểm quan trọng của `Controlled Forms`:
- Dữ liệu biểu mẫu được lưu trữ trong  ```component's state```.
- Các trường nhập liệu nhận giá trị từ `state`.
- Các thay đổi trong các trường nhập liệu được xử lý bởi các trình xử lý sự kiện, cập nhật `state` với các giá trị mới.
- `Component` được cập nhật với dữ liệu biểu mẫu đã được cập nhật.

### Ví dụ:
```js
import React, { useState } from "react";

function ControlledForms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForms;
```


### Lợi ích của `controlled forms`:
- Bạn có đầy đủ kiểm soát về dữ liệu biểu mẫu và có thể thực hiện validations, transformations, hoặc xử lý các logic khác trước khi cập nhật `state` hoặc gửi biểu mẫu.
- Bạn có thể dễ dàng triển khai các tính năng như validations form, hoặc phản hồi thời gian thực cho người dùng.
- Dữ liệu biểu mẫu có thể dễ dàng điều chỉnh hoặc xử lý trước khi gửi đến máy chủ.

### Bất lợi của `controlled forms`:
- `Controlled forms` có thể yêu cầu nhiều code và xử lý sự kiện hơn so với  `Uncontrolled forms`.

- Nếu bạn có một biểu mẫu lớn với nhiều trường nhập liệu, việc quản lý `state` cho mỗi trường có thể trở nên phức tạp.


# Uncontrolled Forms
`Uncontrolled Forms` là biểu mẫu trong đó dữ liệu biểu mẫu được xử lý bởi các phần tử DOM, thay vì được điều khiển bởi các `React component`. Trong `Uncontrolled Forms`, các trường nhập liệu không được liên kết một cách rõ ràng với `component's state`. Thay vào đó, bạn sử dụng các tham chiếu (refs) để truy cập giá trị trường nhập liệu khi cần thiết.


### Đặc điểm quan trọng của `Uncontrolled Forms`:
- Dữ liệu biểu mẫu được quản lý trực tiếp bởi các phần tử DOM.
- Trường nhập liệu được truy cập bằng cách sử dụng tham chiếu (refs) để lấy giá trị khi cần thiết.
- Không có quản lý `state` rõ ràng cho dữ liệu biểu mẫu.
- Các thay đổi trong trường nhập liệu không được theo dõi hoặc xử lý một cách rõ ràng bởi các `React components`.

### Ví dụ:
```js
import React, { useRef } from "react";

function UncontrolledForms() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Access form data using refs
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    // Perform form submission logic here
    console.log(name, email, password);
    alert(name + "    " + email + "    " +  password);
    // Reset the form
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameInputRef} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" ref={emailInputRef} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" ref={passwordInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForms;

```

### Lợi ích của `Uncontrolled forms`:
- Biểu mẫu không được điều khiển đơn giản hơn và yêu cầu ít cide hơn so với `controlled forms`.
- Chúng hữu ích cho các biểu mẫu đơn giản không yêu cầu quản lý `state` phức tạp.
- Dễ dàng truy cập trực tiếp giá trị trường nhập liệu khi cần thiết, ví dụ như trong quá trình gửi biểu mẫu.

### Bất lợi của `Uncontrolled forms`:
- Bị hạn chế về việc kiểm soát dữ liệu biểu mẫu và không thể dễ dàng thực hiện kiểm tra hoặc biến đổi dữ liệu trước khi gửi biểu mẫu.
- Có thể khó khăn khi triển khai các tính năng biểu mẫu nâng cao như validations thời gian thực hoặc tương tác giữa các trường phụ thuộc.
- Việc thao tác hoặc xử lý dữ liệu biểu mẫu trước khi gửi nó đến máy chủ có thể đòi hỏi các bước bổ sung.
