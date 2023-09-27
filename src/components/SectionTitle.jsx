import PropTypes from 'prop-types';

import "../styles/components/sectionTitle.sass";

export function SectionTitle({title}){
   return(
      <h2 className='section-title'>
         {title}
      </h2>
   )
}

SectionTitle.propTypes = {
   title: PropTypes.string.isRequired,
};