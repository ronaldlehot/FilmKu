import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import Intro from "./Component/Intro";
import Trending from "./Component/Trending";
import Superhero from "./Component/Superhero";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG"> 
      <NavigationBar />
      <Intro />
      </div>
      {/* end intro section  */}

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of trending */}

      {/* superhero section */}
      <div className="superhero">
        <Superhero />
      
      </div>

      {/* end of superhero */}
    </div>
  );
}

export default App;
