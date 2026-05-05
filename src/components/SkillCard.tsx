import React from "react";

type SkillCardProps = {
    children: React.ReactNode;
    isActive?: boolean;
    className?: string;
    width?: string;
};

const SkillCard: React.FC<SkillCardProps> = ({
    children,
    isActive = false,
    className = "",
    width = "w-[350px] lg:w-[400px]",
}) => {
    return (
        <div
            className={`${width}
            h-[410px] p-[20px]
            lg:h-[440px] lg:p-[40px]
            rounded-[20px]
            ${isActive
                    ? "bg-primary"
                    : "bg-transparent border-2 border-light"
                }
            ${className}`}
        >
            {children}
        </div>
    );
};

export default SkillCard;