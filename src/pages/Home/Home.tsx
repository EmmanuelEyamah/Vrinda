import { FC } from "react";
import { Hero } from "./Hero";
import { MarKetCap } from "./MarketCap";
import { Featured } from "./Featured";
import { WhyUs } from "./WhyUs";
import { Tokenomics } from "./tokenomics";
import { Stages } from "./Stages";
import { Roadmap } from "./Roadmap";
import { PaperWork } from "./PaperWork";
import { Teams } from "./Teams";
import { FAQ } from "./Faq";
import { Blog } from "./Blog";
import { MoreQA } from "./MoreQa";

export interface HomeProps {}
export const Home: FC<HomeProps> = () => {

  return (
    <div>
        <Hero />
        <MarKetCap />
        <Featured />
        <WhyUs />
        <Tokenomics />
        <Stages />
        <Roadmap />
        <PaperWork />
        <Teams />
        <FAQ />
        <Blog />
        <MoreQA />
    </div>
  );
};
