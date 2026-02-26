import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
}

const EnquiryModal = ({ open, onClose, productName }: EnquiryModalProps) => {
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

  const handleClose = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/60 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-card border border-border rounded-lg w-full max-w-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-1">Get Best Quote</h3>
            {productName && (
              <p className="text-primary text-sm font-medium mb-4">{productName}</p>
            )}

            {submitted ? (
              <div className="text-center py-8">
                <h4 className="font-heading text-xl font-bold text-primary mb-2">Thank You!</h4>
                <p className="text-muted-foreground text-sm">Your enquiry has been submitted. Our team will respond within 24 hours.</p>
                <button onClick={handleClose} className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded font-semibold text-sm hover:bg-orange-dark transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" className="w-full bg-muted border border-border rounded px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address *" className="w-full bg-muted border border-border rounded px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-muted border border-border rounded px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Requirements *" rows={3} className="w-full bg-muted border border-border rounded px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-2.5 rounded font-semibold hover:bg-orange-dark transition-colors">
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
