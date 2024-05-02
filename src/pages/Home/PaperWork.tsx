import { FC } from "react";
import GradientBG from "../../components/Ui/svg/gradientBg";
import StripPatternII from "../../components/Ui/svg/strip-pattern2";
import Box from "../../components/Ui/svg/box";
import LiETH from "../../components/Ui/svg/li-eth";
import LiBTC from "../../components/Ui/svg/li-btc";
import StarIcon from "../../components/Ui/svg/star";
import { Typography } from "@material-tailwind/react";
import { Space } from "antd";
import LiStarIcon from "../../components/Ui/svg/li-star";
import { AppButton } from "../../components/Ui/Button/Button";
import { CloudDownloadOutlined } from "@ant-design/icons";


export interface PaperWorkProps {}
export const PaperWork: FC<PaperWorkProps> = () => {

  return (
    <div className="w-full flex flex-col h-full items-center justify-center relative py-28 container mx-auto">
        <div className="w-[1316px] h-[597px] rounded-2xl bg-[#081C45] p-10 flex items-start relative">
          <div className="absolute bottom-0 right-0 z-20">
            <GradientBG />
          </div>
          <div className="absolute bottom-[130px] right-[350px] z-20">
            <Box />
          </div>
          <div className="absolute top-[60px] right-[60px] z-20">
            <LiETH />
          </div>
          <div className="absolute bottom-[200px] right-[480px] z-20">
            <LiBTC />
          </div>
          <div className="absolute bottom-[200px] right-[280px] z-30">
            <StarIcon />
          </div>
          <div className="absolute top-[130px] right-[200px] z-30">
            <StarIcon />
          </div>
          <div className="absolute bottom-0 left-0">
            <StripPatternII />
          </div>

          <div className="py-5 flex flex-col gap-5">
              <div className=" flex items-center justify-center gap-2">
                    <div className="w-[140px] h-1 bg-[#FFFFFF]"></div>
                      <Typography
                          className="text-sm font-medium lg:text-[28px] text-[#ffffff] leading-[36px]"
                      >
                          White paper
                      </Typography>
              </div>
              <Typography
                  className="text-sm font-normal lg:text-[38px] text-[#ffffff] leading-[47px]"
              >
                  Read our documents
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px] w-[376px]"
              >
                  Here is our full documents that help you to understand deeply about us and our operation
              </Typography>

              <div className="flex flex-col items-start justify-center gap-10">
                <div className="flex items-center justify-center gap-32">
                  <Space size={3}>
                    <LiStarIcon />
                    <Typography
                        className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                    >
                        White Paper
                    </Typography>
                  </Space>
                  <Space size={3}>
                    <LiStarIcon />
                    <Typography
                        className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                    >
                        Terms Of Coin Sale
                    </Typography>
                  </Space>
                </div>
                <div className="flex items-center justify-center gap-32">
                  <Space size={3}>
                    <LiStarIcon />
                    <Typography
                        className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                    >
                       Privacy & Policy
                    </Typography>
                  </Space>
                  <Space size={3}>
                    <LiStarIcon />
                    <Typography
                        className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                    >
                        One Paper
                    </Typography>
                  </Space>
                </div>
              </div>

              <div className=" mt-10">
                <AppButton size="lg" variant="secondary" icon={<CloudDownloadOutlined />}>
                  Download
                </AppButton>
              </div>
          </div>
        </div>
    </div>
  );
};
