import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto my-20 flex max-w-xl flex-col items-center gap-4 px-4 text-center">
      <h2 className="font-playfair text-3xl font-bold text-ink">Page not found</h2>
      <p className="text-ink/70">The page you are looking for does not exist.</p>
      <Link href="/" className="btn">
        Back to home
      </Link>
    </div>
  );
}
