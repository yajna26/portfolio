import Contact from "./Component/Contact";
import Experience from "./Component/Experience";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Project from "./Component/Project";
import SocialLinks from "./Component/SocialLinks";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Project/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
