import React from "react";
import Image from "next/image";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

interface ExperienceCardProps {
  logoSrc: string;
  altText: string;
  company: string;
  role: string;
  duration: string;
  isLoading?: boolean;
}

const PRIMARY_COLOR = "#B7A261";

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logoSrc,
  altText,
  company,
  role,
  duration,
  isLoading = false,
}) => (
  <div className={`flex items-center justify-start border-2 border-[${PRIMARY_COLOR}] rounded-md p-5`}>
    <div className={`w-[88px] h-[88px] border border-[${PRIMARY_COLOR}] rounded-md relative overflow-hidden`}>
      {isLoading ? (
        <Skeleton circle width={88} height={88} />
      ) : (
        <Image 
            src={logoSrc} 
            alt={altText} 
            fill 
            sizes="(max-width: 768px) 100vw, 88px"
            style={{ objectFit: "cover" }} 
            className="object-top" 
        />
      )}
    </div>

    <div className="flex flex-col">
      {isLoading ? (
        <>
          <Skeleton width={120} />
          <Skeleton width={150} />
          <Skeleton width={100} />
        </>
      ) : (
        <>
          <p className="text-black ml-5 dark:text-white">
            <strong>Company:</strong> {company}
          </p>
          <p className="text-black ml-5 dark:text-white">
            <strong>Role:</strong> {role}
          </p>
          <p className="text-black ml-5 dark:text-white">
            <strong>Duration:</strong> {duration}
          </p>
        </>
      )}
    </div>
  </div>
);

export default ExperienceCard;