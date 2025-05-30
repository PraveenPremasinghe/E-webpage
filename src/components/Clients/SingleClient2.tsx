import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient2 = ({ client }: { client: Client }) => {
  const { title, link, logo, logoWhite } = client;

  return (
    <div className="ud-single-logo mb-5 mr-10  p-4 rounded-full transition-transform hover:scale-105">
      <Link href={link} target="_blank" rel="nofollow noopener">
        <div className="relative w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 xl:w-40 xl:h-20 flex items-center justify-center">
          {/* Light mode logo */}
          <Image
            src={logo}
            alt={title}
            fill
            sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, (max-width: 1280px) 144px, 160px"
            className="object-contain dark:hidden"
          />

          {/* Dark mode logo (if you want to use logoWhite) */}
          {logoWhite && (
            <Image
              src={logoWhite}
              alt={title}
              fill
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, (max-width: 1280px) 144px, 160px"
              className="object-contain hidden dark:block"
            />
          )}
        </div>
      </Link>
    </div>
  );
};

export default SingleClient2;
