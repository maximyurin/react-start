import React, { useState, useEffect } from "react";
import RepositoryCard from "./RepositoryCard";

function PersonRepositories() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/maximyurin/repos"
      );
      const repositoriesData = await response.json();
      setData(repositoriesData);
    } catch (error) {
      console.error("Ошибка получения данных:", error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="person-repository">
      <header>
        <h2 className="person-header">My repositories</h2>
      </header>
      <section>
        {data.map((repo, index) => (
          <section key={index}>
            <RepositoryCard {...repo} />
          </section>
        ))}
      </section>
    </div>
  );
}

export default PersonRepositories;
