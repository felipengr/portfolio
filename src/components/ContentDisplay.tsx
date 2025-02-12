"use client";

import React, { useState, useEffect } from "react";
import { FcAndroidOs } from "react-icons/fc";
import {
  FaReact,
  FaAws,
  FaHtml5,
  FaSass,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import {
  SiNextdotjs,
  SiExpo,
  SiTailwindcss,
  SiVtex,
  SiGoogleanalytics,
  SiJirasoftware,
  SiGoogletagmanager,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { PiFigmaLogoFill } from "react-icons/pi";
import { VscAzureDevops } from "react-icons/vsc";
import ContactForm from "./ContactForm";
import FeatureCard from "./cards/FeatureCard";
import EducationCard from "./cards/EducationCard";
import ExperienceCard from "./cards/ExperienceCard";
import ProjectCard from "./cards/ProjectCard";

const PRIMARY_COLOR = "#B7A261";
const DARK_PRIMARY_COLOR = "#4B3D10";
const ICON_SIZE = 60;
const ICON_CONTAINER_SIZE = "w-14 h-14";

const SkillIconContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className={`border rounded-md border-[${PRIMARY_COLOR}] dark:border-[${DARK_PRIMARY_COLOR}] shadow-[0px_0px_8px_2px_#F8DF91] dark:shadow-[0px_0px_8px_2px_#EFE0B2] p-4`}
  >
    {children}
  </div>
);

interface SkillItemProps {
  icon: React.ReactNode;
  label: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ icon, label }) => (
  <div className="flex flex-col gap-2 items-center justify-center">
    <SkillIconContainer>{icon}</SkillIconContainer>
    <p className="text-black dark:text-white font-semibold">{label}</p>
  </div>
);

