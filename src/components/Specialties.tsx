import { headers } from "next/headers";
import Image from "next/image";
import { JSX } from "react";

type SpecialtyDrinkProps = {  
    
    specialtyHeader: string,
    drinks: object[]
}

export default function Specialties(props: {children: SpecialtyDrinkProps}) {
    // console.log(props.drinks[9].strDrink)
    // let sixSpecialties = props.drinks.slice(0, 6);
    // console.log(sixSpecialties)
    return(
        <section className="w-screen max-w-screen -mx-8">
            <div className="specialtiesHeaderContainer bg-center bg-no-repeat bg-cover w-full h-[600px] max-h-[600px] overflow-hidden flex flex-col justify-center relative">
                <h2 className="text-gray-100 py-8 font-extrabold text-4xl xs:text-5xl md:text-6xl absolute bottom-0 left-[50%] -translate-x-[50%]">Our Specialties</h2>
                {/* <Image 
                    src={props.specialtyHeader.urls.full}
                    alt={props.drinks[0].strDrink}
                    width={1440}
                    height={500}
                    className="w-full h-auto"
                /> */}
            </div>
            <div className="specialtiesGridContainer">
                <div className="specialtyDrinkWrapper flex flex-row">
                    <div className="specialtyImgContainer">
                        <Image 
                            src={props.drinks[0].strDrinkThumb}
                            alt={props.drinks[0].strDrink}
                            width={400}
                            height={400}
                            className=""
                        />
                    </div>
                    <div className="specialtyDataContainer">
                        <p className="specialtyDrinkName">{props.drinks[0].strDrink}</p>
                        <p className="specialtyDrinkInstructions">{props.drinks[0].strInstructions}</p>
                    </div>
                </div>
            </div>
            

            {/* <Image 
                src={props.drinks[0].strDrinkThumb}
                alt={props.drinks[0].strDrink}
                width={500}
                height={500}
            /> */}
        </section>
    );
}

