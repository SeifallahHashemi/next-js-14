'use client';
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ZoomParallax from "../../../components/Animations/Scroll Animations/Scrool Zoom Parallax/zoom-parallax";
import MyZoomParallax from "../../../components/Animations/Scroll Animations/Scrool Zoom Parallax/my-zoom-parallax";

const TestTwPage = () => {
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])
  return (
    <main className={"mt-[50vh] mb-[100vh]"}>
      {/*<ZoomParallax />*/}
      <MyZoomParallax />
    </main>
  );
};

export default TestTwPage;