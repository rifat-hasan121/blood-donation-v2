import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 pb-20">
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <h2 className="text-3xl font-bold mb-6">Why Your Donation Matters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-primary">Save Lives</h3>
            <p className="text-muted-foreground">A single donation can save up to three people's lives in emergency situations.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-primary">Community Support</h3>
            <p className="text-muted-foreground">Building a strong network of donors ensures blood is always available when needed.</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-primary">Health Benefits</h3>
            <p className="text-muted-foreground">Regular donation helps maintain healthy iron levels and improves overall cardiovascular health.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
