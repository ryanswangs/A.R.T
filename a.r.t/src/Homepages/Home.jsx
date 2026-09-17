import { useState, useEffect } from "react";
import "./../artCss/Home.css";


//Exb examples
const exhibitions = [
    {
        title: "Low Tide",
        artist: "Maren Solberg",
        medium: "Oil and sand on linen",
        dates: "Sep 12 — Nov 2",
        img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Correspondence",
        artist: "Femi Adebayo",
        medium: "Ink, paper, found letters",
        dates: "Nov 14 — Dec 20",
        img: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Standing Water",
        artist: "Iris Kowalczyk",
        medium: "Cast glass and steel",
        dates: "Jan 9 — Feb 15",
        img: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1200&auto=format&fit=crop",
    },
];


function Home() {

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 60);
        return () => clearTimeout(t);
    }, []);


    return (

        <div className="gallery-page min-h-screen w-full">
            {/*Nav*/}
            <header className="gallery-header flex items-center justify-between px-6 md:px-12 py-6">
                <span className="gallery-serif text-lg tracking-wide">Halden House</span>
                <nav className="gallery-nav hidden sm:flex gap-8 text-sm">
                    <a href="#exhibitions" className="hover:opacity-70">Exhibitions</a>
                    <a href="#artists" className="hover:opacity-70">Artists</a>
                    <a href="#visit" className="hover:opacity-70">Visit</a>
                </nav>
            </header>

            {/*Hero*/}
            <section className="grid md:grid-cols-5 gap-10 px-6 md:px-12 pt-14 pb-16 items-end">
                <div className={`md:col-span-3 fade-up ${loaded ? "in" : ""}`}>
                    <p className="gallery-eyebrow text-sm mb-4">Now showing</p>
                    <h1 className="gallery-serif leading-[1.05] text-5xl md:text-7xl mb-6">
                        Low Tide
                    </h1>
                    <p className="gallery-copy max-w-md text-base leading-relaxed">
                        Maren Solberg spent three winters on the Norwegian coast, working oil
                        and sand into linen until the paintings held the texture of the shore
                        itself. Her first solo show runs through early November.
                    </p>
                    <a href="#exhibitions" className="gallery-cta inline-block mt-8 text-sm pb-1">
                        View the exhibition
                    </a>
                </div>
                <div className={`md:col-span-2 fade-up ${loaded ? "in" : ""}`} style={{ transitionDelay: "120ms" }}>
                    <img src={exhibitions[0].img} alt="Detail from Low Tide by Maren Solberg, oil and sand on linen" className="w-full h-[420px] object-cover" />
                </div>
            </section>

            {/*Exhibitions*/}
            <section id="exhibitions" className="gallery-section px-6 md:px-12 py-14">
                <h2 className="gallery-serif text-2xl mb-8">Upcoming exhibitions</h2>
                <div className="grid sm:grid-cols-3 gap-8">
                    {exhibitions.map((ex) => (
                        <div key={ex.title}>
                            <img src={ex.img} alt={`Work from ${ex.title} by ${ex.artist}`} className="w-full h-64 object-cover mb-4" />
                            <h3 className="gallery-serif text-xl">{ex.title}</h3>
                            <p className="gallery-artist text-sm mt-1">{ex.artist}</p>
                            <p className="gallery-meta text-sm mt-1">
                                {ex.medium} · {ex.dates}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/*Footer*/}
            <section id="exhibitions" className="gallery-section px-6 md:px-12 py-14">
                <h2 className="gallery-serif text-2xl mb-8">Upcoming exhibitions</h2>
                <div className="grid sm:grid-cols-3 gap-8">
                    {exhibitions.map((ex) => (
                        <div key={ex.title}>
                            <img src={ex.img} alt={`Work from ${ex.title} by ${ex.artist}`} className="w-full h-64 object-cover mb-4" />
                            <h3 className="gallery-serif text-xl">{ex.title}</h3>
                            <p className="gallery-artist text-sm mt-1">{ex.artist}</p>
                            <p className="gallery-meta text-sm mt-1">
                                {ex.medium} · {ex.dates}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Home;