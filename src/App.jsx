export default function LoveWebsite() {
  const memories = [
    {
      title: "Nosso primeiro beijo na ponte",
      date: "O começo de tudo",
      text: "Foi naquele momento que tudo começou a ficar diferente pra mim.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Liberdade + Lamen",
      date: "Nosso primeiro rolê marcante",
      text: "Aquele dia ficou marcado pra sempre na minha memória.",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Underground Drift",
      date: "25/03/2026",
      text: "O dia em que você virou oficialmente minha namorada.",
      image:
        "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const questions = [
    {
      question: "Onde foi nosso primeiro beijo?",
      answer: "Na ponte ❤️",
    },
    {
      question: "Qual foi nosso primeiro rolê marcante?",
      answer: "Liberdade + Lamen 🍜",
    },
    {
      question: "Onde aconteceu o pedido de namoro?",
      answer: "Underground Drift 🏎️",
    },
    {
      question: "Qual música lembra a gente?",
      answer: "Legendary Lovers 🎵",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans selection:bg-pink-400 selection:text-black">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .floating {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl floating" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl floating" />
        </div>

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-sm text-neutral-300 mb-4">
            Um jogo feito só pra você, Princesa
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-pink-200 to-pink-400 bg-clip-text text-transparent">
            Oi, Karen.
          </h1>

          <p className="text-lg md:text-2xl text-neutral-200 leading-relaxed mb-10">
            Eu transformei nossa história em uma experiência cinematográfica.
          </p>

          <a
            href="#game"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 inline-block"
          >
            Começar o jogo
          </a>
        </div>
      </section>

      <section id="game" className="max-w-5xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-pink-300 text-sm mb-4">
            Missões desbloqueadas
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            O jogo da nossa história
          </h2>
        </div>

        <div className="grid gap-8">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-500/10 to-white/5 border border-pink-400/20 rounded-3xl p-8 backdrop-blur-sm"
            >
              <p className="text-pink-300 uppercase tracking-[0.2em] text-sm mb-4">
                Fase {index + 1}
              </p>

              <h3 className="text-2xl font-bold mb-5">{item.question}</h3>

              <div className="bg-black/40 rounded-2xl p-5 text-neutral-200 text-lg">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-28 px-6 space-y-24">
        {memories.map((memory, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div>
              <img
                src={memory.image}
                className="rounded-3xl w-full h-[420px] object-cover shadow-2xl"
              />
            </div>

            <div>
              <p className="uppercase tracking-[0.2em] text-neutral-400 text-sm mb-3">
                {memory.date}
              </p>

              <h3 className="text-3xl font-bold mb-6">{memory.title}</h3>

              <p className="text-lg leading-relaxed text-neutral-300">
                {memory.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="relative py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-neutral-400 text-sm mb-5">
            Última coisa
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Obrigado por ser a minha pessoa favorita.
          </h2>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Jogar novamente
          </button>
        </div>
      </section>
    </div>
  );
}
