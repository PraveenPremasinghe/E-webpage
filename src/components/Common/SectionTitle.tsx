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
    <div className="-mx-4 flex flex-wrap justify-center">
      <div
        className={`wow fadeInUp w-full px-4 ${
          center ? "mx-auto text-center" : ""
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        {subtitle && (
          <span className="mb-4 block  text-center">
          <span className="rounded-full bg-[#a122661a] font-medium px-4 py-1  text-[20px] text-primary "> {subtitle}</span>
          </span>
        )}
        <h2 className="mb-4 text-center text-[42px] font-bold  leading-tight text-dark dark:text-white">
          {title}
        </h2>
        <p className="text-center text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
