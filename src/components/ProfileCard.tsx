import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkedAlt, FaBirthdayCake } from "react-icons/fa";

const ProfileCard = () => {
    return (
        <div className="relative bg-white dark:bg-[#131312] border-2 border-[#B7A261] rounded-xl p-6 text-center w-80 shadow-lg flex flex-col items-center">
            <div className="absolute left-1/2 -top-12 -translate-x-1/2 w-[200px] h-[200px] rounded-lg border-4 border-[#B7A261] overflow-hidden">
                <Image
                    src="/avatar.jpg"
                    alt="Avatar"
                    width={200}
                    height={200}
                    className="object-cover h-[200px] w-[200px]"
                    priority
                />
            </div>

            <div className="text-center mt-36">
                <h2 className="text-2xl font-bold text-[#4b3d10] dark:text-[#b7a261]">
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
                    <FaPhone size={16} />
                    <span>+55 11 97408-4935</span>
                </div>

                <div className="flex items-center gap-2 text-[#4b3d10] dark:text-[#b7a261]">
                    <FaEnvelope size={16} />
                    <span>felipenogueira.94@gmail.com</span>
                </div>

                <div className="flex items-center gap-2 text-[#4b3d10] dark:text-[#b7a261]">
                    <FaMapMarkedAlt size={16} />
                    <span>Piracaia, SP - Brazil</span>
                </div>

                <div className="flex items-center gap-2 text-[#4b3d10] dark:text-[#b7a261]">
                    <FaBirthdayCake size={16} />
                    <span>01/19/1994</span>
                </div>
            </div>

            <button className="mt-4 bg-[#B7A261] dark:bg-[#4B3D10] text-white py-2 px-4 rounded-lg hover:opacity-80">
                View Resume
            </button>
        </div>
    )
}

export default ProfileCard;