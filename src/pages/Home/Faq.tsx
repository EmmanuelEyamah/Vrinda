import { FC, useState } from "react";
import PatternBG from "../../components/Ui/svg/patternBg";
import { Typography } from "@material-tailwind/react";
import FaqBG from "../../components/Ui/svg/faq";
import { AccordionComponent } from "../../components/Ui/Accordian/accordian";
import MFaqBG from "../../components/Ui/svg/m-faq";
import MPatternBG from "../../components/Ui/svg/m-patternBg";

export interface FAQProps {}
export const FAQ: FC<FAQProps> = () => {
    const [selectedBtn, setSelectedBtn] = useState('general');
  
    const buttons = [
      { id: 1, label: 'General', value: 'general' },
      { id: 2, label: 'Pre ICO & ICO', value: 'preIco' },
      { id: 3, label: 'Token', value: 'token' },
      { id: 3, label: 'Client', value: 'client' },
      { id: 3, label: 'Legal', value: 'legal' },
    ];
  
    const handleBtnClick = (value: string) => {
      setSelectedBtn(value);
    };

    const items = [
        { id: 1, title: "What is ICO?", content: "Content for Tab 1" },
        { id: 2, title: "What cryptocurrencies can i use to purchase?", content: "Content for Tab 2" },
        { id: 3, title: "How can i participate in the ICO Token sales?", content: "Content for Tab 3" },
        { id: 4, title: "How do i benefit from the ICO Tokens?", content: "Content for Tab 4" },
    ];

  return (
    <div className="relative w-full h-[1000px] lg:h-[700px] flex items-start flex-col justify-normal container mx-auto">
        <div className="absolute top-[-127px] z-[-1] left-0 hidden lg:block">
            <PatternBG />
        </div>
        <div className="absolute top-[-27px] z-[-100] left-0 lg:hidden">
            <MPatternBG />
        </div>

        <div className="p-2 lg:p-5 absolute top-[-15px] lg:top-[-90px]">
            <div className="w-[510px] flex items-center justify-start gap-2">
                <div className="w-[50px] lg:w-[140px] h-1 bg-[#3754FF]"></div>
                <Typography
                    className="text-[21px] font-medium lg:text-[28px] text-[#3A3A3A] leading-[27px] lg:leading-[36px]"
                >
                FAQS
                </Typography>
            </div>
            <Typography
                className="text-[21px] font-normal lg:text-[28px]  text-[#3A3A3A] leading-[27px] lg:leading-[36px] w-[629px]"
            >
                Frequently asked questions
            </Typography>
        </div>

        <div className="w-full flex flex-col lg:flex lg:flex-row items-start justify-start gap-8 mt-20 lg:mt-4">
            <div className=" w-full lg:w-[800px] h-full lg:h-[650px] flex flex-col gap-5 p-4 lg:p-10">
                <div className="w-[500px] lg:w-full flex items-center gap-6">
                    {buttons.map(button => (
                        <button
                        key={button.id}
                        className={`bg-transparent ${
                            selectedBtn === button.value ? 'border-b-4 border-[#3754FF]' : ''
                        } text-[#3A3A3A] font-normal text-[16px] leading-[24px]  py-2 rounded-none w-[500px]`}
                        onClick={() => handleBtnClick(button.value)}
                        >
                        {button.label}
                        </button>
                    ))}
                </div>

                <div className="mt-5 w-[360px] lg:w-[680px]">
                    { selectedBtn === "general" &&  (
                        <AccordionComponent items={items}/>
                    )}
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="hidden lg:block">
                    <FaqBG />
                </div>
                <div className="block lg:hidden">
                    <MFaqBG />
                </div>
            </div>
        </div>
        
    </div>
  );
};
