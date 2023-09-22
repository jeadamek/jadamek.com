import PropTypes from 'prop-types';

import { SectionTitle } from  "./SectionTitle";

import "../styles/components/section.sass";

export function Section({title, children}) {
   return (
      <section>
         <SectionTitle title={title} />
         {children}
      </section>
   )
}

Section.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.any.isRequired
};