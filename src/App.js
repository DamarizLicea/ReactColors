import Navbar from "./components/Navbar";
import React from "react";
import ColorList from "./components/ColorList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ColorList />
    </Provider>
  );
}

export default App;
