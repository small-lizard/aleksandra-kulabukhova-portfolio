import React from "react";
import Button from "../components/Button";
import pinkEye from "../assets/icons/pink-eye.svg";
import yellowSmile from "../assets/icons/yellow-smile.svg";
import violetFlower from "../assets/icons/violet-flower.svg";
import Container from "../components/Wrapper";
import NavigationMenu from "../components/Navigation";

const Hero: React.FC = () => {
    return (
        <Container>
            <div className="w-full pt-[20px]">
                <NavigationMenu withLangButton />

                <div className="relative">

                    <div className="z-10 w-full flex flex-col mt-[125px]">

                        <h1 className="relative flex flex-col gap-[30px]">
                            <span className="font-delagothicone uppercase leading-[0.92] 
                            xl:text-[60px] lg:text-[50px]
                            tracking-[-0.02em] text-text-accent self-start">
                                Александра Кулабухова
                            </span>

                            <span className="font-delagothicone uppercase leading-[0.92] 
                            xl:text-[60px] lg:text-[50px]
                            tracking-[-0.02em] text-text self-end">
                                Full-stack Разработчик
                            </span>
                            <img
                                src={pinkEye}
                                alt=""
                                className="pointer-events-none absolute 
                                left-[20%] lg:left-[10%]
                                top-[200px] 
                                z-20 rotate-[-15.61deg]"
                            />
                            <img
                                src={violetFlower}
                                alt=""
                                className="pointer-events-none absolute right-[30%] top-[-50%] z-20 rotate-[15deg]"
                            />
                        </h1>

                        <div className="relative mt-[30px] w-[520px] max-w-full ml-auto 
                        xl:mr-[120px] lg:mr-[10px] 
                        ">
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
                            <img
                                src={yellowSmile}
                                alt=""
                                className="pointer-events-none absolute xl:right-[-10%] lg:right-[-1%] bottom-[-280px] z-20 rotate-[13.76deg]"
                            />
                        </div>

                        <div className="mt-[40px] flex justify-center">
                            <Button
                                text="СВЯЗАТЬСЯ СО МНОЙ"
                                withIcon
                                className="uppercase rounded-[10px] bg-primary text-text"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;