import { FC } from "react";
import HeaderBG from "../../components/Ui/svg/headerBg";
import { Typography } from "@material-tailwind/react";
import TechPIcon from "../../components/Ui/svg/techp";
import CryptoNewsIcon from "../../components/Ui/svg/crytonews";
import BtistIcon from "../../components/Ui/svg/bitconist";
import BcrytoIcon from "../../components/Ui/svg/bcryto";
import BcrytoIcon2 from "../../components/Ui/svg/bcryto2";
import CoinDeskIcon from "../../components/Ui/svg/coindesk";
import "../../index.css"
import FeatureImg from "../../components/Ui/svg/feactureImg";
import { HeaderText } from "../../components/Ui/HeaderText/HeaderText";
import { Space } from "antd";
import SIcon from "../../components/Ui/svg/scoin";
import BoltIcon from "../../components/Ui/svg/boltcoin";
import { AppButton } from "../../components/Ui/Button/Button";
import { ArrowUpOutlined } from "@ant-design/icons";
import PlayBtnIcon from "../../components/Ui/svg/playbtn";

export interface FeaturedProps {}
export const Featured: FC<FeaturedProps> = () => {

  return (
    <div className="w-full flex flex-col items-center justify-center relative container mx-auto">
        <HeaderBG />
        <Typography
            className="text-sm font-bold lg:text-[51px] mb-1 lg:mb-4 text-[#3754FF] leading-[61px] absolute lg:left-[32%] top-11 mt-2"
        >
            Vrinda coin featured In
        </Typography>
        <div className="flex w-full gap-10 items-center justify-center">
            <TechPIcon />
            <CryptoNewsIcon />
            <BtistIcon />
            <BcrytoIcon />
            <BcrytoIcon2 />
            <CoinDeskIcon />
        </div>

        <div className="bg-[#F7F7FC] lg:w-[1250px] h-[730px] rounded-lg mt-[120px] shadow-xl flex lg:items-start px-3 relative lg:py-10">
            <div className="w-1/2 p-5 flex flex-col gap-[40px]">
                <div className="flex flex-col gap-2">
                    <Space size={0}>
                        <HeaderText label="Introducing Vrinda coin"/>
                        <SIcon />
                    </Space>
                    <Typography
                        className="text-sm font-normal lg:text-[25px]  text-[#3A3A3A] leading-[36px] w-[629px]"
                    >
                        We’ve built a cryptocurrency exchange platform designed to bridge the gap between traditional finance and the world of decentralized finance (DeFi)
                    </Typography>
                </div>
                <div className="flex flex-col gap-2">
                    <Space>
                        <Typography
                            className="text-sm font-normal lg:text-[28px]  text-[#3754FF] leading-[36px]"
                        >
                            Who we are
                        </Typography>
                        <BoltIcon />
                    </Space>
                    <Typography
                        className="text-sm font-normal lg:text-[16px]  text-[#3A3A3A] leading-[24px] w-[548px]"
                    >
                        VRINDA is a 100% pre-scratched cryptome There are 1 Million Minutes, and 60% of them can be yours (60% - ICO) Utility & security token (appliezs to all transactions and gives a monthly dividend) <br />
                        Iko is a 100% pre-scratched cryptome There are 1 Million Minutes, and 60% of them can be yours (60% - ICO) Utility & security token (applies to all transactions and gives a monthly dividend) <br />
                        Iko is a 100% pre-scratched cryptome There are 1 Million Minutes, and 60% of them can be yours (60% - ICO).
                    </Typography>
                </div>

                <Space size={50}>
                    <AppButton size="lg" variant="secondary" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>}>
                        Buy token 
                    </AppButton>
                    <div className="flex items-center justify-center gap-2">
                        <PlayBtnIcon />
                        <Space direction="vertical" size={0}>
                            <Typography
                                className="text-sm font-normal lg:text-[16px]  text-[#3A3A3A] leading-[24px]"
                            >
                                WATCH VIDEO
                            </Typography>
                            <Typography
                                className="text-sm font-normal lg:text-[13px]  text-[#3A3A3A] leading-[17px]"
                            >
                                About Token
                            </Typography>
                        </Space>
                    </div>
                </Space>
            </div>
            <div className="w-1/2 lg:absolute lg:right-[120px] top-[-140px]">
                    <FeatureImg />
            </div>
        </div>
    </div>
  );
};
