import { useEffect } from 'react';

export default function ParallaxIntro() {


  return (
    <>
      <div className="relative h-screen w-full">
      {/* Background image */}
        <div className="absolute inset-0">
        <img
          src="/sample-image.jpg"
          alt="Mask background"
          className="object-cover"
        />
      </div>

        {/* Text mask container */}
        <div className="relative h-full w-full flex items-center justify-center">
        <div className="mask-text">
          <h1 className="text-8xl md:text-[12rem] font-bold">PRAVEEN</h1>
        </div>
      </div>

      <style jsx>{`
          .mask-text {
              -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='100%'><text x='50%' y='50%' font-size='120' font-weight='700' text-anchor='middle' dominant-baseline='middle'>PRAVEEN</text></svg>");
              mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='100%'><text x='50%' y='50%' font-size='120' font-weight='700' text-anchor='middle' dominant-baseline='middle'>PRAVEEN</text></svg>");
              -webkit-mask-repeat: no-repeat;
              mask-repeat: no-repeat;
              -webkit-mask-position: center;
              mask-position: center;
              width: 100%;
              height: 100%;
              background-image: url('/sample-image.jpg');
              background-size: cover;
              background-position: center;
          }
      `}</style>
    </div>
      </>
  );
}
