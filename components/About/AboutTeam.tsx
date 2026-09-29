import WebPageWrapper from "../Wrapper/WebPageWrapper";

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Nagamatsu Faruk",
      role: "Chairman",
      img: "/team/1.jpg",
    },
    {
      name: "Nagamatsu Fatema",
      role: "Managing Director, Japan Office",
      img: "/team/2.jpg",
    },
    {
      name: "Dr. Bishnu Kr. Adhikary",
      role: "Advisor, Japan Office",
      img: "/team/3.jpg",
    },
    {
      name: "Md Kamrul Hossain",
      role: "Director, Japan Office",
      img: "/team/4.jpg",
    },
    {
      name: "Takatsugu Sato",
      role: "Director, Japan Office",
      img: "/team/5.jpg",
    },
    {
      name: "Shahana Akter",
      role: "Director, Japan Office",
      img: "/team/6.jpg",
    },
  ];

  return (
    <section className="py-24 bg-[#fafafa] text-slate-900">
      <WebPageWrapper>
        <div className="text-center">
          <span className="text-xs sm:text-sm font-semibold text-rose-500 uppercase tracking-widest block mb-2">
            Leadership Team
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-900">
            Our
            <span className="text-rose-600"> Expert</span> Leader
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-16 leading-relaxed">
            Meet the dedicated professionals leading Rijik International Co.
            Ltd., fostering robust connections between Bangladesh and Japan
            across multiple sectors.
          </p>

          {/* New Card Style: Immersive Image with Floating Glass Overlay */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Aspect Ratio & Zoom on Hover */}
                <div className="relative w-full aspect-4/5 overflow-hidden bg-slate-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-700"
                  />
                  {/* Subtle dark gradient overlay at the bottom for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Floating Content Card over Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-lg text-left transform transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="inline-block px-2.5 py-1 mb-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-bold uppercase tracking-wider">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WebPageWrapper>
    </section>
  );
}
