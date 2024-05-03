import { FC } from "react";
import PatternBGII from "../svg/patternBGII";
import { Input, Typography } from "@material-tailwind/react";
import { Space } from "antd";
import { AppButton } from "../Button/Button";
import { ArrowUpOutlined } from "@ant-design/icons";
import MPatternBGII from "../svg/m-patternBGII";


export interface NewsLetterProps {}
export const NewsLetter: FC<NewsLetterProps> = () => {

  return (
    <div className="container mx-auto">

        <div className="relative w-full flex items-center justify-start lg:items-center lg:justify-center flex-col gap-8 z-20 h-[440px]">
            <div className="absolute top-[-127px] z-[-1] left-0 hidden lg:block">
                <PatternBGII />
            </div>
            <div className="absolute top-[-67px] z-[-1] left-0 lg:hidden">
                <MPatternBGII />
            </div>

            <Typography
                className="text-[21px] font-normal lg:text-[51px] text-[#ffffff] leading-[27px] lg:leading-[61px]"
            >
                Don't miss out, Stay updated
            </Typography>
            <Space size={10} className="flex flex-col lg:flex lg:flex-row">
                <div className="w-[301px] lg:w-[426px]">
                    <Input size="lg" label="Enter email address" crossOrigin={undefined} className="bg-white"/>
                </div>
                <div>
                    <AppButton size="lg" variant="secondary" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>}>
                        Subscribe
                    </AppButton>
                </div>
            </Space>
            <Typography
                className="text-[16px] font-normal lg:text-[16px] text-[#ffffff] leading-[24px] w-[361px] lg:w-[522px] text-center lg:text-left"
            >
                Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally
            </Typography>

        </div>
    </div>
  );
};
