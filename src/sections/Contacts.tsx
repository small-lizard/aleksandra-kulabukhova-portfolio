import React from "react";
import Button from "../components/Button";
import greenArrow from "../assets/icons/green-arrow.svg";
import Container from "../components/Wrapper";
import NavigationMenu from "../components/Navigation";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";
import i18n from "../i18n";
import resumeEn from "../assets/resumes/resume-en.pdf";
import resumeRu from "../assets/resumes/resume-ru.pdf";

interface ContactBlockProps {
    label: string;
    value: string;
    href: string;
}

const ContactBlock: React.FC<ContactBlockProps> = ({ label, value, href }) => {
    const isLong = href.startsWith("mailto:");

    return (
        <div className="flex flex-col gap-[5px] md:gap-[15px] text-text">
            <p className="font-dmsans text-[16px] md:text-[20px]">
                {label}
            </p>
            <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className={`${isLong ? "contact-link-long" : "contact-link"} underline font-dmsans font-bold text-[20px] md:text-[32px] transition-opacity block w-full md:w-auto md:inline-block`}
            >
                {value}
            </a>
        </div >
    );
};

const Contacts: React.FC = () => {
    const { t } = useTranslation();
    const { ref, cls } = useScrollReveal(['heading', 'contacts', 'btn']);

    const resumeLinks = {
        en: resumeEn,
        ru: resumeRu,
    };

    const contacts = [
        { label: "Telegram", value: "@small-lizard", href: "https://t.me/small_lizard" },
        { label: "WhatsApp", value: "+79288825399", href: "https://api.whatsapp.com/send?phone=79288825399" },
        { label: "Email", value: "a.kulabukhova001@gmail.com", href: "mailto:a.kulabukhova001@gmail.com" },
    ];

    const lang = (i18n.resolvedLanguage ?? "ru") as "en" | "ru";

    const resumeLink = resumeLinks[lang];

    return (
        <footer>
            <Container>
                <h2
                    ref={ref('heading')}
                    className={cls('heading', '')}
                    style={{ animationDelay: '100ms' }}
                    id="contacts">
                    {t("nav.contacts")}
                </h2>

                <div ref={ref('contacts')}
                    className={cls('contacts', 'relative flex flex-col bg-primary rounded-[24px] gap-[30px] mb-[40px] overflow-hidden p-[20px] justify-between md:p-[60px] md:gap-[120px] xl:px-[100px]')}
                    style={{ animationDelay: '300ms' }}>

                    <img
                        src={greenArrow}
                        alt=""
                        aria-hidden="true"
                        className="absolute bottom-[-20px] pointer-events-none w-[180px] h-[180px] md:left-[60px] xl:left-[100px] hidden md:block"
                    />

                    <div className="flex justify-between flex-wrap gap-[30px] md:gap-[40px] xl:flex-nowrap">
                        {contacts.map((contact) => (
                            <ContactBlock
                                key={contact.label}
                                label={contact.label}
                                value={contact.value}
                                href={contact.href}
                            />
                        ))}
                    </div>

                    <div className="flex items-center justify-end gap-[20px] flex-col md:flex-row">
                        <Button
                            text="GitHub"
                            href="https://github.com/small-lizard"
                            target="_blank"
                            className="text-dark bg-light font-bold w-full md:w-auto"
                        />
                        <Button
                            text={t("other.button_footer")}
                            href={resumeLink}
                            download
                            className="text-dark bg-accent font-bold w-full md:w-auto"
                        />
                    </div>
                </div>

                <div ref={ref('btn')} className={cls('btn', 'flex items-center w-full mb-[40px] md:mb-[60px]')}
                    style={{ animationDelay: '100ms' }}>
                    <NavigationMenu variant="footer" />
                </div>
            </Container>
        </footer>
    );
};

export default Contacts;