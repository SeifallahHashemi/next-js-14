import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Create Animation with (GSAp, framer-motion, ...etc)",
  openGraph: {
    title: "Home Page",
    description: "Sepehr",
    url: "google.com",
    siteName: "Google",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1699910306903-4f798ce31c48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1260,
        height: 800
      },
      {
        url: "https://images.unsplash.com/photo-1700551953552-c1fdd79215aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1260,
        height: 800
      }
    ],
    locale: "fa-IR"
  }
};
const SeoMeta = () => {
  return (
    <div>
      <h1>Seo Metadata</h1>
    </div>
  );
};

export default SeoMeta;