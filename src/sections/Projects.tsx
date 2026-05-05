import React from "react";
import Container from "../components/Wrapper";
import { useTranslation } from "react-i18next";
import Project_1 from "./Project_1";
import Project_2 from "./Project_2";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const { ref, cls } = useScrollReveal(['heading', 'projects']);

    return (
        <section aria-labelledby="projects-heading">
            <Container>
                <h2
                    ref={ref('heading')}
                    id="projects"
                    className={cls('heading', '')}
                    style={{ animationDelay: '100ms' }}
                >
                    {t("nav.projects")}
                </h2>
                <div
                    ref={ref('projects')}
                    className={cls('projects', 'flex flex-col gap-[30px] md:gap-[70px]')}
                    style={{ animationDelay: '50ms' }}
                >
                    <Project_1 />
                    <Project_2 />
                </div>
            </Container>
        </section>
    );
};

export default Projects;