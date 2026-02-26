import { useState } from "react";
import { Calculator } from "lucide-react";

const PumpSelector = () => {
  const [flowRate, setFlowRate] = useState("");
  const [head, setHead] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const h = parseFloat(head);
    if (isNaN(h) || h <= 0) {
      setResult("Please enter a valid head value.");
      return;
    }
    if (h < 50) setResult("Recommended: 10 HP Dewatering Pump — ideal for low-head applications up to 50m.");
    else if (h <= 100) setResult("Recommended: 75 HP Submersible Pump — suitable for medium-head applications (50–100m).");
    else setResult("Recommended: 150 HP Offshore Submersible Pump — designed for high-head applications exceeding 100m.");
  };

  return (
    <section id="pump-selector" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Pump <span className="text-primary">Selection Tool</span>
          </h2>
          <p className="text-muted-foreground">
            Enter your requirements and get an instant pump recommendation.
          </p>
        </div>

        <div className="bg-background border border-border rounded-lg p-8 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-primary" />
            <h3 className="font-heading text-xl font-bold text-foreground">Pump Calculator</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Flow Rate (m³/h)</label>
              <input
                type="number"
                value={flowRate}
                onChange={(e) => setFlowRate(e.target.value)}
                placeholder="e.g. 50"
                className="w-full bg-card text-foreground border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Head (meters)</label>
              <input
                type="number"
                value={head}
                onChange={(e) => setHead(e.target.value)}
                placeholder="e.g. 75"
                className="w-full bg-card text-foreground border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-industrial-dark transition-colors shadow-md"
          >
            Get Recommendation
          </button>

          {result && (
            <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
              <p className="text-foreground text-sm font-medium">{result}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PumpSelector;
