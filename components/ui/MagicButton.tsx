import React from "react";

const MagicButton = ({
                         title,
                         icon,
                         position,
                         handleClick,
                         otherClasses,
                     }: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
            onClick={handleClick}
        >
            <span className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF,#393BB2,#E2CBFF)]" />

            <span
                className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2"
            >
        {position === "left" && icon}
                {title}
                {position === "right" && icon}
      </span>
        </button>
    );
};

export default MagicButton;