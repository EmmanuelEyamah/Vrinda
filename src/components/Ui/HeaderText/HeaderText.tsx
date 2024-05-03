import { Typography } from "@material-tailwind/react";
import { FC } from "react";

export interface HeaderTextProps {
  label?: string
}
export const HeaderText: FC<HeaderTextProps> = ({ label }) => {

  return (
    <div className="w-[510px] flex items-center justify-start gap-2">
        <div className="w-[50px] lg:w-[140px] h-1 bg-[#3754FF]"></div>
        <Typography
            className="text-sm font-medium lg:text-[28px] text-[#3A3A3A] leading-[36px]"
        >
          {label}
        </Typography>
    </div>
  );
};
