import "./App.css";
import Posts from "./components/Posts/Posts";
import AddPost from "./components/AddAPost/AddPost";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <h1>MTTParry's Comic Reviews</h1>
      <p>This is where posts should be...</p>
      <Posts />
      <p>This is where Adding Posts should be...</p>
      <AddPost />
      <p>This is where About Me should be...</p>
      <AboutMe />
      <p>This is where Contact Me should be...</p>
      <ContactMe />
    </div>
  );
}

export default App;
