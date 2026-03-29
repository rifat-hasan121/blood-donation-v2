export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8 text-center bg-transparent text-foreground transition-colors duration-300">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide border border-primary/20">
        Empowering Lives, One Drop at a Time
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
        Be the <span className="text-primary">Hero</span> Someone Needs
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed">
        Join our community today and make a real impact. Every donation saves up to three lives.
        Find nearby campaigns or register as a donor instantly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-200">
          Find a Campaign
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-primary/30 text-primary rounded-full font-semibold hover:bg-primary/5 transition-all duration-200">
          Register as Donor
        </button>
      </div>
    </div>
  );
}
