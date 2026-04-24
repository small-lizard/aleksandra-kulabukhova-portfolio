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
                                md:text-[38px] lg:text-[50px] xl:text-[60px]
                                tracking-[-0.02em] text-text-accent self-start">
                                Александра Кулабухова
                            </span>

                            <span className="font-delagothicone uppercase leading-[0.92] 
                                md:text-[38px] lg:text-[50px] xl:text-[60px]
                                tracking-[-0.02em] text-text self-end">
                                Full-stack Разработчик
                            </span>

                            <img
                                src={violetFlower}
                                alt=""
                                className="pointer-events-none absolute 
                                md:right-[20%] lg:right-[30%]
                                md:top-[-80%] lg:top-[-50%]
                                z-20 rotate-[15deg]"
                            />

                            <img
                                src={pinkEye}
                                alt=""
                                className="pointer-events-none absolute 
                                md:left-[8%] lg:left-[10%] xl:left-[20%]
                                md:top-[150px] lg:top-[200px]
                                z-20 rotate-[-15.61deg]"
                            />
                        </h1>

                        <div className="relative mt-[30px] ml-auto 
                            md:w-[410px] lg:w-[520px]
                            lg:mr-[10px] xl:mr-[120px]">

                            <div className="font-dmsans 
                                md:text-[14px] lg:text-[16px]
                                leading-[1.45]">
                                
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
                                className="pointer-events-none absolute 
                                bottom-[-280px]
                                lg:right-[-1%] xl:right-[-10%]
                                z-20 rotate-[13.76deg] hidden lg:block"
                            />
                        </div>

                        <div className="flex justify-center 
                            md:mt-[70px] lg:mt-[40px]">
                            
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