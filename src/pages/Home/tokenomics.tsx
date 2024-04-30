import { Typography } from "@material-tailwind/react";
import { FC } from "react";
import TokenomicsIcon from "../../components/Ui/svg/tokenomics";

export interface TokenomicsProps {}
export const Tokenomics: FC<TokenomicsProps> = () => {

  return (
    <div className="w-full flex flex-col items-start justify-center p-17 gap-11" id="tokenomics">
        <div className="w-full items-center flex justify-center gap-10">
            <Typography
                className="text-sm font-bold lg:text-[51px] text-[#3754FF] leading-[61px] w-[304px] text-center"
            >
                TOKENOMICS
            </Typography>
            <TokenomicsIcon />
        </div>
    </div>
  );
};
