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
    <div className="w-full flex flex-col items-start justify-center p-24 gap-11">
        <div className="ml-auto">
            <HandIcon />
        </div>
        <HeaderText label="Why choose our Token"/>
        <div className="grid grid-cols-3 gap-5 w-full">
            <div className="w-[500px] h-[500px] bg-[#f7f7fc] p-5 rounded-xl flex flex-col items-start justify-center gap-3">
                <MobilePaymentIcon />
                <Typography
                    className="text-sm font-semibold lg:text-[38px] text-[#3A3A3A] leading-[47px] w-[304px]"
                >
                    Mobile payment made easy
                </Typography>
                <Typography
                    className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[207px]"
                >
                    You can use a mobile device to pay with simple steps
                </Typography>
            </div>
            <div className="w-[500px] h-[500px] bg-[#f7f7fc] p-5 rounded-xl flex flex-col items-start justify-center gap-3">
                <FreeTFIcon />
                <Typography
                    className="text-sm font-semibold lg:text-[38px] text-[#3A3A3A] leading-[47px] w-[304px]"
                >
                    Life time free transaction
                </Typography>
                <Typography
                    className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[207px]"
                >
                    You can buy token without paying any transaction fee
                </Typography>
            </div>
            <div className="w-[500px] h-[500px] bg-[#f7f7fc] p-5 rounded-xl flex flex-col items-start justify-center gap-3">
                <SecurityIcon />
                <Typography
                    className="text-sm font-semibold lg:text-[38px] text-[#3A3A3A] leading-[47px] w-[304px]"
                >
                    Security and control over money
                </Typography>
                <Typography
                    className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[207px]"
                >
                    We provide high levels of security for all users
                </Typography>
            </div>
        </div>
    </div>
  );
};
