import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./example/MyComponent";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Henry study <code>React.js</code> now.
        </p>

        <MyComponent />
      </header>
    </div>
  );
};

export default App;
