import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0078D4 0%, #005A9E 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, white 20px, white 21px)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/70">
            Error 404
          </p>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Sorry, the page you are looking for does not exist or has been moved.
            Let us help you find what you need.
          </p>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Here are some helpful links
          </h2>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Go Home
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center border-2 border-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center border-2 border-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
