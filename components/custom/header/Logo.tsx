'use client';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  isFixed?: boolean;
  isLoaded?: boolean;
}

const Logo = ({ isFixed = false, isLoaded = false }: LogoProps) => {
  return (
    <div
      className={[
        "overflow-hidden transition-[width,height] duration-350 shrink-0",
        isFixed ? "w-32 h-32" : "w-46 h-46",
      ].join(" ")}
    >
      <Link
        href="/"
        className={[
          "block transition-[opacity,transform] duration-[800ms]",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-[50px]",
        ].join(" ")}
      >
        <span className="sr-only">Professional Home Remodeling Inc.</span>
        <Image
          className="w-full h-full object-contain"
          src="https://www.phr-ny.com/images/professional_logo_WEB_copy3.jpg"
          alt="Professional Home Remodeling Inc. logo"
          width={200}
          height={200}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;