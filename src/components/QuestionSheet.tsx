import {
    Sparkles,
    Heart,
    GraduationCap,
    Rocket,
    FileText,
    BriefcaseBusiness,
    MapPin,
    Trophy,
    Sword,
    Zap,
    BookOpen,
    Smile,
    Stars,
    MessageSquare,
    Handshake,
} from "lucide-react";


function MoreQuestionsSheet({
    open,
    onClose,
    onPick,
}: {
    open: boolean;
    onClose: () => void;
    onPick: (q: string) => void;
}) {

    const questions = [
        {
            section: "Me",
            items: [
                { icon: Sparkles, text: "So… who exactly are you?", prompt: "Give me a fun introduction about yourself as if we just met." },
                { icon: Heart, text: "What makes your heart race?", prompt: "What are the passions and interests that truly excite you?" },
                { icon: GraduationCap, text: "Your origin story in tech?", prompt: "Tell me the story of how you first got into tech." },
                { icon: Rocket, text: "Future you in 5 years?", prompt: "Paint me a picture of where you see yourself in five years." },
            ],
        },
        {
            section: "Professional",
            items: [
                { icon: FileText, text: "Show me the goods (resume)", prompt: "Present your resume in a way that stands out." },
                { icon: BriefcaseBusiness, text: "What’s been keeping you busy lately?", prompt: "Tell me about your latest projects and what you’ve been working on." },
                { icon: MapPin, text: "Your dream gig right now?", prompt: "Describe the roles or opportunities you’re currently open to." },
                { icon: Trophy, text: "Why should I bet on you?", prompt: "Highlight your strengths and why you’d be a great hire." },
                { icon: BookOpen, text: "School days recap?", prompt: "Share your educational background in an interesting way." },
            ],
        },
        {
            section: "Projects",
            items: [
                { icon: Sword, text: "Your toughest coding battle?", prompt: "Describe the most difficult project you’ve ever tackled and how you survived it." },
                { icon: Zap, text: "Your crown jewel project?", prompt: "What’s the project you’re most proud of, and why?" },
            ],
        },
        {
            section: "Skills",
            items: [
                { icon: Stars, text: "Your superpowers?", prompt: "List your strongest skills like they’re superhero abilities." },
                { icon: BriefcaseBusiness, text: "Internship adventures?", prompt: "Tell me about your 6-month internship at Hooli Software—highlights and lessons." },
            ],
        },
        {
            section: "Fun",
            items: [
                { icon: Smile, text: "Life beyond the code?", prompt: "Share your hobbies and what you love doing outside programming." },
                { icon: MessageSquare, text: "Any secret party tricks?", prompt: "Do you have any hidden talents or unexpected skills?" },
            ],
        },
        {
            section: "Contact",
            items: [
                { icon: Handshake, text: "How do we start talking?", prompt: "What’s the best way to reach you?" },
                { icon: Sparkles, text: "The instant “YES” project?", prompt: "Describe the kind of project offer you would accept without hesitation." },
                { icon: MapPin, text: "Where in the world are you?", prompt: "Where are you currently based?" },
            ],
        },
    ];

    return (
        <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
            <div
                className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />
            <div className={`absolute left-0 right-0 bottom-0 transform transition-transform duration-300 ease-out max-h-[40vh] ${open ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="mx-auto w-full max-w-2xl rounded-t-2xl bg-[#0A0A0A] border border-zinc-800 shadow-2xl">
                    <div className="flex justify-center py-2">
                        <div className="h-1 w-10 rounded-full bg-zinc-700" />
                    </div>
                    {/* Questions container */}
                    <div className="px-4 pb-6 max-h-[40vh] overflow-y-auto no-scrollbar">
                        {questions.map((group, idx) => (
                            <div key={idx} className="mb-6">
                                <div className="text-sm text-zinc-300 mb-2 flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 font-medium">{group.section}</span>
                                </div>
                                <div className="space-y-2">
                                    {group.items.map((item, qIdx) => {
                                        const Icon = item.icon;
                                        return (
                                            <button
                                                key={qIdx}
                                                className="w-full flex items-center justify-between rounded-xl border border-zinc-700 bg-[#131313] text-left text-white px-4 py-3 hover:bg-[#1a1a1a] transition-colors"
                                                onClick={() => onPick(item.prompt)}
                                            >
                                                <div className="flex items-center gap-3 text-sm">
                                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#1f1f1f] border border-zinc-700">
                                                        <Icon size={14} />
                                                    </span>
                                                    <span>{item.text}</span>
                                                </div>
                                                <span className="text-zinc-400">›</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreQuestionsSheet;