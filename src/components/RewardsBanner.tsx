import { Star, Gift, Coffee } from "lucide-react";

const perks = [
  { icon: Star, title: "Earn Stars", desc: "Collect Stars with every purchase" },
  { icon: Gift, title: "Free rewards", desc: "Redeem Stars for free drinks & food" },
  { icon: Coffee, title: "Order ahead", desc: "Skip the line, pick up and go" },
];

const RewardsBanner = () => {
  return (
    <section id="rewards" className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-starbucks-gold font-body font-semibold text-sm uppercase tracking-[0.2em] mb-3">
          Starbucks® Rewards
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Free coffee is a tap away
        </h2>
        <p className="text-primary-foreground/70 font-body text-lg max-w-xl mx-auto mb-12">
          Join Starbucks® Rewards and start earning Stars for free drinks, food, and more.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Icon className="h-7 w-7 text-starbucks-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-foreground">{title}</h3>
              <p className="text-primary-foreground/60 font-body text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block px-8 py-3 rounded-full bg-starbucks-gold text-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Join for free
        </a>
      </div>
    </section>
  );
};

export default RewardsBanner;
