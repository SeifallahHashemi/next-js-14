'use client'
import React, { useState } from "react";
import Image from "next/image";
import laptopImage from "@/../public/images/laptop 1 edited.png";
import laptopImage2 from "@/../public/images/laptop-colorfull.jpg";
import Section from "@/components/Animations/Background/Section";

const BackgroundColorAnimation = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`flex w-full flex-col ${theme}`}>
      <Section theme={"light"} setTheme={setTheme}>
        <div className={"flex flex-col gap-8 justify-center items-center px-6"}>
          <p className={"text-5xl font-black text-black dark:text-white"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, temporibus.
          </p>
          <p className={"text-zinc-500"}>
            <span className={"font-bold text-black dark:text-zinc-100"}>
              Lorem ipsum dolor sit amet,
            </span>{" "}
            consectetur adipisicing elit. Animi, aperiam commodi debitis
            deserunt doloribus ea earum error eum eveniet expedita facere fugiat
            inventore libero maiores maxime minima nam optio quaerat, ratione
            recusandae rerum saepe sapiente suscipit velit voluptatum! Ex id
            incidunt magnam magni maiores officiis qui quidem sit soluta ut.
          </p>
        </div>
        <div className={"flex justify-center items-center h-full"}>
          <Image
          src={laptopImage}
          alt={"first Image"}
          placeholder="blur"
          quality={100}
          // fill
          // sizes="100vw"
          style={{
            objectFit: "cover"
          }}
        /></div>
      </Section>
      <Section theme={"dark"} setTheme={setTheme}>
        <div className={"flex flex-col gap-8 justify-center items-center px-6"}>
          <p className={"text-5xl font-black text-black dark:text-white"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, temporibus.
          </p>
          <p className={"text-zinc-500"}>
            <span className={"font-bold text-black dark:text-zinc-100"}>
              Lorem ipsum dolor sit amet,
            </span>{" "}
            consectetur adipisicing elit. Animi, aperiam commodi debitis
            deserunt doloribus ea earum error eum eveniet expedita facere fugiat
            inventore libero maiores maxime minima nam optio quaerat, ratione
            recusandae rerum saepe sapiente suscipit velit voluptatum! Ex id
            incidunt magnam magni maiores officiis qui quidem sit soluta ut.
          </p>
        </div>
        <div className={"flex justify-center items-center h-full"}><Image
          src={laptopImage2}
          alt={"first Image"}
          placeholder="blur"
          quality={100}
          // fill
          // sizes="100vw"
          style={{
            objectFit: "cover"
          }}
        /></div>
      </Section>
    </div>
  );
};

export default BackgroundColorAnimation;
