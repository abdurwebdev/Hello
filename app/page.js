import Image from "next/image";
import Hero from "./Hero";
import Card from "./Components/Card";
import Fiter from "./Fiter";
import Strawberies from "./Strawberies";
import Fresh from "./Fresh";
import HeroChild from "./HeroChild";
import BestSeller from "./BestSeller";
import BestFruits from "./BestFruits";
import Person from "./Person";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <>
   <Hero/>
   <div className="grid grid-cols-4">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   </div>
   <Fiter/>
   <Strawberies/>
   <Fresh/>
   <HeroChild/>
  <BestSeller/>
  <BestFruits/>
  <Person/>
  <Testimonials/>
  
   </>
  );
}
