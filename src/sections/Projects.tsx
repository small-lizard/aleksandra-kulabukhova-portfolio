import React from "react";
import Container from "../components/Wrapper";
import Project1 from "./Project1";

const Projects: React.FC = () => {
    return (
        <section id="projects" aria-labelledby="projects-heading">
            <Container>
                <h2 id="projects-heading">
                    Проекты
                </h2>
                <Project1 />
            </Container>
        </section>
    );
};

export default Projects;