import Image from "next/image";

type SpecialtyDrinkProps = {  
    SpecialtyArr: object,
    drinks: object[]
}

export default function Specialties(props: SpecialtyDrinkProps) {
    console.log(props.drinks.length)
    return(
        <section>
            {/* {props.drinks.forEach((drink)=> {
                console.log(drink)
            })} */}
            {/* <Image 
                src={props.SpecialtyArr}
                alt={props.strDrink}
                width={500}
                height={500}
            /> */}
        </section>
    );
}