import Link from "next/link";
import Rounded from "@/components/Rounded"; // make sure it's default export

export default function Tags({ item, bgcolor, className }) {
  return (
    <div
      className="w-fit rounded-[50px] border border-[#21212199] cursor-pointer"
      key={item.id}
    >
      <Link
        href={item.href}
        className={`small-text font-NeueMontreal uppercase ${className}`}
      >
        <Rounded className="py-[2px]" backgroundColor={bgcolor}>
          <p className="z-10 px-[15px]">{item.title}</p>
        </Rounded>
      </Link>
    </div>
  );
}
