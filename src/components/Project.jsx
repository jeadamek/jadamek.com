import PropTypes from "prop-types";

import { TechTag } from "./TechTag";

import "../styles/components/project.sass";

export function Project({title, techs, description, image}){
   return(
      <div className="project">
         <img src={image} alt={`Foto do projeto ${title}`} />

         <div className="project-info">
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
      </div>
   )
}

Project.propTypes = {
   title: PropTypes.string.isRequired,
   techs: PropTypes.array.isRequired,
   description: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired
}