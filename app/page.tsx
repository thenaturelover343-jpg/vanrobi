import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Products } from "@/components/Products";
import { Categories } from "@/components/Categories";
import { Why } from "@/components/Why";
import { Partner } from "@/components/Partner";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <Products />
        <Categories />
        <Why />
        <Partner />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
