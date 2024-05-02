import { FC } from "react";
import PatternBGII from "../svg/patternBGII";
import StripPatternIII from "../svg/strip-pattern3";
import { Input, Typography } from "@material-tailwind/react";
import { Space } from "antd";
import { AppButton } from "../Button/Button";
import { ArrowUpOutlined } from "@ant-design/icons";


export interface NewsLetterProps {}
export const NewsLetter: FC<NewsLetterProps> = () => {

  return (
    <div className="relative w-full bg-[#3754FF] h-[450px] flex items-center justify-center flex-col gap-8 z-50">
       <div className="absolute top-[-127px] z-[-1] left-0">
            <PatternBGII />
        </div>
       <div className="absolute bottom-0 left-0 z-10">
            <StripPatternIII />
        </div>

        <Typography
            className="text-sm font-normal lg:text-[51px] text-[#ffffff] leading-[61px]"
        >
            Don't miss out, Stay updated
        </Typography>
        <Space size={10}>
            <div className="w-[426px]">
                <Input size="lg" label="Enter email address" crossOrigin={undefined} className="bg-white"/>
            </div>
            <div>
                <AppButton size="lg" variant="secondary" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>}>
                    Subscribe
                </AppButton>
            </div>
        </Space>
        <Typography
            className="text-sm font-normal lg:text-[16px] text-[#ffffff] leading-[24px] w-[522px]"
        >
            Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally
        </Typography>

    </div>
  );
};
