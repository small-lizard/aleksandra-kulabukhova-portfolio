import React from "react";
import Button from "../components/Button";

const navItems = ["Навыки", "Проекты", "Контакты"];

interface NavigationMenuProps {
    withLangButton?: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
    withLangButton = true,
}) => {
    return (
        <div className="flex items-center justify-between">
            {withLangButton && (
                <Button text="RU" variant="secondary" />
            )}

            <div className="flex items-center gap-[20px]">
                {navItems.map((item) => (
                    <Button
                        key={item}
                        text={item}
                        variant="secondary"
                    />
                ))}
            </div>
        </div>
    );
};

export default NavigationMenu;