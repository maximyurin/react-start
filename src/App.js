import "./App.css";
import image from "./img/photo.jpg";
import PersonPhoto from "./components/Person-Photo";
import PersonContactInfo from "./components/Person-Contact-Info";
import PersonName from "./components/Person-Name";
import PersonLanguages from "./components/Person-Languages";
import PersonSummary from "./components/Person-Summary";
import PersonSkills from "./components/Person-Skills";
import PersonWorkExperience from "./components/Person-Work-Experience";
import PersonEducation from "./components/Person-Education";
import PersonFormLink from "./components/Person-Form-Link";

function App() {
  return (
    <div className="grid">
      <div className="person-info">
        <PersonName />
        <PersonPhoto image={image} />
        <PersonContactInfo />
        <PersonLanguages />
      </div>
      <div className="person-content">
        <PersonSummary />
        <PersonSkills />
        <PersonWorkExperience />
        <PersonEducation />
        <PersonFormLink />
      </div>
    </div>
  );
}

export default App;
