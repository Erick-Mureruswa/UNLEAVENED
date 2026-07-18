import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-uc flex min-h-[70vh] flex-col items-center justify-center pb-28 pt-36 text-center md:pt-48">
      <p className="label-uc mb-6 text-ash">404</p>
      <h1 className="font-serif text-4xl tracking-tight md:text-6xl">
        This doorway leads nowhere.
      </h1>
      <p className="mx-auto mt-8 max-w-md leading-relaxed text-charcoal">
        The page you are looking for does not exist, or has been intentionally
        removed.
      </p>
      <Link
        href="/"
        className="label-uc mt-12 inline-block border border-ink px-8 py-4 transition-colors duration-500 ease-luxe hover:bg-ink hover:text-bone"
      >
        Return Home
      </Link>
    </div>
  );
}
