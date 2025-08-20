import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
						<div>
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								We are Athena LMS:
							</h3>
						</div>
						<div className="w-[48%] sm:w-full xm:w-full flex justify-between">
							<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										Athena LMS transforms the way teams learn,
										<br />  share, and grow.We combine design,
										<br /> interactivity, and deep insights to empower businesses with impactful learning journeys. <br />
										presentations that win people&apos;s hearts
										<br />
										and minds.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										Our philosophy is simple: knowledge should be immersive, intuitive, and inspiring.
										<br />
										That's why we built Athena — to help businesses educate 
										<br /> with elegance and scale with confidence.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={backgroundAbout} />
			</div>
		</section>
	);
}
