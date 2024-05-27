import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1 className="text-4xl font-semibold mb-8">Transaction not found</h1>
            <Link className="hover:underline" href='/dashboard'>Back to dashboard</Link>
        </>
    );
}