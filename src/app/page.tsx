"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Take Control of Your Credit and Unlock New Financial Opportunities"
          description="SB Solutions helps individuals repair their credit, build stronger credit profiles, and position themselves to qualify for personal and business funding. Our expert team provides transparent, results-driven strategies tailored to your financial goals."
          background={{ variant: "downward-rays-static-grid" }}
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              alt: "Client success story",
            },
            {
              src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              alt: "Financial transformation",
            },
            {
              src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              alt: "Credit improvement success",
            },
          ]}
          avatarText="Trusted by 500+ satisfied clients"
          buttons={[
            { text: "Start Your Credit Evaluation", href: "/contact" },
            { text: "Book a Consultation", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services-overview" data-section="services-overview">
        <FeatureCardTwentyOne
          tag="Our Services"
          title="Comprehensive Financial Solutions"
          description="We provide three core services designed to transform your financial position and unlock new opportunities for personal and business growth."
          accordionItems={[
            {
              id: "1",
              title: "Credit Repair Services",
              content:
                "We help clients review their credit reports and dispute inaccurate, outdated, or unverifiable negative items with the credit bureaus. Our comprehensive credit repair process includes detailed credit report analysis, strategic dispute assistance, thorough negative item review, and personalized credit profile improvement strategies to maximize your credit score potential.",
            },
            {
              id: "2",
              title: "Credit Building Programs",
              content:
                "SB Solutions strengthens your credit profile by teaching responsible credit use and helping you build positive payment history. We provide expert credit utilization guidance, strategic account recommendations, credit mix improvement strategies, and comprehensive responsible credit management education to establish a strong financial foundation.",
            },
            {
              id: "3",
              title: "Funding Consulting",
              content:
                "Once your credit profile improves, we guide you through potential funding opportunities with personalized funding strategy development, business funding guidance, credit card and line of credit consulting, and complete application preparation to position you for success.",
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/smart-businesswoman-explaining-chart_1139-298.jpg"
          imageAlt="Professional financial consultation"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
          buttons={[{ text: "Learn More About Services", href: "/services" }]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <MetricCardTen
          title="How Our Process Works"
          description="Follow our proven 4-step methodology to transform your financial profile and unlock new opportunities."
          tag="Process"
          metrics={[
            {
              id: "1",
              title: "Credit Evaluation",
              subtitle: "Comprehensive review and assessment",
              category: "Step 1",
              value: "Detailed Analysis",
              buttons: [{ text: "Get Started", href: "/contact" }],
            },
            {
              id: "2",
              title: "Strategy Development",
              subtitle: "Personalized improvement plan",
              category: "Step 2",
              value: "Custom Strategy",
              buttons: [{ text: "Schedule Call", href: "/contact" }],
            },
            {
              id: "3",
              title: "Credit Optimization",
              subtitle: "Guided dispute and building process",
              category: "Step 3",
              value: "Active Support",
              buttons: [{ text: "Learn Details", href: "/services" }],
            },
            {
              id: "4",
              title: "Funding Preparation",
              subtitle: "Positioning for new opportunities",
              category: "Step 4",
              value: "Ready to Apply",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Real Success Stories From Our Clients"
          description="Discover how SB Solutions has transformed the financial futures of hundreds of satisfied clients through dedicated credit repair and funding consulting."
          tag="Client Testimonials"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson, Entrepreneur",
              date: "Date: 15 November 2024",
              title: "From Denied to Approved",
              quote:
                "SB Solutions transformed my financial situation. My credit score improved by 127 points in just 8 months, and I was able to secure $50,000 in business funding. The team's expertise and transparency made all the difference in my journey.",
              tag: "Credit Repair",
              avatarSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              avatarAlt: "Michael Johnson",
            },
            {
              id: "2",
              name: "Sarah Williams, Professional",
              date: "Date: 22 October 2024",
              title: "Life-Changing Financial Guidance",
              quote:
                "I was overwhelmed by negative items on my credit report. SB Solutions methodically disputed inaccurate entries and guided me through the entire process. Now I have excellent credit and qualified for a mortgage at the best rates available.",
              tag: "Credit Building",
              avatarSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              avatarAlt: "Sarah Williams",
            },
            {
              id: "3",
              name: "David Martinez, Small Business Owner",
              date: "Date: 8 September 2024",
              title: "Expert Funding Consultation",
              quote:
                "After working with SB Solutions on credit repair, their funding consulting services helped me navigate multiple funding options. I secured favorable terms for my business expansion and couldn't be happier with the results.",
              tag: "Funding",
              avatarSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              avatarAlt: "David Martinez",
            },
            {
              id: "4",
              name: "Jennifer Lee, Finance Professional",
              date: "Date: 30 August 2024",
              title: "Transparent and Professional",
              quote:
                "What impressed me most about SB Solutions was their transparency and personalized approach. They explained every step, managed expectations realistically, and delivered exceptional results. Highly recommended for anyone serious about improving their financial future.",
              tag: "Credit Repair",
              avatarSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              avatarAlt: "Jennifer Lee",
            },
            {
              id: "5",
              name: "Robert Taylor, Executive",
              date: "Date: 12 July 2024",
              title: "Professional Excellence",
              quote:
                "The SB Solutions team demonstrated deep expertise in credit repair and funding strategy. They answered all my questions thoroughly and worked efficiently to improve my credit profile. I'm now in a position I never thought possible.",
              tag: "Funding",
              avatarSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              avatarAlt: "Robert Taylor",
            },
            {
              id: "6",
              name: "Amanda White, Consultant",
              date: "Date: 25 June 2024",
              title: "Recommended Without Hesitation",
              quote:
                "SB Solutions exceeded my expectations in every way. From initial consultation through final results, their professionalism and dedication were outstanding. I've already recommended them to several colleagues with excellent feedback.",
              tag: "Credit Building",
              avatarSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              avatarAlt: "Amanda White",
            },
          ]}
        />
      </div>

      <div id="cta-section" data-section="cta-section">
        <ContactCenter
          tag="Ready to Start?"
          title="Begin Your Financial Transformation Today"
          description="Join hundreds of clients who have successfully improved their credit and unlocked new financial opportunities. Schedule your free credit evaluation consultation now."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email address"
          buttonText="Schedule Consultation"
          termsText="We respect your privacy. Your information is secure and will only be used to contact you about your credit consultation. We comply with all consumer protection laws."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/financial-charts-kpi-metrics-displays-office_482257-126638.jpg"
          imageAlt="Professional office environment"
          logoText="SB Solutions"
          copyrightText="© 2025 SB Solutions. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Credit Repair", href: "/services" },
                { label: "Credit Building", href: "/services" },
                { label: "Funding Consulting", href: "/services" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Testimonials", href: "/" },
              ],
            },
            {
              title: "Legal",
              items: [
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