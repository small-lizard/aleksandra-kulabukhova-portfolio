import React from "react";
import Button from "../components/Button";
import burgerNav from "../assets/icons/burger-bar.svg";
import { useTranslation } from "react-i18next";

interface NavigationMenuProps {
    variant?: "header" | "footer";
    onBurgerClick?: () => void;
    isMobileMenuOpen?: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
    variant = "header",
    onBurgerClick,
    isMobileMenuOpen = false,
}) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const nextLang = i18n.language === "ru" ? "en" : "ru";
        i18n.changeLanguage(nextLang);
    };

    const navItems = [
        { label: t("nav.skills"), href: "#skills" },
        { label: t("nav.projects"), href: "#projects" },
        { label: t("nav.contacts"), href: "#contacts" },
    ];

    if (variant === "footer") {
        return (
            <nav aria-label="Навигация" className="w-full">
                <ul className="flex items-center w-full justify-between md:gap-[20px] md:justify-center list-none p-0 m-0">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Button text={item.label} href={item.href} variant="secondary" />
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }

    return (
        <nav aria-label="Основная навигация" className="flex items-center">
            {/* Mobile */}
            <div className="flex items-center md:hidden justify-between w-full">
                <button
                    onClick={toggleLanguage}
                    aria-label="Сменить язык"
                    className="h-[40px] px-[20px] font-dmsans font-medium text-[14px] bg-dark text-text uppercase rounded-[10px] cursor-pointer"
                >
                    {i18n.language === "ru" ? "EN" : "RU"}
                </button>

                <button
                    onClick={onBurgerClick}
                    aria-label="Открыть меню"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                    className="h-[40px] flex items-center justify-center rounded-[10px] w-[44px] border-[1px] border-light"
                >
                    <img src={burgerNav} alt="" aria-hidden="true" className="w-[20px] h-auto" />
                </button>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center justify-between w-full">
                <button
                    onClick={toggleLanguage}
                    aria-label="Сменить язык"
                    className="h-[40px] px-[20px] font-dmsans font-medium text-[14px] bg-dark text-text uppercase rounded-[10px] cursor-pointer"
                >
                    {i18n.language === "ru" ? "EN" : "RU"}
                </button>

                <ul className="flex items-center justify-between md:gap-[20px] list-none p-0 m-0">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Button text={item.label} href={item.href} variant="secondary" />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavigationMenu;