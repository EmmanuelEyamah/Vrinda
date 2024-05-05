import { FC } from "react";
import { HeaderText } from "../../components/Ui/HeaderText/HeaderText";
import { Typography } from "@material-tailwind/react";
import MobilePaymentIcon from "../../components/Ui/svg/mobile-payment";
import FreeTFIcon from "../../components/Ui/svg/free-tf";
import SecurityIcon from "../../components/Ui/svg/security";
import HandIcon from "../../components/Ui/svg/hand";


export interface WhyUsProps {}
export const WhyUs: FC<WhyUsProps> = () => {

  return (
    <div className="w-full flex flex-col items-start mt-20 lg:mt-0 justify-center p-4 lg:p-24 gap-11 container mx-auto">
        <div className="ml-auto hidden lg:block">
            <HandIcon />
        </div>
        <HeaderText label="Why choose our Token"/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
            <div className="w-[350px] h-[400px] bg-[#f7f7fc] p-5 rounded-xl flex flex-col items-start justify-center gap-3">
                <MobilePaymentIcon />
                <Typography
                    className="text-[28px] font-semibold lg:text-[30px] text-[#3A3A3A] leading-[47px] w-[304px]"
                >
                    Mobile payment made easy
                </Typography>
                <Typography
                    className="font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[207px]"
                >
                    You can use a mobile device to pay with simple steps
                </Typography>
            </div>
            <div className="w-[350px] h-[400px] bg-[#f7f7fc] p-5 rounded-xl flex flex-col items-start justify-center gap-3">
                <FreeTFIcon />
                <Typography
                    className="text-[28px]  font-semibold lg:text-[30px] text-[#3A3A3A] leading-[47px] w-[304px]"
                >
                    Life time free transaction
                </Typography>
                <Typography
                    className="font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[207px]"
                >
                    You can buy token without paying any transaction fee
                </Typography>
            </div>
            <div className="w-[350px] h-[400px] bg-[#f7f7fc] p-5 rounded-xl flex flex-col items-start justify-center gap-3">
                <SecurityIcon />
                <Typography
                    className="text-[28px]  font-semibold lg:text-[30px] text-[#3A3A3A] leading-[47px] w-[304px]"
                >
                    Security and control over money
                </Typography>
                <Typography
                    className="font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[207px]"
                >
                    We provide high levels of security for all users
                </Typography>
            </div>
        </div>
    </div>
  );
};
