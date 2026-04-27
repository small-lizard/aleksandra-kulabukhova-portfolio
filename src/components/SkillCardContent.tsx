import React from "react";
import SkillCardBlock from "./SkillCardBlock";

interface SkillCardContentProps {
    title: string;
    icon?: string;
    skills?: string[];
    content?: React.ReactNode;
    isSkills?: boolean;
}
const SkillCardContent: React.FC<SkillCardContentProps> = ({
    title,
    icon,
    skills,
    content,
    isSkills = true
}) => {
    if (isSkills && skills) {
        return (
            <div className="flex flex-col gap-[80px] h-full">
                {icon && (
                    <div className="flex justify-between">
                        <img src={icon} alt="" aria-hidden="true" />
                    </div>
                )}
                <div>
                    <h3 className="font-dmsans font-semibold text-[18px] md:text-[20px] text-text mb-[20px] md:mb-[30px]">
                        {title}
                    </h3>
                    <ul className="flex flex-wrap gap-[10px] list-none p-0 m-0">
                        {skills.map((skill) => (
                            <li key={skill}>
                                <SkillCardBlock text={skill} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <h3 className="font-dmsans font-semibold text-[20px] text-text">
                {title}
            </h3>
            {content}
        </div>
    );
};

export default SkillCardContent;