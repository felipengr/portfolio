import Image from 'next/image'
import React from 'react'
import {
  FaBirthdayCake,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
} from 'react-icons/fa'

const ProfileCard = () => {
  const ICON_SIZE = 16

  return (
    <div
      className={`
                relative
                bg-white 
                dark:bg-[#131312] 
                border-2 
                border-[#B7A261] 
                rounded-xl 
                p-4             
                sm:p-6          
                text-center 
                shadow-lg 
                flex 
                flex-col 
                items-center
                md:w-80
                mt-6
                sm:mt-0
            `}
    >
      <div
        className={`
                    relative
                    w-[150px]
                    h-[150px]
                    mb-2
                    sm:mb-6
                    rounded-lg
                    border-4
                    border-[#B7A261]
                    overflow-hidden
                    md:absolute
                    md:left-1/2
                    md:-top-12
                    md:-translate-x-1/2
                    md:w-[200px]
                    md:h-[200px]
                 `}
      >
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          width={200}
          height={200}
          className="object-cover h-full w-full"
          priority
        />
      </div>

      <div className="text-center mt-4 sm:mt-36">
        <h2 className="text-xl sm:text-2xl font-bold text-[#4b3d10] dark:text-[#b7a261]">
          Felipe Nogueira
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Full Stack Developer
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://github.com/felipengr"
          className="text-[#4B3D10] hover:text-[#B7A261] dark:text-[#B7A261] dark:hover:text-[#4B3D10]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/nogueirafelipe94/"
          className="text-[#4B3D10] hover:text-[#B7A261] dark:text-[#B7A261] dark:hover:text-[#4B3D10]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://www.instagram.com/flpnogueira/"
          className="text-[#4B3D10] hover:text-[#B7A261] dark:text-[#B7A261] dark:hover:text-[#4B3D10]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="mailto:felipenogueira.94@gmail.com"
          className="text-[#4B3D10] hover:text-[#B7A261] dark:text-[#B7A261] dark:hover:text-[#4B3D10]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2 text-[#4b3d10] dark:text-[#b7a261]">
          <FaPhone size={ICON_SIZE} />
          <span>+55 11 97408-4935</span>
        </div>

        <div className="flex items-center gap-2 text-[#4b3d10] dark:text-[#b7a261]">
          <FaEnvelope size={ICON_SIZE} />
          <span>felipenogueira.94@gmail.com</span>
        </div>

        <div className="flex items-center gap-2 text-[#4b3d10] dark:text-[#b7a261]">
          <FaMapMarkedAlt size={ICON_SIZE} />
          <span>Piracaia, SP - Brazil</span>
        </div>

        <div className="flex items-center gap-2 text-[#4b3d10] dark:text-[#b7a261]">
          <FaBirthdayCake size={ICON_SIZE} />
          <span>01/19/1994</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
