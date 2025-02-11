import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10" id="contact">


<div className="flex flex-col items-center">
<h1 className="heading lg:max-w-[45vw]">
💬 Let’s Connect!
</h1>
<p className="text-white-200 md:mt-10 my-5 text-center">Have a project in mind or just want to say hi? Feel free to reach out!</p>
<a href="mailto:abhijith.kpbineesh@gmail.com">
    <MagicButton
    title="Lets Get in touch"
    icon={<FaLocationArrow/>}
    position="right"
    />
</a>
</div>

<div className="flex mt-16 md:flex-row flex-col justify-center items-center">
    <p className="md:text-base text-sm md:font-normal font-light">Copyright© 2025 Abhijith K B</p>
</div>

<div className="flex justify-center items-center md:gap-3 gap-6 p-7">
  {socialMedia.map((profile) => (
    <a 
      key={profile.id} 
      href={profile.link}  // Add the link dynamically
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300"
    >
      <img src={profile.img} alt={profile.id} width={30} height={30} />
    </a>
  ))}
</div>


        

    </footer>
  )
}

export default Footer