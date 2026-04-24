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
        md:h-[250px] md:p-[20px]
        xl:h-[280px]
        xl:p-[40px]
        ${className}`}
    >
      <div className="flex justify-between items-start mb-[20px]">
        <h3 className="font-dmsans font-semibold 
          md:text-[18px] lg:text-[20px]">
          {title}
        </h3>

        <span className="font-dmsans font-semibold text-text-secondary 
          md:text-[18px] lg:text-[20px]">
          {index}
        </span>
      </div>

      <div className={`mt-auto ${image ? "md:pr-[53%] lg:pr-[53%] xl:pr-[48%]" : ""}`}>
        <p className="font-dmsans 
          md:text-[14px] lg:text-[16px]">
          {text}
        </p>
      </div>

      {image && (
        <img
          src={image}
          alt={title}
          className="absolute bottom-0 z-10 h-[200px] w-auto rounded-tl-[10px] rounded-tr-[10px]
            md:right-[20px] lg:right-[40px]"
        />
      )}
    </div>
  );
};

export default FeatureCard;