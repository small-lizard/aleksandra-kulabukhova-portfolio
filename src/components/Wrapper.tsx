const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto xl:px-[40px] lg:px-[20px]">
      {children}
    </div>
  );
};

export default Container;