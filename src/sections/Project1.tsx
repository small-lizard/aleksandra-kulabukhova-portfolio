import React from "react";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import TechStackSection from "../components/TechStackSection";
import VioletStar from "../assets/icons/violet-star.svg";
import GreenArc from "../assets/icons/green-arc.svg";
import Desktop from "../assets/images/desktop.png";
import Mobile from "../assets/images/mobile.png";
import Otp from "../assets/images/otp.png";
import Validation from "../assets/images/validation.png";

const Project1: React.FC = () => {
    return (
        <article className="w-full mx-auto flex flex-col border-[2px] border-light rounded-[30px]
            p-[20px] lg:p-[20px] xl:p-[40px]
            gap-[35px] lg:gap-[60px] xl:gap-[60px]">

            <header>
                <div className="flex flex-col gap-[20px] md:justify-between 
                    mb-[20px] lg:mb-[30px] xl:mb-[30px] md:flex-row">

                    <h3 className="font-delagothicone uppercase text-accent text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px]">
                        Трекер привычек
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

                <div className="flex flex-col 
                    md:w-[420px] lg:w-[520px] xl:w-[520px]
                    gap-[15px] lg:gap-[20px]">
                    <p className="text-text text-[14px] lg:text-[16px]">
                        Приложение для отслеживания привычек с регистрацией, управлением привычками и статистикой выполнения.
                    </p>
                    <p className="text-text-secondary text-[14px] lg:text-[16px]">
                        Целью проекта было создание неперегруженного и быстрого в использовании трекера привычек.
                    </p>
                </div>
            </header>

            <figure className="relative flex items-center justify-between m-0">
                <img
                    src={VioletStar}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[10%] top-[-80px] rotate-[13deg] z-0 hidden md:block"
                />
                <img
                    src={Desktop}
                    alt="Десктопная версия трекера привычек"
                    className="w-full h-auto md:h-[clamp(200px,35vw,490px)] md:w-auto object-cover rounded-[10px] z-10"
                />
                <img
                    src={Mobile}
                    alt="Мобильная версия трекера привычек"
                    className="h-[clamp(200px,35vw,490px)] w-auto object-cover rounded-[10px] z-10 hidden md:block"
                />
            </figure>

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

            <section aria-labelledby="stack-heading">
                <h4 id="stack-heading" className="font-delagothicone uppercase text-text
                    text-[20px] lg:text-[24px] xl:text-[28px]
                    mb-[20px] lg:mb-[40px]">
                    Стек
                </h4>
                <div className="flex w-full flex-wrap gap-[25px] md:gap-[40px] lg:gap-[40px] xl:gap-[60px]">
                    <TechStackSection title="//frontend" skills={["TS", "React", "Redux Toolkit", "React Hook Form", "i18n", "Zod"]} />
                    <TechStackSection title="//backend" skills={["Node.js", "Express"]} />
                    <TechStackSection title="//database" skills={["MongoDB", "Mongoose"]} />
                    <TechStackSection title="//infrastructure" skills={["Docker", "Render", "MongoDB Atlas", "Vercel"]} />
                </div>
            </section>

            <section aria-labelledby="features-heading" className="relative flex flex-col gap-[20px]">
                <img
                    src={GreenArc}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[48%] top-[150px] -translate-x-1/2 hidden lg:block"
                />

                <div className="flex justify-between gap-[30px] flex-col lg:flex-row">
                    <h4 id="features-heading" className="font-delagothicone uppercase text-text
                        text-[20px] lg:text-[24px] xl:text-[28px]">
                        Фичи
                    </h4>
                    <div className="w-full lg:max-w-[670px] xl:max-w-[670px]">
                        <FeatureCard
                            title="Authentication"
                            text="Регистрация пользователей с подтверждением email через одноразовый OTP-код и ограничением количества попыток."
                            index="01"
                            image={Otp}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard title="PWA support" text="Приложение настроено как PWA и может использоваться на мобильных устройствах как нативное приложение." index="02" />
                    <FeatureCard title="Habit tracking" text="Интерфейс отслеживания привычек с ежедневной отметкой выполнения и отображением прогресса." index="03" />
                    <FeatureCard title="Secure user data" text="Безопасное хранение данных пользователей: хеширование паролей и OTP-кодов с использованием bcrypt." index="04" />
                    <FeatureCard
                        title="Internationalization (i18n)"
                        text="Поддержка нескольких языков (русский и английский) с возможностью переключения интерфейса."
                        index={<><span className="inline lg:hidden">05</span><span className="hidden lg:inline">06</span></>}
                        className="md:order-4 lg:order-5 lg:col-span-1"
                    />
                    <FeatureCard
                        title="Validation"
                        text="Клиентская и серверная валидация пользовательских данных с использованием React Hook Form и Zod."
                        index={<><span className="inline lg:hidden">06</span><span className="hidden lg:inline">05</span></>}
                        image={Validation}
                        className="md:order-5 md:col-span-2 lg:order-4 lg:col-span-2"
                    />
                </div>
            </section>
        </article>
    );
};

export default Project1;