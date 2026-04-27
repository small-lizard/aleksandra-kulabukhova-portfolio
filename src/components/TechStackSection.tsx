import React from "react";
import SkillCardBlock from "./SkillCardBlock";

interface TechStackSectionProps {
    title: string;
    skills: string[];
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ title, skills }) => {
    return (
        <div className="flex flex-col gap-[10px] xl:gap-[20px]">
            <p className="text-text-secondary text-[16px]">{title}</p>
            <ul className="flex flex-wrap gap-[10px] list-none p-0 m-0">
                {skills.map((t) => (
                    <li key={t}>
                        <SkillCardBlock text={t} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TechStackSection;