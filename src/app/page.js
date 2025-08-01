import Header from "@/components/Header";
import Image from "next/image";
import Banner from "./home/Banner";
import About from "./home/About";
import Section from "./home/Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  // <Header/>
  <>
        <Header/>
        <Banner/>
        <About/>
        <Section/>
        <Footer/>
    </>
  );
}
