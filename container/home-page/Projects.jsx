import { projectItem } from "@/constants";
import { Heading, ProjectCard, RoundButton, Tags } from "@/components";

export default function Projects() {
  return (
    <section className="w-full rounded-t-[20px]">
      {/* Section Heading */}
      <Heading
        title="Athena Features"
        className="padding-x padding-y pb-[50px] border-b border-[#21212155]"
      />

      {/* Feature Grid */}
      <div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
        {projectItem.map((item) => (
          <div className="w-[49%] sm:w-full xm:w-full" key={item.id}>
            {/* Item Title */}
            <div className="flex gap-[10px] items-center pb-[10px]">
              <span className="w-[10px] h-[10px] rounded-full bg-secondry" />
              <h1 className="small-text uppercase font-medium font-NeueMontreal text-secondry">
                {item.title}
              </h1>
            </div>

            {/* Project Card */}
            <ProjectCard item={item} />

            {/* Tags / Links */}
            <div className="flex items-center gap-[10px] mt-[20px] flex-wrap">
              {item.links.map((link) => (
                <Tags
                  key={link.id}
                  className="hover:text-white"
                  bgcolor="#212121"
                  item={link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
          <RoundButton
            href="/presentation"
            title="view all case studies"
            bgcolor="#000"
            className="bg-white text-black"
            style={{ color: "#fff" }}
          />
        </div>
      </div>
    </section>
  );
}
