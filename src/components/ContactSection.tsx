import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { companyConfig } from "@/config/company.config";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get in touch for technical enquiries, quotations, or service requests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {submitted ? (
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 text-center">
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your enquiry has been submitted. Our team will respond within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-4 text-accent underline text-sm">Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address *" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message / Technical Requirements *" rows={5} className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-industrial-dark transition-colors shadow-md">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground text-sm font-medium">{companyConfig.name}</p>
                  <p className="text-muted-foreground text-sm">{companyConfig.location}</p>
                  <p className="text-muted-foreground text-xs mt-1">GST: {companyConfig.gst}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">{companyConfig.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">{companyConfig.email}</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547158278226!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atalanta Pumps Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
