"use client";

import React from "react";
import Image from "next/image";
import { FcAndroidOs  } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiNextdotjs, SiExpo } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

const contentData = {
    about: (
        <div>
            <h2 className="text-xl text-black dark:text-white font-bold">
                About Me
            </h2>
            <p className="mt-3 dark:text-white text-black font-normal">
                I entered the job market at the age of 16 in a financial company specializing in payroll loans. After completing my journalism degree in Ouro Preto, I returned to São Paulo and ended up going back to the financial sector at Banco BMG as a business consultant.
                <br /> <br />
                During the pandemic, I started studying programming and quickly fell in love with it. I learn every day, and as a front-end developer, my skills are constantly tested.
                <br /> <br />
                In March 2021, I had my first opportunity as a developer at Corebiz, where I worked until June 2022. I then took on the position of Specialist Developer at Maztra on a dedicated project using the VTEX IO platform. There, I was able to enhance my skills in ReactJS, using TypeScript and Next, and even some Node.js.
                <br /> <br />
                In 2024, I truly began working more frequently with back-end development and took on the role of Full Stack Developer within the AR&Co. projects.
            </p>

            <h2 className="text-xl text-black dark:text-white font-bold mt-5">
                What I Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="bg-[#FDF4F4] dark:bg-[#60594B] border-2 border-[#B7A261] rounded-lg shadow-md flex items-start overflow-hidden">
                    <div className="w-[116px] h-[179px] relative rounded-md min-w-[116px]">
                        <Image
                            src="/front-end.jpg"
                            alt="Work in computer"
                            fill
                            style={{ objectFit: "cover" }}
                            className="object-top"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-black dark:text-white">Web Front-End Development</h3>
                        <p className="text-black mt-3 dark:text-white">With a robust proficiency in React.js, I excel at transforming design concepts into dynamic, user-friendly websites.</p>   
                    </div>     
                </div>

                <div className="bg-[#FDF4F4] dark:bg-[#60594B] border-2 border-[#B7A261] rounded-lg shadow-md flex items-start overflow-hidden">
                    <div className="w-[116px] h-[179px] relative rounded-md min-w-[116px]">
                        <Image
                            src="/app-developer.jpg"
                            alt="Work in phone"
                            fill
                            style={{ objectFit: "cover" }}
                            className="object-top"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-black dark:text-white">App Development</h3>
                        <p className="text-black mt-3 dark:text-white">With expertise in React Native, I transform design concepts into high-performance, user-friendly apps.</p>   
                    </div>     
                </div>

                <div className="bg-[#FDF4F4] dark:bg-[#60594B] border-2 border-[#B7A261] rounded-lg shadow-md flex items-start overflow-hidden">
                    <div className="w-[116px] h-[179px] relative rounded-md min-w-[116px]">
                        <Image
                            src="/back-end.jpg"
                            alt="Back-end Development"
                            fill
                            style={{ objectFit: "cover" }}
                            className="object-top"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-black dark:text-white">Back-End Development</h3>
                        <p className="text-black mt-3 dark:text-white">With expertise in Node.js and GraphQL, I build scalable, efficient, and high-performance back-end systems.</p>   
                    </div>     
                </div>

                <div className="bg-[#FDF4F4] dark:bg-[#60594B] border-2 border-[#B7A261] rounded-lg shadow-md flex items-start overflow-hidden">
                    <div className="w-[116px] h-[179px] relative rounded-md min-w-[116px]">
                        <Image
                            src="/vtex.jpg"
                            alt="VTEX Development"
                            fill
                            style={{ objectFit: "cover" }}
                            className="object-top"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg text-black dark:text-white">VTEX Development</h3>
                        <p className="text-black mt-3 dark:text-white">With expertise in VTEX and e-commerce, I develop scalable, high-performing online stores.</p>   
                    </div>     
                </div>
            </div>
        </div>
    ),
    experience: (
        <div>
            <h2 className="text-xl text-black dark:text-white font-bold">
                Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                <div className="border-2 rounded-md border-[#B7A261] p-5">
                    <p className="text-black dark:text-white">2020 - 2022</p>
                    <p className="font-bold text-black dark:text-white">Systems Analysis and Development</p>
                    <p className="text-black dark:text-white">Estácio de Sá</p>
                </div>

                <div className="border-2 rounded-md border-[#B7A261] p-5">
                    <p className="text-black dark:text-white">2024</p>
                    <p className="font-bold text-black dark:text-white">NLW Pocket: Mobile - React Native</p>
                    <p className="text-black dark:text-white">Rocketseat</p>
                </div>
            </div>

            <h2 className="text-xl text-black dark:text-white font-bold mt-8">
                Experiance
            </h2>
            <div className="flex flex-col mt-4 gap-5">
                <div className="flex items-center justify-start border-2 border-[#B7A261] rounded-md p-5">
                    <div className="w-[88px] h-[88px] border border-[#B7A261] rounded-md relative overflow-hidden">
                        <Image
                            src="/reserva-1.jpg"
                            alt="Logo Reserva"
                            fill
                            className="object-top"
                        />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-black ml-5 dark:text-white">
                            <strong>Company:</strong> Reserva
                        </p>

                        <p className="text-black ml-5 dark:text-white">
                            <strong>Role:</strong> Full Stack Developer
                        </p>

                        <p className="text-black ml-5 dark:text-white">
                            <strong>Duration:</strong> Jun / 2022 - At the moment
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-start border-2 border-[#B7A261] rounded-md p-5">
                    <div className="w-[88px] h-[88px] border border-[#B7A261] rounded-md relative overflow-hidden">
                        <Image
                            src="/cadastra_logo.jpg"
                            alt="Logo Cadastra"
                            fill
                            className="object-top"
                        />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-black ml-5 dark:text-white">
                            <strong>Company:</strong> Cadastra
                        </p>

                        <p className="text-black ml-5 dark:text-white">
                            <strong>Role:</strong> Front-End Developer Specialist
                        </p>

                        <p className="text-black ml-5 dark:text-white">
                            <strong>Duration:</strong> Jun / 2022 - At the moment
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-start border-2 border-[#B7A261] rounded-md p-5">
                    <div className="w-[88px] h-[88px] border border-[#B7A261] rounded-md relative overflow-hidden">
                        <Image
                            src="/corebiz.jpg"
                            alt="Logo Corebiz"
                            fill
                            className="object-top"
                        />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-black ml-5 dark:text-white">
                            <strong>Company:</strong> Corebiz
                        </p>

                        <p className="text-black ml-5 dark:text-white">
                            <strong>Role:</strong> Front-End Developer
                        </p>

                        <p className="text-black ml-5 dark:text-white">
                            <strong>Duration:</strong> Mar / 2021 - Jun / 2022 (1 Year and 4 Months)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ),
    projects: (
        <div>
            <h2 className="text-xl text-black dark:text-white font-bold">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
                <a href="https://github.com/felipengr/nearby" target="_blank" rel="noopener noreferrer">
                    <div className="p-6 border flex flex-col items-center justify-center border-[#B7A261] dark:border-[#4B3D10] bg-[#F9F6EA] dark:bg-[#403D32] rounded-md">
                        <div className="w-[309px] h-[177px] border border-black dark:border-white rounded-md relative overflow-hidden">
                            <Image
                                src="/nearby.jpg"
                                alt="Nearby App"
                                fill
                                className="object-top"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-black dark:text-white mt-3">
                                Nearby App (React Native)
                            </p>
                        </div>
                    </div>
                </a>
                
                <a href="https://github.com/felipengr/DT-Money" target="_blank" rel="noopener noreferrer">
                    <div className="p-6 border flex flex-col items-center justify-center border-[#B7A261] dark:border-[#4B3D10] bg-[#F9F6EA] dark:bg-[#403D32] rounded-md">
                        <div className="w-[309px] h-[177px] border border-black dark:border-white rounded-md relative overflow-hidden">
                            <Image
                                src="/dtMoney.jpg"
                                alt="DT Money"
                                fill
                                className="object-top"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-black dark:text-white mt-3">
                                DT Money (React + Typescript)
                            </p>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/felipengr/igniteTeams" target="_blank" rel="noopener noreferrer">
                    <div className="p-6 border flex flex-col items-center justify-center border-[#B7A261] dark:border-[#4B3D10] bg-[#F9F6EA] dark:bg-[#403D32] rounded-md">
                        <div className="w-[309px] h-[177px] border border-black dark:border-white rounded-md relative overflow-hidden">
                            <Image
                                src="/igniteTeams.jpg"
                                alt="Ignite Teams"
                                fill
                                className="object-top"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-black dark:text-white mt-3">
                                Ignite Teams (React + Typescript)
                            </p>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/felipengr/daily-diet" target="_blank" rel="noopener noreferrer">
                    <div className="p-6 border flex flex-col items-center justify-center border-[#B7A261] dark:border-[#4B3D10] bg-[#F9F6EA] dark:bg-[#403D32] rounded-md">
                        <div className="w-[309px] h-[177px] border border-black dark:border-white rounded-md relative overflow-hidden">
                            <Image
                                src="/dailyDiet.jpg"
                                alt="Daily Diet"
                                fill
                                className="object-top"
                            />
                        </div>
                        <div>
                            <p className="font-bold text-black dark:text-white mt-3">
                                Daily Diet (React + Typescript)
                            </p>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    ),
    skills: (
        <div>
            <h2 className="text-xl text-black dark:text-white font-bold">Skills</h2>
            <div className="flex flex-wrap gap-6 w-full mt-9">
                <div className="flex flex-col gap-2 items-center justify-center ">
                    <div className="border rounded-md border-[#B7A261] dark:border-[#4B3D10] shadow-[0px_0px_8px_2px_#F8DF91] dark:shadow-[0px_0px_8px_2px_#EFE0B2] p-4 ">
                        <FcAndroidOs width={60} height={60} widths={60} className="w-14 h-14" />
                    </div>
                    <p className="text-black dark:text-white font-semibold">Android</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center ">
                    <div className="border rounded-md border-[#B7A261] dark:border-[#4B3D10] shadow-[0px_0px_8px_2px_#F8DF91] dark:shadow-[0px_0px_8px_2px_#EFE0B2] p-4 ">
                        <FaReact width={60} height={60} widths={60} className="w-14 h-14 text-[#61DAFB]" />
                    </div>
                    <p className="text-black dark:text-white font-semibold">React</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center ">
                    <div className="border rounded-md border-[#B7A261] dark:border-[#4B3D10] shadow-[0px_0px_8px_2px_#F8DF91] dark:shadow-[0px_0px_8px_2px_#EFE0B2] p-4 ">
                        <LiaNode width={60} height={60} widths={60} className="w-14 h-14 text-[#8bc500]" />
                    </div>
                    <p className="text-black dark:text-white font-semibold">Node Js</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center ">
                    <div className="border rounded-md border-[#B7A261] dark:border-[#4B3D10] shadow-[0px_0px_8px_2px_#F8DF91] dark:shadow-[0px_0px_8px_2px_#EFE0B2] p-4 ">
                        <SiNextdotjs width={60} height={60} widths={60} className="w-14 h-14 text-[#000] dark:text-white" />
                    </div>
                    <p className="text-black dark:text-white font-semibold">Next.js</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center ">
                    <div className="border rounded-md border-[#B7A261] dark:border-[#4B3D10] shadow-[0px_0px_8px_2px_#F8DF91] dark:shadow-[0px_0px_8px_2px_#EFE0B2] p-4 ">
                        <SiExpo width={60} height={60} widths={60} className="w-14 h-14 text-[#000] dark:text-white" />
                    </div>
                    <p className="text-black dark:text-white font-semibold">Expo</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center ">
                    <div className="border rounded-md border-[#B7A261] dark:border-[#4B3D10] shadow-[0px_0px_8px_2px_#F8DF91] dark:shadow-[0px_0px_8px_2px_#EFE0B2] p-4 ">
                        <GrGraphQl width={60} height={60} widths={60} className="w-14 h-14 text-[#f6009b]" />
                    </div>
                    <p className="text-black dark:text-white font-semibold">GraphQL</p>
                </div>
            </div>
        </div>
    ),
    contact: (
        <div>
          <h2 className="text-xl font-bold">Contact</h2>
          <p>Me envie um e-mail para contato@meusite.com</p>
        </div>
    ),
};

interface ContentDisplayProps {
    activeSection: string;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ activeSection }) => {
    return (
        <div className="p-6 max-w-[912px] min-w-[912px] rounded-xl shadow-md bg-white dark:bg-black border-2 border-[#B7A261] transition-opacity duration-300">
            {contentData[activeSection as keyof typeof contentData]}
        </div>
    );
};

export default ContentDisplay;