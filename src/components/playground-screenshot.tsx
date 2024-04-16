import Image from "next/image";
import playgroundScreen from "../../public/Playground.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PlaygroundScreenshot() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 200, 3000], ["0%", "4%", "200%"]);
  const rotate = useTransform(
    scrollY,
    [0, 200, 3000],
    ["9deg", "11deg", "160deg"]
  );
  return (
    <motion.div
      style={{ x, rotate }}
      className="absolute w-[80%] rotate-[9deg] -right-[12%] drop-shadow-[8px_8px_25px_rgba(0,0,0,0.06)]"
    >
      <Image src={playgroundScreen} alt="Playground screenshot" />
    </motion.div>
  );
}
