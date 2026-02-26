import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";
import ContactSection from "@/components/ContactSection";

const Contact = () => (
  <PageTransition>
    <SEOHead
      title="Contact Atalanta Pumps | Get a Technical Quote"
      description="Get in touch for technical enquiries, quotations, or service requests. Located in Chakan, Pune, Maharashtra, India."
      keywords="contact Atalanta Pumps, pump enquiry, pump quote India"
    />
    <section className="pt-24">
      <ContactSection />
    </section>
  </PageTransition>
);

export default Contact;
