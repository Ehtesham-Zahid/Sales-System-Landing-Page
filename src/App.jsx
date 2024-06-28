import Shery from "sheryjs"; /*Don't use if using CDN*/

import MainPage from "./containers/MainPage";

import "./App.css";

function App() {
  Shery.mouseFollower();

  return (
    <div className="background" style={{ fontFamily: "Lato, sans-serif" }}>
      <MainPage />
    </div>
  );
}

export default App;
