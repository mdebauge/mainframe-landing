"use client";

import Image from "next/image";
import dataScreen from "../../public/Data.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DataScreenshot() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200, 3000], ["0%", "-4%", "-220%"]);
  const rotate = useTransform(
    scrollY,
    [0, 200, 3000],
    ["-5deg", "-7deg", "-160deg"]
  );
  return (
    <motion.div
      style={{ x, rotate }}
      className="hidden sm:block absolute w-9/12 -rotate-[5deg] -left-[5%] drop-shadow-[8px_8px_25px_rgba(0,0,0,0.06)]"
    >
      <Image src={dataScreen} alt="Data screenshot" />
    </motion.div>
  );
}
