import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import TechStackSection from "../components/TechStackSection";

import GreenArc from "../assets/icons/green-arc.svg";
import QualityMark from "../assets/icons/quality-mark.svg";
import Desktop from "../assets/images/desktop.png";
import Mobile from "../assets/images/mobile.png";
import Otp from "../assets/images/otp.png";
import Validation from "../assets/images/validation.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

const QualityBlock = () => {
    const { t } = useTranslation();
    return (
        <div className="relative">
            <img
                src={QualityMark}
                alt=""
                aria-hidden="true"
                className="w-[80px] h-auto md:w-auto quality-mark relative z-20 cursor-pointer transition-transform duration-300 rotate-[13deg] hover:rotate-0 peer"
            />

            <div className="absolute z-10 right-full -mr-[50px] top-1/2 -translate-y-1/2
        font-delagothicone text-[10px] md:text-[14px] text-text bg-background border-2 border-light 
        p-[20px] pr-[60px] whitespace-nowrap rounded-[15px]
        opacity-0 transition-opacity duration-300
        peer-hover:opacity-100">
                {t("projects.habit_tracker.quality")}
            </div>
        </div>
    )
}

const Project_1: React.FC = () => {
    const { t } = useTranslation();
    const { ref, cls } = useScrollReveal(['heading', 'desc', 'stack', 'features']);


    return (
        <article className="relative w-full mx-auto flex flex-col border-[2px] border-light rounded-[30px]
            p-[20px] lg:p-[20px] xl:p-[40px]
            gap-[35px] lg:gap-[60px] xl:gap-[60px]">
            <div className="absolute top-[-35px] right-[-5%] block md:hidden">
                <QualityBlock></QualityBlock>
            </div>

            <header>
                <div className="flex flex-col gap-[20px] md:justify-between 
                    mb-[20px] lg:mb-[30px] xl:mb-[30px] md:flex-row">

                    <h3 ref={ref('heading')}
                        className={cls('heading', 'font-delagothicone uppercase text-accent text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px]')}
                        style={{ animationDelay: '100ms' }}>
                        {t("projects.habit_tracker.title")}
                    </h3>

                    <div className="flex flex-col gap-[20px] md:flex-row md:justify-end hidden md:flex">
                        <Button
                            text="GitHub"
                            href="https://github.com/small-lizard"
                            target="_blank"
                            className="bg-dark text-text block lg:hidden xl:hidden"
                        />
                        <Button
                            text="GitHub (frontend)"
                            href="https://github.com/small-lizard/habits-tracker"
                            target="_blank"
                            className="bg-dark text-text hidden lg:inline-flex"
                        />
                        <Button
                            text="GitHub (backend)"
                            href="https://github.com/small-lizard/habits-tracker-server"
                            target="_blank"
                            className="bg-dark text-text hidden lg:inline-flex"
                        />
                        <Button
                            text="APP"
                            href="https://habits-tracker-dusky.vercel.app/"
                            target="_blank"
                            className="bg-primary text-text"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[20px] md:justify-between md:flex-row">
                    <div ref={ref('desc')}
                        className={cls('desc', 'flex flex-col md:w-[420px] lg:w-[540px] xl:w-[540px] gap-[15px] lg:gap-[20px]')}
                        style={{ animationDelay: '150ms' }}>

                        <p className="text-text text-[14px] lg:text-[16px]">
                            {t("projects.habit_tracker.description")}
                        </p>

                        <p className="text-text-secondary text-[14px] lg:text-[16px]">
                            {t("projects.habit_tracker.goal")}
                        </p>
                    </div>
                    <div className="hidden md:block mr-[15%]">
                        <QualityBlock></QualityBlock>
                    </div>
                </div>

            </header>

            <figure
                className='relative flex items-center justify-between m-0'
                style={{ animationDelay: '300ms' }}>
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
                        className="w-full h-auto md:h-[clamp(200px,35vw,490px)] md:w-auto object-cover rounded-[10px] z-10"
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
                        className="h-[clamp(200px,35vw,490px)] w-auto object-cover rounded-[10px] z-10"
                    />
                </a>
            </figure >

            <div className="flex flex-col gap-[20px] md:hidden">
                <Button
                    text="GitHub"
                    href="https://github.com/small-lizard"
                    target="_blank"
                    className="bg-dark text-text w-full"
                />
                <Button
                    text="APP"
                    href="https://habits-tracker-dusky.vercel.app/"
                    target="_blank"
                    className="bg-primary text-text"
                />
            </div>

            <section
                ref={ref('stack')}
                className={cls('stack', '')}
                style={{ animationDelay: '200ms' }}

                aria-labelledby="stack-heading">
                <h4 id="stack-heading" className="font-delagothicone uppercase text-text
                    text-[20px] lg:text-[24px] xl:text-[28px]
                    mb-[20px] lg:mb-[40px]">
                    {t("projects.sections.stack")}
                </h4>

                <div className="flex w-full flex-wrap gap-[25px] md:gap-[40px] lg:gap-[40px] xl:gap-[60px]">
                    <TechStackSection title="//frontend" skills={["TS", "React", "Redux Toolkit", "React Hook Form", "i18n", "Zod"]} />
                    <TechStackSection title="//backend" skills={["Node.js", "Express"]} />
                    <TechStackSection title="//database" skills={["MongoDB", "Mongoose"]} />
                    <TechStackSection title="//infrastructure" skills={["Docker", "Render", "MongoDB Atlas", "Vercel"]} />
                </div>
            </section>

            <section

                ref={ref('features')}
                className={cls('features', 'relative flex flex-col gap-[20px]')}
                style={{ animationDelay: '200ms' }}

                aria-labelledby="features-heading">
                <img
                    src={GreenArc}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[48%] top-[150px] -translate-x-1/2 hidden lg:block"
                />

                <div className="flex justify-between gap-[30px] flex-col lg:flex-row">
                    <h4 id="features-heading" className="font-delagothicone uppercase text-text
                        text-[20px] lg:text-[24px] xl:text-[28px]">
                        {t("projects.sections.features")}
                    </h4>

                    <div className="w-full lg:max-w-[670px] xl:max-w-[670px]">
                        <FeatureCard
                            title="Authentication"
                            text={t("projects.habit_tracker.features.auth")}
                            index="01"
                            image={Otp}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard title="PWA support" text={t("projects.habit_tracker.features.pwa")} index="02" />
                    <FeatureCard title="Habit tracking" text={t("projects.habit_tracker.features.tracking")} index="03" />
                    <FeatureCard title="Secure user data" text={t("projects.habit_tracker.features.security")} index="04" />
                    <FeatureCard
                        title="Internationalization (i18n)"
                        text={t("projects.habit_tracker.features.i18n")}
                        index={<><span className="inline lg:hidden">05</span><span className="hidden lg:inline">06</span></>}
                        className="md:order-4 lg:order-5 lg:col-span-1"
                    />
                    <FeatureCard
                        title="Validation"
                        text={t("projects.habit_tracker.features.validation")}
                        index={<><span className="inline lg:hidden">06</span><span className="hidden lg:inline">05</span></>}
                        image={Validation}
                        className="md:order-5 md:col-span-2 lg:order-4 lg:col-span-2"
                    />
                </div>
            </section>
        </article >
    );
};

export default Project_1;