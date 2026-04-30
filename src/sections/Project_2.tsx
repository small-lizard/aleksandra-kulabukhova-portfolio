import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../components/Button";
import TechStackSection from "../components/TechStackSection";

import Desktop from "../assets/images/desktop-project2.png";
import Mobile from "../assets/images/mobile-project2.png";

const Project_2: React.FC = () => {
    const { t } = useTranslation();

    return (
        <article className="w-full mx-auto flex flex-col border-[2px] border-light rounded-[30px]
            p-[20px] lg:p-[20px] xl:p-[40px]
            gap-[35px] lg:gap-[60px] xl:gap-[60px]">

            <header>
                <div className="flex flex-col gap-[20px] md:justify-between 
                    mb-[20px] lg:mb-[30px] xl:mb-[30px] md:flex-row">

                    <h3 className="font-delagothicone uppercase text-accent text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px]">
                        {t("projects.portfolio_website.title")}
                    </h3>

                    <div className="hidden md:block">
                        <Button
                            text="GitHub"
                            href="https://github.com/small-lizard/my-personal-website"
                            target="_blank"
                            className="bg-primary text-text"
                        />
                    </div>
                </div>

                <div className="flex flex-col 
                    md:w-[420px] lg:w-[540px] xl:w-[540px]
                    gap-[15px] lg:gap-[20px]">

                    <p className="text-text text-[14px] lg:text-[16px]">
                        {t("projects.portfolio_website.description")}
                    </p>

                    <p className="text-text-secondary text-[14px] lg:text-[16px]">
                        {t("projects.portfolio_website.goal")}
                    </p>
                </div>
            </header>

            <figure className="relative flex items-center justify-between m-0">

                <a
                    href="https://habits-tracker-dusky.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-out inline-block"
                    style={{ '--tw-scale-x': '1.02', '--tw-scale-y': '1.02' } as React.CSSProperties}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    <img
                        src={Desktop}
                        alt="Десктопная версия трекера привычек"
                        className="w-full h-auto md:h-[clamp(200px,35vw,490px)] md:w-auto object-cover rounded-[10px] z-10 border-2 border-light"
                    />
                </a>

                <a
                    href="https://habits-tracker-dusky.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 ease-out hidden md:inline-block inline-block"
                    style={{ '--tw-scale-x': '1.02', '--tw-scale-y': '1.02' } as React.CSSProperties}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                    <img
                        src={Mobile}
                        alt="Мобильная версия трекера привычек"
                        className="h-[clamp(200px,35vw,490px)] w-auto object-cover rounded-[10px] z-10 border-2 border-light"
                    />
                </a>
            </figure >

            <div className="block md:hidden">
                <Button
                    text="GitHub"
                    href="https://github.com/small-lizard/my-personal-website"
                    target="_blank"
                    className="bg-primary text-text w-full"
                />
            </div>

            <section aria-labelledby="stack-heading">
                <h4 id="stack-heading" className="font-delagothicone uppercase text-text
                    text-[20px] lg:text-[24px] xl:text-[28px]
                    mb-[20px] lg:mb-[40px]">
                    {t("projects.sections.stack")}
                </h4>

                <div className="flex w-full flex-wrap gap-[25px] md:gap-[40px] lg:gap-[40px] xl:gap-[60px]">
                    <TechStackSection title="//frontend" skills={["React", "TypeScript", "Tailwind CSS", "i18n"]} />
                    <TechStackSection title="//tools" skills={["Vite", "Embla Carousel"]} />
                    <TechStackSection
                        title="//ai-assist"
                        skills={["Claude Code", "ChatGPT", "GitHub Copilot"]}
                    />
                </div>
            </section>
        </article >
    );
};

export default Project_2;