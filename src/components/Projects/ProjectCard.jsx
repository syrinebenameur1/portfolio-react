import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  const videoPageUrl = "/video.html"; // Adjust the path if needed

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {source && (
          <a href={source} className={styles.link}>
            Source
          </a>
        )}
        {title === "Voice control system" && (
          <a href={videoPageUrl} className={styles.link}>
            Watch Video
          </a>
        )}
      </div>
    </div>
  );
};
