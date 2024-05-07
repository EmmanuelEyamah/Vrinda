import { ArrowUpOutlined } from "@ant-design/icons";
import { Typography } from "@material-tailwind/react";
import { FC } from "react";
import { AppButton } from "../../components/Ui/Button/Button";
import StarIcon from "../../components/Ui/svg/star";
import StLineIcon from "../../components/Ui/svg/stline";
import AboutGlobe from "../../components/Ui/svg/about-globe";
import FeatureImg from "../../components/Ui/svg/feactureImg";
import { Space } from 'antd';
import PlayBtnIcon from "../../components/Ui/svg/playbtn";
import BoltIcon from "../../components/Ui/svg/boltcoin";
import { HeaderText } from "../../components/Ui/HeaderText/HeaderText";
import SIcon from "../../components/Ui/svg/scoin";
import BitCoinIcon from "../../components/Ui/svg/bitcoin";
import EthIconII from "../../components/Ui/svg/eth2";
import VIcon from "../../components/Ui/svg/vicon";
import PCircleIcon from "../../components/Ui/svg/p-circle";
import YBoxIcon from "../../components/Ui/svg/y-box";
import LiYCircleIcon from "../../components/Ui/svg/li-y-circle";
import LiPCircleIcon from "../../components/Ui/svg/li-p-circle";
import { MarKetCap } from "../Home/MarketCap";
import Signature from "../../components/Ui/svg/signature";
import SearchFilled from "../../components/Ui/svg/search-filled";
import Community from "../../components/Ui/svg/community";
import Team from "../../components/Ui/svg/team";
import GSecurity from "../../components/Ui/svg/g-security";
import { MoreQA } from "../Home/MoreQa";
import MFeatureImg from "../../components/Ui/svg/m-featuredImg";

