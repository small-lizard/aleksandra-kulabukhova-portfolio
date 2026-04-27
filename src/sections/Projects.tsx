import React from "react";
import Container from "../components/Wrapper";
import Project1 from "./Project1";
import { useTranslation } from "react-i18next";

const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section aria-labelledby="projects-heading">
            <Container>
                <h2 id="projects">
                    {t("nav.projects")}
                </h2>
                <Project1 />
            </Container>
        </section>
    );
};

export default Projects;