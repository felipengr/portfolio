import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  logoSrc: string;
  altText: string;
  company: string;
  role: string;
  duration: string;
}

const PRIMARY_COLOR = "#B7A261";

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logoSrc,
  altText,
  company,
  role,
  duration,
}) => (
  <div className={`flex items-center justify-start border-2 border-[${PRIMARY_COLOR}] rounded-md p-5`}>
    <div className={`w-[88px] h-[88px] border border-[${PRIMARY_COLOR}] rounded-md relative overflow-hidden`}>
      <Image src={logoSrc} alt={altText} fill className="object-top" />
    </div>

    <div className="flex flex-col">
      <p className="text-black ml-5 dark:text-white">
        <strong>Company:</strong> {company}
      </p>
      <p className="text-black ml-5 dark:text-white">
        <strong>Role:</strong> {role}
      </p>
      <p className="text-black ml-5 dark:text-white">
        <strong>Duration:</strong> {duration}
      </p>
    </div>
  </div>
);

export default ExperienceCard;
