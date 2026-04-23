import React from "react";
import Container from "../components/Wrapper";
import Project1 from "./Project1";

const Projects: React.FC = () => {
    return (
        <Container>
            <h2 className="font-delagothicone uppercase text-[48px] leading-[1.45] text-text mb-[70px] pl-[40px]">
                Проекты
            </h2>
            <Project1></Project1>

        </Container>

    );
};

export default Projects;