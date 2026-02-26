import { MessageCircle } from "lucide-react";
import { companyConfig } from "@/config/company.config";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${companyConfig.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20pumps.`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142_70%_49%)] hover:bg-[hsl(142_70%_42%)] text-primary-foreground p-4 rounded-full shadow-lg transition-transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
