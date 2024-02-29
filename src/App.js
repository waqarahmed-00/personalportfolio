import { Navbar } from "./component/Navbar";
import { Intro } from "./component/Intro";
import { Skills } from "./component/Skills";
import { Projects } from "./component/Projects";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import { Footer} from "./component/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      {/* <Blogs/> */}
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
