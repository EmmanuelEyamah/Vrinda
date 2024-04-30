import React, { FC } from "react";
import { Button } from "@material-tailwind/react";
import "../../../index.css";

export interface ButtonProps {
    variant?: "primary" | "secondary" | "accent";
    children: React.ReactNode;
    size?: "sm" | "lg";
    fullWidth?: boolean; 
    icon?: React.ReactNode;
}
export const AppButton: FC<ButtonProps> = ({ variant, children, size, fullWidth, icon }) => {

    const btnClasses = () => {
        switch (variant) {
            case "primary":
                return "bg-white gradient-text"
            case "secondary":
                return "bg-gradient-to-r from-[#8D44D7] to-[#2335A3] text-white";
            case "accent":
                return "bg-white text-[#111111]";
            default:
                break;
        }
    }

    const fullWidthClass = fullWidth ? "w-full" : "";

  return (
    <Button className={`${btnClasses()} ${fullWidthClass}`} size={size}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
    </Button>
  );
};
