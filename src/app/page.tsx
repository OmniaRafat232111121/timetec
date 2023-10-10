import About from "@/components/About";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
 <main>
    <Hero />
    <About/>
    <Services/>
    <Projects/>
  <Products/>
    <Clients/>

  
   </main>
    </>

  )
}
