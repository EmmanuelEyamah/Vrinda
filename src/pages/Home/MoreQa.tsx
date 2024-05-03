import { FC } from "react";
import Breadcrumb from "../../components/Ui/svg/breadcrumb";
import { Typography } from "@material-tailwind/react";
import { AppButton } from "../../components/Ui/Button/Button";
import { MessageFilled } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export interface MoreQAProps {}
export const MoreQA: FC<MoreQAProps> = () => {

  return (
    <div className="w-full flex h-[800px] items-start justify-center relative py-28 container mx-auto">
        <div className="w-[1316px] h-[306px] rounded-2xl bg-[#F7F7FC] p-10 flex-col flex items-center justify-center shadow-md">
            <Breadcrumb />
            <Typography className="text-sm font-normal lg:text-[28px] mb-1 lg:mb-4 gradient-text leading-[36px] text-center">
                Have any questions?
            </Typography>
            <Typography className="text-sm font-normal lg:text-[16px] mb-1 lg:mb-4 text-[rgba(58, 58, 58, 0.7)] leading-[24px] text-center">
                Can’t find the answer you’re looking for? Please chat to our friendly team.
            </Typography>
            <NavLink
              to={"/contact-us"}
            >
              
            <AppButton size="lg" variant="secondary" icon={<MessageFilled />}>
              GET IN TOUCH
            </AppButton>
            </NavLink>
        </div>
    </div>
  );
};
