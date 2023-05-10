import React from "react";

function RepositoryCard({ name, description, html_url }) {
  return (
    <p className="person-content-p">
      <strong>Repository name:</strong>{" "}
      <a href={html_url} target={"_blank"}>
        {name}
      </a>{" "}
      <br />
      {description && (
        <span>
          <strong>Description:</strong> {description} <br />
        </span>
      )}
    </p>
  );
}

export default RepositoryCard;
