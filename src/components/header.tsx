import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0">
      <Link href="/" >
        <a className="text-2xl font-bold text-white">Vercel Blog</a>
      </Link>
    </header>
  );
}