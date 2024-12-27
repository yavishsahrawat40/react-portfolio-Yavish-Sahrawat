import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const iconLink = [
  { icon: <FaGithub size={30} />, link: "https://github.com/yavishsahrawat40" },
  { icon: <FaLinkedin size={30} />, link: "https://www.linkedin.com/in/yavish-sahrawat-62017325/" },
  { icon: <FaInstagram size={30} />, link: "https://www.instagram.com/yavi_sahrawat/" },
]

const handdleIconCLick = (url) => {
  window.open(url, "_blank")
}

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full h-60'>
      <div className='mt-4'>
        <span className='text-4xl w-20 bg-gradient-to-r from-purple-500 via-slate-400 to-pink-400 bg-clip-text text-4xl tracking-tight text-transparent' >YS</span>
      </div>
      <div className='m-8 flex justify-center items-center gap-6 w-32 h-5'>
        {iconLink.map((icon, index) => (
          <div key={index} className='cursor-pointer' onClick={() => handdleIconCLick(icon.link)}>
            <div className=''></div>
            {icon.icon}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
