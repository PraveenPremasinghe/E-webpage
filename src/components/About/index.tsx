import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="we-offer-section-bg pb-28 pt-10 dark:bg-dark sm:pt-24 md:pt-32"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-2/3">
              <div className=" mx-10">
                <img
                  src="/images/products/email-cover.png"
                  alt="Actogo ERP"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/3">
              <div className="  lg:mb-0">
                <h2 className="mb-5 text-3xl font-medium   leading-tight dark:text-white sm:text-[38px] sm:leading-[1.2]">
                  Actogo{" "}
                  <span className="font-semibold text-primary"> #Edhirya </span>
                  IT’s flagship ERP platform
                </h2>
                <p className="mb-10 text-base font-light leading-relaxed text-body-color dark:text-dark-6">
                  Actogo is Edhirya IT’s flagship ERP platform — a powerful,
                  AI-powered solution that helps businesses orchestrate
                  operations, automate workflows, and unlock actionable
                  insights. Inspired by platforms like Odoo but designed with
                  adaptability at its core, Actogo supports full customization
                  and rapid deployment.
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white duration-300 hover:bg-primary/90"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
