import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logo, logoWhite } = client;

  return (
    <div className="ud-single-logo mb-5 mr-10 bg-zinc-50 py-2 px-4 rounded-full transition-transform hover:scale-105">
      <Link href={link} target="_blank" rel="nofollow noopener">
        <div className="relative w-16 h-8 sm:w-18 sm:h-7 md:w-22 md:h-8 lg:w-28 lg:h-8  flex items-center justify-center">
          {/* Light mode logo */}
          <Image
            src={logo}
            alt={title}
            fill
            sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, (max-width: 1024px) 80px, (max-width: 1280px) 88px, 96px"
            className="object-contain dark:hidden"
          />

          {/* Dark mode logo (if you want to use logoWhite) */}
          {logoWhite && (
            <Image
              src={logoWhite}
              alt={title}
              fill
              sizes="(max-width: 640px) 64px, (max-width: 768px) 72px, (max-width: 1024px) 80px, (max-width: 1280px) 88px, 96px"
              className="object-contain hidden dark:block"
            />
          )}
        </div>
      </Link>
    </div>
  );
};

export default SingleClient;
