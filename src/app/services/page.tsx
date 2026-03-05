"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLarge"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
          ]}
          button={{ text: "Start Evaluation", href: "/contact" }}
          brandName="SB Solutions"
        />
      </div>

      <div id="service-details" data-section="service-details">
        <FeatureCardTwentyOne
          tag="Detailed Services"
          title="Our Three Core Financial Solutions"
          description="Each service is designed with your unique financial situation in mind. We combine industry expertise with personalized strategies to deliver measurable results."
          accordionItems={[
            {
              id: "1",              title: "Credit Repair Services - Detailed",              content:
                "Our credit repair methodology is comprehensive and transparent. We begin with a thorough analysis of your credit reports from all three major bureaus (Equifax, Experian, TransUnion) to identify inaccuracies, outdated information, and unverifiable negative items. Our team then develops a strategic dispute plan, submitting formal disputes to each bureau on your behalf. We handle all correspondence, track responses, and provide regular updates throughout the entire process. Our success rate demonstrates the effectiveness of our targeted dispute strategy combined with consumer protection law expertise. Average clients see measurable improvements within 3-6 months."
            },
            {
              id: "2",              title: "Credit Building Programs - Detailed",              content:
                "Building strong credit requires more than just repairing damage—it requires strategy. Our credit building programs teach you how to responsibly use credit to your advantage. We provide guidance on optimal credit card utilization ratios, timing of applications, account mix strategies, and payment scheduling to maximize your credit score. You'll learn the nuances of credit scoring models and how to position yourself as a lower-risk borrower. Our clients typically see score increases of 50-100+ points within 12 months by following our evidence-based recommendations and maintaining positive financial habits."
            },
            {
              id: "3",              title: "Funding Consulting - Detailed",              content:
                "Once your credit foundation is solid, our funding consulting services help you access capital. Whether you're seeking personal loans, credit lines, or business funding, we provide personalized consulting based on your credit profile and financial goals. We guide you through application processes, help you select the best funding products, negotiate favorable terms, and prepare comprehensive financial documentation. Our connections with multiple lending partners mean you'll have access to diverse funding options. We've helped hundreds of clients secure funding they were previously denied, with approved amounts ranging from $10,000 to $500,000+."
            },
          ]}
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&_wi=2"
          imageAlt="Professional financial consulting services"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="left"
          buttons={[
            { text: "Schedule Your Service Consultation", href: "/contact" },
          ]}
        />
      </div>

      <div id="service-packages" data-section="service-packages">
        <MetricCardTen
          title="Service Packages Available"
          description="Choose the package that aligns with your financial goals and current situation."
          tag="Pricing"
          metrics={[
            {
              id: "1",              title: "Credit Repair Starter",              subtitle: "Perfect for first-time credit repair",              category: "Entry Level",              value: "$299/month",              buttons: [
                { text: "Get Started", href: "/contact" },
              ],
            },
            {
              id: "2",              title: "Credit Building Plus",              subtitle: "Comprehensive credit improvement program",              category: "Popular",              value: "$499/month",              buttons: [
                { text: "Choose Plan", href: "/contact" },
              ],
            },
            {
              id: "3",              title: "Funding Success Program",              subtitle: "Complete funding preparation and consulting",              category: "Premium",              value: "$799/month",              buttons: [
                { text: "Premium Access", href: "/contact" },
              ],
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="cta-services" data-section="cta-services">
        <ContactCenter
          tag="Ready to Get Started?"
          title="Transform Your Financial Future with SB Solutions"
          description="Take the first step toward credit improvement and financial freedom. Schedule your free consultation with one of our financial experts today."
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email to schedule"
          buttonText="Schedule Free Consultation"
          termsText="We respect your privacy and will only use your contact information to schedule your consultation. All client information is secure and confidential."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&_wi=2"
          imageAlt="Professional office environment"
          logoText="SB Solutions"
          copyrightText="© 2025 SB Solutions. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "Credit Repair", href: "/services" },
                { label: "Credit Building", href: "/services" },
                { label: "Funding Consulting", href: "/services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Testimonials", href: "/" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Disclaimer", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}