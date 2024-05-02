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
        <div className="w-full h-[800px] bg-[#081C45] relative overflow-hidden flex flex-col items-center justify-center gap-6">
          <div className="absolute top-0 left-0">
            <SateliteIcon />
          </div>
          <div className="absolute top-0 right-0">
            <GradientDotBG />
          </div>
          <div className="absolute top-[50%] right-[320px]">
            <BGDotGra />
          </div>
          <div className="absolute top-[70%] right-[230px]">
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
          <div className="absolute bottom-[-20px] right-[30%]">
            <OutlinedWifi />
          </div>

          <Typography
              className="text-sm font-bold lg:text-[51px] text-[#FFFFFF] w-[945px] leading-[61px] text-center"
          >
            Welcome to The Official Vrinda Community
          </Typography>
          <Typography
              className="text-sm font-normal lg:text-[21px] text-[#FFFFFF] w-[873px] leading-[27px] text-center"
          >
            We're more than just investors – we're a dynamic community united by our shared vision for a decentralized future. Connect with fellow enthusiasts, engage in lively discussions, and stay up-to-date with the latest news and developments surrounding the Vridacoin ICO. Whether you're a seasoned crypto aficionado or just beginning your journey, this is your space to learn, share ideas, and be part of something revolutionary. Join us and together, let's shape the future of finance with Vridacoin.
          </Typography>

          <div className="flex items-center justify-center gap-5 w-[600px]">
            <AppButton size="lg" variant="secondary">
              Join
            </AppButton>
            <AppButton size="lg" variant="accent">
              Explore
            </AppButton>
          </div>
        </div>
        <div className="w-full h-[1400px] relative overflow-hidden flex flex-col items-center justify-start gap-20 pt-40">
          <div className="w-full flex items-center justify-center gap-52">
            <Typography
                className="text-sm font-medium lg:text-[38px] text-[#3A3A3A] w-[528px] leading-[47px]"
            >
              About the Official Vrindacoin Community
            </Typography>
            <Typography
                className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[720px] leading-[24px]"
            >
              Vrinda is a revolutionary social media-integrated cryptocurrency exchange platform designed to bridge the gap between traditional finance and the world of decentralized finance (DeFi). Unlike other platforms, Vrinda prioritizes user experience and accessibility, making it perfect for both beginners and experienced crypto users. This exchange platform is different from other exchange platforms as it tries to lighten the steep learning curve and difficult user experience of users using the usual cryptocurrency exchange platforms, DEx or CEx.
            </Typography>
          </div>
          <div className="w-full flex items-center justify-center gap-52">
            <Typography
                className="text-sm font-medium lg:text-[38px] text-[#3A3A3A] w-[528px] leading-[47px]"
            >
              Why You Should Join Us
            </Typography>
            <Typography
                className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[720px] leading-[24px]"
            >
              Be the first to access new official messages and news <br />
              Get exclusive content and access to exclusive events <br />
              Enjoy great tools to engage with other community members <br />
              Be part of something bigger and be in a better seat to make your mark <br />
              In the future, we will make private separate groups with for example to co-develop stuff or groups with influencers that get the news earlier than others <br />
            </Typography>
          </div>

          <div className="w-[1050px] h-[405px] bg-[#F7F7FC] p-7 mt-20 flex items-start justify-center">
            <div className="w-[60%] flex flex-col gap-16">
              <Typography
                  className="text-sm font-medium lg:text-[38px] text-[#3A3A3A] w-[582px] leading-[47px]"
              >
                Keep up with The Official Vrinda Community on the go.
              </Typography>

              <div className="flex flex-col gap-2 items-start">
                <Typography
                    className="text-sm font-normal lg:text-[21px] text-[#3A3A3A] leading-[27px]"
                >
                  Download app
                </Typography>
                <Space>
                  <Appstore />
                  <PlayStore />
                </Space>
              </div>

              <PoweredBy />
            </div>
            <div className="w-[40%] border-l-4 border-gray-200 pl-2 flex flex-col items-center justify-center gap-2">
              <QrScan />
              <PhoneScan />
            </div>
          </div>
        </div>
    </div>
  );
};
