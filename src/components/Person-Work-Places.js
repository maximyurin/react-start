function PersonWorkPlaces({ title, description, name, yearsOfWork, link }) {
  return (
    <p className="person-content-p">
      <strong>Name of employer:</strong> {name}
      <br />
      <strong>Dates of employment:</strong> {yearsOfWork}
      <br />
      <strong>Job title:</strong> {title}
      <br />
      <strong>Project/Role description:</strong> {description}
      <br />
      <strong>Link:</strong> <a href={link}>{link}</a>
    </p>
  );
}

export default PersonWorkPlaces;
