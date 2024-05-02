import { FC, useState } from "react";
import PatternBG from "../../components/Ui/svg/patternBg";
import { Typography } from "@material-tailwind/react";
import FaqBG from "../../components/Ui/svg/faq";
import { AccordionComponent } from "../../components/Ui/Accordian/accordian";

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
    <div className="relative w-full bg-gradient-to-b from-[#F7F7FC] to-[#FFFFFF] h-[700px] flex items-start flex-col justify-normal container mx-auto">
        <div className="absolute top-[-127px] z-[-1] left-0">
            <PatternBG />
        </div>

        <div className="p-5 absolute top-[-90px]">
            <div className="w-[510px] flex items-center justify-start gap-2">
                <div className="w-[140px] h-1 bg-[#3754FF]"></div>
                <Typography
                    className="text-sm font-medium lg:text-[28px] text-[#3A3A3A] leading-[36px]"
                >
                FAQS
                </Typography>
            </div>
            <Typography
                className="text-sm font-normal lg:text-[28px]  text-[#3A3A3A] leading-[36px] w-[629px]"
            >
                Frequently asked questions
            </Typography>
        </div>

        <div className="w-full flex items-start gap-8 mt-24">
            <div className="w-1/2 flex flex-col gap-5 p-20">
                <div className="w-full flex items-center gap-6">
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

                <div className="mt-5 w-[530px]">
                    { selectedBtn === "general" &&  (
                        <AccordionComponent items={items}/>
                    )}
                </div>
            </div>
            <div className="w-1/2">
                <FaqBG />
            </div>
        </div>
        
    </div>
  );
};
