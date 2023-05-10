import { useState } from "react";
import PersonWorkPlaces from "./Person-Work-Places";

function PersonWorkExperience() {
  const [workplaces, setWorkplaces] = useState([
    {
      title: "Retail Sales Manager",
      description:
        "Ceramic porcelain retail\n" +
        "          sales, working with developers and builders.",
      name: "ITUM LLC",
      datesOfWork: "09/2021 - present",
      link: "https://www.itum.ua",
    },
    {
      title: "Retail Sales Manager",
      description:
        "Interior and entrance doors\n" +
        "          and door furniture retail sales.",
      name: "Epicentr K",
      datesOfWork: "08/2016 - 09/2021",
      link: "https://www.epicentrk.ua",
    },
  ]);

  // const addWorkplace = (newWorkplace) => {
  //   setWorkplaces([...workplaces, newWorkplace]);
  // };

  return (
    <div className="person-work-experience">
      <header>
        <h2 className="person-header">Work Experience</h2>
      </header>
      {workplaces.map((workplace, index) => (
        <section key={index}>
          <PersonWorkPlaces {...workplace} />
        </section>
      ))}
    </div>
  );
}

export default PersonWorkExperience;
