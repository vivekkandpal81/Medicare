import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Stethoscope,
  Activity,
  Github,
} from "lucide-react";
import logo from "../../assets/logo.png";
import { footerStyles } from "../../assets/dummyStyles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Appointments", href: "/appointments" },
  ];

  const services = [
    { name: "Blood Pressure Check", href: "/services" },
    { name: "Blood Sugar Test", href: "/services" },
    { name: "Full Blood Checkup", href: "/services" },
    { name: "X-Ray Scan", href: "/services" },
    { name: "Ultrasound", href: "/services" },
    { name: "General Consultation", href: "/services" },
    { name: "physiotherapist", href: "/services" },
    { name: "Dental Checkup", href: "/services" },
    { name: "Eye Checkup", href: "/services" },
    { name: "ECG Test", href: "/services" },

  ];

  const socialLinks = [
    {
      Icon: Github,
      color: footerStyles.githubColor,
      name: "GitHub",
      href: "https://github.com/vivekkandpal81",
    },
    {
      Icon: Instagram,
      color: footerStyles.instagramColor,
      name: "Instagram",
      href: "https://www.instagram.com/vivek.kandpal_11?igsh=amZ3OTZ2eDhqcmsy",
    },
    {
      Icon: Linkedin,
      color: footerStyles.linkedinColor,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vivek-kandpal-2395a6298?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      Icon: Youtube,
      color: footerStyles.youtubeColor,
      name: "YouTube",
      href: "https://youtube.com/@xeroyt-h6e?si=2YXjmJJMzRgN8mcV",
    },
  ];

  return (
    <footer className={footerStyles.footerContainer}>
      {/* Floating Medical Icons */}
      <div className={footerStyles.floatingIcon1}>
        <Stethoscope className={footerStyles.stethoscopeIcon} />
      </div>

      <div
        className={footerStyles.floatingIcon2}
        style={{ animationDelay: "3s" }}
      >
        <Activity className={footerStyles.activityIcon} />
      </div>

      {/* Main Footer Content */}
      <div className={footerStyles.mainContent}>
        <div className={footerStyles.gridContainer}>
          {/* Company Info & Logo */}
          <div className={footerStyles.companySection}>
            <div className={footerStyles.logoContainer}>
              <div className={footerStyles.logoWrapper}>
                <div className={footerStyles.logoImageContainer}>
                  <img
                    src={logo}
                    alt="MedBook Logo"
                    className={footerStyles.logoImage}
                  />
                </div>
              </div>

              <div>
                <h2 className={footerStyles.companyName}>MediCare</h2>
                <p className={footerStyles.companyTagline}>
                  Healthcare Solutions
                </p>
              </div>
            </div>

            <p className={footerStyles.companyDescription}>
              Your trusted partner in healthcare innovation. We're committed to
              providing exceptional medical care with cutting-edge technology
              and compassionate service.
            </p>

            <div className={footerStyles.contactContainer}>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <Phone className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>+91 7505765449</span>
              </div>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <Mail className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>
                  kandpalv54@gmail.com
                </span>
              </div>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                  <MapPin className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>Haldwani,Uttarakhand</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={footerStyles.linksSection}>
            <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
            <ul className={footerStyles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={link.name} className={footerStyles.linkItem}>
                  <a
                    href={link.href}
                    className={footerStyles.quickLink}
                    aria-label={link.name}
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <div className={footerStyles.quickLinkIconWrapper}>
                      <ArrowRight className={footerStyles.quickLinkIcon} />
                    </div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={footerStyles.linksSection}>
            <h3 className={footerStyles.sectionTitle}>Our Services</h3>
            <ul className={footerStyles.linksList}>
              {services.map((service, index) => (
                <li key={service.name}>
                  <a href={service.href} className={footerStyles.serviceLink}>
                    <div className={footerStyles.serviceIcon} />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className={footerStyles.newsletterSection}>
            <h3 className={footerStyles.newsletterTitle}>Stay Connected</h3>
            <p className={footerStyles.newsletterDescription}>
              Subscribe for health tips, medical updates, and wellness insights
              delivered to your inbox.
            </p>

            {/* Newsletter form */}
            <div className={footerStyles.newsletterForm}>
              {/* Mobile newsletter */}
              <div className={footerStyles.mobileNewsletterContainer}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={footerStyles.emailInput}
                  aria-label="Email"
                />
                <button className={footerStyles.mobileSubscribeButton}>
                  <Send className={footerStyles.mobileButtonIcon} />
                  Subscribe
                </button>
              </div>

              {/* Desktop newsletter */}
              <div className={footerStyles.desktopNewsletterContainer}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={footerStyles.desktopEmailInput}
                  aria-label="Email"
                />
                <button className={footerStyles.desktopSubscribeButton}>
                  <Send className={footerStyles.desktopButtonIcon} />
                  <span className={footerStyles.desktopButtonText}>
                    Subscribe
                  </span>
                </button>
              </div>

              {/* Social icons */}
              <div className={footerStyles.socialContainer}>
                {socialLinks.map(({ Icon, color, name, href }, index) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerStyles.socialLink}
                    aria-label={name}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className={footerStyles.socialIconBackground} />
                    <Icon className={`${footerStyles.socialIcon} ${color}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={footerStyles.bottomSection}>
          <div className={footerStyles.copyright}>
            <span>© {currentYear} MediCare Healthcare.</span>
          </div>

          <div className={footerStyles.designerText}>
            <span>Designed by</span>
            <a
              href="https://github.com/vivekkandpal81"
              target="_blank"
              rel="noopener noreferrer"
              className={footerStyles.designerLink}
            >
              Vivek Kandpal
            </a>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{footerStyles.animationStyles}</style>
    </footer>
  );
};

export default Footer;
