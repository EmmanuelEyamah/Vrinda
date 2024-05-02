import { FC } from "react";
import { SiteNavbar } from "./Navbar";
import { SiteFooter } from "./Footer";
import { Outlet } from "react-router-dom";
import { NewsLetter } from "../../Ui/NewsLetter/NewsLetter";

export interface SiteLayoutProps {}
export const SiteLayout: FC<SiteLayoutProps> = () => {

  return (
    <div className="flex flex-col h-full overflow-hidden">
        <SiteNavbar />
        <div className="bg-[rgba(247, 247, 252, 0.7)]">
            <div className="">
                <Outlet />
            </div>
        </div>
        <NewsLetter />
        <SiteFooter />
    </div>
  );
};
