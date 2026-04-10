import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-starbucks-brown py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-starbucks-gold" />
              <span className="font-heading text-lg font-bold text-starbucks-cream">Starbucks</span>
            </div>
            <p className="text-starbucks-cream/50 font-body text-sm leading-relaxed">
              Inspiring and nurturing the human spirit — one person, one cup and one neighborhood at a time.
            </p>
          </div>
          {[
            { heading: "About Us", links: ["Our Company", "Our Coffee", "Stories", "Careers"] },
            { heading: "Customer Service", links: ["Contact Us", "FAQs", "Store Locator", "Delivery"] },
            { heading: "Quick Links", links: ["Gift Cards", "Rewards", "Blog", "Nutrition"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="font-heading font-semibold text-starbucks-cream mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-starbucks-cream/50 hover:text-starbucks-gold font-body text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-starbucks-cream/10 pt-6 text-center">
          <p className="text-starbucks-cream/30 font-body text-xs">
            © 2026 Starbucks Coffee Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
