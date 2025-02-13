import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

interface SkillItemProps {
  icon: React.ReactNode;
  label: string;
  isLoading?: boolean;
}

export const SkillItem: React.FC<SkillItemProps> = ({ icon, label, isLoading = false }) => (
  <div className="flex flex-col gap-2 items-center justify-center">
    {isLoading ? (
      <Skeleton circle width={60} height={60} />
    ) : (
      <div
        className={`border rounded-md border-[#B7A261] dark:border-[#4B3D10] shadow-[0px_0px_8px_2px_#F8DF91] dark:shadow-[0px_0px_8px_2px_#EFE0B2] p-3 sm:p-4 `}
      >
        {icon}
      </div>
    )}
    <p className="text-black dark:text-white font-semibold">
      {isLoading ? <Skeleton width={80} /> : label}
    </p>
  </div>
);