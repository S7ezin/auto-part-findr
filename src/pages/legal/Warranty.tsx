const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Warranty Information</h1>
        
        <div className="prose prose-gray max-w-none">
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Manufacturer Warranty</h2>
              <p>
                All genuine parts sold by 7x Car Hub come with the original manufacturer's warranty. Warranty terms vary by manufacturer and product type.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Warranty Periods</h2>
              <p>
                Typical warranty periods include:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Engine parts: 12-24 months or 20,000-40,000 km</li>
                <li>Electrical components: 12 months or 15,000 km</li>
                <li>Brake components: 12 months or 20,000 km</li>
                <li>Filters: 6-12 months depending on type</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Warranty Coverage</h2>
              <p>
                Warranty covers defects in materials and workmanship under normal use and service. It does not cover damage due to misuse, accidents, or normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Warranty Claims</h2>
              <p>
                To make a warranty claim, contact us with your order number, part details, and description of the issue. We may require the part to be inspected by the manufacturer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Installation Requirements</h2>
              <p>
                For warranty to remain valid, parts must be installed by qualified technicians according to manufacturer specifications. Improper installation may void warranty.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Warranty Service</h2>
              <p>
                Warranty service may include repair, replacement, or refund at the manufacturer's discretion. Labor costs are typically not covered unless specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact for Warranty</h2>
              <p>
                For warranty inquiries, contact us at 7xcarhubae@gmail.com or +971 56 1112343 with your purchase details.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warranty;