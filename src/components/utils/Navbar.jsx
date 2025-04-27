import React,{ useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../../App';
import logo from '../../assets/images/shared/logo.svg'
import { motion } from 'framer-motion';

const Navbar = () => {
  const { size, setIsMenuOpen, isMenuOpen } = useAppContext();

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 }, 
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  useEffect(() => {
    isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }, [isMenuOpen])

  return (
    <div className='bg-white w-full z-50 flex justify-between items-center py-4 px-2 sm:px-5 md:px-10 lg:px-24 fixed top-0'>
      <Link onClick={closeMenu} to="/" className="text-2xl font-bold"><img src={logo} alt="" className='h-4'/></Link>
      {size < 640 ? (
      <motion.nav initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={menuVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }} 
        className={`${size < 640 ? isMenuOpen ? 'activeMenu absolute block top-[52px] h-screen left-0 right-0 mx-auto w-full' : 'hidden' : ''}`}
      >
        <ul className={`flex gap-8 ${size < 640 ? 'flex-col items-center px-2 h-fit w-full text-black text-lg font-semibold' : 'flex-row'}`}>
          <li><Link onClick={closeMenu} to="/stories">Stories</Link></li> 
          <li><Link onClick={closeMenu} to="/features">Features</Link></li>
          <li><Link onClick={closeMenu} to="/pricing">Pricing</Link></li>
          <div className='pt-8 w-full flex border-t'>
            <button className={`bg-black text-white py-1 px-5 w-3/4 mx-auto`}>Get an invite</button>
          </div>
        </ul>
      </motion.nav>
      ) : (
        <nav>
          <ul className={`flex gap-5 ${size < 640 ? 'flex-col items-center h-fit w-full' : 'flex-row'}`}>
            <li className='hover:text-[#0e8684] transition duration-300'><Link onClick={closeMenu} to="/stories">Stories</Link></li>
            <li className='hover:text-[#0e8684] transition duration-300'><Link onClick={closeMenu} to="/features">Features</Link></li>
            <li className='hover:text-[#0e8684] transition duration-300'><Link onClick={closeMenu} to="/pricing">Pricing</Link></li>
          </ul> 
        </nav>
      )}
      <div className={`flex flex-col gap-2 w-fit cursor-pointer ${size > 640 ? 'hidden' : ''}`} onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}>
        <div className='w-8 h-0.5 bg-black'></div>
        <div className='w-8 h-0.5 bg-black'></div>
      </div>
      <button className={`bg-black text-white py-1 px-5 ${size < 640 ? 'hidden' : 'block'}`}>
        Get an invite
      </button>
    </div>
  )
}

export default Navbar;