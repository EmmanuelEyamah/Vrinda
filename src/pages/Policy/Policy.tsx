import { Typography } from "@material-tailwind/react";
import { FC } from "react";
import PolicyKey from "../../components/Ui/svg/policy-key";
import { MoreQA } from "../Home/MoreQa";

export interface PolicyProps {}
export const Policy: FC<PolicyProps> = () => {

  return (
    <div className="w-full h-full container mx-auto">
        <div className="p-20">
          <div className="w-full rounded-bl-2xl rounded-br-2xl h-[600px] bg-gradient-to-b from-[#FFFFFF] to-[#F7F7FC] relative overflow-hidden flex flex-col items-center justify-center gap-6">
            <Typography
                className="text-sm font-bold lg:text-[51px] text-[#3754FF] w-[945px] leading-[61px] text-center"
            >
              Privacy policy
            </Typography>
            <Typography
                className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] w-[945px] leading-[27px] text-center"
            >
              Last updated march 24, 2024
            </Typography>
            <PolicyKey />
          </div>
        </div>

        <div className="w-full h-[400px] flex flex-col items-start p-20">
          <Typography
              className="text-sm font-normal lg:text-[28px] text-[#3A3A3A] w-[945px] leading-[38px] mb-5"
          >
            A personal affiliate disclosure by Vrindacoin
          </Typography>
          <Typography
              className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[864px] leading-[24px]"
          >
            We may be an affiliate for products that we recommend. If you purchase those items through links supplied by us, we may earn a commission. You will not pay more when buying a product through our links. In fact, we oftentimes can negotiate a lower rate (or bonuses) not available elsewhere due to our good standing and connections. Plus, when you order through our links, it helps us to continue to offer you lots of free stuff and support this Website. Also keep in mind that we are not financial experts. We’re just as interested in Bitcoins the same as you are. Our advice isn’t based on any academic knowledge and it’s our own uneducated opinion. Any decisions you make about whether or not to buy, invest, sell or promote Bitcoin are your own responsibility. Thank you in advance for taking the time to read this and for your support. ~Vrindacoin
          </Typography>
        </div>
        <div className="w-full h-[400px] flex flex-col items-start p-20">
          <Typography
              className="text-sm font-SEMIBOLD lg:text-[16px] text-[#3A3A3A] w-[945px] leading-[24px] mb-5"
          >
            Your rights
          </Typography>
          <Typography
              className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[864px] leading-[24px]"
          >
            If you reside in the European Union, you have the right under the General Data Protection Regulation <br /> <br />

            To be informed about our processing of your personal data <br />
            To have your personal data corrected if it is inaccurate and to have incomplete personal data completed  <br />
            To object to processing of your personal data <br />
            To restrict of processing of your personal data  <br />
            To have your personal data erased (the “right to be forgotten”) <br />
            To request access to your personal data and information about how we process it <br />
            To move, copy or transfer your personal data (“data portability”) <br />
            In relation to automated decision making, including profiling  <br /> <br />

            You have the right to lodge a complaint with relevant supervisory authority in your country. It has enforcement powers and can investigate compliance with data protection law.
          </Typography>
        </div>
        <div className="w-full h-[400px] flex flex-col items-start p-20">
          <Typography
              className="text-sm font-SEMIBOLD lg:text-[16px] text-[#3A3A3A] w-[945px] leading-[24px] mb-5"
          >
            Definations
          </Typography>
          <Typography
              className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[864px] leading-[24px]"
          >
            “Personal data” is information relating to an identified or identifiable natural person.<br /> <br />
            THE TYPES OF PERSONAL DATA WE COLLECT AND USE:<br /> <br />

            Email and public Bitcoin address  <br />
            Device information (location, identifiers) <br />
            Technical information (IP address, operating system and browser type) <br />
          </Typography>
        </div>

        <MoreQA />
    </div>
  );
};
