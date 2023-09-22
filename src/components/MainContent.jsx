import { Header } from "./Header";
import { Footer } from "./Footer";

import "../styles/components/mainContent.sass";

export function MainContent() {
   return (
      <div id="wrapper">
         <div id="content-wrapper">
            <Header />
            
            <main>

            </main>

         </div>
         <Footer />
      </div>
   )
}