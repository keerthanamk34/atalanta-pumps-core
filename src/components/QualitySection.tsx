import testingLab from "@/assets/testing-lab.jpg";
import { CheckCircle } from "lucide-react";

const tests = [
  "Flow Testing",
  "Head Testing",
  "Load Testing",
  "Service Report",
  "Test Report",
];

const QualitySection = () => {
  return (
    <section id="quality" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Quality & <span className="text-primary">Testing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every pump undergoes rigorous ISO 9906/2 testing before dispatch.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded overflow-hidden">
            <img src={testingLab} alt="Testing Lab" className="w-full h-80 object-cover rounded" loading="lazy" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              ISO 9906/2 Compliance
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Our in-house testing laboratory is equipped with calibrated instruments for hydraulic 
              performance validation. Each pump is tested against international standards to ensure 
              consistent performance, efficiency, and reliability across all operating conditions.
            </p>
            <ul className="space-y-3">
              {tests.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
