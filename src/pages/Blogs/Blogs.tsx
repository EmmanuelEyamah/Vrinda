import { Input, Typography } from "@material-tailwind/react";
import { FC } from "react";
import OutlinedNote from "../../components/Ui/svg/outlineNote";
import OutlineMessage from "../../components/Ui/svg/outlineMessage";
import OutlinedWifi from "../../components/Ui/svg/wifi";
import { Space } from "antd";
import LiTimeIcon from "../../components/Ui/svg/li-time";
import LiMessageIcon from "../../components/Ui/svg/li-message";
import LiEyeIcon from "../../components/Ui/svg/li-eye";
import { AppButton } from "../../components/Ui/Button/Button";
import { ArrowUpOutlined, SearchOutlined } from "@ant-design/icons";
import { MoreQA } from "../Home/MoreQa";
import TwitterIcon from "../../components/Ui/svg/twitter";
import DiscordIcon from "../../components/Ui/svg/discord";
import TelegramIcon from "../../components/Ui/svg/telegram";
import { NavLink } from "react-router-dom";

export interface BlogsProps {}
export const Blogs: FC<BlogsProps> = () => {

  return (
    <div className="w-full h-full container mx-auto">
      <div className="p-20">
        <div className="w-full rounded-bl-2xl rounded-br-2xl h-[600px] bg-gradient-to-b from-[#FFFFFF] to-[#F7F7FC] relative overflow-hidden flex flex-col items-center justify-center gap-6">
            <div className="absolute top-[80px] left-[230px]">
              <OutlinedNote />
            </div>
            <div className="absolute top-[180px] right-[30%]">
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
            <Typography
                className="text-sm font-normal lg:text-[21px] text-[#3A3A3A] w-[1011px] leading-[27px] text-center"
            >
              Welcome to the Vrindacoin Blog: Unveiling the Future of Finance, One Post at a Time! <br />
              Step into a world where innovation meets opportunity, where the boundaries of traditional finance dissolve, and the possibilities of decentralized technology unfold. Our blog is your exclusive gateway to the latest insights, trends, and developments shaping the crypto landscape and propelling Vrindacoin to the forefront of digital finance.
            </Typography>
        </div>
      </div>

      <div className="w-full h-[2200px] pt-52 px-32 flex items-center justify-center gap-16">
        <div className="w-[60%] h-full flex flex-col items-start gap-10">
          <div className="w-[670px] h-[426px] bg-[#F7F7FC] rounded-2xl p-9 flex gap-4">
            <div className="w-1/2 h-full">
              <img src="assets/blog3.png"/>
            </div>
            <div className="w-1/2 flex flex-col gap-7">
              <div className=" flex gap-3">
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
                  className="text-sm font-semibold lg:text-[28px] text-[#3A3A3A] w-[371px] leading-[36px]"
              >
                The Power of Blockchain don't Miss Out on Our ICO
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[322px] leading-[24px]"
              >
                Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..
              </Typography>

              <div className="flex w-full items-center justify-between mt-6">
                <Space>
                  <img src="assets/user.png" alt="profile-image"/>
                  <Typography
                      className="text-sm font-semibold lg:text-[16px] text-[#3A3A3A] leading-[24px]"
                  >
                    Hashim Beckley
                  </Typography>
                </Space>
                <div>
                <NavLink
                  to={"/blogs/123"}
                >
                  <AppButton size="sm" variant="secondary" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>}>
                    Read More
                  </AppButton>
                </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[670px] h-[426px] bg-[#F7F7FC] rounded-2xl p-9 flex gap-4">
            <div className="w-1/2 h-full">
              <img src="assets/blog2.png"/>
            </div>
            <div className="w-1/2 flex flex-col gap-7">
              <div className=" flex gap-3">
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
                  className="text-sm font-semibold lg:text-[28px] text-[#3A3A3A] w-[371px] leading-[36px]"
              >
                The Power of Blockchain don't Miss Out on Our ICO
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[322px] leading-[24px]"
              >
                Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..
              </Typography>

              <div className="flex w-full items-center justify-between mt-6">
                <Space>
                  <img src="assets/user.png" alt="profile-image"/>
                  <Typography
                      className="text-sm font-semibold lg:text-[16px] text-[#3A3A3A] leading-[24px]"
                  >
                    Hashim Beckley
                  </Typography>
                </Space>
                <div>
                <NavLink
                  to={"/blogs/123"}
                >
                  <AppButton size="sm" variant="secondary" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>}>
                    Read More
                  </AppButton>
                </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[670px] h-[746px] bg-[#F7F7FC] rounded-2xl p-9 flex flex-col gap-4">
            <div className="w-full h-full">
              <img src="assets/blog1.png"/>
            </div>
            <div className="w-full flex flex-col gap-7">
              <div className=" flex gap-3">
                <Space>
                  <img src="assets/user.png" alt="profile-image"/>
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
                  className="text-sm font-semibold lg:text-[28px] text-[#3A3A3A] w-[598px] leading-[36px]"
              >
                Maximizing Potential discover the Benefits of Our ICO Investment
              </Typography>
              <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[591px] leading-[24px]"
              >
                Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..
              </Typography>

              <div className="flex w-full items-center justify-between mt-6">
                
                <div>
                <NavLink
                  to={"/blogs/123"}
                >
                  <AppButton size="sm" variant="secondary" icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }}/>}>
                    Read More
                  </AppButton>
                </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full flex flex-col items-start gap-10">
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
              <img src="assets/blog4.png"/>
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
              <img src="assets/blog5.png"/>
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
              <img src="assets/blog5.png"/>
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
