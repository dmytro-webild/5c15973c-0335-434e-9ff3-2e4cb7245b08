"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Courses",          id: "#catalog"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="SkillGrid"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "sparkles-gradient"}}
      title="Master the Skills of Tomorrow with SkillGrid"
      description="Accelerate your career in software development, data science, and digital business. Join 10,000+ students mastering in-demand skills today."
      buttons={[
        {
          text: "Get Started",          href: "#catalog"},
        {
          text: "View Pricing",          href: "#pricing"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/focused-caucasian-woman-wearing-vr-headset_74855-4216.jpg"
      imageAlt="student coding high tech classroom"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/old-people-asking-professional-advice-from-financial-expert_482257-107450.jpg",          alt: "Old people asking for professional advice from financial expert"},
        {
          src: "http://img.b2bpic.net/free-photo/adult-male-student-with-vr-simulator-library_74855-1078.jpg",          alt: "Adult male student with VR simulator in library"},
        {
          src: "http://img.b2bpic.net/free-photo/college-student-looks-copy-space-screen-tablet-while-collecting-notes_482257-118253.jpg",          alt: "College student looks at a copy space screen on tablet while collecting notes"},
        {
          src: "http://img.b2bpic.net/free-photo/group-students-using-vr-experience-work_74855-1938.jpg",          alt: "Group of students using VR experience for work"},
        {
          src: "http://img.b2bpic.net/free-photo/happiness-asian-smart-casual-glasses-male-working-frome-home-with-laptop-technology-with-comfortable-relax-facial-expression-modern-home-with-blank-space-interior-background_609648-941.jpg",          alt: "software engineer professional portrait"},
      ]}
      avatarText="Join our global community of learners"
      marqueeItems={[
        {
          type: "text",          text: "Web Development"},
        {
          type: "text",          text: "Data Science"},
        {
          type: "text",          text: "Digital Marketing"},
        {
          type: "text",          text: "UI/UX Design"},
        {
          type: "text",          text: "E-Commerce Strategy"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Expert Curriculum",          description: "Courses designed by industry veterans.",          bentoComponent: "reveal-icon",          icon: CheckCircle,
        },
        {
          title: "Hands-on Projects",          description: "Build real-world solutions that matter.",          bentoComponent: "reveal-icon",          icon: Zap,
        },
        {
          title: "Lifetime Support",          description: "We grow with your career journey.",          bentoComponent: "reveal-icon",          icon: Shield,
        },
      ]}
      title="Why Choose SkillGrid?"
      description="We offer more than just lectures—we provide a roadmap to your professional transformation."
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          name: "Python Full Stack Development",          price: "$199",          imageSrc: "http://img.b2bpic.net/free-photo/ai-site-helping-with-software-production_1268-21627.jpg"},
        {
          id: "2",          name: "Amazon FBA Mastery Program",          price: "$299",          imageSrc: "http://img.b2bpic.net/free-photo/laptop-near-tag-tablet-supermarket-cart_23-2147961977.jpg"},
        {
          id: "3",          name: "Facebook Ads Marketing Expert",          price: "$149",          imageSrc: "http://img.b2bpic.net/free-photo/men-showing-facebook-icon_53876-65421.jpg"},
        {
          id: "4",          name: "Web Design & UI UX",          price: "$179",          imageSrc: "http://img.b2bpic.net/free-photo/programming-background-collage_23-2149901781.jpg"},
        {
          id: "5",          name: "Business Intelligence Analytics",          price: "$249",          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-working-from-his-office-concept-success_181624-26407.jpg"},
        {
          id: "6",          name: "Modern React Frameworks",          price: "$199",          imageSrc: "http://img.b2bpic.net/free-photo/ai-site-helping-with-content-production_1268-21625.jpg"},
      ]}
      title="Our Professional Courses"
      description="Explore our curated catalog of software, e-commerce, and business mastery programs."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          name: "Career Starter",          price: "$49",          buttons: [
            {
              text: "Get Started"},
          ],
          features: [
            "Access to 1 course",            "Community support",            "Basic resources"],
        },
        {
          id: "pro",          name: "Professional",          price: "$99",          buttons: [
            {
              text: "Upgrade to Pro"},
          ],
          features: [
            "Access to all courses",            "Priority support",            "Industry projects"],
        },
        {
          id: "enterprise",          name: "SkillGrid Master",          price: "$199",          buttons: [
            {
              text: "Get Full Access"},
          ],
          features: [
            "All courses included",            "Mentor sessions",            "Career placement"],
        },
      ]}
      title="Simple, Transparent Pricing"
      description="Choose the learning path that fits your current goals."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "10k+",          description: "Happy Students"},
        {
          id: "m2",          value: "50+",          description: "In-depth Courses"},
        {
          id: "m3",          value: "95%",          description: "Success Rate"},
      ]}
      title="Our Impact in Numbers"
      description="Join our fast-growing community of successful professionals."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Great Experience",          quote: "I learned more in 3 months here than in 4 years of college.",          name: "Sarah J.",          role: "Full Stack Dev",          imageSrc: "http://img.b2bpic.net/free-photo/happiness-asian-smart-casual-glasses-male-working-frome-home-with-laptop-technology-with-comfortable-relax-facial-expression-modern-home-with-blank-space-interior-background_609648-941.jpg"},
        {
          id: "t2",          title: "Changed My Life",          quote: "FBA Mastery course helped me quit my day job.",          name: "Michael K.",          role: "Entrepreneur",          imageSrc: "http://img.b2bpic.net/free-photo/elderly-business-woman-office-isolated_1303-21366.jpg"},
        {
          id: "t3",          title: "Highly Recommend",          quote: "Clear, concise, and incredibly practical content.",          name: "Emily R.",          role: "Marketing Dir",          imageSrc: "http://img.b2bpic.net/free-photo/view-young-man-holding-notebooks_197531-33388.jpg"},
        {
          id: "t4",          title: "Game Changer",          quote: "The mentorship program is worth every penny.",          name: "David L.",          role: "Data Analyst",          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1569.jpg"},
        {
          id: "t5",          title: "Perfect Pace",          quote: "Finally found courses that aren't too slow or too fast.",          name: "Jessica W.",          role: "UX Designer",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-personal-shopper-working_23-2148924139.jpg"},
      ]}
      title="Success Stories"
      description="Hear from students who transformed their careers with SkillGrid."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "Is the support lifetime?",          content: "Yes, our community support is available for as long as you need."},
        {
          id: "q2",          title: "Can I switch courses?",          content: "You can change courses within the first 7 days if it's not a match."},
        {
          id: "q3",          title: "Are there certificates?",          content: "Yes, we provide industry-recognized certificates after course completion."},
        {
          id: "q4",          title: "How does SkillGrid help with job placement?",          content: "We provide personalized career coaching, resume building workshops, and direct access to our network of partner employers to help you land your dream role."
        },
      ]}
      title="Frequently Asked Questions"
      description="Answers to the most common questions about our courses."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get Started"
      title="Join SkillGrid Today"
      description="Sign up for our newsletter to get latest course alerts and offers."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="SkillGrid"
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          title: "Courses",          items: [
            {
              label: "Programming",              href: "#catalog"},
            {
              label: "Marketing",              href: "#catalog"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}