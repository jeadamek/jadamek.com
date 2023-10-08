import { useState } from 'react'
import emailjs from '@emailjs/browser'

import { Title } from './Title'
import { Input } from './Input'
import { Footer } from './Footer'
import { Toggle } from './Toggle'
import { Button } from './Button'
import { Section } from './Section'
import { Textarea } from './TextArea'
import { WorkCard } from './WorkCard'

import FoodExplorer from '../assets/imgs/food-explorer.png'

import '../styles/components/mainContent.sass'

export function MainContent() {
	const [formSubmitted, setFormSubmitted] = useState(false)

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [subject, setSubject] = useState('')
   const [message, setMessage] = useState('')

   function sendEmail(e) {
      e.preventDefault()

      if (name === '' || email === '' || subject === '' || message === '') {
         alert('Preencha todos os campos')
      }

      const templateParams = {
         from_name: name,
         subject: subject,
         email: email,
         message: message
      }

		const serviceID = import.meta.env.VITE_REACT_APP_SERVICE_ID
		const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID
		const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY

      emailjs
         .send(
            serviceID,
            templateID,
            templateParams,
            publicKey
         )
         .then(
            response => {
               console.log('Email enviado', response.status, response.text)
               setName('')
               setEmail('')
               setSubject('')
               setMessage('')
					setFormSubmitted(true)
            },
            err => {
               console.log('ERRO: ', err)
            }
         )
   }

   return (
      <div className="wrapper">
         <div className="content-wrapper">
            <Toggle />
            <Title />

            <main>
               <Section title="about me" id="about-me">
                  <div className="info about-me">
                     <p>
                        My journey began with a solid foundation in{' '}
                        <strong>Graphic Design</strong>, honed during my time at
                        Mackenzie University, São Paulo, Brazil. Since then,
                        I&apos;ve been on an exciting learning adventure,
                        expanding my skills.
                     </p>

                     <p>
                        I&apos;m currently working at{' '}
                        <strong>Jive Investments</strong> and have recently
                        completed a Full Stack Web Development program at
                        Rocketseat.
                     </p>

                     <p>
                        I love working as a{' '}
                        <strong>Full Stack Developer</strong>, translating
                        design concepts into user-friendly interfaces, and
                        staying up-to-date with industry trends.
                     </p>
                     <p>
                        <strong>
                           Let&apos;s create something awesome together!
                        </strong>
                     </p>
                  </div>
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
                        techs={[
                           'react',
                           'styled-components',
                           'nodejs',
                           'express'
                        ]}
                        repoLink="https://github.com/jeadamek/food-explorer-frontend"
                        deployLink="https://food-explorer-deploy.vercel.app/"
                     />

                     <WorkCard
                        title="RocketMovies"
                        image={FoodExplorer}
                        description="This web app allows you to store and organize your movie ratings."
                        techs={['react', 'css', 'nodejs', 'express']}
                        repoLink="https://github.com/jeadamek/rocketMovies_frontend"
                        deployLink="https://rocket-movies-deploy.netlify.app/"
                     />
                  </div>
               </Section>

               <Section title="contact" id="contact">
						{
							formSubmitted ?
							<div className="thank-you-message">
								<p>Thank you for your message!</p>
							</div>
							:
							<form className="info contact-form" onSubmit={sendEmail}>
								<Input
									id="name"
									type="text"
									name="name"
									label="Name"
									htmlFor="name"
									required
									onChange={e => setName(e.target.value)}
									value={name}
								/>

								<Input
									id="email"
									type="email"
									name="email"
									label="Email"
									htmlFor="email"
									required
									onChange={e => setEmail(e.target.value)}
									value={email}
								/>

								<Input
									id="subject"
									type="text"
									name="subject"
									label="Subject"
									htmlFor="subject"
									required
									onChange={e => setSubject(e.target.value)}
									value={subject}
								/>

								<Textarea
									id="message"
									name="message"
									label="Message"
									htmlFor="message"
									required
									onChange={e => setMessage(e.target.value)}
									value={message}
								/>

								<Button type="submit" title="send message" />
							</form>
						}


                  
               </Section>
            </main>
         </div>
         <Footer />
      </div>
   )
}
