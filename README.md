# <a href='https://redux.js.org'><img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /></a>

Redux là một <b>predictable state container</b> cho các ứng dụng JavaScript.

Nó giúp bạn viết các ứng dụng hoạt động một cách nhất quán, chạy trong các môi trường khác nhau (client, server and native) và dễ dàng kiểm tra. Trên hết, nó cung cấp trải nghiệm phát triển tuyệt vời, chẳng hạn như [live code editing combined with a time traveling debugger](https://github.com/reduxjs/redux-devtools).

# <img src="https://topdev.vn/blog/wp-content/uploads/2019/05/redux-store.png"/>

## Nguyên lý vận hành
- <b>Nguồn dữ liệu tin cậy duy nhất:</b> ```State``` của toàn bộ ứng được chứa trong một object tree nằm trong ```Store``` duy nhất
- <b>Trạng thái chỉ được phép đọc:</b>: Cách duy nhất để người dùng có thể thay đổi ```State``` của ứng dụng là phát một ```Action```, tức một object mô tả tất cả những gì xảy ra. Trạng thái của ```Redux``` chỉ là một đối tượng và nó chỉ có thể thay đổi chỉ khi xuất hiện một sự kiện. Ngoài ra thì không được phép thay đổi <b>trực tiếp</b>.
- <b>Chỉ thay đổi bằng hàm thuần túy:</b> Để chỉ ra cách mà ```State``` được biến đổi bởi ```Action```, người dùng sử dụng các ```pure function``` được gọi là ```Reducer```. Thông qua hàm thuần túy, bạn có thể thực hiện việc thay đổi trạng thái của ứng dụng. Cụ thể, dữ liệu của các sự kiện và trạng thái hiện tại đưa vào sẽ được hàm xử lý và trả về trạng thái tiếp theo.
# <img src="https://topdev.vn/blog/wp-content/uploads/2019/05/redux-workflows.gif"/>

## Cài đặt và ví dụ
- Cài đặt thư viện redux và react-redux

```
npm install redux
```

```
npm install react-redux
```

- Khởi tạo file <b>actionTypes.js</b> đây là file xác định tất các loại ```actions``` mà app sẽ sử dụng:

```js
// actionTypes.js

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
```

- Tiếp theo, khởi tạo file <b>actions.js</b> đây là file xác định tất cả các ```actions```. Chúng ta sẽ sử dụng các loại ```actions``` được định nghĩa bên trong <b>actionTypes.js</b> để khởi tạo:

```js
// actions.js

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
```

- Khởi tạo file <b>reducer.js</b> để xác định các ```initial state``` và ```reducers``` cho từng loại ```actions type``` đã được định nghĩa:

```js
// reducer.js

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
```

Trong file <b>reducer.js</b>, ```userReducer``` được tạo ra để xử lý các ```actions``` được định nghĩa trong file <b>actionTypes.js</b>. Nó sẽ lấy ```state``` hiện tại và ```actions``` làm đối số và trả về một ```state``` mới dựa trên các loại ```action```.

- Cuối cùng, khởi tạo file <b>index.js</b> đây là file để kết hợp các ```reducers``` và khởi tạo ```Redux. store```

```js
// index.js

import { createStore, combineReducers } from "redux";
import userReducer from "./reducer";

const rootReducer = combineReducers({
  users: userReducer,
  // other reducers
  // ...
});

const store = createStore(rootReducer);

export default store;
```

Trong file <b>index.js</b>, chúng ta import các chức năng ```createStore``` và ```combinereducers``` từ ```Redux``` cũng như ```UserReducer```.

Hàm ```combinereducers``` biến một đối tượng có các giá trị và các ```reducers``` khác nhau thành một hàm ```reducer``` duy nhất sau đó khởi tạo thành ```Redux Store``` thông qua sử dụng hàm ```createStore```.

## Áp dụng ```Redux``` vào bên trong project ```ReactJS```:
- Đầu tiên hãy tạo một componentss sẽ sử dụng ```Redux Store```. Trong ví dụ này, chúng ta sẽ tạo ```Users``` component để fetch danh sách người dùng và hiển thị chúng lên:

```jsx
// Users.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../redux/actions";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsersRequest());

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
```

- Trong ```Users``` component, chúng ta import ```useDispatch``` và ```useSelector``` hooks từ thư viện ```React Redux```:

```useSelector``` hooks cho phép chúng ta lấy ```state``` từ ```Redux store``` bằng cách sử dụng một ```selector function``` làm tham số đầu vào.

```useDispatch``` hooks return về một tham chiếu đến ```dispatch function``` từ ```Redux store``` và được sử dụng để ```dispatch``` các ```action```. 

Khi ```dispatch``` một ```action```, ```useSelector``` sẽ thực hiện so sánh tham chiếu với giá trị được return trước đó và giá trị hiện tại. Nếu chúng khác nhau, component sẽ bị re-render. Nếu chúng giống nhau, component sẽ không re-render

- Các ```actions``` được xác định trong <b>actions.js</b> cũng được import vào. Trong Hook UseEffect, chúng ta ```dispatch action```  <b>fetchUsersRequest</b> và sau đó thực hiện yêu cầu fetch API đến JsonPlaceholder để có được danh sách Users. Nếu requests thành công, chúng ta ```dispatch action``` <b>fetchUsersSuccess</b> với dứ liệu đã nhận được lên ```Redux Store```. Nếu requests không thành công, chúng ta sẽ ```dispatch action``` <b>fetchUsersFailure</b> với thông báo lỗi lên ```Redux Store```.

- Sau đó, chúng ta sử dụng các biến <b>loading</b>, <b>users</b>, <b>error</b> từ ```Redux store```để hiển thị nội dung thích hợp.

- Tiếp theo, khởi tạo file <b>App.js</b>:

```js
// App.js

import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
```

Trong file <b>App.js</b>, chúng ta import ```Provider``` components từ ```React Redux``` và ```Redux store``` từ file <b>index.js</b>. Sau đó, gói ```Users``` component vào trong ```Provider``` components để có thể truyền được dữ liệu trong ```Redux store``` như prop.

# Middlewares với Redux Thunk
- ```Redux Thunk``` là một ```Middleware``` cho phép bạn viết các ```Action``` trả về một function với logic bên trong có thể tương tác với các phương thức ```dispatch``` và ```GetState``` của ```Redux Store```. thay vì một plain javascript object bằng cách trì hoãn việc đưa ```action``` đến ```reducer```.
- ```Redux Thunk``` được sử dụng để xử lý các logic bất đồng bộ phức tạp cần truy cập đến ```Store``` hoặc đơn giản là việc lấy dữ liệu như ```Ajax request```

## Cài đặt và sử dụng ```Middlewares``` với ```Redux Thunk``` trong project ```ReactJS```
- Trong file <b>actions.js```</b>

```js
// actions.js

export const fetchUsers = () => {
  return (dispatch, getState) => {
    dispatch(fetchUsersRequest());

    const { users } = getState();

    // do something with "users"
    // ...
    
    fetch(`https://jsonplaceholder.typicode.com/users?since=${users.length}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
```

- Trong ví dụ này, chúng ta khởi tạo một ```thunk function``` <b>fetchUsers</b> nhận 2 đối số ```dispatch``` và ```getState```. Bên trong function, đầu tiên chúng ta ```dispatch action``` <b>fetchUsersRequest</b> để đặt <b>loading</b> thành true. Sau đó, lấy ```users``` state từ ```Redux store``` sử dụng phương thức```getState```.

- Chúng ta sử dụng ```users``` state để thay đổi URL cho API JsonPlaceholder chỉ tìm fetch những người dùng mà chúng ta chưa có trong Redux Store. Sau đó thực hiện fetch request đến URL đó và ```dispathc action``` <b>fetchUsersSuccess </b> với dữ liệu nhận được nếu thành công. Nếu request không thành công, chúng ta sẽ ```dispatch action``` <b>fetchUsersFailure</b> với error message.

- Chỉnh sửa trong file <b>Users.js</b>:

```js
// Users.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions";


const Users = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
```

---

[<img src="https://raw.githubusercontent.com/redux-form/redux-form/master/logo.png" align="right" class="logo" height="100" width="165"/>](https://redux-form.com/)

# Redux form

--- 
Redux-form là một thư viện hỗ trợ trong việc quản lý React form state.

Để kết nối giữa React form component và Redux store chúng ta cần những thành phần sau từ ```redux-form```
- ```formReducer ```: function chịu trách nhiệm cập nhật Redux store dựa trên những thay đổi từ app.
- ```reuduxForm()``` : là một ```HOC``` với đầu vào là một object và đầu ra là một function mới. Sử dụng hàm này để bao lấy form component và bind các hàm xử lý tương tác người dùng và dispatch action tương ứng.
- ```<Field/>``` : components bên trong form component, dùng để kết nối input component với redux-form logic.

```Redux-form``` theo dõi tất cả các trạng thái của ứng state như:

- Định dạng của các trường.
- Các giá trị của từng trường.
- Các trường được tập trung xử lí.
- Các giá trị hợp lệ
- Các trường người dùng đã tương tác
- Các form đang gửi.
- Trường hợp xảy ra bất kì xác thực không đồng bộ nào.

<img src="https://github.com/redux-form/redux-form/raw/master/docs/reduxFormDiagram.png"/>

## Cài đặt và sử dụng ``Redux form``

- Cài đặt thư viện ```Redux form```

```
npm i redux-form
```

- Đầu tiên ta truyền ```formReducer``` đến ```store```. Reducer này sẽ phục vụ tất cả form components trong app của mình.

```js
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer
  // other reducers
  ...
});

const store = createStore(rootReducer);

export default store;
```

Như vậy ```store``` sẽ biết phải handle ```actions``` đến từ các form component.

- Khởi tạo ```Form component```.

Để ```Form component``` được kết nối đến ```store```, ta cần bao component đó bởi ```reduxForm()```. Nó sẽ cung cấp các props liên quan đến state và function để handle việc submit form. Khởi tạo file <b>ContactForm.js</b>

```js
// ContactForm.js

import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>{/* form body*/}</form>
}

ContactForm = reduxForm({
  // ten cua moi form la duy nhat
  form: 'contact'
})(ContactForm)

export default ContactForm
```

- Khởi tạo Component ```<Field/>```

Component ```<Field/>``` làm nhiệm vụ kết nối input đến ```store``` ```<Field name="inputName" component="input" type="text" />```. Nó sẽ tạo phần tử HTML ```<input/>``` với type text và truyền vào những props như value, onChange, onBlur ,... giúp cho việc theo dõi và cập nhật ```state```.

```js
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
};

export default reduxForm({
  form: 'contact', // a unique identifier for this form
})(ContactForm);
```

- Handle submit form

Dữ liệu submit được truyền dưới dạng object JSON đến function onSubmit. Khởi tạo file <b>showResult.js</b>:

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
```

- Cuối cùng, thêm components ```ContactForm``` vào bên trong <b>App.js</b>

```js
import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import ContactForm from "./components/ReduxForm/ContactForm";
import showResults from "./components/ReduxForm/showResults";

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: 15 }}>
        <h2>Simple Form Redux form</h2>
          <ContactForm onSubmit={showResults} />
      </div>
    </Provider>
  );
}

export default App;

```


## Các ví dụ khác về việc sử dụng ```Redux Form```
- [Simple Form](https://codesandbox.io/s/mZRjw05yp)
- [Synchronous Validation](https://codesandbox.io/s/pQj03w7Y6)
- [Field-Level Validation](https://codesandbox.io/s/PNQYw1kVy)
- [Submit Validation](https://codesandbox.io/s/XoA5vXDgA)
- [Asynchronous Blur Validation](https://codesandbox.io/s/nKlYo387)
- [Initializing From State](https://codesandbox.io/s/MQnD536Km)
- [Field Arrays](https://codesandbox.io/s/Ww4QG1Wx)
- [Remote Submit](https://codesandbox.io/s/ElYvJR21K)
- [Normalizing](https://codesandbox.io/s/L8KWERjDw)
- [Immutable JS](https://codesandbox.io/s/ZVGJQBJMw)
- [Selecting Form Values](https://codesandbox.io/s/gJOBWZMRZ)
- [Wizard Form](https://codesandbox.io/s/0Qzz3843)


