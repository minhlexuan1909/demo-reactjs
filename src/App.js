import React from "react";
import { Provider } from "react-redux";
import store from "./redux";
import Users from "./components/Users";
import ContactForm from "./components/ReduxForm/ContactForm";
import showResults from "./components/ReduxForm/showResults";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Users />
      </div>
      <div style={{ padding: 15 }}>
        <h2>Simple Form Redux form</h2>
          <ContactForm onSubmit={showResults} />
      </div>
    </Provider>
  );
}

export default App;
