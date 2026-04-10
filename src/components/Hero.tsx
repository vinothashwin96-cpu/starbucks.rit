import heroCoffee from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCoffee}
          alt="Beautifully crafted latte with latte art"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-xl animate-fade-up">
          <p className="text-starbucks-gold font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            New this season
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            It's a great day for coffee
          </h1>
          <p className="text-primary-foreground/80 font-body text-lg md:text-xl mb-8 leading-relaxed">
            Handcrafted beverages made with care, from our baristas to you. Discover your new favorite today.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#menu"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent transition-colors"
            >
              Order now
            </a>
            <a
              href="#rewards"
              className="px-8 py-3 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Join Rewards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
