import { Typography } from "@material-tailwind/react";
import { FC } from "react";
import Disclaimer from "../../components/Ui/svg/disclamier";
import { MoreQA } from "../Home/MoreQa";

export interface LegalsProps {}
export const Legals: FC<LegalsProps> = () => {

  return (
    <div className="w-full h-full container mx-auto">
        <div className="p-20">
          <div className="w-full rounded-bl-2xl rounded-br-2xl h-[600px] bg-gradient-to-b from-[#FFFFFF] to-[#F7F7FC] relative overflow-hidden flex flex-col items-center justify-center gap-6">
            <Typography
                className="text-sm font-bold lg:text-[51px] text-[#3754FF] w-[945px] leading-[61px] text-center"
            >
              Disclaimer
            </Typography>
            <Typography
                className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] w-[945px] leading-[27px] text-center"
            >
              Last updated march 24, 2024
            </Typography>
            <Disclaimer />
          </div>
        </div>

        <div className="w-full h-[400px] flex flex-col items-start p-20">
          <Typography
              className="text-sm font-normal lg:text-[28px] text-[#3A3A3A] w-[945px] leading-[38px] mb-5"
          >
            A personal affiliate disclosure by Vrindacoin
          </Typography>
          <Typography
              className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[864px] leading-[24px]"
          >
            We may be an affiliate for products that we recommend. If you purchase those items through links supplied by us, we may earn a commission. You will not pay more when buying a product through our links. In fact, we oftentimes can negotiate a lower rate (or bonuses) not available elsewhere due to our good standing and connections. Plus, when you order through our links, it helps us to continue to offer you lots of free stuff and support this Website. Also keep in mind that we are not financial experts. We’re just as interested in Bitcoins the same as you are. Our advice isn’t based on any academic knowledge and it’s our own uneducated opinion. Any decisions you make about whether or not to buy, invest, sell or promote Bitcoin are your own responsibility. Thank you in advance for taking the time to read this and for your support. ~Vrindacoin
          </Typography>
        </div>

        <MoreQA />
    </div>
  );
};
