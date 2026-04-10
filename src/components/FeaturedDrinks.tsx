import icedMacchiato from "@/assets/iced-macchiato.jpg";
import matchaLatte from "@/assets/matcha-latte.jpg";
import coldBrew from "@/assets/cold-brew.jpg";

const drinks = [
  {
    name: "Iced Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and topped with caramel drizzle.",
    image: icedMacchiato,
    price: "$5.95",
  },
  {
    name: "Matcha Tea Latte",
    description: "Smooth and creamy matcha sweetened just right and served with steamed milk.",
    image: matchaLatte,
    price: "$5.25",
  },
  {
    name: "Vanilla Sweet Cream Cold Brew",
    description: "Slow-steeped cold brew topped with a luscious vanilla sweet cream for a smooth finish.",
    image: coldBrew,
    price: "$5.45",
  },
];

const FeaturedDrinks = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-starbucks-gold font-body font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Featured
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Drinks we love
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {drinks.map((drink) => (
            <div
              key={drink.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={drink.image}
                  alt={drink.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{drink.name}</h3>
                  <span className="text-primary font-body font-bold text-sm">{drink.price}</span>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{drink.description}</p>
                <button className="mt-4 w-full py-2.5 rounded-full border-2 border-primary text-primary font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  Add to order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;
