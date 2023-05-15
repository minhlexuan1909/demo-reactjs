# React component

React component hay component là một block code độc lập, có khả năng tái sử dụng. Việc chia UI thành các component giúp cho việc tổ chức và quản lý code dễ dàng hơn

React component bao gồm 2 loại:

- **Class component**
- **Functional component**

# Class component

## Đặc điểm

- Các Class component đơn giản là những **class ES6** kế thừa từ class tên 'Component' của React
- Mọi Class component sẽ **phải chứa method render()**, nơi **return một JSX template** hoặc **null**
- Trong docs mới nhất của React, Class component đã được đưa vào danh mục 'Legacy React APIs' và đội ngũ phát triển React cũng khuyến khích việc sử dụng Functional Component để thay thế. Tuy nhiên, Class component hiện vẫn sẽ được hỗ trợ sử dụng

> https://react.dev/reference/react/Component

## Syntax

```js
import React, { Component } from "react";

class ClassExample extends Component {
  // Trong class phải có method render
  render() {
    // return một JSX template
    return (
      <div>
        <h1>Class Example</h1>
      </div>
    );
  }
}

export default ClassExample;
```

# Functional component

## Đặc điểm

- Xuất hiện từ phiên bản React 16.8
- Functional component được tạo bởi một hàm JavaScript, **return một JSX template** hoặc **null**
- Vì được **tạo bởi một hàm JavaScript**, ta có thể viết Functional component dưới dạng **JS function** thông thường hay **ES6 arrow function**
- Với việc đội ngũ phát triển React đang chú trọng phát triển các **hooks** và **cách viết, triển khai code khá dễ hiểu**, Functional component được khuyến khích sử dụng

## Syntax

JS function

```js
function FunctionalExample() {
  return (
    <div>
      <h1>Functional Example</h1>
    </div>
  );
}
```

ES6 arrow function

```js
const FunctionalExample = () => {
  return (
    <div>
      <h1>Functional Example</h1>
    </div>
  );
};
```
