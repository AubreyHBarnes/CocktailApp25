import Image from "next/image";
import Hero from "@/components/Hero";
import FeaturedDrink from "@/components/FeaturedDrink";
import Specialties from "@/components/Specialties";

export default async function Home() {
  const specialtiesHeader = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH}&orientation=landscape&query=cocktails`)
  const latestDrinkData = await fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.MEALDB}/latest.php`)
  const randomDrinkData = await fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.MEALDB}/randomselection.php`)
  const specialtiesHeaderImg = await specialtiesHeader.json()
  const latestDrink = await latestDrinkData.json()
  const randomDrinkArr = await randomDrinkData.json();
  let featuredDrinkObj: object = latestDrink.drinks[0]
  let SpecialtiesArr = randomDrinkArr

  // console.log(specialtiesHeaderImg.urls.full)
  return (
    
    <>
      <Hero />
      <main className="flex flex-col gap-8 px-8 items-center sm:items-start">
        <FeaturedDrink {...featuredDrinkObj} />
        
        <Specialties {...SpecialtiesArr} specialtyHeader={specialtiesHeaderImg} />
      </main>
    </>
  );
}
