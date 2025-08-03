// import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className='mx-auto flex max-w-[696px] items-center justify-between gap-4 p-6 md:mt-12'>
      <Link
        className='relative -left-2 inline-block origin-center text-4xl outline-none transition-all hover:-rotate-12 focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-accent active:scale-95'
        href='/'
      >
        {/* <Image loading='lazy' width='48' height='48' className='brightness-[1.6]' style={{ color: "transparent" }} /> */}
      </Link>
      <ul className='flex gap-6'>
        <li>
          <Link className='text-link text-link-hover text-right' href='/journal'>
            Journal
          </Link>
        </li>
        <li>
          <Link className='text-link text-link-hover text-right' href='/#projects'>
            Projects
          </Link>
        </li>
        <li>
          <Link className='text-link text-link-hover text-right' href='/friends'>
            Friends
          </Link>
        </li>
      </ul>
    </nav>
  );
}
