'use client';

import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  title: string;
  href: string;
};

const SidebarItem: React.FC<Props> = ({ title, href }) => {
  const pathname = usePathname();

  return (
    <div>
      <Link
        href={href}
        className={twMerge(
          `text-3xl py-4  mb-5 w-52 rounded-full tracking-wide block font-bold cursor-pointer text-center`,
          href === pathname && 'press-nueumorphism'
        )}
      >
        {title}
      </Link>
    </div>
  );
};

export default SidebarItem;
