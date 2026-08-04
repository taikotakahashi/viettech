import heroBg from './hero-bg.jpg'
import heroVideo from './hero-video.webm'
import aboutImage from './about.jpg'
import ctaBg from './cta-bg.jpg'
import logo from './logo.png'

import client1 from './clients/client-1.png'
import client2 from './clients/client-2.png'
import client3 from './clients/client-3.png'
import client4 from './clients/client-4.png'
import client5 from './clients/client-5.png'
import client6 from './clients/client-6.png'
import client7 from './clients/client-7.png'
import client8 from './clients/client-8.png'

import project1 from './masonry-portfolio/masonry-portfolio-1.jpg'
import project2 from './masonry-portfolio/masonry-portfolio-2.jpg'
import project3 from './masonry-portfolio/masonry-portfolio-3.jpg'
import project4 from './masonry-portfolio/masonry-portfolio-4.jpg'
import project5 from './masonry-portfolio/masonry-portfolio-5.jpg'

import team1 from './team/team-1.jpg'
import team2 from './team/team-2.jpg'
import team3 from './team/team-3.jpg'
import team4 from './team/team-4.jpg'

import testimonial1 from './testimonials/testimonials-1.jpg'
import testimonial2 from './testimonials/testimonials-2.jpg'
import testimonial3 from './testimonials/testimonials-3.jpg'

export const ASSETS = {
  heroBg,
  heroVideo,
  about: aboutImage,
  ctaBg,
  logo,
  clients: [client1, client2, client3, client4, client5, client6, client7, client8],
  projects: [project1, project2, project3, project4, project5],
  team: [team1, team2, team3, team4],
  testimonials: [testimonial1, testimonial2, testimonial3],
} as const
