import { Header } from "./Header";
import { Footer } from "./Footer";
import { Project } from "./Project";
import { Section } from "./Section";

import FoodExplorer from "../assets/imgs/food-explorer.png";

import "../styles/components/mainContent.sass";

export function MainContent() {
   return (
      <div id="wrapper">
         <div id="content-wrapper">
            <Header />
            
            <main>
               <Section title="about me">
                  <p className="info">Lorem ipsum dolor sit amet <strong>consectetur</strong> adipisicing elit. Quibusdam numquam, mollitia cupiditate voluptate unde, iure saepe, soluta porro voluptatum nesciunt ex quas dolores cum illo totam excepturi dolore. Officiis, explicabo!</p>
               </Section>

               <Section title="skills" id="skills">
                  <div className="info skills" >
                     <div>
                        <h3>Languages</h3>
                        <ul>
                           <li>JavaScript</li>
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>Python</li>
                           <li>SQL</li>
                        </ul>
                     </div>

                     <div>
                        <h3>Frameworks & Libraries</h3>
                        <ul>
                           <li>ReactJS</li>
                           <li>NodeJS</li>
                           <li>Bootstrap</li>
                           <li>Restful API</li>
                        </ul>
                     </div>

                     <div>
                        <h3>Tools</h3>
                        <ul>
                           <li>Git & GitHub</li>
                           <li>Chrome DevTools</li>
                           <li>Visual Studio Code</li>
                        </ul>
                     </div>

                     <div>
                        <h3>Design</h3>
                        <ul>
                           <li>UX/UI Design</li>
                           <li>Figma</li>
                           <li>Photoshop</li>
                           <li>Prototyping</li>
                           <li>Wireframing</li>
                        </ul>
                     </div>
                  </div>
               </Section>

               <Section title="work" id="work">
                  <div className="info work">
                     <Project 
                        title="Food Explorer"
                        image={FoodExplorer}
                        description="A web app designed for restaurants. Admins can easily manage dishes, orders, and customer information. Customers can create accounts, order food, and update their profiles with ease."
                        techs={["HTML", "CSS", "javascript"]}
                     />

                     <Project 
                        title="Food Explorer"
                        image={FoodExplorer}
                        description="A web app designed for restaurants. Admins can easily manage dishes, orders, and customer information. Customers can create accounts, order food, and update their profiles with ease."
                        techs={["HTML", "CSS", "javascript"]}
                     />
                  </div>
               </Section>
            </main>

         </div>
         <Footer />
      </div>
   )
}