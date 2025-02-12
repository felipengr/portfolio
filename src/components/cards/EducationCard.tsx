import React from "react";

interface EducationCardProps {
  years: string;
  title: string;
  institution: string;
}

const PRIMARY_COLOR = "#B7A261";

const EducationCard: React.FC<EducationCardProps> = ({
  years,
  title,
  institution,
}) => (
  <div className={`border-2 rounded-md border-[${PRIMARY_COLOR}] p-5`}>
    <p className="text-black dark:text-white">{years}</p>
    <p className="font-bold text-black dark:text-white">{title}</p>
    <p className="text-black dark:text-white">{institution}</p>
  </div>
);

export default EducationCard;