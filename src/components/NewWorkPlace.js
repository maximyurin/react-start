import { useState } from "react";

function NewWorkPlace({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [yearsOfWork, setYearsOfWork] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, name, yearsOfWork, link });
    setTitle("");
    setDescription("");
    setName("");
    setYearsOfWork("");
    setLink("");
  };

  return (
    <form onSubmit={handleSubmit} className="resume-form">
      <h4>Form for Add New Workplace</h4>
      <div className="form-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-element"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-container">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          rows="7"
          className="form-element"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-container">
        <label htmlFor="name">Name of organization</label>
        <input
          type="text"
          className="form-element"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-container">
        <label htmlFor="yearsOfWork">Years of Working</label>
        <input
          type="text"
          className="form-element"
          id="yearsOfWork"
          value={yearsOfWork}
          onChange={(e) => setYearsOfWork(e.target.value)}
          required
        />
      </div>
      <div className="form-container">
        <label htmlFor="link">Link</label>
        <input
          type="url"
          className="form-element"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="counter-btn">
        Add New Workplace
      </button>
    </form>
  );
}

export default NewWorkPlace;
