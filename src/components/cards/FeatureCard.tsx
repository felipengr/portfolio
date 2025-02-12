import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const PRIMARY_COLOR = "#B7A261";
const SECONDARY_COLOR = "#FDF4F4";
const DARK_SECONDARY_COLOR = "#60594B";

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
}) => (
  <div
    className={`bg-[${SECONDARY_COLOR}] dark:bg-[${DARK_SECONDARY_COLOR}] border-2 border-[${PRIMARY_COLOR}] rounded-lg shadow-md flex overflow-hidden`}
  >
    <div className="w-[116px] flex-shrink-0 relative">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        style={{ objectFit: "cover" }}
        className="object-top"
      />
    </div>
    <div className="p-4 flex flex-col justify-between h-full">
      <div>
        <h3 className="font-bold text-lg text-black dark:text-white">{title}</h3>
      </div>
      <div>
        <p className="text-black mt-3 dark:text-white">{description}</p>
      </div>
    </div>
  </div>
);

export default FeatureCard;