import { Typography } from "@material-tailwind/react";
import React, { FC } from "react";
import TokenomicsIcon from "../../components/Ui/svg/tokenomics";
import { AppButton } from "../../components/Ui/Button/Button";
import { ArrowUpOutlined } from "@ant-design/icons";
import StatIcon from "../../components/Ui/svg/stat";
import DotICO from "../../components/Ui/svg/dot-ico";
import DotFunds from "../../components/Ui/svg/dot-funds";
import DotSeed from "../../components/Ui/svg/dot-seed";
import DotTech from "../../components/Ui/svg/dot-tech";
import DotManG from "../../components/Ui/svg/dot-mang";
import { Space } from "antd";
import "../../index.css";

const TABLE_HEAD = ["Particulars", "Supply (%)", "Supply (millions)", "Supply (LAKHs)"];
 
const TABLE_ROWS = [
  {
    icon: <DotICO />,
    name: "ICO",
    supply: "3%",
    msupply: "0.288",
    lksupply: "288,000",
  },
  {
    icon: <DotICO />,
    name: "AIRDROPS",
    supply: "3%",
    msupply: "0.288",
    lksupply: "288,000",
  },
  {
    icon:<DotFunds />,
    name: "PUBLIC FUNDS",
    supply: "63%",
    msupply: "6.048",
    lksupply: "6,048,000",
  },
  {
    icon: <DotSeed />,
    name: "SEED INVESTOR",
    supply: "3%",
    msupply: "0.288",
    lksupply: "288,000",
  },
  {
    icon: <DotTech />,
    name: "TECHNOLOGY",
    supply: "6%",
    msupply: "0.96",
    lksupply: "960,000",
  },
  {
    icon: <DotManG />,
    name: "MANAGEMENT",
    supply: "9%",
    msupply: "0.864",
    lksupply: "864,000",
  },
  {
    icon: <DotTech />,
    name: "DONATIONS & EVENTS",
    supply: "6%",
    msupply: "0.576",
    lksupply: "576,000",
  },
];

export interface TokenomicsProps {}
export const Tokenomics: FC<TokenomicsProps> = () => {

  return (
    <div className="w-full flex flex-col items-start justify-center p-16 gap-11" id="tokenomics">
        <div className="w-full items-center flex justify-center gap-10">
            <Typography
                className="text-sm font-bold lg:text-[51px] text-[#3754FF] leading-[61px] w-[304px] text-center"
            >
                TOKENOMICS
            </Typography>
            <TokenomicsIcon />
        </div>
        <div className="flex items-start w-full gap-6">
          <Typography
                className="text-sm font-semibold lg:text-[38px] text-[#3A3A3A] leading-[47px]"
            >
                1 VRINDACOIN = 0.0013 BTC
            </Typography>
            <AppButton size="lg" variant="secondary" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>}>
              Buy now
            </AppButton>
        </div>

        <div className="w-full flex items-center justify-center gap-16">
          <div className="w-1/2 p-5 flex flex-col gap-8 h-[768px] bg-[#F7F7FC] rounded shadow-lg shadow-custom">
            <Typography
                  className="text-sm font-normal lg:text-[28px] text-[#3A3A3A] leading-[36px] w-[582px]"
              >
                  VRINDACOIN HAS A TOTAL SUPPLY OF 9.6 MILLION TOKENS
              </Typography>
            <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[692px]"
              >
                  The vrinda token is minted on Ethereum and is unique in that it can also be claimed, stored and traded on Solana, BNB Chain, Base, Polygon, or Avalanche using Wormhole and Portal Bridge tech.
            </Typography>

            <div className="grid grid-cols-4 gap-x-0">
                <React.Fragment>
                  {TABLE_HEAD.map((head) => (
                      <div
                        key={head}
                        className="col-span-1  mb-5"
                      >
                        <Typography
                          className="font-normal text-sm lg:text-[16px] text-[#3754FF] leading-[24px]"
                        >
                          {head}
                        </Typography>
                      </div>
                  ))}
                </React.Fragment>
                {TABLE_ROWS.map(({ icon, name, supply, msupply, lksupply }, index) => {
      
                  return (
                    <React.Fragment key={index}>
                      <div className="col-span-1 bg-white mb-5 p-2 rounded-tl-lg rounded-bl-lg shadow-lg">
                        <Space>
                          {icon}
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </Space>
                      </div>
                      <div className="col-span-1 bg-white mb-5 p-2 shadow-lg">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {supply}
                        </Typography>
                      </div>
                      <div className="col-span-1 bg-white mb-5 p-2 shadow-lg">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {msupply}
                        </Typography>
                      </div>
                      <div className="col-span-1 bg-white mb-5 p-2 rounded-tr-lg rounded-br-lg shadow-lg">
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {lksupply}
                        </Typography>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>

          </div>
          <div className="w-1/2">
            <StatIcon />
          </div>
        </div>
    </div>
  );
};
