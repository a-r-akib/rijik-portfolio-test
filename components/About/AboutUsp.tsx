export default function AboutUSP() {
  return (
    <section className="bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-black text-white mb-1">
              10k<span className="text-rose-600">+</span>
            </div>
            <div className="text-xs text-rose-500 uppercase tracking-widest font-semibold">
              Completed Projects
            </div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black text-white mb-1">
              30<span className="text-rose-600">+</span>
            </div>
            <div className="text-xs text-rose-500 uppercase tracking-widest font-semibold">
              Worldwide Branches
            </div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-black text-white mb-1">
              08<span className="text-rose-600">+</span>
            </div>
            <div className="text-xs text-rose-500 uppercase tracking-widest font-semibold">
              Awards Winner
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}