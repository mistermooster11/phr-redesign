import Link from 'next/link';

const quickLinks = [
  {
    label: 'Free Estimate',
    href: '/contact-us',
    filled: true,
  },
  {
    label: 'Our Work',
    href: '/gallery',
    filled: false,
  },
  {
    label: 'Reviews',
    href: '/general-faqs',
    filled: false,
  },
];

interface SocialLinksProps {
  /** 'row' = horizontal (Topnav desktop), 'column' = vertical (MobileNav) */
  layout?: 'row' | 'column';
  onClick?: () => void;
}

export default function SocialLinks({ layout = 'row', onClick }: SocialLinksProps) {
  return (
    <ul
      className={[
        'list-none p-0 m-0 text-[0]',
        layout === 'row' ? 'flex items-center' : 'flex flex-col',
      ].join(' ')}
    >
      {quickLinks.map((s, i) => (
        <li
          key={s.label}
          className={[
            'inline-block font-medium',
            layout === 'row' && i !== 0 ? 'ml-[1.5rem]' : '',
            layout === 'column' && i !== 0 ? 'mt-[1.2rem]' : '',
          ].join(' ')}
        >
          <Link
            href={s.href}
            onClick={onClick}
            className={[
              'text-4xl! md:text-xl! inline-flex items-center gap-2',
              'text-[1.4rem] leading-[1.4] no-underline whitespace-nowrap',
              'px-[1.2rem] py-[1rem] border border-[#F8CB3E] rounded-[2px]',
              'transition-[background,color,border-color] duration-350',
              'hover:bg-[#F8CB3E] hover:text-black hover:border-[#F8CB3E]',
              s.filled ? 'bg-[#F8CB3E] text-black' : 'bg-transparent text-[#F8CB3E]',
            ].join(' ')}
          >
            {s.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
