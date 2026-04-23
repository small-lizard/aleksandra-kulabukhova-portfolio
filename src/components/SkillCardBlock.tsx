import React from "react";

type SkillCardBlockProps = {
    text: string;
    className?: string;
};

const SkillCardBlock: React.FC<SkillCardBlockProps> = ({
    text,
    className = "",
}) => {
    return (
        <div
            className={`font-dmsans text-[14px] h-[40px] px-[20px] inline-flex items-center justify-center text-text border border-text rounded-[10px]
            ${className}`}
        >
            {text}
        </div>
    );
};

export default SkillCardBlock;
