import { headers } from "next/headers";
import Image from "next/image";
import { JSX } from "react";

type SpecialtyDrinkProps = {  
    
    specialtyHeader: string,
    drinks: object[]
}

export default function Specialties(props: {children: SpecialtyDrinkProps}) {
    // console.log(props.drinks[9].strDrinkThumb)
    let sixSpecialties = props.drinks.slice(0, 6);
    let specialtyImg = sixSpecialties[1].strDrinkThumb;
    return(
        <section className="w-screen max-w-screen -mx-8 bg-cyan-600">
            <div className="specialtiesHeaderContainer bg-center bg-no-repeat bg-cover w-full h-[600px] max-h-[600px] overflow-hidden flex flex-col justify-center relative">
                <h2 className="text-gray-100 py-8 font-extrabold text-4xl xs:text-5xl md:text-6xl absolute bottom-0 left-[50%] -translate-x-[50%]">Our Specialties</h2>
                
            </div>
            <div className="specialtiesGridContainer flex flex-col md:flex-row md:flex-wrap max-w-[1200px] m-auto">
                {sixSpecialties.map((specialDrink, index) => (
                    <div key={index} className="specialtyDrinkWrapper flex flex-col items-center md:flex-row md:w-1/2 bg-white">
                        <div className="specialtyImgContainer h-full w-full md:w-1/2">
                            <Image 
                                src={specialDrink.strDrinkThumb}
                                alt={specialDrink.strDrink}
                                width={400}
                                height={400}
                                className="w-full h-auto md:w-auto md:h-full object-cover"
                            />
                        </div>
                        <div className="specialtyDataContainer p-8 md:p-4 text-center md:w-1/2 flex flex-col justify-center">
                            <p className="specialtyDrinkName uppercase font-(family-name:--font-fjalla-one) text-2xl pb-4">{specialDrink.strDrink}</p>
                            <p className="specialtyDrinkInstructions text-gray-600">{specialDrink.strInstructions}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </section>
    );
}

