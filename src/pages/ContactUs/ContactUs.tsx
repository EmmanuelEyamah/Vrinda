import { FC } from "react";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import { Space } from "antd";
import { AppButton } from "../../components/Ui/Button/Button";
import EmailIcon from "../../components/Ui/svg/email";
import PhoneIcon from "../../components/Ui/svg/phone";
import HomeIcon from "../../components/Ui/svg/address";
import FArrowIcon from "../../components/Ui/svg/f-arrow";
import MapIIcon from "../../components/Ui/svg/map2";
import TwitterIcon from "../../components/Ui/svg/twitter";
import DiscordIcon from "../../components/Ui/svg/discord";
import TelegramIcon from "../../components/Ui/svg/telegram";

export interface ContactUsProps {}
export const ContactUs: FC<ContactUsProps> = () => {

  return (
    <div className="w-full h-[1300px] flex flex-col items-start justify-start p-24 gap-8">
        <div className="w-[510px] flex items-center justify-start gap-2">
            <div className="w-[140px] h-1 bg-[#3754FF]"></div>
            <Typography
                className="text-sm font-medium lg:text-[28px] text-[#3A3A3A] leading-[36px]"
            >
              Contact Vrindacoin
            </Typography>
        </div>
        <Typography
            className="text-sm font-normal lg:text-[28px] text-[#3A3A3A] leading-[36px] w-[752px]"
        >
            If you’d like to get in touch with Vrindacoin regarding site and company-related issues please fill out the form below. If you want to ask a question about Bitcoin, Tokens or anything crypto-related leave us a comment on the site.
        </Typography>

        <div className="flex w-full items-start justify-start gap-6 mt-10">
          <div className="w-1/2 flex flex-col items-start">
            <div className="w-[450px] h-[370px] rounded-2xl bg-[#F7F7FC] flex flex-col items-start relative gap-4 p-5 mb-12">
              <Space>
                <div className="w-[48px] h-[40px] bg-white flex items-center justify-center">
                  <EmailIcon />
                </div>
                <Typography
                    className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px]"
                >
                  Offer@vrindacoin.com
                </Typography>
              </Space>
              <Space>
                <div className="w-[48px] h-[40px] bg-white flex items-center justify-center">
                  <PhoneIcon />
                </div>
                <Typography
                    className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px]"
                >
                  +1270 023 4272
                </Typography>
              </Space>
              <Space>
                <div className="w-[48px] h-[40px] bg-white flex items-center justify-center">
                  <HomeIcon />
                </div>
                <Typography
                    className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px]"
                >
                  Ap #867-859 Sit Rd, Azusa New York 39531
                </Typography>
              </Space>
              <FArrowIcon />
              <div className="flex gap-2 border-b-4 border-gray-200 pb-1 absolute top-[65%] left-[90px]">
                <MapIIcon />
                <Typography
                    className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px]"
                >
                  Map
                </Typography>
              </div>
            </div>
            <div className="w-[510px] flex items-center justify-start gap-2">
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
          <div className="w-1/2">
            <div className="w-[930px] h-[546px] rounded-2xl bg-[#F7F7FC] flex flex-col items-start gap-4 p-7">
              <Space direction="vertical">
                <Typography
                  className="text-sm font-medium lg:text-[21px] text-[#3A3A3A] leading-[27px]"
                >
                  Leave Us a Message
                </Typography>
                <div className="w-[120px] h-1 bg-gradient-to-r from-[#8D44D7] to-[#2335A3]"></div>
              </Space>

              <div className="mt-6 w-full">
                <form className="flex flex-col gap-10 items-center">
                  <div className="flex items-start justify-between w-full gap-7">
                    <Input label="First name" crossOrigin={undefined} size="lg"/>
                    <Input label="Last name" crossOrigin={undefined} size="lg"/>
                  </div>
                  <div className="flex items-start justify-between w-full gap-7">
                    <Input label="Email address" crossOrigin={undefined} size="lg"/>
                    <Input label="Phone number" crossOrigin={undefined} size="lg"/>
                  </div>
                  <Textarea label="Leave a Message" size="lg"/>

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
  );
};
