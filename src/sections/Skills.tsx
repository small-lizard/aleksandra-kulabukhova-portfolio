import React from "react";
import Container from "../components/Wrapper";
import EmblaCarousel from "../components/carousel/EmblaCarousel";

const Skills: React.FC = () => {
    return (
        <div>
            <Container>
                <h2>
                    Навыки
                </h2>
            </Container>
            <EmblaCarousel></EmblaCarousel>
        </div>

    );
};

export default Skills;