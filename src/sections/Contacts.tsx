import React from "react";
import Button from "../components/Button";
import greenArrow from "../assets/icons/green-arrow.svg";
import Container from "../components/Wrapper";
import NavigationMenu from "../components/Navigation";

interface ContactBlockProps {
    label: string;
    value: string;
}

const ContactBlock: React.FC<ContactBlockProps> = ({ label, value }) => {
    return (
        <div className="flex flex-col gap-[15px] text-text">
            <p className="font-dmsans text-[20px]">
                {label}
            </p>
            <p className="font-dmsans font-bold text-[32px]">
                {value}
            </p>
        </div>
    );
};

const Contacts: React.FC = () => {
    const contacts = [
        { label: "Telegram", value: "@small-lizard" },
        { label: "WhatsApp", value: "+79288825399" },
        { label: "Email", value: "kulabukhova.alex@gmail.com" },
    ];

    return (
        <Container>
            <h2>
                Контакты
            </h2>

            <div className="relative flex flex-col gap-[120px] 
                bg-primary rounded-[24px] min-h-[380px] 
                py-[60px] mb-[40px] overflow-hidden
                md:px-[60px] xl:px-[100px]">

                <img
                    src={greenArrow}
                    alt="Decorative background icon"
                    className="absolute bottom-[-20px] pointer-events-none w-[180px] h-[180px] md:left-[60px] xl:left-[100px]"
                />

                <div className="flex justify-between flex-wrap gap-[40px] xl:flex-nowrap">
                    {contacts.map((contact) => (
                        <ContactBlock
                            key={contact.label}
                            label={contact.label}
                            value={contact.value}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-end gap-[20px]">
                    <Button
                        text="GitHub"
                        className="uppercase rounded-[10px] text-dark bg-light font-bold"
                    />
                    <Button
                        text="Download CV"
                        className="uppercase rounded-[10px] text-dark bg-accent font-bold"
                    />
                </div>
            </div>

            <div className="flex items-center justify-center mb-[60px]">
                <NavigationMenu withLangButton={false} />
            </div>
        </Container>
    );
};

export default Contacts;