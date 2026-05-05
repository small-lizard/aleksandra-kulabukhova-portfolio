import useEmblaCarousel from 'embla-carousel-react'
import pinkPyramid from "../../assets/icons/pink-pyramid.svg";
import whiteStar from "../../assets/icons/white-star.svg";
import greenCrosses from "../../assets/icons/green-crosses.svg";
import violetFlower from "../../assets/icons/violet-flower.svg";
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import SkillCard from '../SkillCard'
import SkillCardContent from '../SkillCardContent'
import { useTranslation } from "react-i18next";

const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const { t } = useTranslation();

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const frontendSkills = ["HTML5", "CSS3", "JS", "TS", "React", "Redux Toolkit", "i18n", "React Hook Form", "Tailwind"];
    const backendSkills = ["Node.js", "Express", "MongoDB", "Resend", "Session Authentication",];
    const infrastructureSkills = ["Docker", "Vercel", "Render", "MongoDB Atlas"];

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide" >
                        <div className="md:w-[80px] lg:w-[200px] xl:w-[260px]"></div>
                    </div>

                    <div className="embla__slide" >
                        <SkillCard isActive>
                            <SkillCardContent
                                title="Frontend"
                                icon={whiteStar}
                                skills={frontendSkills}
                            />
                        </SkillCard>
                    </div>

                    <div className="embla__slide" >
                        <div className='flex gap-[20px]'>
                            <SkillCard>
                                <SkillCardContent
                                    title="Backend"
                                    icon={greenCrosses}
                                    skills={backendSkills}
                                />
                            </SkillCard>

                            <SkillCard>
                                <SkillCardContent
                                    title="Infrastructure"
                                    icon={pinkPyramid}
                                    skills={infrastructureSkills}
                                />
                            </SkillCard>
                        </div>

                    </div>

                    <div className="embla__slide" >
                        <div className='flex gap-[20px]'>
                            <div className="w-[270px] flex items-center justify-center">
                                <img src={violetFlower} alt="" />
                            </div>
                            <SkillCard>
                                <SkillCardContent
                                    title="REST API"
                                    content={
                                        <p className="font-dmsans text-text text-[16px]">
                                            {t("other.api")}
                                        </p>
                                    }
                                    isSkills={false}
                                />
                            </SkillCard>
                        </div>

                    </div>

                    <div className="embla__slide">
                        <SkillCard width="w-[310px] md:w-[600px]">
                            <SkillCardContent
                                title="Best practice"
                                content={
                                    <div className="flex flex-col gap-[20px]">
                                        <p className="font-dmsans text-text text-[16px]">
                                            {t("other.principles")}
                                        </p>

                                        <p className="font-dmsans text-text text-[16px]">
                                            {t("other.principles_2")}
                                        </p>
                                    </div>
                                }
                                isSkills={false}
                            />
                        </SkillCard>
                    </div>

                    <div className="embla__slide" >
                        <div className="xl:w-[80px]">
                        </div>
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

export default EmblaCarousel;