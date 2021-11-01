import { Provider } from "react-redux";
import { store } from "./state";

import RepositoriesList from "./components/RepositoriesList";
import "./App.css";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Search for npm packages</h1>
        <RepositoriesList/>
      </div>
    </Provider>
  );
}

export default App;
