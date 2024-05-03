import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { FC } from "react";
import LiLogo from "../../components/Ui/svg/li-logo";
import { AppButton } from "../../components/Ui/Button/Button";
import { NavLink } from "react-router-dom";


export interface BlogProps {}
export const Blog: FC<BlogProps> = () => {

  return (
    <div className="w-full flex flex-col items-center justify-start relative gap-5 h-[1900px] lg:h-[1000px] container mx-auto">
        <Typography
            className="text-[21] font-bold lg:text-[28px] text-[#3754FF] leading-[27px] lg:leading-[36px] w-[195px] lg:w-[280px]"
        >
            Recent Blogs Posts
        </Typography>
         <Typography
            className="text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px] w-[361px] lg:w-[738px] text-center"
        >
           Welcome to the Vrindacoin Blog: Unveiling the Future of Finance, One Post at a Time! <br />
            Step into a world where innovation meets opportunity, where the boundaries of traditional finance dissolve, and the possibilities of decentralized technology unfold. Our blog is your exclusive gateway to the latest insights, trends, and developments shaping the crypto landscape and propelling Vrindacoin to the forefront of digital finance.
        </Typography>
        
        <div className="mt-6 flex-col flex lg:flex lg:flex-row items-center justify-center gap-10">
            <Card className="w-96 shadow-xl">
                <CardHeader floated={false} className="h-full">
                    <img src="/assets/blog.png" alt="blog-image" />
                </CardHeader>
                <CardBody>
                    <Typography className="mb-2 text-sm font-normal lg:text-[16px] text-[#3754FF] leading-[24px]">
                        Vrindacoin insight #20
                    </Typography>
                    <Typography className="mb-2 text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px]">
                        Vrindacoin is built upon a strong sarong foundation established overs a decade of dedicated service...
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-start gap-2 pt-2">
                    <LiLogo />
                    <Typography className="mb-2 text-sm font-normal lg:text-[21px] text-[rgba(58, 58, 58, 0.5)] leading-[27px]">
                        Vrindacoin Official
                    </Typography>
                </CardFooter>
            </Card>
            <Card className="w-96 shadow-xl">
                <CardHeader floated={false} className="h-full">
                    <img src="/assets/blog.png" alt="blog-image" />
                </CardHeader>
                <CardBody>
                    <Typography className="mb-2 text-sm font-normal lg:text-[16px] text-[#3754FF] leading-[24px]">
                        Vrindacoin insight #20
                    </Typography>
                    <Typography className="mb-2 text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px]">
                        Vrindacoin is built upon a strong sarong foundation established overs a decade of dedicated service...
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-start gap-2 pt-2">
                    <LiLogo />
                    <Typography className="mb-2 text-sm font-normal lg:text-[21px] text-[rgba(58, 58, 58, 0.5)] leading-[27px]">
                        Vrindacoin Official
                    </Typography>
                </CardFooter>
            </Card>
            <Card className="w-96 shadow-xl">
                <CardHeader floated={false} className="h-full">
                    <img src="/assets/blog.png" alt="blog-image" />
                </CardHeader>
                <CardBody>
                    <Typography className="mb-2 text-sm font-normal lg:text-[16px] text-[#3754FF] leading-[24px]">
                        Vrindacoin insight #20
                    </Typography>
                    <Typography className="mb-2 text-sm font-normal lg:text-[16px] text-[#3A3A3A] leading-[24px]">
                        Vrindacoin is built upon a strong sarong foundation established overs a decade of dedicated service...
                    </Typography>
                </CardBody>
                <CardFooter className="flex items-start gap-2 pt-2">
                    <LiLogo />
                    <Typography className="mb-2 text-sm font-normal lg:text-[21px] text-[rgba(58, 58, 58, 0.5)] leading-[27px]">
                        Vrindacoin Official
                    </Typography>
                </CardFooter>
            </Card>
        </div>

        <div className="mt-10">
            <NavLink
              to={"/blogs"}
            >
                <AppButton size="lg" variant="secondary">
                    Continue to blog   
                </AppButton>
            </NavLink>
        </div>
    </div>
  );
};
