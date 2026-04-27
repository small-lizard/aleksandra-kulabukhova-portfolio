import React from "react";
import Container from "../components/Wrapper";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import EmblaCarouselMobile from "../components/carousel/EmblaCarouselMobile";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section aria-labelledby="skills-heading">
            <Container>
                <h2 id="skills">
                    {t("nav.skills")}
                </h2>
            </Container>
            <div className="hidden md:block">
                <EmblaCarousel />
            </div>
            <div className="hidden sm:block md:hidden lg:hidden xl:hidden">
                <EmblaCarouselMobile />
            </div>
        </section>
    );
};

export default Skills;