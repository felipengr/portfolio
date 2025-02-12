import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
}

const PRIMARY_COLOR = "#B7A261";
const DARK_PRIMARY_COLOR = "#4B3D10";

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  imageSrc,
  altText,
  title,
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div
      className={`p-6 border flex flex-col items-center justify-center border-[${PRIMARY_COLOR}] dark:border-[${DARK_PRIMARY_COLOR}] bg-[#F9F6EA] dark:bg-[#403D32] rounded-md`}
    >
      <div className="w-[309px] h-[177px] border border-black dark:border-white rounded-md relative overflow-hidden">
        <Image src={imageSrc} alt={altText} fill className="object-top" />
      </div>
      <div>
        <p className="font-bold text-black dark:text-white mt-3">{title}</p>
      </div>
    </div>
  </a>
);

export default ProjectCard;