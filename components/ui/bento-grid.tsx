import { cn } from "@/lib/utils";
import MagicButton from "@/components/ui/MagicButton";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FaLocationArrow } from "react-icons/fa";
import React from "react";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  id,
                                  title,
                                  description,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                                  spareImgClassName,
                              }: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    spareImgClassName?: string;
}) => {
    const leftLists = ["Javascript", "ReactJS", "Go", "C", "Python"];
    const rightLists = ["C++", "Java", "Spring boot", "Docker"];

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(1,1,28)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(94,8,76,1) 15%, rgba(52,11,102,1) 54%, rgba(41,21,93,1) 82%)",
            }}
        >
            {/* Display images */}
            <div className="w-full h-full absolute">
                {img && (
                    <img
                        src={img}
                        alt={img}
                        className={cn(imgClassName, "object-cover object-center")}
                    />
                )}
            </div>
            <div className="w-full h-full absolute">
                {spareImg && (
                    <img
                        src={spareImg}
                        alt={spareImg}
                        className={cn(spareImgClassName, "object-cover object-center")}
                    />
                )}
            </div>

            {id === 1 && (
                <AuroraBackground>
                    <div
                        className="absolute z-0 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                </AuroraBackground>
            )}

            {id === 2 && (
                <AuroraBackground>
                    <div
                        className="absolute z-0 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                </AuroraBackground>
            )}

            {id === 4 && (
                <AuroraBackground>
                    <div
                        className="absolute z-0 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                </AuroraBackground>
            )}

            {id === 3 && (
                <AuroraBackground>
                    <div
                        className="absolute z-0 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                </AuroraBackground>
            )}

            <div
                className={cn(
                    titleClassName,
                    "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                )}
            >
                <div
                    className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                    {description}
                </div>

                <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
                    {title}
                </div>

                {id === 2 && (
                    <a
                        href="https://open.spotify.com/user/abdollarr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MagicButton
                            title={"Spotify"}
                            icon={<FaLocationArrow/>}
                            position="right"
                        />
                    </a>
                )}

                {id === 1 && (
                    <div className="absolute right-0 lg:right-2 z-10">
                        <div className="grid grid-cols-1 gap-3 lg:gap-8 w-full z-10">
                            <div className="flex flex-wrap gap-3 lg:gap-5 justify-center z-10">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3 lg:gap-5 justify-center">
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] z-50"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};