import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Products } from "@/components/Products";
import { Why } from "@/components/Why";
import { Partner } from "@/components/Partner";
import { Categories } from "@/components/Categories";
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
        <Why />
        <Partner />
        <Categories />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
