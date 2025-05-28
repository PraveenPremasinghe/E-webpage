const SectionTitle = ({
  subtitle,
  title,
  paragraph,
  width = "735px",
  center,
}: {
  subtitle?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) => {
  return (
    <div className="mx-auto flex w-full flex-wrap justify-center px-4 sm:px-6 lg:px-8">
      <div
        className={`wow fadeInUp w-full px-4 ${
          center ? "mx-auto text-center" : ""
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        {subtitle && (
          <span className="mb-3 block text-center sm:mb-4">
            {/*<span*/}
            {/*  className="inline-block rounded-full bg-[#a122661a] px-4 py-1 text-sm font-medium text-primary sm:px-4 sm:py-1 sm:text-base md:text-[1rem]">*/}
            {/*  {subtitle}*/}
            {/*</span>*/}

            <div
              className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-950">
              <div
                className="mr-2 size-2 rounded-full bg-gradient-to-r from-[#a12266] via-[#a12266] to-[#FF7DAA]"></div>
              {subtitle}
            </div>
          </span>
        )}


        <h2 className="mb-3 text-center font-medium text-4xl text-zinc-950 tracking-tight lg:text-5xl"> {title}</h2>

        <p className="text-center text-lg text-zinc-500">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
