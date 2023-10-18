type HomeTemplateProps = {
  styledTitle: string;
  headerText: string;
  peragraphText: string;
};
const Texts = ({
  styledTitle,
  headerText,
  peragraphText,
}: HomeTemplateProps) => {
  return (
    <div>
      <div className="lg:basis-1/2 basis-full">
        <div className="space-y-8 text-start ">
          <div className="flex gap-2 items-center">
            <h1 className="lg:text-5xl text-white  text-3xl font-bold leading-[1.2] ">
              {headerText}
            </h1>
            <span className="lg:text-5xl  text-3xl text-center space-y-2 bg-gradient-to-r text-transparent bg-clip-text from-[#fcff2f] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#f9ff40] leading-10">
              {styledTitle}
            </span>
          </div>
          <p className="text-sm text-justify">{peragraphText}</p>
        </div>
      </div>
    </div>
  );
};

export default Texts;
