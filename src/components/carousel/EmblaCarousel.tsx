import useEmblaCarousel from 'embla-carousel-react'
import pinkPyramid from "../../assets/icons/pink-pyramid.svg";
import whiteStar from "../../assets/icons/white-star.svg";
import greenCrosses from "../../assets/icons/green-crosses.svg";
import violetFlower from "../../assets/icons/violet-flower.svg";
import { NextButton, PrevButton, usePrevNextButtons} from './EmblaCarouselArrowButtons'
import SkillCard from '../SkillCard'
import SkillCardBlock from '../SkillCardBlock'

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const frontendSkills = ["HTML5", "CSS3", "JS", "TS", "React", "Redux Toolkit", "i18n", "React Hook Form"];
    const backendSkills = ["Node.js", "Express", "MongoDB", "Resend", "Session Authentication"];
    const infrastructureSkills = ["Docker", "Vercel", "Render", "MongoDB Atlas"];

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide" >
                        <SkillCard isActive>
                            <div className="flex flex-col gap-[80px] h-full">
                                <div className="flex justify-between">
                                    <img src={whiteStar} alt="" />
                                </div>


                                <div>
                                    <h3 className="font-dmsans font-semibold text-[20px] text-text mb-[30px]">
                                        Frontend
                                    </h3>


                                    <div className="flex flex-wrap gap-[10px]">
                                        {frontendSkills.map((skill) => (
                                            <SkillCardBlock key={skill} text={skill} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SkillCard>
                    </div>

                    <div className="embla__slide" >
                        <SkillCard>
                            <div className="flex flex-col gap-[80px] h-full">
                                <div className="flex justify-between">
                                    <img src={greenCrosses} alt="" />
                                </div>


                                <div>
                                    <h3 className="font-dmsans font-semibold text-[20px] text-text mb-[30px]">
                                        Backend
                                    </h3>


                                    <div className="flex flex-wrap gap-[10px]">
                                        {backendSkills.map((skill) => (
                                            <SkillCardBlock key={skill} text={skill} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SkillCard>
                    </div>

                    <div className="embla__slide" >
                        <SkillCard>
                            <div className="flex flex-col gap-[80px] h-full">
                                <div className="flex justify-between">
                                    <img src={pinkPyramid} alt="" />
                                </div>


                                <div>
                                    <h3 className="font-dmsans font-semibold text-[20px] text-text mb-[30px]">
                                        Infrastructure
                                    </h3>


                                    <div className="flex flex-wrap gap-[10px]">
                                        {infrastructureSkills.map((skill) => (
                                            <SkillCardBlock key={skill} text={skill} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SkillCard>
                    </div>

                    <div className="embla__slide" >
                        <div className="w-[270px] h-[440px] flex items-center justify-center">
                            <img src={violetFlower} alt="" />
                        </div>
                    </div>

                    <div className="embla__slide" >
                        <SkillCard>
                            <div className="flex flex-col justify-between h-full">
                                <h3 className="font-dmsans font-semibold text-[20px] text-text">
                                    REST API
                                </h3>

                                <p className="font-dmsans text-[#EEEEEE] text-[16px]">
                                    Проектирование и реализация REST API: работа с маршрутами,
                                    обработка HTTP-запросов, валидация данных, структура эндпоинтов и взаимодействие клиент–сервер
                                </p>
                            </div>
                        </SkillCard>

                    </div>
                    <div className="embla__slide">
                        <SkillCard width="w-[600px]">
                            <div className="flex flex-col justify-between h-full">
                                <h3 className="font-dmsans font-semibold text-[20px] text-text">
                                    Best practice
                                </h3>
                                <div className="flex flex-col gap-[23px]">
                                    <p className="font-dmsans text-text text-[16px]">
                                        Придерживаюсь принципов SOLID, ООП и использую паттерны там, где это упрощает поддержку и развитие проекта
                                    </p>

                                    <p className="font-dmsans text-text text-[16px]">
                                        Проектирую приложения с учётом разделения ответственности,
                                        поддерживаемости и масштабируемости
                                    </p>
                                </div>
                            </div>
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

export default EmblaCarousel
