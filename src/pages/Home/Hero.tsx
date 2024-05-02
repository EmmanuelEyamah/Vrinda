import { Input, Typography } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Space } from "antd";
import { FC, useEffect, useState } from "react";
import { AppButton } from "../../components/Ui/Button/Button";
import "../../index.css";
import { Divider } from "antd";
import EthIcon from "../../components/Ui/svg/eth";
import BitCoinIcon from "../../components/Ui/svg/bitcoin";
import StarIcon from "../../components/Ui/svg/star";
import StLineIcon from "../../components/Ui/svg/stline";
import StLineIIIcon from "../../components/Ui/svg/stline2";
import { ArrowUpOutlined } from '@ant-design/icons';

interface Timing {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface HeroProps {}
export const Hero: FC<HeroProps> = () => {
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
    <div className="relative mx-auto lg:min-h-[1300px] container">
      <div className="absolute top-0 right-[50%]">
        <StarIcon />
      </div>
      <div className="absolute top-[50px] right-[50%]">
        <StLineIcon />
      </div>
      <div className="absolute top-[10%] right-[60%]">
        <StLineIIIcon />
      </div>
      <div className="absolute top-[-15px] right-[12px] z-[1000]">
        <EthIcon />
      </div>
      <div className="absolute lg:bottom-[350px] lg:right-[580px] z-30" >
        <BitCoinIcon />
      </div>
      <div className="absolute lg:bottom-[500px] lg:left-[150px]">
        <EthIcon />
      </div>
      <div className="flex-col items-start justify-center lg:flex lg:flex-row gap-32 px-5 pt-[100px]">
          <div className="flex-col w-full lg:w-1/2 items-center justify-center gap-4">
            <Typography 
                className="text-4xl font-bold md:text-[50px] lg:text-[58px] mb-1 lg:mb-4 text-[#3A3A3A] w-[759px] leading-[79px]"
            >
                Welcome to the future of cryptocurrency with Vrinda Coin!
            </Typography>
            <Typography 
                className="text-2xl lg:text-[48px] mb-1 lg:mb-4 text-[#3754FF] leading-[47px] font-normal"
            >
                Crypto and Airdrops
            </Typography>
            <Typography 
                className="text-xl font-normal lg:text-[21px] mb-1 lg:mb-4 text-[#3A3A3A] w-[444px] leading-[34px]"
            >
                Discover the power of cryptocurrencies and blockchain technology
            </Typography>
            <Space className="mt-10">
              <div className="w-[350px]">
                <Input label="Email/Phone Number" crossOrigin={undefined} size="lg" className="p-5"/>
              </div>
              <AppButton variant="secondary">
                Get Started
              </AppButton>
            </Space>
            <Typography 
                className="text-sm font-normal lg:text-[12px] mb-1 lg:mb-4 text-[#3A3A3A] w-[444px] leading-[18px]"
            >
                Swap Crypto & Tokens on Vridacoin for free
            </Typography>
          </div>
          <div className="flex-col w-full lg:w-1/2 items-center justify-center gap-4">
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

                <div className="bg-[#3754FF] w-full h-40 rounded-xl items-center justify-between flex gap-2 p-10">
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
      </div>
    </div>
  );
};
