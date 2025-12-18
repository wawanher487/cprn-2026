import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
return (
    <div className="relative min-h-screen w-full">
        {/* BACKGROUND IMAGE */}
        <Image
            src="/404.png"
            alt="404 Page Not Found"
            fill
            priority
            className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="heading-1 mt-4">
            Page Not Found
            </h1>

            <p className="body-text mt-4 max-w-md opacity-90">
            The page you are looking for might_attach have been removed or is temporarily unavailable.
            </p>

            <Link
            href="/"
            className="mt-8 rounded-md bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent/90"
            >
            Back to Home
            </Link>
        </div>
    </div>
);
}
