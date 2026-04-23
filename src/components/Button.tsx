type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  text: string;
  variant?: ButtonVariant;
  withIcon?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  withIcon = false,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-dmsans cursor-pointer uppercase rounded-[10px]";

  const variants = {
    primary:
      "h-[50px] px-[26px] gap-[15px] font-bold text-[16px] text-text",
    secondary:
      "h-[40px] px-[20px] font-medium text-[14px] bg-dark text-text",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span>{text}</span>
      {withIcon && variant === "primary" && (
        <img src="/src/assets/icons/green-arrow.svg" alt="Arrow icon" className="w-[27px] h-[27px]" />
      )}
    </button>
  );
};

export default Button;