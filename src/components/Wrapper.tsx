const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[20px] xl:px-[40px] overflow-hidden md:overflow-visible">
      {children}
    </div>
  );
};

export default Container;