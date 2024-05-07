import { FC } from "react";
import PatternBG from "../../components/Ui/svg/patternBg";
import LogoIcon from "../../components/Ui/svg/logo";
import TokenTIcon from './../../components/Ui/svg/ttoken';
import MCapIcon from "../../components/Ui/svg/mcap";
import Registered from "../../components/Ui/svg/register";
import GradientBG from "../../components/Ui/svg/gradientBg";
import StarIcon from "../../components/Ui/svg/star";
import MTokenTIcon from "../../components/Ui/svg/m-ttoken";
import MMCapIcon from "../../components/Ui/svg/m-mcap";
import MRegistered from "../../components/Ui/svg/m-register";
import MPatternBG from "../../components/Ui/svg/m-patternBg";

export interface MarKetCapProps {}
export const MarKetCap: FC<MarKetCapProps> = () => {
  return (
    <div className='container mx-auto'>
      <div className='relative w-full h-[900px] lg:h-[600px] flex items-start flex-col justify-center z-40 container mx-auto'>
        <div className='absolute top-[-127px] z-[-1] left-0 hidden lg:block'>
          <PatternBG />
        </div>
        <div className='absolute top-[-27px] z-[-100] left-0 lg:hidden'>
          <MPatternBG />
        </div>
        <div className='absolute lg:top-[-400px] lg:left-[10%] z-[-100] hidden lg:block'>
          <GradientBG />
        </div>
        <div className='absolute top-[-100px] lg:top-[-150px] left-[40%] z-[-100]'>
          <StarIcon />
        </div>
        <div className='absolute top-[10%] left-[33%] lg:top-[35px] lg:left-[50%]'>
          <LogoIcon />
        </div>
        <div className='absolute top-[100px] left-20 hidden flex-col lg:flex-row lg:flex gap-[35px]'>
          <TokenTIcon />
          <MCapIcon />
          <Registered />
        </div>
        <div className='absolute top-[20%] left-0 px-4 flex-col flex gap-10 lg:hidden'>
          <MTokenTIcon />
          <MMCapIcon />
          <MRegistered />
        </div>
      </div>
    </div>
  );
};
