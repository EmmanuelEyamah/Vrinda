import { Typography } from "@material-tailwind/react";
import { FC } from "react";
import MapBg from "../../components/Ui/svg/map";
import Globe from "../../components/Ui/svg/glope";
import CheckIcon from "../../components/Ui/svg/r-check";
import RoadDot from "../../components/Ui/svg/r-dot";


export interface RoadmapProps {}
export const Roadmap: FC<RoadmapProps> = () => {

  return (
    <div className="w-full h-[1000px] flex flex-col items-center justify-center relative gap-5" id="roadmap">
         <Typography
            className="text-sm font-bold lg:text-[28px] text-[#3754FF] leading-[36px] w-[250px]"
        >
            LAUNCH PLAN
        </Typography>
         <Typography
            className="text-sm font-normal lg:text-[51px] text-[#3A3A3A] leading-[61px] w-[645px]"
        >
            Our Strategy & Project Plan
        </Typography>
         <Typography
            className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
        >
            Welcome to the Vrindacoin ICO Launch Plan! <br/>
            We are excited to announce the launch of Vrindacoin, a revolutionary cryptocurrency set to transform the landscape of decentralized finance (DeFi). Below is the detailed plan for our ICO launch: <br/>
            <span className="text-[#3754FF]">Total Coins: 0.288 Million (2,88,000) Total Collection: 14,73,30,000 INR</span>
        </Typography>

        <div className="w-[1460px] flex items-center justify-center mt-[75px] relative">
            <div className="relative">
                <MapBg />
            </div>
            <div className="absolute top-[-80px] right-0">
                <Globe />
            </div>

            <div className="w-[300px] flex flex-col items-center gap-3 absolute left-[130px] top-[-70px]">
                <div className="border-b-2 border-[#3754FF] py-1">
                    25 April - 30 April
                </div>
                <CheckIcon />
                <div className="w-[250px] h-[150px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                <Typography
                    className="text-sm font-bold lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[198px]"
                >
                    PHASE 1
                </Typography>
                <ul className="mt-3">
                    <li>Coin Supply: 25,000</li>
                    <li>Launch Price: $2 | INR 180</li>
                    <li>Collection: 45,00,000 INR</li>
                </ul>
                </div>
            </div>
            <div className="w-[300px] flex flex-col items-center gap-3 absolute left-[530px] top-[-70px]">
                <div className="border-b-2 border-[#3754FF] py-1">
                    1 may - 7 may
                </div>
                <RoadDot />
                <div className="w-[250px] h-[150px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                <Typography
                    className="text-sm font-bold lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[198px]"
                >
                    PHASE 2
                </Typography>
                <ul className="mt-3">
                    <li>Coin Supply: 20,000</li>
                    <li>Launch Price: $3 | INR 270</li>
                    <li>Collection: 1,080,000 INR</li>
                </ul>
                </div>
            </div>
            <div className="w-[300px] flex flex-col items-center gap-3 absolute right-[250px] top-[-70px]">
                <div className="border-b-2 border-[#3754FF] py-1">
                    Sep 16 - Sep 30
                </div>
                <RoadDot />
                <div className="w-[250px] h-[150px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                <Typography
                    className="text-sm font-bold lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[198px]"
                >
                    PHASE 3
                </Typography>
                <ul className="mt-3">
                    <li>Coin Supply: 60,000</li>
                    <li>Launch Price: $4 | INR 360</li>
                    <li>Collection: 2,160,000 INR</li>
                </ul>
                </div>
            </div>
            <div className="w-[300px] flex flex-col items-center gap-3 absolute left-[330px] bottom-[-180px]">
                <div className="border-b-2 border-[#3754FF] py-1">
                    8 may - 14 may
                </div>
                <RoadDot />
                <div className="w-[250px] h-[150px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                <Typography
                    className="text-sm font-bold lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[198px]"
                >
                    PHASE 4
                </Typography>
                <ul className="mt-3">
                    <li>Coin Supply: 83,000</li>
                    <li>Launch Price: $9 | INR 810</li>
                    <li>Collection: c</li>
                </ul>
                </div>
            </div>
            <div className="w-[300px] flex flex-col items-center gap-3 absolute right-[430px] bottom-[-180px]">
                <div className="border-b-2 border-[#3754FF] py-1">
                    15 may - 30 may
                </div>
                <RoadDot />
                <div className="w-[250px] h-[150px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                <Typography
                    className="text-sm font-bold lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[198px]"
                >
                    PHASE 5
                </Typography>
                <ul className="mt-3">
                    <li>Coin Supply: 80,000</li>
                    <li>Launch Price: $6 | INR 540</li>
                    <li>Collection: 4,223,300,000 INR</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  );
};
