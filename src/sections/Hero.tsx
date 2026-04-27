import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import pinkEye from "../assets/icons/pink-eye.svg";
import yellowSmile from "../assets/icons/yellow-smile.svg";
import violetFlower from "../assets/icons/violet-flower.svg";
import Container from "../components/Wrapper";
import NavigationMenu from "../components/Navigation";
import MobileMenu from "../components/MobileMenu";

const Hero: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const setVh = () => {
            document.documentElement.style.setProperty('--initial-vh', `${window.innerHeight}px`);
        };
        setVh();
    }, []);

    const headingSpan = "font-delagothicone uppercase leading-[0.92] text-[32px] md:text-[38px] lg:text-[50px] xl:text-[60px] tracking-[-0.02em]";
    const decorativeImg = "pointer-events-none absolute z-20";

    return (
        <header>
            <Container>
                <div
                    className="w-full pt-[20px] flex flex-col justify-between md:block md:!min-h-0"
                    style={{ minHeight: 'var(--initial-vh, 100dvh)' }}
                >
                    <NavigationMenu
                        variant="header"
                        onBurgerClick={() => setIsMenuOpen(true)}
                        isMobileMenuOpen={isMenuOpen}
                    />
                    <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

                    <div className="relative mt-[50px] md:mt-[125px]">
                        <div className="z-10 w-full flex flex-col">
                            <h1 className="relative flex flex-col gap-[20px] md:gap-[30px]">
                                <span className={`${headingSpan} text-text-accent self-start`}>
                                    Александра Кулабухова
                                </span>
                                <span className={`${headingSpan} text-text md:self-end`}>
                                    Full-stack Разработчик
                                </span>

                                <img
                                    src={violetFlower}
                                    alt=""
                                    aria-hidden="true"
                                    className={`${decorativeImg} right-[-12%] top-[6%] md:right-[20%] lg:right-[30%] md:top-[-80%] lg:top-[-50%] rotate-[15deg]`}
                                />
                                <img
                                    src={pinkEye}
                                    alt=""
                                    aria-hidden="true"
                                    className={`${decorativeImg} hidden md:block md:left-[8%] lg:left-[10%] xl:left-[20%] md:top-[150px] lg:top-[200px] rotate-[-15.61deg]`}
                                />
                            </h1>

                            <div className="relative mt-[50px] md:mt-[30px] ml-auto md:w-[410px] lg:w-[520px] lg:mr-[10px] xl:mr-[120px]">
                                <div className="font-dmsans text-[14px] lg:text-[16px] leading-[1.45] flex flex-col gap-[15px] md:gap-[20px]">
                                    <p className="text-text">
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
                                    aria-hidden="true"
                                    className="pointer-events-none absolute bottom-[-250px] lg:right-[-1%] xl:right-[-10%] z-20 rotate-[13.76deg] hidden lg:block"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-[20px] mt-[40px] md:mt-[40px] md:mb-[0px]">
                        <Button
                            text="Связаться со мной"
                            href="#contacts"
                            withIcon
                            className="uppercase rounded-[10px] bg-primary text-text"
                        />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Hero;