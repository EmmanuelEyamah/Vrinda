import { Card, CardBody, CardFooter, Input, Typography } from "@material-tailwind/react";
import React, { FC, useState, useEffect } from "react";
import SIcon from "../../components/Ui/svg/scoin";
import StarIcon from "../../components/Ui/svg/star";
import StLineIIIcon from "../../components/Ui/svg/stline2";
import { Divider, Space } from "antd";
import { AppButton } from "../../components/Ui/Button/Button";
import { ArrowUpOutlined } from "@ant-design/icons";
import StatIcon from "../../components/Ui/svg/stat";
import DotTech from "../../components/Ui/svg/dot-tech";
import DotManG from "../../components/Ui/svg/dot-mang";
import DotSeed from "../../components/Ui/svg/dot-seed";
import DotFunds from "../../components/Ui/svg/dot-funds";
import DotICO from "../../components/Ui/svg/dot-ico";
interface Timing {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

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

export interface TokenSalesProps {}
export const TokenSales: FC<TokenSalesProps> = () => {
  const [selectedBtn, setSelectedBtn] = useState('eth');
  
  const buttons = [
    { id: 1, label: 'ETH', value: 'eth' },
    { id: 2, label: 'USDT', value: 'usdt' },
    { id: 3, label: 'CARD', value: 'card' },
  ];

  const handleBtnClick = (value: string) => {
    setSelectedBtn(value);
  };
  
  const calculateTimeLeft = (): Timing => {
    const difference = +new Date("2024-07-05") - +new Date();
    let timing = {};

    if (difference > 0) {
      timing = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timing;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="w-full h-full container mx-auto">
        <div className="w-full h-[600px] relative flex flex-col items-start gap-6 pt-32 px-20">
          <div className="absolute top-[120px] left-[430px]">
            <SIcon />
          </div>
          <div className="absolute top-[80px] left-[50%]">
            <StarIcon />
          </div>
          <div className="absolute top-[10%] left-[50%]">
            <StLineIIIcon />
          </div>
          <div className="absolute bottom-[0px] right-[30px]">
            <StarIcon />
          </div>
        
         <Typography
              className="text-sm font-bold lg:text-[67px] text-[#3A3A3A] w-[945px] leading-[79px]"
          >
            Vrindacoin Tokens
          </Typography>
          <Typography
              className="text-sm font-normal lg:text-[21px] text-[#3A3A3A] w-[1011px] leading-[27px]"
          >
            Vrinda is a revolutionary social media-integrated cryptocurrency exchange platform designed to bridge the gap between traditional finance and the world of decentralized finance (DeFi). Unlike other platforms, Vrinda prioritizes user experience and accessibility, making it perfect for both beginners and experienced crypto users. This exchange platform is different from other exchange platforms as it tries to lighten the steep learning curve and difficult user experience of users using the usual cryptocurrency exchange platforms, DEx or CEx.
          </Typography>
      </div>

      <div className="w-full h-[1300px] relative flex flex-col items-center justify-center gap-6 px-20">
        <Typography
            className="text-sm font-bold lg:text-[61px] text-[#3754FF] leading-[61px]"
        >
          Token structure
        </Typography>
        <Typography
            className="text-sm font-normal lg:text-[21px] text-[#3A3A3A] leading-[27px]"
        >
          Here's a mechanism for a smart contract various distribution and staking features:
        </Typography>
        <div className="flex items-center justify-center gap-14">
          <div className="mt-20 flex flex-col gap-5">
            <div className="w-[375px] h-[122px] bg-[#F7F7FC] p-10 rounded-lg">
              <Typography
                  className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] leading-[27px] text-center"
              >
                Token name
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] text-center"
              >
                Vrindacoin
              </Typography>
            </div>
            <div className="w-[375px] h-[122px] bg-[#F7F7FC] p-10 rounded-lg">
              <Typography
                  className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] leading-[27px] text-center"
              >
                Normal Price
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] text-center"
              >
                1 VRC = $12USD
              </Typography>
            </div>
            <div className="w-[375px] h-[122px] bg-[#F7F7FC] p-10 rounded-lg">
              <Typography
                  className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] leading-[27px] text-center"
              >
                Total Tokens sold
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] text-center"
              >
                2,888,529.35
              </Typography>
            </div>
          </div>
          <div className="flex-col items-center justify-center gap-4">
            <Card className="w-full max-w-[42rem] shadow-lg shadow-custom h-[775px] bg-[#F7F7FC]">
              <CardBody>
                <Typography
                  className="text-sm font-normal lg:text-[13px] mb-1 lg:mb-4 text-[#3A3A3A] w-[80px] leading-[17px] ml-auto"
                >
                  Stage 1/6
                </Typography>
                <Typography className="text-sm font-normal lg:text-[21px] mb-1 lg:mb-4 gradient-text leading-[34px] text-center">
                  Vrinda Presale is live!
                </Typography>

                <div className="bg-[#3754FF] w-[630px] h-40 rounded-xl items-center justify-between flex gap-2 p-10">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <Space key={unit} size={8} direction="vertical">
                      <Typography className="text-sm font-normal lg:text-[16px] mb-1 lg:mb-4 text-white leading-[24px] ml-auto">
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </Typography>
                      <Typography className="text-sm font-normal lg:text-[16px] mb-1 lg:mb-4 text-white leading-[24px] ml-auto">
                        {value}
                      </Typography>
                    </Space>
                  ))}
                </div>

                <div className="flex items-center justify-between w-full mt-3 flex-col">
                  <div className="flex items-center justify-between w-full">
                    <Space direction="vertical"  size={2}>
                      <Typography
                        className="text-sm font-normal lg:text-[16px] mb-1 lg:mb-4 text-[rgba(58, 58, 58, 0.4)] leading-[24px]"
                      >
                        Total USD raised
                      </Typography>
                      <Typography className="text-sm font-normal lg:text-[21px] mb-1 lg:mb-4 gradient-text leading-[27px] text-center">
                        $2,888,529.35
                      </Typography>
                    </Space>
                    <Space direction="vertical" size={2}>
                      <Typography
                        className="text-sm font-normal lg:text-[16px] mb-1 lg:mb-4 text-[rgba(58, 58, 58, 0.4)] leading-[24px]"
                      >
                        Total sold
                      </Typography>
                      <Typography className="text-sm font-normal lg:text-[21px] mb-1 lg:mb-4 gradient-text leading-[27px] text-center">
                        2,888,529.35
                      </Typography>
                    </Space>
                  </div>

                  <div className="bg-[#fff] w-full h-7 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#3754FF] to-[#945CDB] rounded-full"
                      style={{ width: `${40}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full mt-4 flex-col">
                  <Typography
                    className="text-sm font-normal lg:text-[13px] mb-1 lg:mb-4 text-[#3A3A3A] leading-[17px] text-center"
                  >
                    1VRINDACOIN= <span className="text-[#3754FF]">$12</span>
                  </Typography>
                  <Typography
                    className="text-sm font-normal lg:text-[13px] mb-1 lg:mb-4 text-[#3A3A3A] leading-[17px] text-center"
                  >
                    Next stage price=<span className="text-[#3754FF]">$0.79</span>
                  </Typography>
                </div>

                <Divider>1 $99BTC = $0.001</Divider>

                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="w-full flex items-center justify-between">
                    {buttons.map(button => (
                      <button
                        key={button.id}
                        className={`bg-transparent  border ${
                          selectedBtn === button.value ? 'bg-gradient-to-r from-[#3754FF] to-[#945CDB] text-white' : ''
                        } text-[#3A3A3A] font-normal text-[16px] leading-[24px]  py-2 px-4 rounded w-[130px]`}
                        onClick={() => handleBtnClick(button.value)}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>

                  { selectedBtn === "eth" && 
                    (
                      <div className="flex items-center justify-between w-full">
                        <Space direction="vertical" >
                          <Typography
                            className="text-sm font-normal lg:text-[12px] text-[#3A3A3A] leading-[18px]"
                          >
                            ETH you pay
                          </Typography>
                          <div className="w-[250px]">
                            <Input type="number" label="Enter amount" crossOrigin={undefined} size="lg" className="bg-[rgba(58, 58, 58, 0.05)]"/>
                          </div>
                        </Space>
                        <Space direction="vertical" >
                          <Typography
                            className="text-sm font-normal lg:text-[12px] text-[#3A3A3A] leading-[18px]"
                          >
                            VRINDACOIN you receive
                          </Typography>
                          <div className="w-[250px]">
                            <Input type="number" label="" crossOrigin={undefined} size="lg" className="bg-[rgba(58, 58, 58, 0.05)]"/>
                          </div>
                        </Space>
                      </div>
                    )
                  }
                  { selectedBtn === "usdt" && 
                    (
                      <div className="flex items-center justify-between w-full">
                        <Space direction="vertical" >
                          <Typography
                            className="text-sm font-normal lg:text-[12px] text-[#3A3A3A] leading-[18px]"
                          >
                            USDT you pay
                          </Typography>
                          <div className="w-[250px]">
                            <Input type="number" label="Enter amount" crossOrigin={undefined} size="lg" className="bg-[rgba(58, 58, 58, 0.05)]"/>
                          </div>
                        </Space>
                        <Space direction="vertical" >
                          <Typography
                            className="text-sm font-normal lg:text-[12px] text-[#3A3A3A] leading-[18px]"
                          >
                            VRINDACOIN you receive
                          </Typography>
                          <div className="w-[250px]">
                            <Input type="number" label="" crossOrigin={undefined} size="lg" className="bg-[rgba(58, 58, 58, 0.05)]"/>
                          </div>
                        </Space>
                      </div>
                    )
                  }
                  { selectedBtn === "card" && 
                    (
                      <div className="flex items-center justify-between w-full">
                        <Space direction="vertical" >
                          <Typography
                            className="text-sm font-normal lg:text-[12px] text-[#3A3A3A] leading-[18px]"
                          >
                            AMOUNT you pay
                          </Typography>
                          <div className="w-[250px]">
                            <Input type="number" label="Enter amount" crossOrigin={undefined} size="lg" className="bg-[rgba(58, 58, 58, 0.05)]"/>
                          </div>
                        </Space>
                        <Space direction="vertical" >
                          <Typography
                            className="text-sm font-normal lg:text-[12px] text-[#3A3A3A] leading-[18px]"
                          >
                            VRINDACOIN you receive
                          </Typography>
                          <div className="w-[250px]">
                            <Input type="number" label="" crossOrigin={undefined} size="lg" className="bg-[rgba(58, 58, 58, 0.05)]"/>
                          </div>
                        </Space>
                      </div>
                    )
                  
                  }
                </div>
              </CardBody>
              <CardFooter className="pt-3 items-center justify-center w-full flex">
                <AppButton size="lg" variant="secondary" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>}>
                  Connect
                </AppButton>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-20 flex flex-col gap-5">
            <div className="w-[375px] h-[122px] bg-[#F7F7FC] p-10 rounded-lg">
              <Typography
                  className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] leading-[27px] text-center"
              >
                Unsold Tokens
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] text-center"
              >
                Smart contract burn
              </Typography>
            </div>
            <div className="w-[375px] h-[122px] bg-[#F7F7FC] p-10 rounded-lg">
              <Typography
                  className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] leading-[27px] text-center"
              >
                Type of Token
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] text-center"
              >
                Erc20
              </Typography>
            </div>
            <div className="w-[375px] h-[122px] bg-[#F7F7FC] p-10 rounded-lg">
              <Typography
                  className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] leading-[27px] text-center"
              >
                Accepted
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] text-center"
              >
                ETH,USDT
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="p-20 h-[1000px]">
        <Space className="mb-6" size={15}>
           <Space direction="vertical" size={0}>
              <Typography
                className="text-sm font-medium lg:text-[21px] text-[#3A3A3A] leading-[27px]"
              >
                Funding allocation
              </Typography>
              <div className="w-[160px] h-0.5 bg-gradient-to-r from-[#8D44D7] to-[#2335A3]"></div>
            </Space>
           <Space direction="vertical" size={0}>
              <Typography
                className="text-sm font-medium lg:text-[21px] text-[#3A3A3A] leading-[27px]"
              >
                Token allocation
              </Typography>
              <div className="w-[120px] h-0.5 bg-[rgba(58, 58, 58, 0.5)]"></div>
            </Space>
        </Space>
        <div className="w-full flex items-center justify-center gap-16 bg-[#F7F7FC] rounded-xl p-10">
            <div className="w-1/2 p-5 flex flex-col gap-8 h-[768px] rounded shadow-lg shadow-custom">
              <Typography
                    className="text-sm font-normal lg:text-[28px] text-[#3A3A3A] leading-[36px] w-[482px]"
                >
                    VRINDACOIN HAS A TOTAL SUPPLY OF 9.6 MILLION TOKENS
                </Typography>
              <Typography
                    className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[492px]"
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

      <div className="w-full h-[800px] flex flex-col items-center justify-center gap-6">
        <Typography
          className="text-sm font-bold lg:text-[51px] text-[#3A3A3A] leading-[61px]"
        >
          Token sale stages
        </Typography>
        <div className="w-[1460px] px-8 py-4 bg-[#F7F7FC] relative shadow-lg">
          <div className="flex items-center">
              <div className="flex justify-between w-full">
                  <div className="flex flex-col items-center">
                      <div className="w-4 h-4  bg-[#3754FF] rounded-full"></div>
                      <div className="mt-6 w-[250px] h-[150px] bg-[#ffffff] rounded flex flex-col items-center py-4 text-center justify-center">
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
                      <div className="w-4 h-4  bg-[#3754FF] rounded-full"></div>
                      <div className="mt-6 w-[250px] h-[150px] bg-[#ffffff] rounded flex flex-col items-center py-4 text-center justify-center">
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
                      <div className="w-4 h-4 bg-[#3754FF] rounded-full"></div>
                      <div className="mt-6 w-[250px] h-[150px] bg-[#ffffff] rounded flex flex-col items-center py-4 text-center justify-center">
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
                      <div className="w-4 h-4 bg-[#3754FF] rounded-full"></div>
                      <div className="mt-6 w-[250px] h-[150px] bg-[#ffffff] rounded flex flex-col items-center py-4 text-center justify-center">
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
                      <div className="w-4 h-4 bg-[#3754FF] rounded-full"></div>
                      <div className="mt-6 w-[250px] h-[150px] bg-[#ffffff] rounded flex flex-col items-center py-4 text-center justify-center">
                          <div className="border-b-2 border-[#3754FF] py-1">
                              15 may - 30 may
                          </div>
                          <div className="mt-5">
                              5% Bonus <br/>
                              $0.7009/token
                          </div>
                      </div>
                  </div>
                  <div className="absolute top-[-85px] left-[149px] w-[1145px] h-full">
                      <svg height="100%" width="100%">
                          <line x1="0" y1="50%" x2="100%" y2="50%" style={{ stroke: '#3754FF', strokeWidth: 4, strokeDasharray: '10 20' }} />
                      </svg>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};
