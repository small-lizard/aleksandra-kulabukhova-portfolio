import useEmblaCarousel from 'embla-carousel-react'
import pinkPyramid from "../../assets/icons/pink-pyramid.svg";
import whiteStar from "../../assets/icons/white-star.svg";
import greenCrosses from "../../assets/icons/green-crosses.svg";
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import SkillCard from '../SkillCard'
import SkillCardContent from '../SkillCardContent'

const EmblaCarouselMobile = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const frontendSkills = ["HTML5", "CSS3", "JS", "TS", "React", "Redux Toolkit", "i18n", "React Hook Form"];
    const backendSkills = ["Node.js", "Express", "Resend", "Session Authentication", "MongoDB"];
    const infrastructureSkills = ["Docker", "Vercel", "Render", "MongoDB Atlas"];

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">

                    <div className="embla__slide" >
                        <SkillCard isActive>
                            <SkillCardContent
                                title="Frontend"
                                icon={whiteStar}
                                skills={frontendSkills}
                            />
                        </SkillCard>
                    </div>

                    <div className="embla__slide">
                        <SkillCard>
                            <SkillCardContent
                                title="Backend"
                                icon={greenCrosses}
                                skills={backendSkills}
                            />
                        </SkillCard>
                    </div>

                    <div className="embla__slide" >

                        <SkillCard>
                            <SkillCardContent
                                title="Infrastructure"
                                icon={pinkPyramid}
                                skills={infrastructureSkills}
                            />
                        </SkillCard>

                    </div>

                    <div className="embla__slide" >
                        <SkillCard>
                            <SkillCardContent
                                title="REST API"
                                content={
                                    <p className="font-dmsans text-text text-[14px]">
                                        Проектирование и реализация REST API: работа с маршрутами,
                                        обработка HTTP-запросов, валидация данных, структура эндпоинтов и взаимодействие клиент–сервер
                                    </p>
                                }
                                isSkills={false}
                            />
                        </SkillCard>

                    </div>

                    <div className="embla__slide">
                        <SkillCard width="w-[350px] md:w-[600px]">
                            <SkillCardContent
                                title="Best practice"
                                content={
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="font-dmsans text-text text-[14px]">
                                            Придерживаюсь принципов SOLID, ООП и использую паттерны там, где это упрощает поддержку и развитие проекта
                                        </p>

                                        <p className="font-dmsans text-text text-[14px]">
                                            Проектирую приложения с учётом разделения ответственности,
                                            поддерживаемости и масштабируемости
                                        </p>
                                    </div>
                                }
                                isSkills={false}
                            />
                        </SkillCard>
                    </div>
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </div>
    )
}

export default EmblaCarouselMobile;