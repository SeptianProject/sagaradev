import Logo from './images/logo.webp'
import ProjectImage from './images/project.webp'

import Memo1 from './images/memo1.webp'
import Memo2 from './images/memo2.webp'
import Memo3 from './images/memo3.webp'
import Memo4 from './images/memo4.webp'
import Memo5 from './images/memo5.webp'

import Member1 from './images/septian.webp'
import Member2 from './images/natasya.webp'
import Member3 from './images/rapli.webp'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const assets = {
     Logo, ProjectImage,
     Memo1, Memo2, Memo3, Memo4, Memo5,
     Member1, Member2, Member3
}

export const navItems = [
     { name: 'Home', path: '/' },
     { name: 'Sagara Team', path: '/' },
     { name: 'Sagara Journey', path: '/' },
     { name: 'Sagara Projects', path: '/contact' },
]

export const sagaraMembers = [{
     name: 'Septian Asropik',
     role: 'FE Developer',
     imageUrl: assets.Member1,
     socials: [
          { icon: FaLinkedin, url: 'https://linkedin.com' },
          { icon: FaInstagram, url: 'https://instagram.com' },
          { icon: FaGithub, url: 'https://github.com' },
     ]
}, {
     name: 'Natasya Juliana',
     role: 'UI/UX Designer',
     imageUrl: assets.Member2,
     socials: [
          { icon: FaLinkedin, url: 'https://linkedin.com' },
          { icon: FaInstagram, url: 'https://instagram.com' },
          { icon: FaGithub, url: 'https://github.com' },
     ]
}, {
     name: 'M. Rafli Dwi',
     role: 'BE Developer',
     imageUrl: assets.Member3,
     socials: [
          { icon: FaLinkedin, url: 'https://linkedin.com' },
          { icon: FaInstagram, url: 'https://instagram.com' },
          { icon: FaGithub, url: 'https://github.com' },
     ]
}]

export const journeyItems = [
     {
          id: 1,
          dateRange: "July 2024 - Feb 2025",
          title: "Digital Pixel Space Creative Interns ✨",
          description:
               "Like the ocean, we are deep in innovation, fluid in execution, and limitless in creativity, turning ideas into impact.",
          active: true,
          icon: "✨",
     },
     {
          id: 2,
          dateRange: "July 2024 - Feb 2025",
          title: "Runner Up ICOMFEST 2025",
          description:
               "Like the ocean, we are deep in innovation, fluid in execution, and limitless in creativity, turning ideas into impact.",
          active: false,
          icon: "🏅",
     },
     {
          id: 3,
          dateRange: "July 2024 - Feb 2025",
          title: "Runner Up Play IT 2024",
          description:
               "Like the ocean, we are deep in innovation, fluid in execution, and limitless in creativity, turning ideas into impact.",
          active: false,
          icon: "🥈",
     },
]

export const memories = [
     { image: assets.Memo1, alt: "ICOM 2023 Award Ceremony", },
     { image: assets.Memo2, alt: "Team Photo", },
     { image: assets.Memo4, alt: "Team with Medals", },
     { image: assets.Memo3, alt: "POLINEMA Award Ceremony", },
     { image: assets.Memo5, alt: "Dinner Celebration", },
]

export const projects = [
     {
          title: "Langkah Sritanjung Website",
          description: "Whether you need a redesign or a new website experience.",
          image: assets.ProjectImage,
          webUrl: "https://sritanjung.sagaradev.com",
     },
     {
          title: "Eksplosa Website",
          description: "Whether you need a redesign or a new website experience.",
          image: assets.ProjectImage,
          webUrl: "https://eksplosa.sagaradev.com",
     },
     {
          title: "Langkah Sritanjung Website",
          description: "Whether you need a redesign or a new website experience.",
          image: assets.ProjectImage,
          webUrl: "https://sritanjung.sagaradev.com",
     },
     {
          title: "Eksplosa Website",
          description: "Whether you need a redesign or a new website experience.",
          image: assets.ProjectImage,
          webUrl: "https://eksplosa.sagaradev.com",
     },
]

export const quotes = [
     {
          text: "Coding adalah seni mengubah kafein menjadi solusi🐦👍🏻",
          author: "Septian Aarapik",
          role: "FE Developer",
          avatar: assets.Member1,
     },
     {
          text: "Kata mamah jangan lupa beli mie ayam, gapake ceker, sayurnya yang banyak.",
          author: "Natasya Juliena",
          role: "UI/UX Designer",
          avatar: assets.Member2,
     },
     {
          text: "Jangan malas, kalo malas jadinya kaya saya🤪🤟",
          author: "M. Rafli Dwi S",
          role: "BE Developer",
          avatar: assets.Member3,
     },
]

export const footerItems = {
     sections: [
          { name: 'Home', path: '/' },
          { name: 'Sagara Team', path: '/' },
          { name: 'Sagara Journey', path: '/' },
          { name: 'Sagara Projects', path: '/' },
     ],
     socials: [
          { name: 'sagaradev@gmail.coom', path: 'https://gmail.com' },
          { name: '+62345678910', path: 'https://web.whatsapp.com' },
     ]
}