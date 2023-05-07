import "./App.css";
import Photo from "./components/Photo";
import ContactInfo from "./components/ContactInfo";
import Experience from "./components/Experience";
import image from "./img/photo.jpg";

function App() {
  return (
    <div className="container">
      <Photo imgPath={image} />
      <ContactInfo />
      <Experience />
    </div>
  );
}

export default App;
