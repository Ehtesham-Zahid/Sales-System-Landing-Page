import MainPage from "./containers/MainPage";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements

import "./App.css";

function App() {
  register();
  return (
    <div className="background" style={{ fontFamily: "Lato, sans-serif" }}>
      <MainPage />
    </div>
  );
}

export default App;
