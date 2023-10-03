import { Input } from './Input'
import { Button } from './Button'
import { Title } from './Title'
import { Footer } from './Footer'
import { WorkCard } from './WorkCard'
import { Section } from './Section'
import { Textarea } from './TextArea'

import FoodExplorer from '../assets/imgs/food-explorer.png'

import '../styles/components/mainContent.sass'

export function MainContent() {
  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <Title />

        <main>
          <Section title="about me">
            <p className="info about">
              Lorem ipsum dolor sit amet <strong>consectetur</strong>{' '}
              adipisicing elit. Quibusdam numquam, mollitia cupiditate voluptate
              unde, iure saepe, soluta porro voluptatum nesciunt ex quas dolores
              cum illo totam excepturi dolore. Officiis, explicabo!
            </p>
          </Section>

          <Section title="skills" id="skills">
            <div className="info skills">
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
              <WorkCard
                title="Food Explorer"
                image={FoodExplorer}
                description="A web app designed for restaurants. Admins can easily manage dishes, orders, and customer information. Customers can create accounts, order food, and update their profiles with ease."
                techs={['react', 'styled-components', 'nodejs', 'express']}
              />

              <WorkCard
                title="RocketMovies"
                image={FoodExplorer}
                description="This web app allows you to store and organize your movie ratings."
                techs={['react', 'css', 'nodejs', 'express']}
              />
            </div>
          </Section>

          <Section title="contact" id="contact">
            <form className="info contact-form">
              <Input
                id="name"
                type="text"
                name="name"
                label="Name"
                htmlFor="name"
                required
              />

              <Input
                id="email"
                type="email"
                name="email"
                label="Email"
                htmlFor="email"
                required
              />

              <Input
                id="subject"
                type="text"
                name="subject"
                label="Subject"
                htmlFor="subject"
                required
              />

              <Textarea
                id="message"
                name="message"
                label="Message"
                htmlFor="message"
                required
              />

              <Button title="send message" />
            </form>
          </Section>
        </main>
      </div>
      <Footer />
    </div>
  )
}
