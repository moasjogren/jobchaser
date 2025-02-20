"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

interface ResultProps {
  number: number;
}

export default function Result({ number }: ResultProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => `Results: ${Math.round(count.get())}`);
  useEffect(() => {
    const controls = animate(count, number, { duration: 1 });
    return () => controls.stop();
  }, [number]);

  return <motion.p className="results">{rounded}</motion.p>;
}
