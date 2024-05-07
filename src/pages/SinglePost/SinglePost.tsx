import { Breadcrumbs, Checkbox, Input, Textarea, Typography } from "@material-tailwind/react";
import { FC } from "react";
import OutlinedNote from "../../components/Ui/svg/outlineNote";
import OutlineMessage from "../../components/Ui/svg/outlineMessage";
import OutlinedWifi from "../../components/Ui/svg/wifi";
import { Divider, Space } from "antd";
import LiTimeIcon from "../../components/Ui/svg/li-time";
import LiMessageIcon from "../../components/Ui/svg/li-message";
import LiEyeIcon from "../../components/Ui/svg/li-eye";
import { SearchOutlined } from "@ant-design/icons";
import { MoreQA } from "../Home/MoreQa";
import TwitterIcon from "../../components/Ui/svg/twitter";
import DiscordIcon from "../../components/Ui/svg/discord";
import TelegramIcon from "../../components/Ui/svg/telegram";
import { NavLink } from "react-router-dom";
import { AppButton } from "../../components/Ui/Button/Button";

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

      <div className="w-full h-full pt-52 px-0  lg:px-25 flex items-start justify-start gap-16">
        <div className="w-full lg:w-[60%] h-full flex flex-col items-start gap-12">
          <div className="w-full lg:w-[703px] rounded-2xl p-9 flex flex-col gap-4">
            <div className="w-full h-full">
              <img src="/assets/blog1.png"/>
            </div>
            <div className="w-full flex flex-col gap-7">
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
                  className="text-[21px] font-semibold lg:text-[25px] text-[#3A3A3A] w-[269px] lg:w-[698px] leading-[27px] lg:leading-[36px]"
              >
                There are no secrets to success. It is the result of preparation, hard work, and learning from failure.
              </Typography>

                <div className="w-full h-full">
                   <img src="/assets/blog6.png"/>
                </div>

                <Typography
                  className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[322px] lg:w-[621px] leading-[24px]"
                >
                  Join us as we delve into the journeys of these trailblazing projects, from the initial idea to the successful ICO and beyond. Gain insights into the strategies they employed, the challenges they overcame, and the lessons they learned along the way. ICO success stories are not just about financial gains but also about the transformative impact these projects have had on various sectors. If you're curious about the potential of ICOs. <br />
                  We explore a diverse range of projects that have thrived after launching their ICOs, disrupting traditional industries and paving the way for revolutionary solutions. From decentralized applications (DApps) that have reshaped digital ecosystems to blockchain platforms revolutionizing supply chain management, these success stories demonstrate the power of ICOs to propel ideas into reality. <br />
                  Through in-depth case studies and interviews with project leaders, we offer insights into the challenges they faced, the strategies they employed, and the lessons they learned along the way. Whether you're an investor seeking inspiration or an entrepreneur entrepreneur considering an ICO, these stories.
                </Typography>

                <Space>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                  Blockchain
                </div>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                  Cryptocurrency
                </div>
                <div className="w-full p-3 h-[44px] border rounded-md text-[rgba(58, 58, 58, 0.5)] text-[16px] leading-[24px] font-normal">
                  ICO
                </div>
              </Space>

              <Divider></Divider>

              <div className="flex w-full lg:w-[750px] h-[350px] lg:h-[260px] p-7 rounded-2xl mt-6 bg-[#F7F7FC]">
                <div className="flex  flex-col lg:flex lg:flex-row  items-start lg:items-center justify-center gap-3">
                   <img src="/assets/user.png" alt="profile-image" className="w-1/2 h-1/2 object-cover"/>
                   <Space direction="vertical">
                    <Typography
                      className="text-[16px] font-normal lg:text-[21px] text-[#3A3A3A] w-[289px] lg:w-[598px] leading-[21px] lg:leading-[27px]"
                    >
                      About Hashim Beckley
                    </Typography>
                    <Typography
                      className="text-[14px] font-normal text-[#3A3A3A] w-[299px] lg:w-[572px] leading-[24px]"
                    >
                      The Founder and Creative Director of VRINDACOIN, a digital creative studio in USA, has over 15 years of experience as an award-winning Creative Director/Art for clients.
                    </Typography>
                   </Space>
                </div>
              </div>

              <div className="flex flex-col items-start w-[800px] gap-7 mt-28">
                <Typography
                  className="text-[16px] font-bold lg:text-[28px] text-[#3A3A3A] w-[289px] lg:w-[598px] leading-[21px] lg:leading-[36px]"
                >
                  Comments 02
                </Typography>

                <div className="flex items-start justify-start gap-2">
                  <img src="/assets/user.png" alt="profile-image" className="w-1/2 h-1/2  object-cover"/>
                  <Space direction="vertical">
                   <Typography
                      className="text-[16px] font-normal lg:text-[21px] text-[#3A3A3A] w-[289px] lg:w-[598px] leading-[21px] lg:leading-[27px]"
                    >
                      Hashim Alghaly
                    </Typography>
                     <Typography
                      className="text-[16px] font-normal text-[#3A3A3A] leading-[21px]"
                    >
                      March 2, 2024
                     </Typography>
                     <Typography
                      className="text-[16px] font-normal text-[#3A3A3A] w-[209px] lg:w-[598px] leading-[21px]"
                    >
                      The platform itself was incredibly user-friendly, making it easy for me to participate in the ICO. The intuitive interface guided me through the token purchase process seamlessly.
                    </Typography>

                  </Space>
                </div>
                <div className="flex items-start justify-start gap-2">
                  <img src="/assets/user2.png" alt="profile-image" className="w-1/2 h-1/2 object-cover"/>
                  <Space direction="vertical">
                   <Typography
                      className="text-[16px] font-normal lg:text-[21px] text-[#3A3A3A] w-[289px] lg:w-[598px] leading-[21px] lg:leading-[27px]"
                    >
                      Habib Hassan
                    </Typography>
                     <Typography
                      className="text-[16px] font-normal text-[#3A3A3A] leading-[21px]"
                    >
                      March 2, 2024
                     </Typography>
                     <Typography
                      className="text-[16px] font-normal text-[#3A3A3A] w-[209px] lg:w-[598px] leading-[21px]"
                    >
                      The platform itself was incredibly user-friendly, making it easy for me to participate in the ICO. The intuitive interface guided me through the token purchase process seamlessly.
                    </Typography>

                  </Space>
                </div>

                <Space direction="vertical" className="mt-20">
                  <Typography
                    className="text-[16px] font-bold lg:text-[28px] text-[#3A3A3A] w-[289px] lg:w-[598px] leading-[21px] lg:leading-[36px]"
                  >
                    Leave a Reply
                  </Typography>
                  <Typography
                    className="text-[16px] font-normal text-[#3A3A3AB2] w-[289px] lg:w-[598px] leading-[21px]"
                  >
                    Your email address will not be published. Required fields are marked *
                  </Typography>
                </Space>

                <div className="mt-6 w-[350px] lg:w-full">
                  <form className="flex flex-col gap-7 items-start w-full">
                    <div className="w-full lg:w-1/2">
                      <Input label="Name" crossOrigin={undefined} size="lg"/>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <Input label="Email Address" crossOrigin={undefined} size="lg"/>
                    </div>
                    <div className="w-full">
                      <Textarea label="Comment" size="lg"/>
                      <Space size={0}>
                        <Checkbox color="blue" crossOrigin={undefined}/>
                        <Typography
                          className="text-[16px] font-normal text-[#3A3A3AB2] w-[289px] lg:w-[598px] leading-[21px]"
                        >
                          Save my name, email in this browser for the next time i comment.
                        </Typography>
                      </Space>
                    </div>

                    <div className="">
                      <AppButton size="lg" variant="secondary">
                        Submit your message
                      </AppButton>
                    </div>
                  </form>
                </div>
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
