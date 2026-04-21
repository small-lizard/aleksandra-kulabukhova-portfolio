import React from "react";

type FeatureCardProps = {
  title: string;
  text: string;
  index: number | string;
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
      className={`relative flex flex-col p-[40px] rounded-[20px] bg-dark text-text ${className}`}
    >
      <div className="flex justify-between items-start mb-[20px]">
        <h3 className="font-dmsans text-[20px] font-semibold text-text">
          {title}
        </h3>

        <span className="font-dmsans text-[20px] font-semibold text-text-secondary">
          {index}
        </span>
      </div>

      <div className="mt-auto pr-[120px]">
        <p className="font-dmsans text-[16px] text-text">
          {text}
        </p>
      </div>

      {image && (
        <img
          src={image}
          alt={title}
          className="absolute bottom-0 right-[40px] z-10"
        />
      )}
    </div>
  );
};

export default FeatureCard;