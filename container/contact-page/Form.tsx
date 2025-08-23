import Link from "next/link";
import { RoundButton } from "@/components";

export default function Form() {
  return (
    <section className="w-full padding-x padding-y relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none select-none"
      >
        <source src="/formbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light blue overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-300 opacity-30 z-5 pointer-events-none"></div>

      {/* Form content above overlay and video */}
      <div className="w-full flex flex-col gap-[15px] relative z-10">
        <iframe
          src="https://api.wonderengine.ai/widget/form/dCgUnKpQ6hAXUgj5doxe"
          style={{
            width: "100%",
            height: "1328px",
            border: "none",
            borderRadius: "4px",
            background: "transparent",
          }}
          id="inline-dCgUnKpQ6hAXUgj5doxe"
          title="Athena Contact"
        ></iframe>
      </div>
    </section>
  );
}
