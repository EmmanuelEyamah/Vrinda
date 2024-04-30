import { FC, useState, useEffect} from "react";
import "../../../index.css"
import {
  Navbar,
  Typography,
  IconButton,
  List,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { AppButton } from "../../Ui/Button/Button";
import  LogoIcon  from "../../Ui/svg/logo";
import { NavLink, useLocation } from "react-router-dom";

const Links = [
  {
    label: "Home",
    route: "/",
    dropdown: null, 
  },
  {
    label: "Tokenomics",
    route: "#tokenomics",
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
    route: "#roadmap",
    dropdown: null,
  },
];
 
export interface NavProps {
  label?: string;
  active?: boolean
} 

const NavItems: FC<NavProps> = ({ label, active }) =>  {
  return (
    <div className={`py-2 pr-4 ${active ? 'gradient-text' : 'text-[#3A3A3A]'}`}>
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

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      {Links.map((link, index) => {
            const isActive = useMenuActive(link.route)
            return (
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-normal"
                    key={`link-tag-${index}`}
                >
                     {link.dropdown ? ( // Check if the link has a dropdown
                        <DropdownLink link={link} isActive={isActive} />
                      ) : (
                        <NavLink to={link.route} className="flex items-center">
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

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div>
      <div
        className={`py-2 pr-4 flex gap-1 items-center ${isActive ? 'gradient-text' : 'text-[#3A3A3A]'}`}
        onClick={toggleDropdown}
      >
        <label>{link.label}</label>
        {showDropdown ? <ChevronUpIcon className="h-4 w-4 ml-1" /> : <ChevronDownIcon className="h-4 w-4 ml-1" />}
      </div>
      {showDropdown && (
        <div className="absolute top-14 bg-white border rounded shadow-md">
          {link.dropdown?.map((item, index) => (
            <NavLink
              key={index}
              to={item.route}
              className="block py-2 px-4 text-[#3A3A3A] hover:gradient-text"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export interface SiteNavbarProps {}
export const SiteNavbar: FC<SiteNavbarProps> = () => {

  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <>
      <div className="bg-gradient-to-r from-[#5A6FEA] to-[#213299] w-full h-[55px] flex items-center justify-center p-2 gap-2">
        <Typography variant="h6" className="text-white">VRANDA is now live!</Typography>
        <AppButton variant="accent" size="sm">Get involved</AppButton>
      </div>
      <Navbar className="mx-auto max-w-full px-20 py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
            <LogoIcon />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-5 lg:flex">
            <AppButton variant="primary">
              Download app
            </AppButton>
            <AppButton variant="secondary">
              Sign up
            </AppButton>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </Navbar>
    </>
  );
};
