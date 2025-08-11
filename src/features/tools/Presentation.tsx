import { IMAGES } from "../../utility/constants";

export default function Presentation() {
    return (
        <div className="mx-auto w-full py-6 font-sans">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div className="relative mx-auto aspect-square w-full max-w-sm">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl">
                        <div className="h-full w-full">
                            <img
                                src={IMAGES.profile}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full space-y">
                    <h1 className="text-xl md:text-3xl text-white">Rj Laurence Tabiano</h1>
                    <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                        <p className="text-white/50">22 years old</p>
                        <div className="bg-white hidden h-1.5 w-1.5 rounded-full md:block"></div>
                        <p className="text-white/50">Q.C, PH</p>
                    </div>
                    <p className="text-white mt-6 leading-relaxed whitespace-pre-line">Hi! I'm Rj 👋<br />
                        I'm an IT graduate specializing in Web and Mobile Development, with hands-on experience as a Software Engineer Intern. Currently, I’m diving deep into AI, entrepreneurship, and emerging technologies. I’m passionate about building innovative solutions and constantly exploring what’s next in tech.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-white text-secondary-foreground rounded-full px-3 py-1 text-sm">AI</span>
                        <span className="bg-white text-secondary-foreground rounded-full px-3 py-1 text-sm">Developer</span>
                        <span className="bg-white text-secondary-foreground rounded-full px-3 py-1 text-sm">Software Engineer</span>
                        <span className="bg-white text-secondary-foreground rounded-full px-3 py-1 text-sm">FEU Tech</span>
                        <span className="bg-white text-secondary-foreground rounded-full px-3 py-1 text-sm">Fitness</span>
                    </div>
                </div>
            </div>
        </div>
    );
}