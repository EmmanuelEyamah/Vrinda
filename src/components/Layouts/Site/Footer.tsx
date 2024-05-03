import { FC } from "react";
import { Typography } from "@material-tailwind/react";
import  LogoIcon  from "../../Ui/svg/logo";
import TwitterIcon from "../../Ui/svg/twitter";
import DiscordIcon from "../../Ui/svg/discord";
import TelegramIcon from "../../Ui/svg/telegram";
import { NavLink } from "react-router-dom";
import useScrollToTop from "../../../hooks/useScrollToTop";
 
const LINKS = [
  {
    title: "Product",
    items: ["About us", "Tokenomics", "Road map", "FAQ"],
    routes: ["/about", "/", "/", "/"],
  },
  {
    title: "Company",
    items: ["Privacy policy", "Disclaimer", "Terms of Service"],
    routes: ["/policy", "/legals", "/terms"],

  },
];
 
const currentYear = new Date().getFullYear();


export interface SiteFooterProps {}
export const SiteFooter: FC<SiteFooterProps> = () => {
  useScrollToTop();
  return (
    <footer className="relative w-full flex items-center justify-center h-[410px] container mx-auto">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <LogoIcon />
            <Typography
              variant="small"
              className="items-start w-[351px]"
            >
              Vrindacoin is the best way to learn about Bitcoin. Using our platform you'll get to know everything you need to about Bitcoin. Start now!
            </Typography>
            <div className="flex items-start gap-2">
              <TwitterIcon />
              <DiscordIcon />
              <TelegramIcon />
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items, routes }) => (
              <ul key={title}>
                {items.map((link, index) => (
                  <NavLink
                  to={routes[index]}
                    key={link}
                  >
                    <Typography
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </NavLink>
                  
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center sofia-pro-bold-italic text-[#3754FF] md:mb-0"
          >
            &copy; {currentYear}, Vrindacoin Ltd
          </Typography>
        </div>
      </div>
    </footer>
  );
};
