import React from 'react'
import { assets } from '../../assets'

const Footer = () => {
     const sections = [
          { name: 'Home', path: '/' },
          { name: 'Sagara Team', path: '/' },
          { name: 'Sagara Journey', path: '/' },
          { name: 'Sagara Projects', path: '/' },
     ]

     const socials = [
          { name: 'sagaradev@gmail.coom', path: 'https://gmail.com' },
          { name: '+62345678910', path: 'https://web.whatsapp.com' },
     ]

     return (
          <footer className='relative'>
               <div className='border-b w-full py-16 flex flex-col md:flex-row md:gap-x-20 md:items-start'>
                    <img src={assets.Logo} alt="SagaraDev-Logo"
                         className='w-40' />
                    <div className='flex gap-x-20 md:pt-7'>
                         <FooterItems items={sections} title='Sagara Dev' />
                         <FooterItems items={socials} title='Hubungi Kami' />
                    </div>
               </div>
               <div className='text-dark/80 py-4'>
                    <p>&copy; 2025 SagaraDev Team Copyright</p>
               </div>
          </footer>
     )
}

export default Footer

interface FooterItemsProps {
     items: { name: string, path?: string }[]
     title: string
}

const FooterItems: React.FC<FooterItemsProps> = ({
     items, title
}) => {
     return (
          <ul className='flex flex-col gap-y-3'>
               <h3 className='text-lg font-semibold text-dark'>
                    {title}
               </h3>
               {items.map((section, index) => (
                    <li key={index}>
                         <a href={section.path}
                              className='text-sm md:text-base font-medium text-dark/80 hover:text-dark/90'>
                              {section.name}
                         </a>
                    </li>
               ))}
          </ul>
     )
}