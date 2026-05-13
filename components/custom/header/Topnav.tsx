'use client';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';

interface TopnavProps {
    onMobileMenuClick?: () => void;
}

const Topnav = ({ onMobileMenuClick }: TopnavProps) => {
    return (
        <div className="bg-[#000000] border-b border-[rgba(255,255,255,.15)] w-full">
            <div className="inner inner-header flex flex-row items-center justify-between min-h-[4.4rem] p-0">

                {/* Mobile logo */}
                <Link href="/" className="block lg:hidden float-left" aria-label="Professional Home Remodeling">
                    {/* [TODO: Replace with Professional Home Remodeling logo SVG] */}
                    <img src="/logos/logo-94.svg" alt="Professional Home Remodeling" className="block h-[3.6rem]" />
                </Link>

                {/* Phone number — centered on desktop */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <a
                        href="tel:5166365300"
                        className="flex items-center gap-2 text-[#F8CB3E] text-[1.4rem] font-light tracking-[.05rem] py-[2rem] no-underline transition-colors duration-[350ms] hover:text-[#ffe9a0]"
                    >
                        <Phone size={14} strokeWidth={2} />
                        <span>(516) 636-5300 Nassau &bull; (718) 316-9221 NYC &mdash; Free Estimates</span>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={onMobileMenuClick}
                    className="lg:hidden flex items-center justify-center ml-[1.3rem] bg-transparent border-0 cursor-pointer text-[#F8CB3E] p-[0.4rem]"
                    aria-label="Menu"
                >
                    <Menu size={30} strokeWidth={2.5} />
                    <em className="sr-only not-italic">Menu icon</em>
                </button>

            </div>
        </div>
    );
}

export default Topnav;
