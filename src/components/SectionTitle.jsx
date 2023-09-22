import PropTypes from 'prop-types';

export function SectionTitle({title}){
   return(
      <h2>
         {title}
      </h2>
   )
}

SectionTitle.propTypes = {
   title: PropTypes.string.isRequired,
};