import Image from "next/image";

type FeaturedDrinkProps = {  
    strDrink: string,  
    strDrinkThumb: string,
    strInstructions: string
}

export default function FeaturedDrink(props: FeaturedDrinkProps) {
    
    return (
        <section className="featured-wrapper py-8 flex flex-col md:flex-row m-auto max-w-[800px]">
            <div className="featured-copy-container pb-6 md:p-6 md:basis-1/2 md:self-center">
                <p className="font-(family-name:--font-fjalla-one) text-3xl">{props.strDrink}</p>
                <p>{props.strInstructions}</p>
            </div>
            <div className="featured-Img-container md:basis-1/2">
                <Image 
                    src={props.strDrinkThumb}
                    alt={props.strDrink}
                    width={500}
                    height={500}
                />
            </div>
        </section>
    );
}