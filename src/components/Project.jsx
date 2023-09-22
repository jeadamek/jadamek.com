import PropTypes from "prop-types";

import { TechTag } from "./TechTag";

export function Project({title, techs, description, image}){
   return(
      <div className="project">
         <img src={image} alt={`Foto do projeto ${title}`} />
         <h2>{title}</h2>
         <p>{description}</p>

         <div>
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