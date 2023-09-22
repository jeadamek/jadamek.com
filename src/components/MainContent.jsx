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
               <Section />
            </main>

         </div>
         <Footer />
      </div>
   )
}