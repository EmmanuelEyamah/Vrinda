import { Breadcrumbs, Input, Typography } from "@material-tailwind/react";
import { FC } from "react";
import OutlinedNote from "../../components/Ui/svg/outlineNote";
import OutlineMessage from "../../components/Ui/svg/outlineMessage";
import OutlinedWifi from "../../components/Ui/svg/wifi";
import { Space } from "antd";
import LiTimeIcon from "../../components/Ui/svg/li-time";
import LiMessageIcon from "../../components/Ui/svg/li-message";
import LiEyeIcon from "../../components/Ui/svg/li-eye";
import { SearchOutlined } from "@ant-design/icons";
import { MoreQA } from "../Home/MoreQa";
import TwitterIcon from "../../components/Ui/svg/twitter";
import DiscordIcon from "../../components/Ui/svg/discord";
import TelegramIcon from "../../components/Ui/svg/telegram";
import { NavLink } from "react-router-dom";

export interface BlogsProps {}
export const SinglePost: FC<BlogsProps> = () => {

  return (
    <div className="w-full h-full container mx-auto">
      <div className="p-7 lg:p-20">
        <div className="w-full h-[600px] bg-gradient-to-b from-[#FFFFFF] to-[#F7F7FC] relative overflow-hidden flex flex-col items-center justify-center gap-6">
            <div className="absolute top-[80px] left-[230px]">
              <OutlinedNote />
            </div>
            <div className="absolute top-[180px] right-[40%]">
              <OutlineMessage />
            </div>
            <div className="absolute top-[200px] right-[10%]">
              <OutlinedWifi />
            </div>
          <Typography
                className="text-sm font-bold lg:text-[51px] text-[#3754FF] w-[945px] leading-[61px] text-center"
            >
              Our Blog
            </Typography>
            <Breadcrumbs className="bg-transparent">
              <NavLink
                  to={"/blogs"}
                  className="opacity-50"
              >
                  Our Blog
              </NavLink>
              <NavLink
                  to={"/blogs/123"}
                  className=""
              >
                  Read More
              </NavLink>
          </Breadcrumbs>
        </div>
      </div>

      <div className="w-full h-[2200px] pt-52 p-6 lg:px-32 flex items-center justify-center gap-16">
        <div className="w-full lg:w-[60%] h-full flex flex-col items-start gap-10">
          <div className="w-[368px] lg:w-[703px] rounded-2xl p-9 flex flex-col gap-4">
            <div className="w-full h-full">
              <img src="/assets/blog1.png"/>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-7">
              <div className=" flex gap-3">
                  <Space className="hidden lg:block">
                  <img src="/assets/user.png" alt="profile-image"/>
                  <Typography
                      className="text-sm font-semibold lg:text-[16px] text-[#3A3A3A] leading-[24px]"
                  >
                    Hashim Beckley
                  </Typography>
                </Space>
                <Space size={2}>
                  <LiTimeIcon />
                  <Typography
                      className="text-sm font-normal lg:text-[13px] text-[rgba(58, 58, 58, 0.5)] leading-[17px] text-center"
                  >
                    2024/03/15
                  </Typography>
                </Space>
                <Space size={2}>
                  <LiMessageIcon />
                  <Typography
                      className="text-sm font-normal lg:text-[13px] text-[rgba(58, 58, 58, 0.5)] leading-[17px] text-center"
                  >
                    28
                  </Typography>
                </Space>
                <Space size={2}>
                  <LiEyeIcon />
                  <Typography
                      className="text-sm font-normal lg:text-[13px] text-[rgba(58, 58, 58, 0.5)] leading-[17px] text-center"
                  >
                    1,2300 Viewers
                  </Typography>
                </Space>
              </div>
              <Typography
                  className="text-[21px] font-semibold lg:text-[28px] text-[#3A3A3A] w-[289px] lg:w-[598px] leading-[27px] lg:leading-[36px]"
              >
                Maximizing Potential discover the Benefits of Our ICO Investment
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[322px] lg:w-[591px] leading-[24px]"
              >
                In the world of cryptocurrency, ICOs (Initial Coin Offerings) have emerged as a powerful fundraising tool for innovative projects and blockchain-based startups. "ICO Success Stories: Realizing the Potential of Token Sales" delves into the remarkable achievements and breakthroughs witnessed in the realm of ICOs
                This blog explores how these token sales have transformed the way companies raise capital, democratizing investment opportunities and enabling individuals from all around the world to participate. We dive into inspiring success stories of projects that started with an ICO and went on to disrupt industries, revolutionize technology, and create immense value for their investors. Discover how ICOs have unleashed.
                We delve into real-life examples of projects that have soared to new heights after launching their ICOs. From decentralized finance (DeFi) platforms that have transformed the traditional banking system to blockchain-based solutions addressing real-world challenges, these success stories demonstrate the power.
                the potential of blockchain technology, fostering innovation and driving economic growth. Join us on this journey as we explore the fascinating world of ICO success stories and the incredible potential they hold.
              </Typography>

              <Typography
                  className="text-[21px] font-semibold lg:text-[28px] text-[#3A3A3A] w-[289px] lg:w-[698px] leading-[27px] lg:leading-[36px]"
              >
                There are no secrets to success. It is the result of preparation, hard work, and learning from failure.
              </Typography>

                <div className="w-full h-full">
                   <img src="/assets/blog6.png"/>
                </div>

              <div className="flex w-full items-center justify-between mt-6">
                
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] h-full flex-col items-start gap-10 hidden lg:flex">
          <div className="w-[405px] h-[173px] bg-[#F7F7FC] rounded-xl p-10">
            <Typography
                className="text-sm font-semibold lg:text-[21px] text-[#3A3A3A] leading-[27px] mb-4"
            >
              Search
            </Typography>
            <Input label="Search" icon={<SearchOutlined />} crossOrigin={undefined}/>
          </div>
          <div className="w-[405px] h-[331px] bg-[#F7F7FC] rounded-xl p-10">
            <Typography
                className="text-sm font-semibold lg:text-[21px] text-[#3A3A3A] leading-[27px] mb-4"
            >
              Category
            </Typography>
            <Typography
                className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px]"
            >
              Blockchain <br />
              Cryptocurrency market <br />
              ICO listing <br />
              Tokenomics <br />
              Marketing <br />
              Vrindacoin <br />
            </Typography>
          </div>
          <div className="w-[405px] h-[390px] bg-[#F7F7FC] rounded-xl p-10">
            <Typography
                className="text-sm font-semibold lg:text-[21px] text-[#3A3A3A] leading-[27px] mb-4"
            >
              Recent posts
            </Typography>
            <div className="flex gap-3 items-start">
              <img src="/assets/blog4.png"/>
              <Space direction="vertical" size={0}>
                <Typography
                  className="text-sm font-medium lg:text-[16px] text-[#3A3A3A] leading-[24px] mb-2"
                >
                  July 10, 2024
                </Typography>
                <Typography
                  className="text-sm font-medium lg:text-[16px] text-[#3A3A3A] leading-[24px] mb-2"
                >
                  Vindracoin Token <br /> live for offering
                </Typography>
              </Space>
            </div>
            <div className="flex gap-3 items-start">
              <img src="/assets/blog5.png"/>
              <Space direction="vertical" size={0}>
                <Typography
                  className="text-sm font-medium lg:text-[16px] text-[#3A3A3A] leading-[24px] mb-2"
                >
                  July 10, 2024
                </Typography>
                <Typography
                  className="text-sm font-medium lg:text-[16px] text-[#3A3A3A] leading-[24px] mb-2"
                >
                  Vindracoin Token <br /> live for offering
                </Typography>
              </Space>
            </div>
            <div className="flex gap-3 items-start">
              <img src="/assets/blog5.png"/>
              <Space direction="vertical" size={0}>
                <Typography
                  className="text-sm font-medium lg:text-[16px] text-[#3A3A3A] leading-[24px] mb-2"
                >
                  July 10, 2024
                </Typography>
                <Typography
                  className="text-sm font-medium lg:text-[16px] text-[#3A3A3A] leading-[24px] mb-2"
                >
                  Vindracoin Token <br /> live for offering
                </Typography>
              </Space>
            </div>
          </div>

          <div className="w-[405px] h-[410px] bg-[#F7F7FC] rounded-xl p-10">
            <Typography
                className="text-sm font-semibold lg:text-[21px] text-[#3A3A3A] leading-[27px] mb-4"
            >
              Tags
            </Typography> 
            <div className="flex flex-col items-start gap-4">
              <Space>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                  Blockchain
                </div>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                  ICO
                </div>
              </Space>
              <Space>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                Currency
                </div>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                  Investment
                </div>
              </Space>
              <Space>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                  Cryto price
                </div>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                  ICO Token
                </div>
              </Space>
              <Space>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                Crypto trading
                </div>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                Crypto exchange 
                </div>
              </Space>
            </div>
          </div>

          <div className="w-[405px] flex items-center justify-start gap-2">
                <Typography
                    className="text-sm font-medium lg:text-[16px] text-[#3A3A3A] leading-[24px]"
                >
                  Follow us on
                </Typography>
                <div className="w-[120px] h-1 bg-gradient-to-r from-[#8D44D7] to-[#2335A3]"></div>
            </div>
            <div className="flex items-start gap-2">
              <TwitterIcon />
              <DiscordIcon />
              <TelegramIcon />
            </div>
        </div>
      </div>

      <MoreQA />
    </div>
  );
};
