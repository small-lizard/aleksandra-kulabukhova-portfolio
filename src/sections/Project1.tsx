import React from "react";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import SkillCardBlock from "../components/SkillCardBlock";
import VioletStar from "../assets/icons/violet-star.svg";
import GreenArc from "../assets/icons/green-arc.svg";
import Desktop from "../assets/images/desktop.png";
import Mobile from "../assets/images/mobile.png";
import Otp from "../assets/images/otp.png";
import Validation from "../assets/images/validation.png";




const Project1: React.FC = () => {
    return (
        <div className="w-full mx-auto border-[2px] border-light rounded-[30px] px-[40px] py-[40px] flex flex-col gap-[60px]">
            <div>
                <div className="flex items-start justify-between mb-[30px]">
                    <h3 className="font-delagothicone uppercase text-[36px] text-accent">
                        Трекер привычек
                    </h3>

                    <div className="flex flex-wrap justify-end gap-[20px]">
                        <Button text="GitHub (frontend)" className="bg-dark text-text" />
                        <Button text="GitHub (backend)" className="bg-dark text-text" />
                        <Button text="APP" className="bg-primary text-text" />
                    </div>
                </div>

                <div className="max-w-[520px] flex flex-col gap-[20px]">
                    <p className="text-[16px] text-text">
                        Приложение для отслеживания привычек с регистрацией, управлением привычками и статистикой выполнения.
                    </p>
                    <p className="text-[16px] text-text-secondary">
                        Целью проекта было создание неперегруженного и быстрого в использовании трекера привычек.
                    </p>
                </div>
            </div>

            <div className="relative flex items-center justify-between">
                <img
                    src={VioletStar}
                    alt=""
                    className="pointer-events-none absolute right-[10%] top-[-80px] rotate-[13deg] z-0"
                />

                <img
                    src={Desktop}
                    alt=""
                    className="h-[clamp(200px,35vw,490px)] w-auto object-cover rounded-[10px]  z-10"
                />

                <img
                    src={Mobile}    
                    alt=""
                    className="h-[clamp(200px,35vw,490px)] w-auto object-cover rounded-[10px]  z-10"
                />
            </div>

            <div className="flex flex-col gap-[40px]">
                <h3 className="font-delagothicone uppercase text-[28px] text-text">
                    Стек
                </h3>
                <div className="flex flex-col gap-[30px] w-full">
                    {/* верхний ряд */}
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-[20px]">
                            <span className="text-text-secondary">//frontend</span>
                            <div className="flex flex-wrap gap-[10px]">
                                {["TS", "React", "Redux Toolkit", "React Hook Form", "i18n", "Zod"].map((t) => (
                                    <SkillCardBlock key={t} text={t} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px]">
                            <span className="text-text-secondary">//backend</span>
                            <div className="flex flex-wrap gap-[10px]">
                                {["Node.js", "Express"].map((t) => (
                                    <SkillCardBlock key={t} text={t} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px]">
                            <span className="text-text-secondary">//database</span>
                            <div className="flex flex-wrap gap-[10px]">
                                {["MongoDB", "Mongoose"].map((t) => (
                                    <SkillCardBlock key={t} text={t} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* нижний ряд */}
                    <div className="flex flex-col gap-[20px] w-full">
                        <span className="text-text-secondary">//infrastructure</span>
                        <div className="flex flex-wrap gap-[10px]">
                            {["Docker", "Render", "MongoDB Atlas", "Vercel"].map((t) => (
                                <SkillCardBlock key={t} text={t} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col gap-[20px]">
                <img
                    src={GreenArc}
                    alt=""
                    className="pointer-events-none absolute left-[48%] top-[150px] -translate-x-1/2"
                />
                {/* ROW 1 */}
                <div className="flex justify-between gap-[20px]">
                    <h3 className="font-delagothicone uppercase text-[28px] text-text">
                        Фичи
                    </h3>
                    <div className="w-[670px] ">
                        <FeatureCard
                            title="Authentication"
                            text="Регистрация пользователей с подтверждением email через одноразовый OTP-код и ограничением количества попыток."
                            index="01"
                            image={Otp}
                        />
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-3 gap-[20px]">
                    <FeatureCard title="PWA support" text="Приложение настроено как PWA и может использоваться на мобильных устройствах как нативное приложение." index="02" />
                    <FeatureCard title="Habit tracking" text="Интерфейс отслеживания привычек с ежедневной отметкой выполнения и отображением прогресса." index="03" />
                    <FeatureCard title="Secure user data" text="Безопасное хранение данных пользователей: хеширование паролей и OTP-кодов с использованием bcrypt." index="04" />
                </div>

                {/* ROW 3 */}
                <div className="grid grid-cols-[1.6fr_1.4fr] gap-[20px]">
                    <FeatureCard
                        title="Validation"
                        text="Валидация пользовательских данных с использованием React Hook Form и Zod."
                        index="05"
                        image={Validation}
                    />
                    <FeatureCard
                        title="Internationalization (i18n)"
                        text="Поддержка нескольких языков (русский и английский) с возможностью переключения интерфейса."
                        index="06"
                    />
                </div>
            </div>
        </div>

    );
};

export default Project1;