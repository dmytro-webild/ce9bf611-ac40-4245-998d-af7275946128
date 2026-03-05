"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";

export default function AboutPage() {
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

      <div id="about-mission" data-section="about-mission">
        <FeatureCardTwentyOne
          tag="Our Story"
          title="Founded on Trust and Financial Expertise"
          description="SB Solutions was established with a singular mission: to empower individuals to take control of their financial futures through transparent, ethical, and results-driven credit repair and funding consulting."
          accordionItems={[
            {
              id: "1",              title: "Our Mission",              content:
                "We believe everyone deserves access to financial opportunities regardless of past credit challenges. Our mission is to provide transparent, effective credit repair services, teach responsible credit management, and guide clients toward their financial goals. We're committed to ethical practices and compliance with all consumer protection laws."
            },
            {
              id: "2",              title: "Our Values",              content:
                "Transparency is foundational to everything we do. We never make promises we can't keep, always explain the credit repair process clearly, and provide regular updates on your progress. Integrity guides our interactions with clients and credit bureaus alike. Results matter—our track record speaks for itself with hundreds of satisfied clients who've successfully improved their credit and obtained funding."
            },
            {
              id: "3",              title: "Our Team",              content:
                "Our team comprises credit specialists, financial advisors, and funding consultants with combined experience exceeding 50+ years in the financial services industry. Each team member is committed to continuing education, staying current with regulatory changes, and developing innovative strategies to serve our clients better."
            },
          ]}
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&_wi=3"
          imageAlt="SB Solutions professional team"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          mediaPosition="right"
          buttons={[{ text: "Learn More About Our Approach", href: "/services" }]}
        />
      </div>

      <div id="client-success" data-section="client-success">
        <TestimonialCardFive
          title="Client Success Stories"
          description="These testimonials represent just a fraction of the hundreds of clients who have transformed their financial situations with SB Solutions."
          tag="Success Stories"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Michael Johnson, Entrepreneur",              date: "Date: 15 November 2024",              title: "From Denied to Approved",              quote:
                "SB Solutions transformed my financial situation. My credit score improved by 127 points in just 8 months, and I was able to secure $50,000 in business funding. The team's expertise and transparency made all the difference in my journey.",              tag: "Credit Repair",              avatarSrc:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",              avatarAlt: "Michael Johnson"
            },
            {
              id: "2",              name: "David Martinez, Small Business Owner",              date: "Date: 22 October 2024",              title: "Life-Changing Financial Guidance",              quote:
                "I was overwhelmed by negative items on my credit report. SB Solutions methodically disputed inaccurate entries and guided me through the entire process. Now I have excellent credit and qualified for a mortgage at the best rates available.",              tag: "Credit Building",              avatarSrc:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",              avatarAlt: "Sarah Williams"
            },
            {
              id: "3",              name: "David Martinez, Small Business Owner",              date: "Date: 8 September 2024",              title: "Expert Funding Consultation",              quote:
                "After working with SB Solutions on credit repair, their funding consulting services helped me navigate multiple funding options. I secured favorable terms for my business expansion and couldn't be happier with the results.",              tag: "Funding",              avatarSrc:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",              avatarAlt: "David Martinez"
            },
            {
              id: "4",              name: "Jennifer Lee, Finance Professional",              date: "Date: 30 August 2024",              title: "Transparent and Professional",              quote:
                "What impressed me most about SB Solutions was their transparency and personalized approach. They explained every step, managed expectations realistically, and delivered exceptional results. Highly recommended for anyone serious about improving their financial future.",              tag: "Credit Repair",              avatarSrc:
                "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=150&h=150&fit=crop",              avatarAlt: "Jennifer Lee"
            },
            {
              id: "5",              name: "Robert Taylor, Executive",              date: "Date: 12 July 2024",              title: "Professional Excellence",              quote:
                "The SB Solutions team demonstrated deep expertise in credit repair and funding strategy. They answered all my questions thoroughly and worked efficiently to improve my credit profile. I'm now in a position I never thought possible.",              tag: "Funding",              avatarSrc:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",              avatarAlt: "Robert Taylor"
            },
            {
              id: "6",              name: "Amanda White, Consultant",              date: "Date: 25 June 2024",              title: "Recommended Without Hesitation",              quote:
                "SB Solutions exceeded my expectations in every way. From initial consultation through final results, their professionalism and dedication were outstanding. I've already recommended them to several colleagues with excellent feedback.",              tag: "Credit Building",              avatarSrc:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",              avatarAlt: "Amanda White"
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&_wi=3"
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