import React from "react";
import SkillCardBlock from "./SkillCardBlock";

interface TechStackSectionProps {
    title: string;
    skills: string[];
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ title, skills }) => {
    return (
        <div className="flex flex-col md:gap-[15px] xl:gap-[20px]">
            <span className="text-text-secondary text-[16px]">{title}</span>
            <div className="flex flex-wrap gap-[10px]">
                {skills.map((t) => (
                    <SkillCardBlock key={t} text={t} />
                ))}
            </div>
        </div>
    );
};

export default TechStackSection;