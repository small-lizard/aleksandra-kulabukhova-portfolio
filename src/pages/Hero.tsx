import React from "react";
import Button from "../components/Button";
import pinkEye from "../assets/icons/pink-eye.svg";
import yellowSmile from "../assets/icons/yellow-smile.svg";
import violetFlower from "../assets/icons/violet-flower.svg";
import Container from "../components/Wrapper";
import NavigationMenu from "../components/Navigation";

const navItems = ["Навыки", "Проекты", "Контакты"];

const Hero: React.FC = () => {
    return (
        <Container>
                <div className="w-full pt-[20px]">
                    <NavigationMenu withLangButton />

                    {/* HERO */}
                    <div className="relative">

                        {/* DECOR */}
                        <img
                            src={pinkEye}
                            alt=""
                            className="pointer-events-none absolute left-[10%] top-[65%] z-20 w-[135px] h-[131px] rotate-[-15.61deg]"
                        />
                        <img
                            src={violetFlower}
                            alt=""
                            className="pointer-events-none absolute right-[25%] top-[80px] z-20 w-[78px] h-[76px] rotate-[15deg]"
                        />
                        <img
                            src={yellowSmile}
                            alt=""
                            className="pointer-events-none absolute right-0 bottom-[-200px] z-20 w-[267px] h-[230px] rotate-[13.76deg] mr-[50px]"
                        />


                        {/* CONTENT */}
                        <div className="relative z-10 w-full flex flex-col">

                            {/* TITLE */}
                            <h1 className="flex flex-col gap-[30px] mt-[145px]">
                                <span className="font-delagothicone uppercase leading-[0.92] text-[60px] tracking-[-0.02em] text-text-accent self-start">
                                    Александра Кулабухова
                                </span>

                                <span className="font-delagothicone uppercase leading-[0.92] text-[60px] tracking-[-0.02em] text-text self-end">
                                    Full-stack Разработчик
                                </span>
                            </h1>


                            {/* TEXT */}
                            <div className="mt-[30px] w-[520px] max-w-full ml-auto mr-[120px]">
                                <div className="font-dmsans text-[16px] leading-[1.45]">
                                    <p className="text-text mb-[20px]">
                                        Сочетаю технический подход с пониманием пользовательского
                                        восприятия благодаря опыту в дизайне. Люблю разбираться в
                                        новых технологиях и быстро доводить их до практики.
                                    </p>

                                    <p className="text-text-secondary">
                                        Привыкла учиться самостоятельно и брать ответственность за
                                        свой рост. Легко адаптируюсь к новым инструментам и постоянно
                                        развиваю свои навыки в разработке.
                                    </p>
                                </div>
                            </div>


                            {/* BUTTON */}
                            <div className="mt-[40px] flex justify-center">
                                <Button
                                    text="СВЯЗАТЬСЯ СО МНОЙ"
                                    withIcon
                                    className="uppercase rounded-[10px] bg-primary"
                                />
                            </div>

                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Hero;