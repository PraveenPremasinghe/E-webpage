import React from "react";

const PreLoader = () => {
  return (
    <div
      className="fixed left-0 top-0 z-[999999] flex h-screen w-screen flex-col items-center justify-center bg-white gap-4">

      <img src="/images/logo/edhirya-it-logo.png" alt="Logo" className="w-[80vw] h-[40vh]" />


      <div
        className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
</div>

  );
};

export default PreLoader;
