import React from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
    text: string;
    variant?: ButtonVariant;
    withIcon?: boolean;
    className?: string;
    href: string;
    target?: "_blank" | "_self";
    rel?: string;
    download?: boolean | string;
};

const Button: React.FC<ButtonProps> = ({
    text,
    variant = "primary",
    withIcon = false,
    className = "",
    href,
    target,
    rel,
    download,
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-dmsans cursor-pointer uppercase rounded-[10px]";

    const variants = {
        primary: "h-[50px] px-[26px] gap-[15px] font-bold text-[16px] w-full md:w-auto",
        secondary: "h-[40px] px-[20px] font-medium text-[14px] bg-dark text-text",
    };

    const resolvedRel = target === "_blank"
        ? [rel, "noreferrer noopener"].filter(Boolean).join(" ")
        : rel;

    return (
        <a
            href={href}
            target={target}
            rel={resolvedRel}
            download={download}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            <span>{text}</span>
            {withIcon && variant === "primary" && (
                <img
                    src="/src/assets/icons/green-arrow.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-[27px] h-[27px]"
                />
            )}
        </a>
    );
};

export default Button;  