import React from "react";

type FeatureCardProps = {
  title: string;
  text: string;
  index: string | React.ReactNode;
  image?: string;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  text,
  index,
  image,
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col rounded-[20px] bg-dark text-text
        h-[200px] md:h-[250px] sm:p-[20px]
        xl:h-[280px]
        xl:p-[40px]
        ${className}`}
    >
      <div className="flex justify-between items-start mb-[20px]">
        <h3 className="font-dmsans font-semibold 
          text-[18px] lg:text-[20px]">
          {title}
        </h3>

        <span className="font-dmsans font-semibold text-text-secondary 
          text-[18px] lg:text-[20px]">
          {index}
        </span>
      </div>

      <div className={`mt-auto ${image ? "md:pr-[53%] lg:pr-[53%] xl:pr-[48%]" : ""}`}>
        <p className="font-dmsans text-[14px] lg:text-[16px]">
          {text}
        </p>
      </div>

      {image && (
        <img
          src={image}
          alt={title}
          className="absolute bottom-0 z-10 h-[200px] w-auto rounded-tl-[10px] rounded-tr-[10px] right-[20px] xl:right-[40px] hidden md:block"
        />
      )}
    </div>
  );
};

export default FeatureCard;