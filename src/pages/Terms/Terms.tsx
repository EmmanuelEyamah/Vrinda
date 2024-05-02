import { Typography } from "@material-tailwind/react";
import { FC } from "react";
import Disclaimer from "../../components/Ui/svg/disclamier";
import { MoreQA } from "../Home/MoreQa";

export interface TermsProps {}
export const Terms: FC<TermsProps> = () => {

  return (
    <div className="w-full h-full container mx-auto">
        <div className="p-20">
          <div className="w-full rounded-bl-2xl rounded-br-2xl h-[600px] bg-gradient-to-b from-[#FFFFFF] to-[#F7F7FC] relative overflow-hidden flex flex-col items-center justify-center gap-6">
            <Typography
                className="text-sm font-bold lg:text-[51px] text-[#3754FF] w-[945px] leading-[61px] text-center"
            >
              Terms of service
            </Typography>
            <Typography
                className="text-sm font-bold lg:text-[21px] text-[#3A3A3A] w-[945px] leading-[27px] text-center"
            >
              Last updated march 24, 2024
            </Typography>
            <Disclaimer />
          </div>
        </div>

        <div className="w-full h-[1000px] flex flex-col items-start p-20">
          <Typography
              className="text-sm font-normal lg:text-[28px] text-[#3A3A3A] w-[945px] leading-[38px] mb-5"
          >
            Terms of service
          </Typography>
          <Typography
              className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[864px] leading-[24px]"
          >
            Welcome to Vrinda, a revolutionary social media-integrated cryptocurrency exchange platform that aims to redefine the landscape of decentralized finance (DeFi). By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions of service:
          </Typography>
          <Typography
              className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[864px] leading-[24px]"
          >
            <span className="font-bold">Acceptance of Terms:</span> By accessing or using the Vrinda platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our platform. <br />
            <span className="font-bold">User Eligibility:</span> You must be at least 18 years old and have the legal capacity to enter into agreements to use our platform. By accessing or using Vrinda, you represent and warrant that you meet these eligibility requirements. <br />
            <span className="font-bold">Platform Description:</span> Vrinda is a social media-integrated cryptocurrency exchange platform designed to provide a user-friendly and accessible experience for both beginners and experienced crypto users. Our platform aims to bridge the gap between traditional finance and the world of decentralized finance (DeFi) by offering innovative features and tools. <br />
            <span className="font-bold">Account Registration:</span> To access certain features of Vrinda, you may be required to create an account and provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. <br />
            <span className="font-bold">User Conduct:</span> You agree to use Vrinda solely for lawful purposes and in compliance with these Terms of Service. You shall not engage in any conduct that violates applicable laws or regulations, infringes upon the rights of others, or disrupts the operation of our platform. <br />
            <span className="font-bold">Platform Description:</span>Intellectual Property: All content and materials available on Vrinda, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the property of Vrinda or its licensors and are protected by copyright, trademark, and other intellectual property laws. <br />
            <span className="font-bold">Privacy Policy:</span> Your use of Vrinda is subject to our Privacy Policy, which explains how we collect, use, and disclose your personal information. By using our platform, you consent to the collection and use of your information as described in the Privacy Policy. <br />
            <span className="font-bold">Disclaimer of Warranties:</span> Vrinda is provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied. We do not warrant that our platform will be uninterrupted, error-free, or free from viruses or other harmful components. <br />
            Limitation of Liability: In no event shall Vrinda or its affiliates, officers, directors, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, arising out of or in connection with your use of our platform. <br />
            <span className="font-bold">Governing Law and Dispute Resolution:</span> These Terms of Service shall be governed by and construed in accordance with the laws of [jurisdiction]. Any disputes arising out of or relating to these terms shall be resolved exclusively in the courts of [jurisdiction]. <br />
            <span className="font-bold">Changes to Terms:</span> We reserve the right to modify or update these Terms of Service at any time, without prior notice. It is your responsibility to review these terms periodically for changes. Your continued use of Vrinda following the posting of any changes constitutes acceptance of those changes.
          </Typography>
        </div>

        <MoreQA />
    </div>
  );
};
