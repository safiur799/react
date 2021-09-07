import Join from "./components/Join";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Home from "./components/Home";
import Setting from "./components/Setting";
import Search from "./components/Search";
import Download from "./components/Download";
import Longin from "./components/Lonin";

import Allcomponents from "./components/Allcomponents";
import "./App.css";
import Mobile from "./components/MobileOs";
function App() {
  // var arr = [
  //   {
  //     title: "Join",
  //   },
  //   {
  //     title: "Setting",
  //   },
  //   {
  //     title: "Login",
  //   },
  //   {
  //     title: "Contact",
  //   },
  //   {
  //     title: "Search",
  //   },
  //   {
  //     title: "Help",
  //   },
  //   {
  //     title: "Home",
  //   },
  //   {
  //     title: "Download",
  //   },
  // ];

  return (
    <div>
      {/* <div className="row">
        <div className="col my-3">
          <Join />
        </div>
        <div className="col my-3 ">
          <Setting />
        </div>
      </div>

      <div className="row">
        <div className="col my-3">
          <Longin />
        </div>
        <div className="col my-3">
          <Contact />
        </div>
      </div>
      <div className="row">
        <div className="col my-3">
          <Search />
        </div>
        <div className="col my-3">
          <Help />
        </div>
      </div>

      <div className="row">
        <div className="col my-3">
          <Home />
        </div>
        <div className="col my-3">
          <Download />
        </div>
      </div>
      <div className="change-color">
        {arr.map((el) => (
          <Allcomponents title={el.title} />
        ))}
      </div> */}
      <Mobile />
    </div>
  );
}

export default App;
