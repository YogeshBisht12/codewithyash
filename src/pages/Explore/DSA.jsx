import RippleCanvas from "../../components/RippleCanvas";

export default function DSA() {
    return (
    <section className="relative bg-[#0D1117] min-h-screen text-white flex flex-col items-center justify-center overflow-hidden">
        <RippleCanvas />
        <h1 className="text-5xl font-bold mb-6">🚀 DSA Problems</h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl">
        Explore handpicked DSA problems categorized by difficulty, company tags, and patterns.
        </p>
    </section>
    );
}
