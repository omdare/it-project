import React, { useState } from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar = () => {
      const [menuOpen, setMenuOpen]= useState(false)
      const toggleMenu=()=>{
        setMenuOpen(prev => !prev)
      }
      
  return (
    <>
    <nav className="bg-slate-50 ">
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center">
            <img
              src="/assets/logo.webp"
              alt=""
              width={50}
              className="font-bold"
            />
            <h1 className="playwrite">bydrive</h1>
          </div>

          <div className="hidden md:flex gap-5 font-bold">
            <Link to={"/"}>All Cars</Link>
            <Link to={""}>Our services</Link>
            <Link to={""}>Reviews</Link>
            <Link to={""}>All pages</Link>
            <Link to={""}>Get this theme</Link>
          </div>

          <div className="flex items-center gap-3 text-xl">
            <FaSearch />
            <div onClick={toggleMenu} className="w-7 h-5 relative z-40 md:hidden">
                 { menuOpen ? <IoClose size={24}/> : <FaBars size={20}/>} 
            </div>
            
          </div>
        </div>
        { menuOpen &&(
          <div className="md:hidden flex flex-col gap-3 px-4 pb-4 font-semibold text-black bg-slate-100">
            <a onClick={toggleMenu} href="">All Cars</a>
             <a onClick={toggleMenu} href="">All Cars</a>
              <a onClick={toggleMenu} href="">All Cars</a>
               <a onClick={toggleMenu} href="">All Cars</a>
                <a onClick={toggleMenu} href="">All Cars</a>
          </div>

        )}
      </nav>
    </>
  )
}

export default Navbar