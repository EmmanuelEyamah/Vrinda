import { FC } from "react";
import PatternBG from "../../components/Ui/svg/patternBg";
import LogoIcon from "../../components/Ui/svg/logo";
import TokenTIcon from './../../components/Ui/svg/ttoken';
import MCapIcon from "../../components/Ui/svg/mcap";
import Registered from "../../components/Ui/svg/register";
import GradientBG from "../../components/Ui/svg/gradientBg";
import StarIcon from "../../components/Ui/svg/star";

export interface MarKetCapProps {}
export const MarKetcap: FC<MarKetCapProps> = () => {

  return (
    <div className="relative w-full bg-gradient-to-b from-[#F7F7FC] to-[#FFFFFF] h-[500px] flex items-start flex-col justify-normal z-50">
       <div className="absolute top-[-127px] z-[-1] left-0">
            <PatternBG />
       </div>
       <div className="absolute top-[-370px] left-[3%] z-[-100]">
            <GradientBG />
       </div>
       <div className="absolute top-[-150px] left-[20%] z-[-100]">
            <StarIcon />
       </div>
       <div className="absolute top-[15%] left-[45%]">
            <LogoIcon />
       </div>
       <div className="absolute top-[30%] left-[18%] flex gap-[55px]">
            <TokenTIcon />
            <MCapIcon />
            <Registered />
       </div>
    </div>
  );
};
