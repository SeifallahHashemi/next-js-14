import React from "react";
import Navbar from "@/components/Animations/Navigations/Navbar_one/navbar";
import Hero from "@/components/Animations/Navigations/Navbar_one/hero";
import Planets from "@/components/Animations/Navigations/Navbar_one/planets";

const NavbarOneWrapper = () => {
  return (
    <main
      style={{ backgroundImage: "url(/Navbar/Stars.png)" }}
      className="relative flex flex-col justify-between w-full min-h-screen bg-black "
    >
      <Navbar />
      <Hero />
      <Planets />
    </main>
  );
};

export default NavbarOneWrapper;