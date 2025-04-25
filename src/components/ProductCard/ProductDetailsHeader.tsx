export default function ProductDetailsHeader() {

  return (
    <>
      <section className="pt-32 dark:bg-dark">
        <div
          className="container relative w-full overflow-hidden rounded-[2rem] bg-black p-6
 text-white sm:p-24"
        >
          <img
            src="/images/glows/glow-vector.png"
            alt="Glow Effect"
            className="pointer-events-none absolute right-[-100px] top-[-100px] z-0 w-[1000px] opacity-50 md:w-[1000px]"
          />

          {/* Bottom-left Warm Vector */}
          <img
            src="/images/glows/warm-vector.png"
            alt="Warm Vector"
            className="pointer-events-none absolute bottom-[-100px] left-[-100px] z-0 w-[1200px] opacity-60 md:w-[1200px]"
          />

          {/* Noise Overlay */}
          <div className="absolute inset-0 z-0 opacity-50 mix-blend-soft-light">
            <img
              src="/images/glows/noise-wide.png"
              alt="Noise"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:items-center">
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="w-[300px]">
                <img
                  src="/images/logo/edhirya-it-logo.webp"
                  alt="AI Brain"
                  className="h-auto w-full object-contain"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white md:text-3xl">
                Revolutionizing AI Solutions
              </h3>
              <p className="mt-3 text-base text-gray-300 md:text-lg">
                Discover our innovative AI brain technology that’s shaping
                industries through intelligent automation and smarter systems.
              </p>
              <div className="mt-10">
                <button className="ai-button">Get Started ,</button>
              </div>
            </div>

            <div className="w-full lg:w-1/2"></div>
          </div>

          <div className="absolute bottom-[-48px] right-[-30px] w-[600px] md:w-[350px] lg:w-[650px] ">
            <div className="modern-image-mask rounded-tl-[30px] border-l border-t border-white border-opacity-30 bg-white/20 p-4">
              <img
                src="/images/hero/email-cover2.png"
                alt="AI Brain"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
