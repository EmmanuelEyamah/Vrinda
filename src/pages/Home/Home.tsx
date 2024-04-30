import { FC } from "react";
import { Hero } from "./Hero";
import { MarKetcap } from "./MarketCap";
import { Featured } from "./Featured";
import { WhyUs } from "./WhyUs";
import { Tokenomics } from "./tokenomics";

export interface HomeProps {}
export const Home: FC<HomeProps> = () => {

  return (
    <div>
        <Hero />
        <MarKetcap />
        <Featured />
        <WhyUs />
        <Tokenomics />
    </div>
  );
};
