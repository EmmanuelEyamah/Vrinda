import { FC } from "react";
import SateliteIcon from "../../components/Ui/svg/satellite";
import GradientDotBG from "../../components/Ui/svg/gradient-dot-bg";
import BGDotGra from "../../components/Ui/svg/bg-dot-gradient";
import OutlineMail from "../../components/Ui/svg/outlineMail";
import OutlinedNote from "../../components/Ui/svg/outlineNote";
import OutlineMessage from "../../components/Ui/svg/outlineMessage";
import OutlineGuard from "../../components/Ui/svg/outlineGuard";
import OutlinedWifi from "../../components/Ui/svg/wifi";
import { Typography } from "@material-tailwind/react";
import { AppButton } from "../../components/Ui/Button/Button";
import { Space } from "antd";
import Appstore from "../../components/Ui/svg/appstore";
import PlayStore from "../../components/Ui/svg/playstore";
import PoweredBy from "../../components/Ui/svg/poweredby";
import QrScan from "../../components/Ui/svg/qr-scan";
import PhoneScan from "../../components/Ui/svg/scanwph";

export interface CommunityProps {}
export const Community: FC<CommunityProps> = () => {

  return (
    <div className="w-full h-full">
        <div className="w-full h-[800px] bg-[#081C45] relative pt-40 lg:pt-0 overflow-hidden flex flex-col items-center lg:justify-center gap-6">
          <div className="absolute top-0 left-0 hidden lg:block">
            <SateliteIcon />
          </div>
          <div className="absolute top-0 lg:right-0 hidden lg:block">
            <GradientDotBG />
          </div>
          <div className="absolute top-[20%] lg:top-[50%] right-0 lg:right-[320px]">
            <BGDotGra />
          </div>
          <div className="absolute top-[30%] lg:top-[70%] left-10 lg:right-[230px]">
            <OutlineMail />
          </div>
          <div className="absolute bottom-[40px] left-[230px]">
            <OutlinedNote />
          </div>
          <div className="absolute bottom-[220px] left-[430px]">
            <OutlineMessage />
          </div>
          <div className="absolute left-[50%] top-[-20px]">
            <OutlineGuard />
          </div>
          <div className="absolute bottom-[270px] lg:bottom-[-20px] right-[30%]">
            <OutlinedWifi />
          </div>

          <Typography
              className="text-[38px] font-bold lg:text-[51px] text-[#FFFFFF] w-[361px] lg:w-[945px] leading-[47px] lg:leading-[61px] text-center v"
          >
            Welcome to The Official Vrinda Community
          </Typography>
          <Typography
              className="text-[16px] font-normal lg:text-[21px] text-[#FFFFFF] w-[361px] lg:w-[873px] leading-[27px] text-center z-50"
          >
            We're more than just investors – we're a dynamic community united by our shared vision for a decentralized future. Connect with fellow enthusiasts, engage in lively discussions, and stay up-to-date with the latest news and developments surrounding the Vridacoin ICO. Whether you're a seasoned crypto aficionado or just beginning your journey, this is your space to learn, share ideas, and be part of something revolutionary. Join us and together, let's shape the future of finance with Vridacoin.
          </Typography>

          <div className="flex items-center justify-center gap-5 w-[600px] z-50">
            <AppButton size="lg" variant="secondary">
              Join
            </AppButton>
            <AppButton size="lg" variant="accent">
              Explore
            </AppButton>
          </div>
        </div>
        <div className="w-full h-[2100px] relative overflow-hidden flex flex-col items-center justify-start gap-12 lg:gap-20 pt-11 lg:pt-40 container mx-auto">
          <div className="w-full flex flex-col lg:flex lg:flew-row items-center justify-center gap-7 lg:gap-52">
            <Typography
                className="text-[21px] font-medium lg:text-[38px] text-[#3A3A3A] w-[282px] lg:w-[528px] leading-[27px] lg:leading-[47px]"
            >
              About the Official Vrindacoin Community
            </Typography>
            <Typography
                className="font-normal text-[16px] text-[#3A3A3A] w-[361px] lg:w-[720px] leading-[24px]"
            >
              Vrinda is a revolutionary social media-integrated cryptocurrency exchange platform designed to bridge the gap between traditional finance and the world of decentralized finance (DeFi). Unlike other platforms, Vrinda prioritizes user experience and accessibility, making it perfect for both beginners and experienced crypto users. This exchange platform is different from other exchange platforms as it tries to lighten the steep learning curve and difficult user experience of users using the usual cryptocurrency exchange platforms, DEx or CEx.
            </Typography>
          </div>
          <div className="w-full flex flex-col lg:flex lg:flew-row items-center justify-center gap-7 lg:gap-52">
            <Typography
                className="text-[21px] font-medium lg:text-[38px] text-[#3A3A3A] w-[282px] lg:w-[528px] leading-[27px] lg:leading-[47px]"
            >
              Why You Should Join Us
            </Typography>
            <Typography
                className="font-normal text-[16px] text-[#3A3A3A] w-[361px] lg:w-[720px] leading-[24px]"
            >
              Be the first to access new official messages and news <br />
              Get exclusive content and access to exclusive events <br />
              Enjoy great tools to engage with other community members <br />
              Be part of something bigger and be in a better seat to make your mark <br />
              In the future, we will make private separate groups with for example to co-develop stuff or groups with influencers that get the news earlier than others <br />
            </Typography>
          </div>

          <div className="w-full lg:w-[1050px] h-[900px] lg:h-[405px] bg-[#F7F7FC] p-5 lg:p-7 mt-20 flex-col flex lg:flex lg:flex-row items-start justify-center">
            <div className="w-full lg:w-[60%] flex flex-col gap-4 lg:gap-16 mb-8 lg:mb-0">
              <Typography
                  className="font-medium text-[38px] text-[#3A3A3A] w-[316px] lg:w-[582px] leading-[47px]"
              >
                Keep up with The Official Vrinda Community on the go.
              </Typography>

              <div className="flex flex-col gap-2 items-start">
                <Typography
                    className="font-normal text-[21px] text-[#3A3A3A] leading-[27px]"
                >
                  Download app
                </Typography>
                <Space className="flex-col flex lg:flex lg:flex-row items-center justify-center">
                  <Appstore />
                  <PlayStore />
                </Space>
              </div>

              <PoweredBy />
            </div>
            <div className="w-full lg:w-[40%] border-t-4 lg:border-l-4 border-gray-200 pt-10 lg:pl-2 flex flex-col items-center justify-center gap-2">
              <QrScan />
              <PhoneScan />
            </div>
          </div>
        </div>
    </div>
  );
};
