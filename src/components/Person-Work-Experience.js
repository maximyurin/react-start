import { useState } from "react";
import PersonWorkPlaces from "./Person-Work-Places";
import NewWorkPlace from "./NewWorkPlace";

function PersonWorkExperience() {
  const [workplaces, setWorkPlace] = useState([
    {
      title: "Retail Sales Manager",
      description:
        "Interior and entrance doors and door furniture retail sales.",
      name: "Epicentr K",
      yearsOfWork: "10/2015 - 09/2021",
      link: "www.epicentrk.ua",
    },
    {
      title: "Retail Sales Manager",
      description:
        "Ceramic porcelain retail sales, working with developers and builders.",
      name: "ITUM LLC",
      yearsOfWork: "09/2021 - present",
      link: "www.itum.ua",
    },
  ]);
  const addNewWorkplace = (newWorkplace) => {
    setWorkPlace([...workplaces, newWorkplace]);
  };
  return (
    <div className="person-work-experience">
      <header>
        <h2 className="person-header">Work Experience</h2>
      </header>
      {workplaces.reverse().map((work, index) => (
        <section key={index}>
          <PersonWorkPlaces {...work} />
        </section>
      ))}
      <NewWorkPlace onAdd={addNewWorkplace} />
    </div>
  );
}

export default PersonWorkExperience;
