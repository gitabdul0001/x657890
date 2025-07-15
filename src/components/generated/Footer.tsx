import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
const Footer: React.FC = () => {
  const footerLinks = {
    Product: [{
      name: 'Features',
      href: '#',
      mpid: "25ef46d2-74b1-41c0-bd88-ba08a92c2b47"
    }, {
      name: 'Pricing',
      href: '#',
      mpid: "8fcd5bb3-dc50-4aca-9b52-9d758bf1bb66"
    }, {
      name: 'Integrations',
      href: '#',
      mpid: "9152525c-4d33-4552-9af0-857fe743b487"
    }],
    Company: [{
      name: 'About',
      href: '#',
      mpid: "fcd61e2e-076d-48da-ac47-50522b99f5b0"
    }, {
      name: 'Blog',
      href: '#',
      mpid: "7dad1398-395c-409e-80f2-900e19740240"
    }, {
      name: 'Careers',
      href: '#',
      mpid: "89d06660-5d93-4ed4-8628-293a25c24b6b"
    }, {
      name: 'Press',
      href: '#',
      mpid: "96484f91-c0c2-48d9-9c85-8d3e33f05241"
    }],
    Resources: [{
      name: 'Documentation',
      href: '#',
      mpid: "0175ff1e-b9c4-4cb5-b3bc-2b583cc5ed64"
    }, {
      name: 'Help Center',
      href: '#',
      mpid: "2a451649-ab3e-417a-9702-efba6a51fbba"
    }, {
      name: 'Community',
      href: '#',
      mpid: "479fb34d-8407-44fe-bcc1-8a710eb69125"
    }, {
      name: 'Status',
      href: '#',
      mpid: "902945d3-a9eb-4c9b-b212-48004d58533a"
    }],
    Legal: [{
      name: 'Privacy',
      href: '#',
      mpid: "7c4bae73-e805-409d-b055-cf0d009e1a80"
    }, {
      name: 'Terms',
      href: '#',
      mpid: "07b6d5a4-de2f-4469-a70d-07466cde94ed"
    }, {
      name: 'Security',
      href: '#',
      mpid: "bb9afcc2-a48b-4c9e-b421-8cca205892bd"
    }, {
      name: 'Cookies',
      href: '#',
      mpid: "e5fdecf1-3420-4fa6-9c70-5de17f1577e1"
    }]
  };
  const socialLinks = [{
    icon: Github,
    href: '#',
    label: 'GitHub',
    mpid: "9832ce98-34d2-438c-9a7f-aed5d182590f"
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
    mpid: "ca4a8541-f2e1-40cf-aba7-66268a147dd7"
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
    mpid: "e1ad488f-7a2f-46d3-9e84-8a6adcbfe72f"
  }, {
    icon: Mail,
    href: '#',
    label: 'Email',
    mpid: "f4acb7be-85a7-4fdc-8a12-c7c68cbb692c"
  }] as any[];
  return <footer className="bg-black text-white" data-magicpath-id="0" data-magicpath-path="Footer.tsx">
      <div className="max-w-7xl mx-auto px-6 py-16" data-magicpath-id="1" data-magicpath-path="Footer.tsx">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12" data-magicpath-id="2" data-magicpath-path="Footer.tsx">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-id="3" data-magicpath-path="Footer.tsx">
            <div className="mb-6" data-magicpath-id="4" data-magicpath-path="Footer.tsx">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-magicpath-id="5" data-magicpath-path="Footer.tsx">
                Reaxo
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed" data-magicpath-id="6" data-magicpath-path="Footer.tsx">
                Empowering teams to build better products faster with intelligent tools and seamless collaboration.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4" data-magicpath-id="7" data-magicpath-path="Footer.tsx">
              {socialLinks.map((social, index) => <motion.a key={index} href={social.href} aria-label={social.label} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300" whileHover={{
              scale: 1.1,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="Footer.tsx">
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" data-magicpath-uuid={(social as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="Footer.tsx" />
                </motion.a>)}
            </div>
          </motion.div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => <motion.div key={category} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: categoryIndex * 0.1,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-id="10" data-magicpath-path="Footer.tsx">
              <h4 className="text-lg font-semibold text-white mb-4" data-magicpath-id="11" data-magicpath-path="Footer.tsx">{category}</h4>
              <ul className="space-y-3" data-magicpath-id="12" data-magicpath-path="Footer.tsx">
                {links.map((link, linkIndex) => <li key={linkIndex} data-magicpath-uuid={(link as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="Footer.tsx">
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </motion.div>)}
        </div>

        {/* Newsletter Signup */}
        <motion.div className="border-t border-gray-800 pt-12 mb-12" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="14" data-magicpath-path="Footer.tsx">
          <div className="max-w-md" data-magicpath-id="15" data-magicpath-path="Footer.tsx">
            <h4 className="text-lg font-semibold text-white mb-2" data-magicpath-id="16" data-magicpath-path="Footer.tsx">Stay updated</h4>
            <p className="text-gray-400 mb-4 text-sm" data-magicpath-id="17" data-magicpath-path="Footer.tsx">
              Get the latest product updates and company news delivered to your inbox.
            </p>
            <div className="flex gap-3" data-magicpath-id="18" data-magicpath-path="Footer.tsx">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors" data-magicpath-id="19" data-magicpath-path="Footer.tsx" />
              <motion.button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="20" data-magicpath-path="Footer.tsx">
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="21" data-magicpath-path="Footer.tsx">
          <div className="text-gray-400 text-sm" data-magicpath-id="22" data-magicpath-path="Footer.tsx">
            © 2024 Reaxo. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400" data-magicpath-id="23" data-magicpath-path="Footer.tsx">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" data-magicpath-id="24" data-magicpath-path="Footer.tsx" />
    </footer>;
};
export default Footer;