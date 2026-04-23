const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-[40px]">
      {children}
    </div>
  );
};

export default Container;