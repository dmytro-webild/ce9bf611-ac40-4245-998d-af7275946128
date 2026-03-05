"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FeatureCardTwentyOne from "@/components/sections/feature/FeatureCardTwentyOne";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import Link from "next/link";

export default function ContactPage() {
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

      <div id="contact-main" data-section="contact-main">
        <ContactCenter
          tag="Get In Touch"
          title="Schedule Your Free Credit Evaluation"
          description="Contact SB Solutions today to start your journey toward better credit and financial opportunities. Our team is ready to provide a complimentary evaluation of your credit situation and discuss how we can help."
          background={{ variant: "downward-rays-animated-grid" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email address"
          buttonText="Schedule Evaluation"
          termsText="We respect your privacy completely. Your information will be securely stored and used only to contact you regarding your credit evaluation. We comply with all privacy and consumer protection regulations."
        />
      </div>

      <div id="contact-faqs" data-section="contact-faqs">
        <FeatureCardTwentyOne
          tag="Frequently Asked Questions"
          title="Common Questions About Our Services"
          description="Find answers to common questions about credit repair, credit building, and funding consulting services."
          accordionItems={[
            {
              id: "1",              title: "How long does credit repair take?",              content:
                "Credit repair timelines vary based on your specific situation and the items being disputed. Most clients see measurable improvements within 3-6 months. However, comprehensive credit rebuilding may take 12-24 months depending on the complexity of your credit profile. We provide regular progress updates throughout the entire process."
            },
            {
              id: "2",              title: "Is credit repair legal?",              content:
                "Yes, credit repair is completely legal and protected under the Fair Credit Reporting Act (FCRA) and the Credit Repair Organizations Act (CROA). These laws give you the right to dispute inaccurate information on your credit report. SB Solutions strictly follows all applicable laws and regulations in providing these services."
            },
            {
              id: "3",              title: "What can you remove from my credit report?",              content:
                "Our credit repair specialists can help dispute inaccurate, outdated, or unverifiable negative items including late payments, collections accounts, charge-offs, foreclosures, and errors. However, we cannot remove accurate, verifiable negative information. We focus on maximizing your score potential by targeting items that are no longer accurate or can be verified."
            },
            {
              id: "4",              title: "How much does SB Solutions charge?",              content:
                "We offer transparent, flat-fee pricing with several package options starting at $299/month. There are no hidden fees or surprise charges. During your free evaluation, we'll discuss the best package for your specific situation and provide a clear breakdown of all costs involved."
            },
            {
              id: "5",              title: "Can you guarantee credit score improvements?",              content:
                "While we cannot guarantee specific score increases (as this depends on many factors), our track record shows that clients typically see improvements of 50-150+ points when they follow our recommendations. We commit to transparency about realistic expectations and will never make promises we cannot keep."
            },
            {
              id: "6",              title: "What if I have multiple credit issues?",              content:
                "SB Solutions specializes in complex credit situations. Whether you're dealing with collections, late payments, foreclosure, bankruptcy, or identity theft, our experienced team has strategies to address multiple issues comprehensively. We'll develop a customized plan addressing all aspects of your credit profile."
            },
          ]}
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&_wi=4"
          imageAlt="FAQ and support resources"
          mediaAnimation="slide-up"
          useInvertedBackground={true}
          mediaPosition="left"
          buttons={[{ text: "Schedule Your Consultation", href: "/contact" }]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&_wi=4"
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