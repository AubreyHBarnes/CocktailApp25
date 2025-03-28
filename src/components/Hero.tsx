import Image from "next/image";
import Navbar from "./Navbar";


export default function Hero() {
    
    return (
        <section className="hero-container bg-center bg-no-repeat bg-cover w-full min-h-[20rem] relative">
            <Navbar />
            <header className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-dvh max-h-[35rem] relative">
                {/* <!-- Overlay Background + Center Control --> */}
            <div className="h-full bg-black/50 flex items-center justify-center tracking-wide">
                <div className="mx-2 text-center">
                <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                    Mixr
                </h1>
                <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
                    Try something new, on the house
                </h2>
                    <div className="inline-flex">
                        <button className="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">Search</button>
                        
                    </div>
                </div>
            </div>
            </header>
        </section>
    );
}


	

// 	

