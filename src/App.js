import ControlledForms from "./components/ControlledForms";
import UncontrolledForms from "./components/UncontrolledForms";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <span className="title">Controlled Forms</span>
        <ControlledForms />
      </div>
      <div>
        <span className="title">Uncontrolled Forms</span>
        <UncontrolledForms />
      </div>
    </div>
  );
}

export default App;
