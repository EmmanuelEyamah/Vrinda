import { FC } from "react";
import StripPattern from "../../components/Ui/svg/strip-pattern";
import { Typography } from "@material-tailwind/react";
import { Space } from "antd";
import SIcon from "../../components/Ui/svg/scoin";
import ITO from "../../components/Ui/svg/ito";


export interface StagesProps {}
export const Stages: FC<StagesProps> = () => {

  return (
    <div className="w-full flex flex-col h-full items-center justify-center relative py-28">
        <div className="absolute left-0 top-0 z-10">
            <StripPattern />
        </div>
        <div className="w-[1416px] h-[597px] rounded-2xl bg-[#3754FF] z-20 p-10 flex items-start">
            <div className="flex flex-col gap-10 w-1/2">
                <div>
                    <Space size={0}>
                        <div className=" flex items-center justify-center gap-2">
                            <div className="w-[140px] h-1 bg-[#FFFFFF]"></div>
                            <Typography
                                className="text-sm font-medium lg:text-[28px] text-[#ffffff] leading-[36px]"
                            >
                                ICO Vrindacoin Token
                            </Typography>
                        </div>
                        <SIcon />
                    </Space>
                    <Typography
                        className="text-sm font-medium lg:text-[28px] text-[#ffffff] leading-[36px]"
                    >
                        ICO Tokens details & sales Tokens
                    </Typography>
                </div>

                <div className="flex flex-col items-start gap-12">
                    <div className="flex items-start justify-between w-[650px]">
                        <div className="w-[343px] h-[56px] relative flex items-start"  style={{ background: 'linear-gradient(92.5deg, #FFFFFF 17.04%, #3754FF 89.43%)' }}>
                            <Space direction="vertical" className="ml-5"
                            >
                                <Typography
                                    className="text-sm font-normal lg:text-[21px] text-[#3754FF] leading-[27px]"
                                >
                                    Start
                                </Typography>
                                <Typography
                                    className="text-sm font-normal lg:text-[16px] text-[#3754FF] leading-[24px]"
                                >
                                    April 25, 2024 (9:00AM GMT)
                                </Typography>
                            </Space>
                        </div>
                        <div className="w-[343px] h-[56px] relative flex items-start">
                            <div className="absolute left-0 top-0 h-full w-2" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                            <Space direction="vertical" className="ml-5"
                            >
                                <Typography
                                    className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                                >
                                    End
                                </Typography>
                                <Typography
                                    className="text-sm font-normal lg:text-[16px] text-[#ffffff] leading-[24px]"
                                >
                                    May 30, 2024 (9:00AM GMT)
                                </Typography>
                            </Space>
                        </div>
                    </div>
                    <div className="flex items-start justify-between w-[650px]">
                        <div className="w-[343px] h-[56px] relative flex items-start">
                            <div className="absolute left-0 top-0 h-full w-2" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                            <Space direction="vertical" className="ml-5"
                            >
                                <Typography
                                    className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                                >
                                    Acceptable currencies
                                </Typography>
                                <Typography
                                    className="text-sm font-normal lg:text-[16px] text-[#ffffff] leading-[24px]"
                                >
                                    ETC, BTC, USDT, TRON
                                </Typography>
                            </Space>
                        </div>
                        <div className="w-[343px] h-[56px] relative flex items-start">
                            <div className="absolute left-0 top-0 h-full w-2" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                            <Space direction="vertical" className="ml-5"
                            >
                                <Typography
                                    className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                                >
                                    Number of tokens sales
                                </Typography>
                                <Typography
                                    className="text-sm font-normal lg:text-[16px] text-[#ffffff] leading-[24px]"
                                >
                                    0.288,000,000 Tokens
                                </Typography>
                            </Space>
                        </div>
                    </div>
                    <div className="flex items-start justify-between w-[650px]">
                        <div className="w-[343px] h-[56px] relative flex items-start">
                            <div className="absolute left-0 top-0 h-full w-2" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                            <Space direction="vertical" className="ml-5"
                            >
                                <Typography
                                    className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                                >
                                    Launch price on exchange
                                </Typography>
                                <Typography
                                    className="text-sm font-normal lg:text-[16px] text-[#ffffff] leading-[24px]"
                                >
                                    $12
                                </Typography>
                            </Space>
                        </div>
                        <div className="w-[343px] h-[56px] relative flex items-start">
                            <div className="absolute left-0 top-0 h-full w-2" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                            <Space direction="vertical" className="ml-5"
                            >
                                <Typography
                                    className="text-sm font-normal lg:text-[21px] text-[#ffffff] leading-[27px]"
                                >
                                    Minimal token transaction
                                </Typography>
                                <Typography
                                    className="text-sm font-normal lg:text-[16px] text-[#ffffff] leading-[24px]"
                                >
                                    10 Tokens / transactions
                                </Typography>
                            </Space>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 relative">
                <ITO />
            </div>
        </div>
    </div>
  );
};
