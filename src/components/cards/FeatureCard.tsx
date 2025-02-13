import React from "react";
import Image from "next/image";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

interface FeatureCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  isLoading?: boolean;
  priority: boolean;
}

const PRIMARY_COLOR = "#B7A261";
const SECONDARY_COLOR = "#FDF4F4";
const DARK_SECONDARY_COLOR = "#60594B";

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  isLoading = false,
  priority = false,
}) => {
  return (
    <div
      className={`bg-[${SECONDARY_COLOR}] dark:bg-[${DARK_SECONDARY_COLOR}] border-2 border-[${PRIMARY_COLOR}] rounded-lg shadow-md flex overflow-hidden`}
    >
      <div className="w-[116px] flex-shrink-0 relative">
        {isLoading ? (
          <Skeleton width={116} height={179} />
        ) : (
          <Image
            src={imageSrc}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, 116px"
            style={{ objectFit: "cover" }}
            className="object-top"
            priority={priority}
          />
        )}
      </div>
      <div className="p-4 flex flex-col justify-start h-full">
        <div>
          {isLoading ? (
            <Skeleton width={150} />
          ) : (
            <h3 className="font-bold text-lg text-black dark:text-white">{title}</h3>
          )}
        </div>
        <div>
          {isLoading ? (
            <>
              <Skeleton width={200} />
              <Skeleton width={150} />
            </>
          ) : (
            <p className="text-black mt-3 dark:text-white">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;