export interface AboutUsProps {}
export const AboutUs: FC<AboutUsProps> = () => {

  return (
    <div className='w-full h-full container mx-auto'>
      <div className='hidden lg:block'>
        <div className='absolute top-[25%] left-[20%]'>
          <StarIcon />
        </div>
        <div className='absolute bottom-[250px] right-[10%]'>
          <StLineIcon />
        </div>
        <div className='absolute bottom-[-100px] right-[30%] z-30'>
          <EthIconII />
        </div>
        <div className='absolute bottom-[-100px] left-[30%] z-30'>
          <VIcon />
        </div>
        <div className='absolute bottom-[-100px] left-[43%] z-30'>
          <LiYCircleIcon />
        </div>
        <div className='absolute bottom-[-100px] right-[43%] z-30'>
          <LiPCircleIcon />
        </div>
        <div className='absolute bottom-[100px] left-[32%] z-30'>
          <PCircleIcon />
        </div>
        <div className='absolute bottom-[100px] right-[33%] z-30'>
          <YBoxIcon />
        </div>
        <div className='absolute bottom-[0px] right-[1000px] z-30'>
          <BitCoinIcon />
        </div>
      </div>

      <div className='flex flex-col items-center justify-start w-full h-full gap-8 pt-20 lg:pt-56 relative container'>
        <Typography className='text-[38px] font-bold lg:text-[51px] text-[#3A3A3A] w-[361px] lg:w-[1165px] leading-[47px] lg:leading-[61px] text-center'>
          Our mission is to To simplify the complexities of cryptocurrency
          trading and investing through innovative features and a supportive
          community.
        </Typography>
        <Typography className='text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[361px] lg:w-[638px] leading-[24px] text-center'>
          Celebrating innovation and the boundless possibilities of blockchain
          technology, Vrindacoin emerges as a beacon of decentralized finance to
          empower everyone to participate in the DeFi revolution by providing a
          user-friendly, secure, and socially engaging platform.
        </Typography>
        <div className=''>
          <AppButton
            size='lg'
            variant='secondary'
            icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />}>
            Buy Token
          </AppButton>
        </div>
        <div className='hidden lg:block'>
          <AboutGlobe />
        </div>
      </div>

      <div className='bg-[#F7F7FC] h-[1600px] lg:h-[1300px] flex-col flex lg:flex lg:flex-row items-start justify-start px-6 pt-12 z-[-10]'>
        <div className='w-full lg:hidden'>
          <MFeatureImg />
        </div>
        <div className='w-1/2 p-5 flex flex-col gap-[40px]'>
          <div className='flex flex-col gap-2'>
            <Space size={0}>
              <HeaderText label='Introducing Vrinda coin' />
              <SIcon />
            </Space>
            <Typography className='text-sm font-normal lg:text-[25px]  text-[#3A3A3A] leading-[36px] w-[361px] lg:w-[629px]'>
              We’ve built a cryptocurrency exchange platform designed to bridge
              the gap between traditional finance and the world of decentralized
              finance (DeFi)
            </Typography>
          </div>
          <div className='flex flex-col gap-2'>
            <Space>
              <Typography className='text-sm font-normal lg:text-[28px]  text-[#3754FF] leading-[36px]'>
                Who we are
              </Typography>
              <BoltIcon />
            </Space>
            <Typography className='font-normal lg:text-[16px]  text-[#3A3A3A] leading-[24px] w-[361px] lg:w-[548px]'>
              VRINDA is a 100% pre-scratched cryptome There are 1 Million
              Minutes, and 60% of them can be yours (60% - ICO) Utility &
              security token (appliezs to all transactions and gives a monthly
              dividend) <br />
              Iko is a 100% pre-scratched cryptome There are 1 Million Minutes,
              and 60% of them can be yours (60% - ICO) Utility & security token
              (applies to all transactions and gives a monthly dividend) <br />
              Iko is a 100% pre-scratched cryptome There are 1 Million Minutes,
              and 60% of them can be yours (60% - ICO).
            </Typography>
          </div>

          <Space className='w-[600px]' size={30}>
            <AppButton
              size='lg'
              variant='secondary'
              icon={<ArrowUpOutlined style={{ transform: "rotate(45deg)" }} />}>
              Buy token
            </AppButton>
            <div className='flex items-center justify-center gap-2'>
              <PlayBtnIcon />
              <Space direction='vertical' size={0}>
                <Typography className='text-sm font-normal lg:text-[16px]  text-[#3A3A3A] leading-[24px]'>
                  WATCH VIDEO
                </Typography>
                <Typography className='text-sm font-normal lg:text-[13px]  text-[#3A3A3A] leading-[17px]'>
                  About Token
                </Typography>
              </Space>
            </div>
          </Space>

          <div className='flex flex-col gap-2 mt-9'>
            <HeaderText label='Take a look at what we’ve accomplished' />
            <Typography className='text-sm font-normal text-[16px]  lg:text-[28px]  text-[#3A3A3A] leading-[24px] lg:leading-[36px] w-[361px] lg:w-[720px]'>
              Dive into our triumphs, witness the power of progress, Behold the
              milestones that mark our journey towards revolutionizing the
              crypto landscape with Vrinda-coin. From inception to innovation,
              every step forward defines our commitment to reshaping finance.
              Join us as we turn vision into reality, one achievement at a time.
            </Typography>
          </div>
        </div>
        <div className='w-1/2 hidden lg:block'>
          <FeatureImg />
        </div>
      </div>
      <div className='mt-[200px]'>
        <MarKetCap />
      </div>

      <div className='h-[1500px] lg:h-[1000px] w-full flex-col-reverse flex lg:flex lg:flex-row items-start justify-center p-7 lg:p-12 gap-12 relative'>
        <div className='W-1/2'>
          <img src='/assets/about.png' />
        </div>
        <div className='W-1/2 flex flex-col'>
          <Typography className='text-[21px] font-bold lg:text-[38px] text-[#3A3A3A] w-[361px] lg:w-[611px] leading-[34px] lg:leading-[47px]'>
            The story and mission behind our company
          </Typography>
          <Typography className='font-normal text-[16px] text-[#3A3A3A] w-[361px] lg:w-[605px] leading-[24px]'>
            Vrinda is a revolutionary social media-integrated cryptocurrency
            exchange platform designed to bridge the gap between traditional
            finance and the world of decentralized finance (DeFi). Unlike other
            platforms, Vrinda prioritizes user experience and accessibility,
            making it perfect for both beginners and experienced crypto users.
            This exchange platform is different from other exchange platforms as
            it tries to lighten the steep learning curve and difficult user
            experience of users using the usual cryptocurrency exchange
            platforms, DEx or CEx.
          </Typography>
        </div>

        <div className='w-[385px] h-[225px] bg-[#ffffff] shadow-xl rounded-lg absolute bottom-14 lg:bottom-[350px] left-3 lg:left-[30%] p-6'>
          <Typography className='text-sm font-normal lg:text-[13px] text-[#3A3A3A] w-[340px] leading-[17px] mb-5'>
            Dear Vrindacoin Community, <br />
            As CEO, I am inspired every day by the boundless potential of
            blockchain technology and the collective energy of our community.
            Together, we're not just navigating the currents of change – we're
            shaping them.
          </Typography>
          <Space>
            <img src='/assets/user.png' />
            <Space direction='vertical' size={0}>
              <Typography className='text-sm font-semibold lg:text-[16px] text-[#3A3A3A] leading-[24px]'>
                Hashim Beckley
              </Typography>
              <Typography className='text-sm font-normal lg:text-[13px] text-[#3A3A3A] leading-[17px]'>
                CEO & Founder
              </Typography>
            </Space>
            <Signature />
          </Space>
        </div>
      </div>

      <div className='h-[1400px] lg:h-[800px] w-[750px] lg:w-full flex-col flex lg:flex lg:flex-row items-start justify-center p-7 lg:p-12 gap-12 relative'>
        <div className='W-1/2 flex flex-col'>
          <Typography className='text-[21px] font-bold lg:text-[38px] text-[#3A3A3A] w-[361px] lg:w-[596px] leading-[34px] lg:leading-[47px] mb-3'>
            The values & mantra that drive everything we do
          </Typography>
          <Typography className='font-normal text-[16px] text-[#3A3A3A] w-[361px] lg:w-[605px] leading-[24px]'>
            Fueling every step we take, our values and mantra ignite the flames
            of innovation. At Vrindacoin, they're not just words; they're the
            guiding stars that illuminate our path towards revolutionizing
            finance. Join us as we uphold these principles and forge a future
            where possibilities are endless, and empowerment knows no bounds.
          </Typography>
        </div>

        <div className='w-1/2 flex flex-col gap-7 items-center justify-center'>
          <div className='flex-col flex lg:flex lg:flex-row gap-7 items-center justify-center'>
            <div className='w-[330px] h-[256px] bg-[#F7F7FC] flex flex-col items-start gap-4 p-3 rounded-lg'>
              <SearchFilled />
              <Typography className='text-sm font-medium lg:text-[21px] text-[#3A3A3A] w-[596px] leading-[27px]'>
                Transparent
              </Typography>
              <Typography className='text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[276px] leading-[24px]'>
                Transparency lights our way, ensuring every step is clear and
                accountable.
              </Typography>
            </div>
            <div className='w-[330px] h-[256px] bg-[#F7F7FC] flex flex-col items-start gap-4 p-3 rounded-lg'>
              <Community />
              <Typography className='text-sm font-medium lg:text-[21px] text-[#3A3A3A] w-[596px] leading-[27px]'>
                Community
              </Typography>
              <Typography className='text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[276px] leading-[24px]'>
                We're driven by our vibrant community, shaping our journey
                together.
              </Typography>
            </div>
          </div>
          <div className='flex-col flex lg:flex lg:flex-row gap-7 items-center'>
            <div className='w-[330px] h-[256px] bg-[#F7F7FC] flex flex-col items-start gap-4 p-3 rounded-lg'>
              <Team />
              <Typography className='text-sm font-medium lg:text-[21px] text-[#3A3A3A] w-[596px] leading-[27px]'>
                Experienced team
              </Typography>
              <Typography className='text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[276px] leading-[24px]'>
                Backed by an experienced team, our core values pave the path to
                a future where innovation meets integrity.
              </Typography>
            </div>
            <div className='w-[330px] h-[256px] bg-[#F7F7FC] flex flex-col items-start gap-4 p-3 rounded-lg'>
              <GSecurity />
              <Typography className='text-sm font-medium lg:text-[21px] text-[#3A3A3A] w-[596px] leading-[27px]'>
                Security guarantee
              </Typography>
              <Typography className='text-sm font-normal lg:text-[16px] text-[#3A3A3A] w-[276px] leading-[24px]'>
                With our unwavering commitment to security, we safeguard your
                trust with every transaction.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <MoreQA />
    </div>
  );
};
