import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
const Footer: React.FC = () => {
  const footerLinks = {
    Product: [{
      name: 'Features',
      href: '#',
      mpid: "a270adbf-8664-45f4-a72b-85ba003d9201"
    }, {
      name: 'Pricing',
      href: '#',
      mpid: "9ee8d6de-98ba-4725-9742-d2ec31928624"
    }, {
      name: 'Integrations',
      href: '#',
      mpid: "c0eb11b9-a774-4917-880e-fd7264f3fa9b"
    }],
    Company: [{
      name: 'About',
      href: '#',
      mpid: "3348927b-c201-41e2-8214-1514b9b9e6e3"
    }, {
      name: 'Blog',
      href: '#',
      mpid: "ff1328db-cf82-4e69-bdcb-fb52aa058df8"
    }, {
      name: 'Careers',
      href: '#',
      mpid: "2fc8f970-cb8d-4227-8f58-ed2f57f8761f"
    }, {
      name: 'Press',
      href: '#',
      mpid: "e002722b-01c6-4b26-be6b-6ec9f375532f"
    }],
    Resources: [{
      name: 'Documentation',
      href: '#',
      mpid: "f6271f12-fc3d-463b-8e57-399308b49182"
    }, {
      name: 'Help Center',
      href: '#',
      mpid: "64f4fbd2-cfea-459f-ba8c-057934e73695"
    }, {
      name: 'Community',
      href: '#',
      mpid: "32db048c-c229-4f09-b316-ac76f28be7ad"
    }, {
      name: 'Status',
      href: '#',
      mpid: "1dbc2426-e9f3-420b-9979-aaad6170a8c8"
    }],
    Legal: [{
      name: 'Privacy',
      href: '#',
      mpid: "f8b7f893-dab6-4e7f-b33d-55915fe3e8a5"
    }, {
      name: 'Terms',
      href: '#',
      mpid: "53514b22-a945-4ee4-a83c-c587008ff51e"
    }, {
      name: 'Security',
      href: '#',
      mpid: "92a96454-1d00-4205-8e36-bfe18277d6e1"
    }, {
      name: 'Cookies',
      href: '#',
      mpid: "c34d6fe4-499e-4892-acc7-50b7fb2b5f6b"
    }]
  };
  const socialLinks = [{
    icon: Github,
    href: '#',
    label: 'GitHub',
    mpid: "dfb40785-dfb1-4d73-a814-fe551490e10a"
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
    mpid: "17619487-a2b7-4126-a1be-941bd907b8e1"
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn',
    mpid: "a2a47343-89dd-43c9-aaaf-4ddc00a16725"
  }, {
    icon: Mail,
    href: '#',
    label: 'Email',
    mpid: "710dc492-2e9f-4436-a02b-d34ab942f209"
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