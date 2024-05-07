import { FC } from "react";
import StripPattern from "../../components/Ui/svg/strip-pattern";
import { Typography } from "@material-tailwind/react";
import { Space } from "antd";
import SIcon from "../../components/Ui/svg/scoin";
import ITO from "../../components/Ui/svg/ito";

export interface StagesProps {}
export const Stages: FC<StagesProps> = () => {   

  return (
    <div className="w-full flex flex-col h-full items-center justify-center relative container mx-auto py-28 px-3 lg:px-9">
        <div className="absolute left-[-40px] top-0 z-10">
            <StripPattern />
        </div>
        <div className="w-full lg:w-[1316px] h-[700px] lg:h-[597px] rounded-2xl bg-[#3754FF] z-20 p-10 flex flex-col lg:flex lg:flex-row items-start">
            <div className="flex flex-col gap-10 w-1/2">
                <div className="w-full">
                    <Space size={0} className="w-full">
                        <div className="w-[500px] flex items-center justify-center gap-2">
                            <div className="w-[50px] lg:w-[140px] h-1 bg-[#FFFFFF]"></div>
                            <Typography
                                className="text-[18px] font-medium lg:text-[28px] text-[#ffffff] leading-[36px] w-full"
                            >
                                ICO Vrindacoin Token
                            </Typography>
                        </div>
                        <SIcon />
                    </Space>
                    <Typography
                        className="text-[18px] font-medium lg:text-[28px] text-[#ffffff] leading-[36px] w-[500px]"
                    >
                        ICO Tokens details & sales Tokens
                    </Typography>
                </div>

                <div className="flex flex-col items-start gap-12">
                    <div className=" flex flex-col lg:flex lg:flex-row gap-6 items-start justify-between w-[650px]">
                        <div className="group w-[300px] lg:w-[343px] h-[56px] relative flex items-start hover:bg-gradient-to-r from-[#FCFCF7] via-[#FCFCF7] to-[#3754FF] transition-colors duration-300" >
                            <div className="absolute left-0 top-0 h-full w-1 group-hover:hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                            <Space direction="vertical" className="ml-5"
                            >
                                <Typography
                                    className="text-sm font-normal lg:text-[21px] group-hover:text-[#3754FF] text-[#ffffff] leading-[27px]"
                                >
                                    Start
                                </Typography>
                                <Typography
                                    className="text-sm font-normal lg:text-[16px] group-hover:text-[#3754FF] text-[#ffffff] leading-[24px]"
                                >
                                    April 25, 2024 (9:00AM GMT)
                                </Typography>
                            </Space>
                        </div>
                        <div className="w-[300px] h-[56px] relative flex items-start">
                            <div className="group w-[300px] lg:w-[343px] h-[56px] relative flex items-start hover:bg-gradient-to-r from-[#FCFCF7] via-[#FCFCF7] to-[#3754FF] transition-colors duration-300" >
                                <div className="absolute left-0 top-0 h-full w-1 group-hover:hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                                <Space direction="vertical" className="ml-3"
                                >
                                    <Typography
                                        className="text-sm font-normal lg:text-[21px] group-hover:text-[#3754FF] text-[#ffffff] leading-[27px]"
                                    >
                                        End
                                    </Typography>
                                    <Typography
                                        className="text-sm font-normal lg:text-[16px] group-hover:text-[#3754FF] text-[#ffffff] leading-[24px]"
                                    >
                                        May 30, 2024 (9:00AM GMT)
                                    </Typography>
                                </Space>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex lg:flex-row gap-6 items-start justify-between w-[650px]">
                        <div className="w-[300px] lg:w-[343px] h-[56px] relative flex items-start">
                            <div className="group w-[300px] lg:w-[343px] h-[56px] relative flex items-start hover:bg-gradient-to-r from-[#FCFCF7] via-[#FCFCF7] to-[#3754FF] transition-colors duration-300" >
                                <div className="absolute left-0 top-0 h-full w-1 group-hover:hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                                <Space direction="vertical" className="ml-3"
                                >
                                    <Typography
                                        className="text-sm font-normal lg:text-[21px] text-[#ffffff] group-hover:text-[#3754FF] leading-[27px]"
                                    >
                                        Acceptable currencies
                                    </Typography>
                                    <Typography
                                        className="text-sm font-normal lg:text-[16px] text-[#ffffff] group-hover:text-[#3754FF] leading-[24px]"
                                    >
                                        ETC, BTC, USDT, TRON
                                    </Typography>
                                </Space>
                            </div>
                        </div>
                        <div className="w-[300px] lg:w-[343px] h-[56px] relative flex items-start">
                            <div className="group w-[300px] lg:w-[343px] h-[56px] relative flex items-start hover:bg-gradient-to-r from-[#FCFCF7] via-[#FCFCF7] to-[#3754FF] transition-colors duration-300" >
                                <div className="absolute left-0 top-0 h-full w-1 group-hover:hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                                <Space direction="vertical" className="ml-3"
                                >
                                    <Typography
                                        className="text-sm font-normal lg:text-[21px] group-hover:text-[#3754FF] text-[#ffffff] leading-[27px]"
                                    >
                                        Number of tokens sales
                                    </Typography>
                                    <Typography
                                        className="text-sm font-normal lg:text-[16px] group-hover:text-[#3754FF] text-[#ffffff] leading-[24px]"
                                    >
                                        0.288,000,000 Tokens
                                    </Typography>
                                </Space>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex lg:flex-row gap-6 items-start justify-between w-[650px]">
                        <div className="w-[300px] lg:w-[343px] h-[56px] relative flex items-start">
                            <div className="group w-[300px] lg:w-[343px] h-[56px] relative flex items-start hover:bg-gradient-to-r from-[#FCFCF7] via-[#FCFCF7] to-[#3754FF] transition-colors duration-300" >
                                <div className="absolute left-0 top-0 h-full w-1 group-hover:hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                                <Space direction="vertical" className="ml-3"
                                >
                                    <Typography
                                        className="text-sm font-normal lg:text-[21px] group-hover:text-[#3754FF] text-[#ffffff] leading-[27px]"
                                    >
                                        Launch price on exchange
                                    </Typography>
                                    <Typography
                                        className="text-sm font-normal lg:text-[16px] group-hover:text-[#3754FF] text-[#ffffff] leading-[24px]"
                                    >
                                        $12
                                    </Typography>
                                </Space>
                            </div>
                        </div>
                        <div className="w-[300px] lg:w-[343px] h-[56px] relative flex items-start">
                            <div className="group w-[300px] lg:w-[343px] h-[56px] relative flex items-start hover:bg-gradient-to-r from-[#FCFCF7] via-[#FCFCF7] to-[#3754FF] transition-colors duration-300" >
                                <div className="absolute left-0 top-0 h-full w-1 group-hover:hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #9D88D7 100%)' }}></div>
                                <Space direction="vertical" className="ml-3"
                                >
                                    <Typography
                                        className="text-sm font-normal lg:text-[21px] group-hover:text-[#3754FF] text-[#ffffff] leading-[27px]"
                                    >
                                        Minimal token transaction
                                    </Typography>
                                    <Typography
                                        className="text-sm font-normal lg:text-[16px] group-hover:text-[#3754FF] text-[#ffffff] leading-[24px]"
                                    >
                                        10 Tokens / transactions
                                    </Typography>
                                </Space>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 relative">
                <div className="hidden lg:block">
                    <ITO />
                </div>
            </div>
        </div>

            <div className="w-[1260px] px-2 py-4 mt-6 relative">
                <div className="flex items-center">
                    <div className="flex-col lg:flex lg:flex-row justify-between w-full">
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4  bg-[#3754FF] rounded-full hidden lg:block"></div>
                            <div className="mt-6 w-[350px] lg:w-[220px] h-[200px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                                <div className="border-b-2 border-[#3754FF] py-1">
                                    25 April - 30 April
                                </div>
                                <div className="mt-5">
                                    30% Bonus <br/>
                                    $0.2009/token
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4  bg-[#3754FF] rounded-full hidden lg:block"></div>
                            <div className="mt-6 w-[350px] lg:w-[220px] h-[200px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                                <div className="border-b-2 border-[#3754FF] py-1">
                                    1 may - 7 may
                                </div>
                                <div className="mt-5">
                                    20% Bonus <br/>
                                    $0.3009/token
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-[#3754FF] rounded-full hidden lg:block"></div>
                            <div className="mt-6 w-[350px] lg:w-[220px] h-[200px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                                <div className="border-b-2 border-[#3754FF] py-1">
                                    Sep 16 - Sep 30
                                </div>
                                <div className="mt-5">
                                    15% Bonus <br/>
                                    $0.4009/token
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-[#3754FF] rounded-full hidden lg:block"></div>
                            <div className="mt-6 w-[350px] lg:w-[220px] h-[200px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                                <div className="border-b-2 border-[#3754FF] py-1">
                                    8 may - 14 may
                                </div>
                                <div className="mt-5">
                                    10% Bonus <br/>
                                    $0.5009/token
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-4 h-4 bg-[#3754FF] rounded-full hidden lg:block"></div>
                            <div className="mt-6 w-[350px] lg:w-[220px] h-[200px] bg-[#F7F7FC] rounded flex flex-col items-center py-4 text-center justify-center">
                                <div className="border-b-2 border-[#3754FF] py-1">
                                    15 may - 30 may
                                </div>
                                <div className="mt-5">
                                    5% Bonus <br/>
                                    $0.7009/token
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-[-110px] left-[117px] w-[1025px] h-full hidden lg:block">
                            <svg height="100%" width="100%">
                                <line x1="0" y1="50%" x2="100%" y2="50%" style={{ stroke: '#3754FF', strokeWidth: 3, strokeDasharray: '8 10' }} />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};
