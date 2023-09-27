import PropTypes from 'prop-types';

import { SectionTitle } from  "./SectionTitle";

import "../styles/components/section.sass";

export function Section({title, children, id}) {
   return (
      <section id={id}>
         <SectionTitle title={title} />
         {children}
      </section>
   )
}

Section.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.any.isRequired,
   id: PropTypes.string,
};