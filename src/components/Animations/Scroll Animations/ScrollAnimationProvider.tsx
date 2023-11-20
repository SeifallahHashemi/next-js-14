import React from "react";
import { Gtag } from "@/components/Animations/Scroll Animations/gtag";

// fonts
/*const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const cousine = Cousine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cousine",
  display: "swap",
});*/
const ScrollAnimationProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Gtag />
      <div
        className={`bg-background font-body text-text`}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollAnimationProvider;