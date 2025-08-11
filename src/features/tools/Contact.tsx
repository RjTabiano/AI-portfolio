export default function Contact() {
    return (
      <div className="bg-[#333333] rounded-2xl p-8 w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-white">Contacts</h2>
          <span className="text-sm text-white/90">@Rj.Tabiano</span>
        </div>
  
        <a
          href="mailto:tabianorj@gmail.com"
          className="text-blue-500 hover:underline flex items-center mb-6"
        >
          tabianorj@gmail.com
          <span className="ml-1">➔</span>
        </a>
  
        <div className="flex flex-wrap gap-4 text-sm text-white/50">
          <a href="https://www.linkedin.com/in/rj-tabiano-4495b0339/" className="hover:underline">LinkedIn</a>
          <a href="https://www.instagram.com/jlaurencee_/" className="hover:underline">Instagram</a>
          <a href="https://github.com" className="hover:underline">Github</a>
        </div>
      </div>
    );
  }
  