interface ContentDisplayProps {
  activeSection: string;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ activeSection }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800)
  }, [activeSection])

  const handleSubmit = async (data: { email: string; subject: string; message: string }) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Email enviado com sucesso!");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Falha ao enviar o email. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false);
    }
  };

  if (activeSection === "contact") {
    return (
      <div className="w-full p-6 max-w-screen-md mx-auto rounded-xl shadow-md bg-white dark:bg-black border-2 border-[#B7A261] transition-opacity mb-7 duration-300">
        <h2 className="text-xl text-black dark:text-white font-bold">
          Contact
        </h2>
        <ContactForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          errorMessage={errorMessage}
        />
      </div>
    );
  }

  const contentData = {
    about: (
      <div>
        <h2 className="text-xl text-black dark:text-white font-bold">About Me</h2>
        <p className="mt-3 dark:text-white text-black font-normal">
          I entered the job market at the age of 16 in a financial company
          specializing in payroll loans. After completing my journalism degree in
          Ouro Preto, I returned to São Paulo and ended up going back to the
          financial sector at Banco BMG as a business consultant.
          <br /> <br />
          During the pandemic, I started studying programming and quickly fell in
          love with it. I learn every day, and as a front-end developer, my
          skills are constantly tested.
          <br /> <br />
          In March 2021, I had my first opportunity as a developer at Corebiz,
          where I worked until June 2022. I then took on the position of
          Specialist Developer at Maztra on a dedicated project using the VTEX IO
          platform. There, I was able to enhance my skills in ReactJS, using
          TypeScript and Next, and even some Node.js.
          <br /> <br />
          In 2024, I truly began working more frequently with back-end development
          and took on the role of Full Stack Developer within the AR&Co. projects.
        </p>

        <h2 className="text-xl text-black dark:text-white font-bold mt-5">
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <FeatureCard
            imageSrc="/front-end.jpg"
            altText="Work in computer"
            title="Web Front-End Development"
            description="With a robust proficiency in React.js, I excel at transforming design concepts into dynamic, user-friendly websites."
            isLoading={isLoading}
          />
          <FeatureCard
            imageSrc="/app-developer.jpg"
            altText="Work in phone"
            title="App Development"
            description="With expertise in React Native, I transform design concepts into high-performance, user-friendly apps."
            isLoading={isLoading}
          />
          <FeatureCard
            imageSrc="/back-end.jpg"
            altText="Back-end Development"
            title="Back-End Development"
            description="With expertise in Node.js and GraphQL, I build scalable, efficient, and high-performance back-end systems."
            isLoading={isLoading}
          />
          <FeatureCard
            imageSrc="/vtex.jpg"
            altText="VTEX Development"
            title="VTEX Development"
            description="With expertise in VTEX and e-commerce, I develop scalable, high-performing online stores."
            isLoading={isLoading}
          />
        </div>
      </div>
    ),
    experience: (
      <div>
        <h2 className="text-xl text-black dark:text-white font-bold">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <EducationCard
            years="2020 - 2022"
            title="Systems Analysis and Development"
            institution="Estácio de Sá"
          />
          <EducationCard
            years="2024"
            title="NLW Pocket: Mobile - React Native"
            institution="Rocketseat"
          />
        </div>

        <h2 className="text-xl text-black dark:text-white font-bold mt-8">
          Experience
        </h2>
        <div className="flex flex-col mt-4 gap-5">
          <ExperienceCard
            logoSrc="/reserva-1.jpg"
            altText="Logo Reserva"
            company="Reserva"
            role="Full Stack Developer"
            duration="Jun / 2022 - At the moment"
            isLoading={isLoading}
          />
          <ExperienceCard
            logoSrc="/cadastra_logo.jpg"
            altText="Logo Cadastra"
            company="Cadastra"
            role="Front-End Developer Specialist"
            duration="Jun / 2022 - At the moment"
            isLoading={isLoading}
          />
          <ExperienceCard
            logoSrc="/corebiz.jpg"
            altText="Logo Corebiz"
            company="Corebiz"
            role="Front-End Developer"
            duration="Mar / 2021 - Jun / 2022 (1 Year and 4 Months)"
            isLoading={isLoading}
          />
        </div>
      </div>
    ),
    projects: (
      <div>
        <h2 className="text-xl text-black dark:text-white font-bold">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-7">
          <ProjectCard
            href="https://github.com/felipengr/nearby"
            imageSrc="/nearby.jpg"
            altText="Nearby App"
            title="Nearby App (React Native)"
            isLoading={isLoading}
          />
          <ProjectCard
            href="https://github.com/felipengr/DT-Money"
            imageSrc="/dtMoney.jpg"
            altText="DT Money"
            title="DT Money (React + Typescript)"
            isLoading={isLoading}
          />
          <ProjectCard
            href="https://github.com/felipengr/igniteTeams"
            imageSrc="/igniteTeams.jpg"
            altText="Ignite Teams"
            title="Ignite Teams (React + Typescript)"
            isLoading={isLoading}
          />
          <ProjectCard
            href="https://github.com/felipengr/daily-diet"
            imageSrc="/dailyDiet.jpg"
            altText="Daily Diet"
            title="Daily Diet (React + Typescript)"
            isLoading={isLoading}
          />
        </div>
      </div>
    ),
    skills: (
      <div>
        <h2 className="text-xl text-black dark:text-white font-bold">Skills</h2>
        <div className="flex flex-wrap gap-6 w-full mt-9">
          <SkillItem
            icon={
              <FcAndroidOs
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={ICON_CONTAINER_SIZE}
              />
            }
            label="Android"
          />
          <SkillItem
            icon={
              <FaReact
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#61DAFB]`}
              />
            }
            label="React JS"
          />
          <SkillItem
            icon={
              <LiaNode
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#8bc500]`}
              />
            }
            label="Node Js"
          />
          <SkillItem
            icon={
              <SiNextdotjs
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#000] dark:text-white`}
              />
            }
            label="Next.js"
          />
          <SkillItem
            icon={
              <SiExpo
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#000] dark:text-white`}
              />
            }
            label="Expo"
          />
          <SkillItem
            icon={
              <GrGraphQl
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#f6009b]`}
              />
            }
            label="GraphQL"
          />
          <SkillItem
            icon={
              <FaReact
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#61DAFB]`}
              />
            }
            label="React Native"
          />
          <SkillItem
            icon={
              <FaAws
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#000] dark:text-white`}
              />
            }
            label="AWS"
          />
          <SkillItem
            icon={
              <FaHtml5
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#f26529]`}
              />
            }
            label="HTML5"
          />
          <SkillItem
            icon={
              <SiTailwindcss
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#00bcff]`}
              />
            }
            label="Tailwind CSS"
          />
          <SkillItem
            icon={
              <FaSass
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#d26999]`}
              />
            }
            label="Sass"
          />
        </div>

        <h2 className="text-xl text-black dark:text-white font-bold mt-8">
          Tools & Software
        </h2>

        <div className="flex flex-wrap gap-6 w-full mt-9">
          <SkillItem
            icon={
              <SiVtex
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#ff3365]`}
              />
            }
            label="VTEX"
          />
          <SkillItem
            icon={
              <PiFigmaLogoFill
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#f24e1e]`}
              />
            }
            label="Figma"
          />
          <SkillItem
            icon={
              <SiGoogleanalytics
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#ffae01]`}
              />
            }
            label="GA4"
          />
          <SkillItem
            icon={
              <FaGithub
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#000] dark:text-white`}
              />
            }
            label="Github"
          />
          <SkillItem
            icon={
              <FaDocker
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#086dd7]`}
              />
            }
            label="Docker"
          />
          <SkillItem
            icon={
              <SiJirasoftware
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#217af4]`}
              />
            }
            label="Jira"
          />
          <SkillItem
            icon={
              <VscAzureDevops
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#0a7adc]`}
              />
            }
            label="Azure DevOps"
          />
          <SkillItem
            icon={
              <SiGoogletagmanager
                width={ICON_SIZE}
                height={ICON_SIZE}
                className={`${ICON_CONTAINER_SIZE} text-[#8eb3f8]`}
              />
            }
            label="GTM"
          />
        </div>
      </div>
    ),
  };

  return (
    <div className="p-6 max-w-screen-md mx-auto sm:mt-4 rounded-xl mb-6 shadow-md bg-white dark:bg-black border-2 border-[#B7A261] transition-opacity duration-300">
      {contentData[activeSection as keyof typeof contentData]}
    </div>
  );
};

export default ContentDisplay;