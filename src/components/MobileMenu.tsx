import React, { useEffect } from "react";
import cross from "../assets/icons/cross.svg";
import Button from "./Button";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Навыки", href: "#skills" },
    { label: "Проекты", href: "#projects" },
    { label: "Контакты", href: "#contacts" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleNavClick = (href: string) => {
        const el = document.querySelector(href);
        if (!el) return;
        onClose();
        el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
            aria-hidden={!isOpen}
            className={`
                fixed inset-0 z-[1000] bg-primary flex flex-col p-[20px]
                transition-opacity duration-300
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
        >
            <div className="flex justify-end">
                <button
                    onClick={onClose}
                    aria-label="Закрыть меню"
                    className="h-[40px] flex items-center justify-center rounded-[10px] w-[44px] border-[1px] border-light"
                >
                    <img src={cross} alt="" aria-hidden="true" className="w-[20px] h-auto" />
                </button>
            </div>

            <ul className="mt-[120px] flex flex-col gap-[15px] list-none p-0 m-0">
                {menuItems.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                            className="font-dmsans text-text uppercase text-[32px] font-bold text-left block"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex flex-col items-center gap-[20px]">
                <Button
                    text="GitHub"
                    href="https://github.com/small-lizard"
                    target="_blank"
                    className="text-dark bg-light font-bold w-full"
                />
                <Button
                    text="Download CV"
                    href="/cv.pdf"
                    download
                    className="text-dark bg-accent font-bold w-full"
                />
            </div>
        </nav>
    );
};

export default MobileMenu;