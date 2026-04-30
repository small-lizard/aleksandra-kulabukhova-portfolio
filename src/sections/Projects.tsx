import React from "react";
import Container from "../components/Wrapper";
import { useTranslation } from "react-i18next";
import Project_1 from "./Project_1";
import Project_2 from "./Project_2";


const Projects: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section aria-labelledby="projects-heading">
            <Container>
                <h2 id="projects">
                    {t("nav.projects")}
                </h2>
                <div className="flex flex-col gap-[30px] md:gap-[70px]">
                    <Project_1 />
                    <Project_2 />
                </div>
            </Container>
        </section>
    );
};

export default Projects;