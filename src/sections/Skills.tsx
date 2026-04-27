import React from "react";
import Container from "../components/Wrapper";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import EmblaCarouselMobile from "../components/carousel/EmblaCarouselMobile";

const Skills: React.FC = () => {
    return (
        <section aria-labelledby="skills-heading">
            <Container>
                <h2 id="skills-heading">
                    Навыки
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