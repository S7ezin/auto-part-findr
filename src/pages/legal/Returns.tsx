const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Return Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Return Window</h2>
              <p>
                You may return most new, unopened items within 30 days of delivery for a full refund. Items must be in original condition with all original packaging.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Non-Returnable Items</h2>
              <p>
                Certain items cannot be returned, including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Custom or special order parts</li>
                <li>Electrical items that have been installed</li>
                <li>Fluids and chemicals</li>
                <li>Items damaged by misuse or normal wear</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Return Process</h2>
              <p>
                To initiate a return, please contact our customer service team at 7xcarhubae@gmail.com or +971 56 1112343. We will provide you with a return authorization number and instructions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Refunds</h2>
              <p>
                Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. Approved refunds will be processed within 5-7 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Return Shipping</h2>
              <p>
                Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Exchanges</h2>
              <p>
                We do not offer direct exchanges. If you need a different item, please return the original item and place a new order.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;