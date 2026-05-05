import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button";
import yellowSmile from "../assets/icons/yellow-smile.svg";
import violetFlower from "../assets/icons/violet-flower.svg";
import Container from "../components/Wrapper";
import NavigationMenu from "../components/Navigation";
import MobileMenu from "../components/MobileMenu";
import { useTranslation } from "react-i18next";
import { useMagneticRepel } from "../components/useMagneticRepel";
import EyeIcon from "../components/EyeIcon";

const Hero: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const title1Ref = useRef<HTMLSpanElement>(null);
    const title2Ref = useRef<HTMLSpanElement>(null);
    const desc1Ref = useRef<HTMLParagraphElement>(null);
    const desc2Ref = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const flowerRef = useRef<HTMLImageElement>(null);
    const eyeRef = useRef<SVGSVGElement>(null);
    const smileRef = useRef<HTMLImageElement>(null);

    const flowerMagnet = useMagneticRepel(0.35, 130);
    const eyeMagnet = useMagneticRepel(0.35, 130)
    const smileMagnet = useMagneticRepel(0.35, 130);

    const [visible, setVisible] = useState<Record<string, boolean>>({});

    useEffect(() => {
        document.documentElement.style.setProperty('--initial-vh', `${window.innerHeight}px`);
    }, []);

    useEffect(() => {
        const targets = [
            { key: 'title1', ref: title1Ref },
            { key: 'title2', ref: title2Ref },
            { key: 'desc1', ref: desc1Ref },
            { key: 'desc2', ref: desc2Ref },
            { key: 'button', ref: buttonRef },
            { key: 'flower', ref: flowerRef },
            { key: 'eye', ref: eyeRef },
            { key: 'smile', ref: smileRef },
        ] as const;

        const observers = targets.map(({ key, ref }) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(prev => ({ ...prev, [key]: true }));
                    observer.disconnect();
                }
            }, { threshold: 0.1 });

            if (ref.current) observer.observe(ref.current);
            return observer;
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    const cls = (key: string, base: string, anim: 'fade-up' | 'fade-up-rotate-ccw' | 'scale-bounce') =>
        `${base} ${anim}${visible[key] ? ' visible' : ''}`;

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

                                <span
                                    ref={title1Ref}
                                    className={cls('title1', `${headingSpan} text-text-accent self-start`, 'fade-up')}
                                    style={{ animationDelay: '0ms' }}
                                >
                                    {t("hero.title_1")}
                                </span>

                                <span
                                    ref={title2Ref}
                                    className={cls('title2', `${headingSpan} text-text md:self-end`, 'fade-up')}
                                    style={{ animationDelay: '200ms' }}
                                >
                                    {t("hero.title_2")}
                                </span>

                                <img
                                    ref={el => {
                                        flowerRef.current = el;
                                        flowerMagnet(el);
                                    }}

                                    src={violetFlower}
                                    alt=""
                                    aria-hidden="true"
                                    className={`${decorativeImg} right-[-12%] top-[10%] md:right-[20%] lg:right-[30%] md:top-[-80%] lg:top-[-50%] spin-settle${visible['flower'] ? ' visible' : ''}`}
                                    style={{ animationDelay: '500ms' }}
                                />

                                <EyeIcon
                                    ref={el => {
                                        eyeRef.current = el;
                                       eyeMagnet(el)
                                    }}
                                    aria-hidden="true"
                                    className={`${decorativeImg} hidden md:block md:left-[8%] lg:left-[10%] xl:left-[20%] md:top-[150px] lg:top-[200px] fade-up-rotate-ccw${visible['eye'] ? ' visible' : ''}`}
                                    style={{ animationDelay: '400ms' }}
                                /> 
                                
                            </h1>

                            <div className="relative mt-[50px] md:mt-[30px] ml-auto md:w-[410px] lg:w-[520px] lg:mr-[10px] xl:mr-[120px]">
                                <div className="font-dmsans text-[14px] lg:text-[16px] leading-[1.45] flex flex-col gap-[15px] md:gap-[20px]">
                                    <p
                                        ref={desc1Ref}
                                        className={cls('desc1', 'text-text', 'fade-up')}
                                        style={{ animationDelay: '400ms' }}
                                    >
                                        {t("hero.description_1")}
                                    </p>
                                    <p
                                        ref={desc2Ref}
                                        className={cls('desc2', 'text-text-secondary', 'fade-up')}
                                        style={{ animationDelay: '600ms' }}
                                    >
                                        {t("hero.description_2")}
                                    </p>
                                </div>

                                <img
                                    ref={el => {
                                        smileRef.current = el;
                                        smileMagnet(el);
                                    }}
                                    src={yellowSmile}
                                    alt=""
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute bottom-[-250px] lg:right-[-1%] xl:right-[-10%] z-20 hidden lg:block fade-up-rotate-smile${visible['smile'] ? ' visible' : ''}`}
                                    style={{ animationDelay: '600ms' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={buttonRef}
                        className={cls('button', 'flex justify-center mb-[20px] mt-[40px] md:mt-[40px] md:mb-[0px]', 'scale-bounce')}
                        style={{ animationDelay: '850ms' }}
                    >
                        <Button
                            text={t("hero.button")}
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