import React from "react";
import Image from "next/image";
import ImageSrc from "@/../public/images/pic - (10).jpg"
import { getPlaiceholder } from "plaiceholder";

// change the next.config.js ****
const NextJsBlurImage = async () => {
  const imageUrl = "https://images.unsplash.com/photo-1702325250074-28bc0f34646e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const buffer = await fetch(imageUrl).then(async (res) => Buffer.from(await res.arrayBuffer()));
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <section className={"grid place-content-center grid-cols-2"}>
      <div className={"w-96"}><Image src={ImageSrc} alt={"Static Image"} className={"max-w-full h-auto"} placeholder={"blur"} sizes={"(max-width: 768px) 100vw, 33vw"}/></div>
      <div className={"w-96"}><Image src={imageUrl} alt={"Static Image"} className={"max-w-full h-auto"} placeholder={"blur"} sizes={"(max-width: 768px) 100vw, 33vw"} blurDataURL={base64} width={640} height={640}/></div>
    </section>
  );
};

export default NextJsBlurImage;