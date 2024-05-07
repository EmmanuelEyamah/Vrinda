import { FC, useState, useEffect} from "react";
import "../../../index.css"
import {
  Navbar,
  Typography,
  IconButton,
  List,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { AppButton } from "../../Ui/Button/Button";
import  LogoIcon  from "../../Ui/svg/logo";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useScrollToTop from "../../../hooks/useScrollToTop";
import MenuBarIcon from "../../Ui/svg/menubar";
import NavbarBG from "../../Ui/svg/navbarBG";
import { motion } from 'framer-motion';
import CloseBarIcon from "../../Ui/svg/closebar";
import { Space } from "antd";

const Links = [
  {
    label: "Home",
    route: "/",
    dropdown: null, 
  },
  {
    label: "Tokenomics",
    route: "/#tokenomics",
    scrollTarget: "#tokenomics",
    dropdown: null,
  },
  {
    label: "Pages",
    route: "#",
    dropdown: [
      { label: "About Us", route: "/about" },
      { label: "Token Sales", route: "/token-sales" },
      { label: "Contact Us", route: "/contact-us" },
      { label: "Legal & disclaimer", route: "/legals" },
      { label: "Blog", route: "/blogs" },
    ],
  },
  {
    label: "Community",
    route: "/community",
    dropdown: null,
  },
  {
    label: "Road map",
    route: "/#roadmap",
    scrollTarget: "#roadmap",
    dropdown: null,
  },
];
 
export interface NavProps {
  label?: string;
  active?: boolean
} 

const NavItems: FC<NavProps> = ({ label, active }) =>  {
  return (
    <div className={`py-2 pr-1 lg:pr-4 ${active ? 'gradient-text' : 'text-[#3A3A3A]'}`}>
        <label>
            {label}
        </label>
    </div>
  );
};



const useMenuActive = (route: string): boolean  => {
  const location = useLocation();

  const isActive =
    (location.pathname.includes(route) && route.length > 1) ||
    location.pathname === route;

  return isActive;
};
interface NavListProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavList({ setOpen }: NavListProps) {
  return (
    <List className="flex-row p-1">
      {Links.map((link, index) => {
            const isActive = useMenuActive(link.route)
            return (
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-normal"
                    key={`link-tag-${index}`}
                >
                     {link.dropdown ? ( 
                        <DropdownLink link={link} isActive={isActive} />
                      ) : (
                        <NavLink
                        to={link.route}
                        className="flex items-center"
                        onClick={() => {
                          if (link.scrollTarget) {
                            const targetElement = document.querySelector(
                              link.scrollTarget
                            );
                            if (targetElement) {
                              targetElement.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }
                          setOpen(false)
                        }}
                      >
                        <NavItems label={link.label} active={isActive} />
                      </NavLink>
                      )}
                </Typography>
            )
          })} 
    </List>
  );
}

interface DropdownLinkProps {
  link: {
    label: string;
    dropdown: { label: string; route: string }[] | null;
  };
  isActive: boolean;
}

const DropdownLink: FC<DropdownLinkProps> = ({ link, isActive }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleDropdownItemClick = (route: string) => {
    navigate(route); 
    toggleDropdown();
  };

  return (
    <div>
      <div
        className={`py-2 pr-4 flex gap-1 items-center z-100 ${
          isActive ? "gradient-text" : "text-[#3A3A3A]"
        }`}
        onClick={toggleDropdown}
      >
        <label>{link.label}</label>
        {showDropdown ? (
          <ChevronUpIcon className="h-4 w-4 ml-1" />
        ) : (
          <ChevronDownIcon className="h-4 w-4 ml-1" />
        )}
      </div>
      {showDropdown && (
        <div className="px-2 lg:px-0 mt-3 lg:mt-0 absolute left-0 lg:left-[40%] top-26 lg:top-14 bg-transparent lg:bg-white g:border rounded-none lg:rounded shadow-none lg:shadow-md flex lg:flex-col lg:flex">
          {link.dropdown?.map((item, index) => (
            <div
              key={index}
              onClick={() => handleDropdownItemClick(item.route)}
              className="px-1 py-2 font-normal lg:px-4 text-[rgba(58, 58, 58, 0.2)] lg:text-[#3A3A3A] hover:gradient-text cursor-pointer" 
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export interface SiteNavbarProps {}
export const SiteNavbar: FC<SiteNavbarProps> = () => {
  useScrollToTop();
  const [openNav, setOpenNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <>
      <div className="bg-gradient-to-r from-[#5A6FEA] to-[#213299] w-full h-[55px] flex items-center justify-center p-2 gap-2 relative">
        <Typography variant="h6" className="text-white">VRANDA is now live!</Typography>
        <AppButton variant="accent" size="sm">Get involved</AppButton>
      </div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 left-0 z-[100000] w-full ${openNav ? '' : 'hidden'}`}
      >
        <div className="absolute left-[-80px] top-[-40px] z-[-1]">
          <NavbarBG />
        </div>
        <div className="flex items-center justify-between">
          <LogoIcon />
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => {setOpenNav(!openNav) }}
          >
            {openNav ? (
              <CloseBarIcon />
            ) : (
              <CloseBarIcon />
            )}
          </IconButton>
        </div>
        <div>
          <NavList setOpen={setOpenNav}/>
        </div>
      </motion.div>
      <Navbar
        className={`mx-auto max-w-full px-5 lg:px-20 shadow-none py-2 z-[10000] rounded-none bg-[#F7F7FCB2] ${
          isSticky ? "fixed top-0 z-[10000]" : ""
        }`}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
            <LogoIcon />
          <div className="hidden lg:block">
            <NavList setOpen={setOpenNav}/>
          </div>

          <div className="hidden gap-5 lg:flex">
            <AppButton variant="primary">
              Download app
            </AppButton>
            <AppButton variant="secondary">
              Sign up
            </AppButton>
          </div>

          <Space size={18} className="lg:hidden">
            <AppButton variant="secondary">
              Sign up
            </AppButton>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={() => {setOpenNav(!openNav) }}
            >
              {openNav ? (
                <MenuBarIcon />
              ) : (
                <MenuBarIcon />
              )}
            </IconButton>
          </Space>
        </div>
      </Navbar>
    </>
  );
};
