import { headers } from "next/headers";
import Image from "next/image";
import { JSX } from "react";

type SpecialtyDrinkProps = {  
    SpecialtyArr: object,
    specialtyHeader: string,
    drinks: object[]
}

export default function Specialties(props: {children: SpecialtyDrinkProps}) {
    // console.log(props.specialtyHeader.urls.full)
    return(
        <section className="w-screen max-w-screen -mx-8">
            <div className="specialtiesHeaderContainer w-full max-h-[600px] overflow-hidden flex flex-col justify-center">
                <Image 
                    src={props.specialtyHeader.urls.full}
                    alt={props.drinks[0].strDrink}
                    width={1440}
                    height={500}
                    className="w-full h-auto"
                />
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

