import React from "react";
import Container from "../components/Wrapper";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import EmblaCarouselMobile from "../components/carousel/EmblaCarouselMobile";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Skills: React.FC = () => {
    const { t } = useTranslation();
    const { ref, cls } = useScrollReveal(['heading', 'carousel']);

    return (
        <section aria-labelledby="skills-heading">
            <Container>
                <h2
                    ref={ref('heading')}
                    id="skills"
                    className={cls('heading', '')}
                    style={{ animationDelay: '100ms' }}
                >
                    {t("nav.skills")}
                </h2>
            </Container>
            <div
                ref={ref('carousel')}
                className={cls('carousel', '')}
                style={{ animationDelay: '300ms' }}
            >
                <div className="hidden md:block">
                    <EmblaCarousel />
                </div>
                <div className="hidden sm:block md:hidden lg:hidden xl:hidden">
                    <EmblaCarouselMobile />
                </div>
            </div>
        </section>
    );
};

export default Skills;