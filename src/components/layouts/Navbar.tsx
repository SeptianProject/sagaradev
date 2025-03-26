import React from 'react'
import { assets, navItems } from '../../assets'
import { Link } from 'react-scroll'

interface NavbarItemProps {
     isMobile: boolean
}

const Navbar: React.FC<NavbarItemProps> = ({ isMobile }) => {
     const [isHamburgerActive, setIsHamburgerActive] = React.useState(false)

     const handleHamburgerMenu = () => {
          setIsHamburgerActive(!isHamburgerActive)
     }

     return (
          <nav className='relative flex justify-between md:justify-start items-center gap-x-10'>
               <img src={assets.Logo} alt="SagaraDev-Logo"
                    className='w-32 md:w-40' />
               <button type="button"
                    onClick={handleHamburgerMenu}
                    className="z-10 md:hidden text-dark hover:text-dark/70 
                    transition-all duration-500 ease-in-out">
                    {isHamburgerActive ?
                         <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'
                              fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                   strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                         </svg> :
                         <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6'
                              fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round"
                                   strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                         </svg>
                    }
               </button>
               <ul className={`z-10 flex-col right-0 top-24 h-64 w-56 p-8 rounded-xl
               items-start gap-y-4 shadow-2xl border-b-4 border-r-4 border-grayAccent bg-light
               md:flex-row md:w-fit md:shadow-none md:h-auto md:items-center md:p-0 md:gap-x-10 md:border-none md:bg-transparent
               ${isMobile && isHamburgerActive ? 'flex absolute' : 'hidden md:flex md:static'}`}>
                    {navItems.map((item, index) => (
                         <li key={index} className=''>
                              <Link to={item.target} smooth duration={500} offset={-20}
                                   className='text-base font-medium text-dark/80 hover:text-dark/90'>
                                   {item.name}
                              </Link>
                         </li>
                    ))}
               </ul>
          </nav>
     )
}

export default Navbar