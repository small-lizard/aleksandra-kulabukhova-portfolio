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
    width = "w-[400px]",
}) => {
    return (
        <div
            className={`${width} h-[440px] p-[40px] rounded-[20px] transition-colors
            ${
                isActive
                    ? "bg-primary border-transparent"
                    : "bg-transparent border-2 border-text"
            }
            ${className}`}
        >
            {children}
        </div>
    );
};

export default SkillCard;
