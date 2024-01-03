'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatedTextProps {
  text: string | string[];
  wrapper: any;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
                                                     text,
                                                     wrapper: Wrapper = "p",
                                                     className,
                                                     once = true,
                                                     repeatDelay
                                                   }) => {
  const controls = useAnimation()
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const IsInView = useInView(ref, { amount: 1, once });
  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    const show = () => {
      controls.start("show");
      if (repeatDelay) {
        timeOut = setTimeout(async () => {
          await controls.start("hidden");
          controls.start('show')
        }, repeatDelay);
      }
    };
    if (IsInView) {
      show()
    } else {
      controls.start("hidden");
    }
    return () => clearTimeout(timeOut);
  }, [IsInView, controls, repeatDelay]); // Added repeatDelay here
  return (
    <Wrapper className={className}>
      <motion.span className="sr-only">{text}</motion.span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {textArray.map((line) => (
          <span className="block" key={crypto.randomUUID()}>
            {line.split(" ").map((word) => (
              <span className="inline-block" key={crypto.randomUUID()}>
                {word.split("").map(char => (
                  <motion.span
                    className="inline-block"
                    key={char.toString()}
                    variants={variants}
                  >
                    {char}
                  </motion.span>))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
