import { Typography } from "@material-tailwind/react";
import { FC } from "react";
import TeamI from "../../components/Ui/svg/team1";
import TeamII from "../../components/Ui/svg/team2";
import TeamIII from "../../components/Ui/svg/team3";


export interface TeamsProps {}
export const Teams: FC<TeamsProps> = () => {

  return (
    <div className="w-full flex flex-col items-center justify-start relative gap-5 lg:gap-7 h-[2300px] lg:h-[1600px] container mx-auto">
        <Typography
            className="text-[28px] font-bold lg:text-[28px] text-[#3754FF] leading-[24px] lg:leading-[36px] lg:w-[198px]"
        >
            Team players
        </Typography>
         <Typography
            className="text-[21px] font-normal lg:text-[51px] text-[#3A3A3A] leading-[27px] lg:leading-[61px] text-center lg:w-[645px]"
        >
            Meet our team members
        </Typography>
         <Typography
            className="text-[16px] font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[361px] lg:w-[738px] text-center"
        >
           meet the brilliant minds driving our project forward. Each member brings unique expertise and passion to the table, united by a common goal: revolutionizing the future of finance through blockchain technology. Get to know the faces behind VRINDACOIN, the visionaries shaping tomorrow's landscape.
        </Typography>
        <div className="flex flex-col lg:flex lg:flex-row items-center justify-center gap-10 px-4 lg:px-0">
            <TeamI />
            <TeamII />
            <TeamIII />
        </div>
        <Typography
            className="text-[21px] font-normal lg:text-[51px] text-[#3A3A3A] leading-[27px] lg:leading-[61px] w-[237px] lg:w-[645px] text-center"
        >
            Advisors​
        </Typography>

        <div className="mt-5 flex flex-col w-full items-center gap-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-12">
                <div className="flex flex-col items-center w-[220px]">
                    <img src="/assets/team1.png" alt="team-img" className="mb-3"/>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Charlee Mangar
                    </Typography>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        IOS Developer
                    </Typography>
                </div>
                <div className="flex flex-col items-center w-[220px]">
                    <img src="/assets/team2.png" alt="team-img" className="mb-3"/>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Charlee Mangar
                    </Typography>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Technical writer
                    </Typography>
                </div>
                <div className="flex flex-col items-center w-[220px]">
                    <img src="/assets/team3.png" alt="team-img" className="mb-3"/>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Charlee Mangar
                    </Typography>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Crypto expert
                    </Typography>
                </div>
                <div className="flex flex-col items-center w-[220px]">
                    <img src="/assets/team1.png" alt="team-img" className="mb-3"/>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Charlee Mangar
                    </Typography>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        IOS Developer
                    </Typography>
                </div>
                <div className="flex flex-col items-center w-[220px]">
                    <img src="/assets/team2.png" alt="team-img" className="mb-3"/>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Charlee Mangar
                    </Typography>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Technical writer
                    </Typography>
                </div>
                <div className="flex flex-col items-center w-[220px]">
                    <img src="/assets/team3.png" alt="team-img" className="mb-3"/>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Charlee Mangar
                    </Typography>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Crypto expert
                    </Typography>
                </div>
            </div>
            
            <div className="flex items-center gap-9">
                <div className="flex flex-col items-center w-[220px]">
                    <img src="/assets/team4.png" alt="team-img" className="mb-3"/>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Charlee Mangar
                    </Typography>
                    <Typography
                        className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[738px] text-center"
                    >
                        Software Engineer
                    </Typography>
                </div>
            </div>
        </div>
    </div>
  );
};
