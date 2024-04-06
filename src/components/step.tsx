import Image from "next/image";

type StepProps = {
  image: JSX.Element;
  header: string;
  blurb: string;
};

export default function Step({ image, header, blurb }: StepProps) {
  return (
    <div>
      <Image src={image} alt={header} />
      <h3 className="text-xl text-center font-semibold mt-6 mb-2">{header}</h3>
      <p className="text-sm text-center px-4">{blurb}</p>
    </div>
  );
}
