import React from 'react'
import {link} from 'react-router-dom'
import {assets} from '.../assets/assets'
import { MenuIcon, SearchIcon, XIcon } from 'lucide-react'
const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false)
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
        <linK to ='/' className='max-md:flex-1'>
        <img src={assets.logo} alt="" className='w-36 h-auto'></img>
        </linK>

        <div className={`max-md:abdolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex-col max-md:-row items centre max-md:justify-centre gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray 300/20 overflow-hidden transition-[width] duration-300 $ {isOpen ? '' 'max-md:w-full : 'max-md:w-0' }`}>
          <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={()=> setIsOpen(!isOpen)} />
          <link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/'>Home</link>
          <link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/movies'>Movies</link>
          <link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/'>Theaters</link>
          <link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/'>Releases</link>
          <link onClick={()=> {scrollTo(0,0), setIsOpen(false)}} to='/favorite'>Favorites</link>
        </div>
      
      <div className='flex items-center gap-8'> 
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' />
        <button className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'> login</button>

       </div>

      <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' onClick={()=> setIsOpen(!isOpen)} />

    </div>
  )
}

export default Navbar