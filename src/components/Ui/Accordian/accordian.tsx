import  { FC, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

interface IconProps {
    id: number;
    open: number;
}

const Icon: FC<IconProps> = ({ id, open }) => {
    const bgColor = id === open ? "#3754FF" : "#A0AEFF";

    return (
        <div className={`w-[30px] h-[30px] bg-[${bgColor}] rounded-full flex items-center justify-center`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180  text-white" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    );
}; 

export interface AccordionProps {
    items: { id: number; title: string; content: string }[];
}

export const AccordionComponent: FC<AccordionProps> = ({ items }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <>
            {items.map((item) => (
                <Accordion key={item.id} open={open === item.id} icon={<Icon id={item.id} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(item.id)} className={`text-[21px] font-normal leading-[27px] ${item.id === open ? "text-[#3754FF]" : "text-[#3A3A3A]"}`}>{item.title}</AccordionHeader>
                    <AccordionBody>{item.content}</AccordionBody>
                </Accordion>
            ))}
        </>
    );
};
