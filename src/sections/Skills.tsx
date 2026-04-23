import React from "react";
import Container from "../components/Wrapper";
import EmblaCarousel from "../components/carousel/EmblaCarousel";

const Skills: React.FC = () => {
    return (
        <div>
            <Container>
                <h2 className="font-delagothicone uppercase text-[48px] leading-[1.45] text-text mb-[70px] pl-[40px]">
                    Навыки
                </h2>
            </Container>
            <EmblaCarousel></EmblaCarousel>
        </div>

    );
};

export default Skills;