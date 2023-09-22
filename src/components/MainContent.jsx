import { Header } from "./Header";
import { Footer } from "./Footer";
import { Section } from "./Section";

import "../styles/components/mainContent.sass";

export function MainContent() {
   return (
      <div id="wrapper">
         <div id="content-wrapper">
            <Header />
            
            <main>
               <Section title="about me">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam, mollitia cupiditate voluptate unde, iure saepe, soluta porro voluptatum nesciunt ex quas dolores cum illo totam excepturi dolore. Officiis, explicabo!</p>
               </Section>
            </main>

         </div>
         <Footer />
      </div>
   )
}