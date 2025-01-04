import Header from "./components/Header"; 
import "./index.css";
import { Provider } from "react-redux";
import bookStore from "./utils/store/bookStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={bookStore}>
        <Header />
        <Outlet />
 
      </Provider>
    </>
  );
}

export default App
