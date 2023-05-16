import "./App.css";
import RefExample from "./components/RefExample";
import RefDomExample from "./components/RefDomExample";
import EffectExample from "./components/EffectExample";
import EffectIntervalExample from "./components/EffectIntervalExample";

function App() {
  return (
    <div className="App">
      <RefExample />
      <hr />
      <RefDomExample />
      <hr />
      <EffectExample />
      <hr />
      <EffectIntervalExample />
    </div>
  );
}

export default App;
