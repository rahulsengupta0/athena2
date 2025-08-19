import Link from "next/link";
import { RoundButton } from "@/components";

export default function Form() {
	return (
		<section className="w-full padding-x padding-y">
			<div className="w-full flex flex-col gap-[15px]">
				{/* Name */}
				<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col">
					<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								Hello! My name is
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Enter your name*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transition duration-200 ease-in-out"
							/>
						</div>
					</div>

					{/* Organization */}
					<div className="flex gap-[10px] w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								and I represent
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Organization / Institution*"
								className="paragraph w-full font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transition duration-200 ease-in-out"
							/>
						</div>
					</div>
				</div>

				{/* Need / Goal */}
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								We’re interested in LMS support for
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Course creation, onboarding, training...*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transition duration-200 ease-in-out w-full"
							/>
						</div>
					</div>
				</div>

				{/* Timeline */}
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								We aim to launch this by
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Expected launch date*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transition duration-200 ease-in-out w-full"
							/>
						</div>
					</div>
				</div>

				{/* Budget */}
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								Our estimated budget is
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Budget range*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transition duration-200 ease-in-out w-full"
							/>
						</div>
					</div>
				</div>

				{/* Email */}
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								You can contact me at
							</h2>
						</div>
						<div className="w-full">
							<input
								type="email"
								placeholder="name@example.com*"
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transition duration-200 ease-in-out w-full"
							/>
						</div>
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								to begin the conversation.
							</h2>
						</div>
					</div>
				</div>

				{/* Extra Info */}
				<div className="w-full flex gap-[10px]">
					<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col">
						<div className="xl:min-w-max lg:min-w-max md:min-w-max">
							<h2 className="sub-heading font-NeueMontreal font-normal text-secondry">
								Additional details (optional):
							</h2>
						</div>
						<div className="w-full">
							<input
								type="text"
								placeholder="Course details, learners, goals..."
								className="paragraph font-NeueMontreal font-normal text-secondry bg-background border-b border-[#21212155] focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transition duration-200 ease-in-out w-full"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Actions */}
			<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
				<div className="flex sm:flex-col xm:flex-col gap-[25px]">
					<div className="flex gap-[10px] items-center">
						<div className="flex gap-[10px]">
							<input type="checkbox" className="w-[30px]" />
							<p className="paragraph text-secondry font-NeueMontreal font-normal">
								I agree with the
							</p>
						</div>
						<Link
							className="paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover"
							href={"/privacy"}
						>
							Privacy Policy
						</Link>
					</div>
					<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
						<RoundButton
							bgcolor="#212121"
							href="/"
							title="Send LMS Inquiry"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
