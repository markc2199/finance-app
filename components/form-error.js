export default function FormError({ error }) {
    return (
        error && <p className="mb-1 text-red-500">{error.message}</p>
    );
}