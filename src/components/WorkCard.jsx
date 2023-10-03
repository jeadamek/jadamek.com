import PropTypes from "prop-types";

import { TechTag } from "./TechTag";

import "../styles/components/workCard.sass";

export function WorkCard({title, techs, description, image, repoLink, deployLink}){
   return(
      <div className="work-card">
         <img src={image} alt={`Foto do projeto ${title}`} />

         <div className="word-info">
            <h3>{title}</h3>
            <p>{description}</p>
         </div>

         <div className="techs">
            {
               techs.map((tech, index) => (
                  <TechTag key={index} title={tech} />
               ))
            }
         </div>
         <div className="work-links">
            <a href={deployLink} target="_blank" rel="noreferrer">View Deploy</a>
            <a href={repoLink} target="_blank" rel="noreferrer">View Repository</a>
         </div>
      </div>
   )
}

WorkCard.propTypes = {
   title: PropTypes.string.isRequired,
   techs: PropTypes.array.isRequired,
   description: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   repoLink: PropTypes.string.isRequired,
   deployLink: PropTypes.string.isRequired
}