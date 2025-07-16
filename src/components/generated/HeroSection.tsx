import React from 'react';
import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';
const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen overflow-hidden" style={{
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1366" zoomAndPan="magnify" viewBox="0 0 1024.5 576" height="768" preserveAspectRatio="xMidYMid meet" version="1.2"><defs><clipPath id="c87c985bab"><path d="M 0 0.140625 L 1024 0.140625 L 1024 575.859375 L 0 575.859375 Z M 0 0.140625 "/></clipPath><clipPath id="6bc041d466"><path d="M 180 391 L 378 391 L 378 564 L 180 564 Z M 180 391 "/></clipPath><clipPath id="6d2cb26ea6"><path d="M 388.902344 643.761719 L 116.222656 578.558594 L 181.425781 305.882812 L 454.101562 371.085938 Z M 388.902344 643.761719 "/></clipPath><clipPath id="8e96606d88"><path d="M 114.925781 579.472656 L 389.789062 645.195312 L 455.511719 370.332031 L 180.648438 304.609375 Z M 114.925781 579.472656 "/></clipPath><clipPath id="30b208fd35"><path d="M -692.589844 916.582031 L 353.640625 1166.757812 L 747.117188 -478.777344 L -299.113281 -728.949219 Z M -692.589844 916.582031 "/></clipPath><clipPath id="b05efa615a"><path d="M -692.589844 916.582031 L 353.640625 1166.753906 L 747.117188 -478.773438 L -299.113281 -728.949219 Z M -692.589844 916.582031 "/></clipPath><clipPath id="6b9c0a2149"><path d="M 49 0.140625 L 306 0.140625 L 306 202 L 49 202 Z M 49 0.140625 "/></clipPath></defs><g id="896d4d9632"><g clip-rule="nonzero" clip-path="url(#c87c985bab)"><path style=" stroke:none;fill-rule:nonzero;fill:#ffffff;fill-opacity:1;" d="M 0 0.140625 L 1024 0.140625 L 1024 575.859375 L 0 575.859375 Z M 0 0.140625 "/><path style=" stroke:none;fill-rule:nonzero;fill:#ffffff;fill-opacity:1;" d="M 0 0.140625 L 1024 0.140625 L 1024 575.859375 L 0 575.859375 Z M 0 0.140625 "/></g><g clip-rule="nonzero" clip-path="url(#6bc041d466)"><g clip-rule="nonzero" clip-path="url(#6d2cb26ea6)"><g clip-rule="nonzero" clip-path="url(#8e96606d88)"><g clip-rule="nonzero" clip-path="url(#30b208fd35)"><g clip-rule="nonzero" clip-path="url(#b05efa615a)"><path style=" stroke:none;fill-rule:nonzero;fill:#8b7fff;fill-opacity:1;" d="M 185.09375 506.820312 C 189.683594 521.847656 196.339844 537.0625 202.042969 551.820312 L 206.214844 558.757812 C 217.03125 574.308594 214.699219 550.886719 213.023438 534.269531 C 212.070312 524.875 206.429688 511.679688 203.894531 501.832031 C 199.550781 484.890625 197.578125 468.148438 202.050781 457.390625 C 208.179688 442.65625 224.273438 445.925781 236.378906 467.804688 C 245.175781 483.699219 250.515625 502.285156 258.085938 518.980469 C 263.164062 530.175781 275.746094 553.632812 283.261719 550.726562 C 290.175781 548.054688 290.210938 530.042969 290.785156 519.136719 C 291.128906 512.566406 291.652344 499.015625 296.945312 499.328125 C 299.152344 499.453125 301.871094 507.722656 302.832031 510.214844 C 307.003906 521.007812 312.25 535.113281 318.996094 542.867188 C 327.148438 552.238281 334.667969 552.765625 340.761719 549.53125 C 353.292969 542.882812 360.222656 528.835938 365.777344 510.300781 C 371.667969 490.625 381.773438 464.824219 374.914062 434.035156 C 372.691406 424.058594 367.160156 409.019531 361.152344 401.1875 C 356.445312 395.058594 351.542969 397.316406 348.652344 399.84375 C 341.875 405.746094 337.570312 418.222656 334.972656 430.355469 C 331.605469 446.054688 332.257812 464.523438 330.558594 481.703125 C 329.652344 490.890625 321.785156 494.578125 315.167969 482.722656 C 306.242188 466.71875 302.097656 447.234375 293.414062 431.046875 C 286.621094 418.378906 279.132812 420.433594 274.589844 425.308594 C 269.636719 430.628906 268.167969 441.777344 267.671875 452.613281 C 267.347656 459.726562 267.894531 481.144531 260.148438 475.675781 C 253.25 470.796875 246.953125 456.910156 242.359375 447.253906 C 235.546875 432.941406 228.871094 416.019531 220.746094 403.097656 C 213.992188 392.351562 209.050781 389.320312 203.25 392.804688 C 187.921875 401.976562 184.65625 432.242188 181.367188 458.179688 C 179.710938 471.269531 180.003906 490.148438 185.09375 506.820312 Z M 185.09375 506.820312 "/></g></g></g></g></g><path style=" stroke:none;fill-rule:nonzero;fill:#fe8363;fill-opacity:1;" d="M 806.585938 174.003906 C 808.574219 159.414062 809.75 154.351562 812.808594 147.210938 C 816.417969 138.804688 816.453125 136.292969 821.300781 132.722656 C 826.144531 129.148438 827.769531 127.117188 834.335938 127.539062 C 841.660156 128.003906 849.320312 139.863281 849.320312 139.863281 C 851.207031 141.996094 853.835938 145.617188 855.164062 147.90625 C 857.238281 151.484375 866.4375 172.113281 874.40625 191.074219 C 877.863281 199.300781 881.972656 200.554688 884.28125 194.085938 C 884.71875 192.847656 884.519531 184.25 883.839844 174.980469 C 881.753906 146.535156 881.285156 133.378906 882.230469 129.785156 C 883.472656 125.03125 887.539062 119.566406 891.019531 117.960938 C 902.328125 112.746094 915.910156 121.234375 922.8125 137.828125 C 927.085938 148.109375 931.007812 154.875 933.015625 155.464844 C 935.953125 156.320312 937.078125 152.355469 937.996094 137.933594 C 938.671875 127.304688 939.613281 121.894531 941.566406 117.433594 C 947.683594 103.445312 960.367188 99.78125 972.726562 108.441406 C 985 117.035156 985.914062 127.171875 977.921875 166.050781 C 974.957031 180.472656 974.535156 184.300781 974.59375 196.160156 C 974.695312 214.757812 971.929688 222.59375 964.40625 225.019531 C 955.441406 227.914062 947.710938 222.230469 934.054688 202.695312 C 925.453125 190.390625 923.085938 188.558594 920.128906 191.910156 C 918.046875 194.261719 918.054688 194.144531 919.003906 216.675781 C 919.640625 231.824219 917.894531 243.601562 913.835938 251.558594 C 904.203125 270.441406 897.492188 274.007812 886.378906 266.152344 C 875.703125 258.605469 868.648438 246.242188 852.921875 207.527344 C 847.867188 195.078125 845.605469 192.253906 842.914062 195.007812 C 841.492188 196.460938 842.371094 216.289062 844.269531 225.8125 L 845.640625 258.390625 C 844.285156 267.90625 840.34375 277.132812 835.609375 281.902344 C 830.832031 286.703125 822.074219 288.066406 815.398438 285.042969 C 806.792969 281.148438 803.011719 275.523438 798.828125 260.394531 C 794.96875 246.445312 795.429688 226.800781 800.046875 208.15625 C 802.902344 196.644531 804.980469 185.785156 806.585938 174.003906 Z M 806.585938 174.003906 "/><g clip-rule="nonzero" clip-path="url(#6b9c0a2149)"><path style=" stroke:none;fill-rule:nonzero;fill:#f9c558;fill-opacity:1;" d="M 303.777344 147.914062 C 302.140625 155.484375 299.734375 164.859375 295.390625 168.386719 L 288.46875 178.117188 C 283.359375 184.074219 287.882812 178.816406 282.976562 185.457031 C 277.964844 192.242188 273.570312 200.507812 266.113281 201.34375 C 258.257812 202.222656 257.65625 193.445312 258.933594 183.445312 C 259.523438 178.828125 262.765625 151.71875 255.011719 154.175781 C 250.21875 155.695312 244.679688 164.339844 241.679688 169.6875 C 238.328125 175.664062 236.457031 182.816406 232.484375 188.242188 C 224.671875 198.910156 209.527344 193.4375 199.953125 188.980469 C 187.96875 183.398438 166.285156 166.199219 173.855469 143.691406 C 178.691406 129.304688 186.714844 115.347656 178.585938 98.355469 C 177.210938 95.480469 165.214844 111.886719 163.046875 113.5 C 157.363281 117.734375 143.71875 121.113281 138.492188 111.6875 C 133.214844 102.167969 145.425781 83.445312 148.683594 78.253906 C 150.820312 74.839844 161.519531 54.234375 150.84375 53.753906 C 140.285156 53.277344 129.242188 60.863281 121.171875 69.679688 C 111.417969 80.335938 100.964844 89.472656 91.160156 100.039062 C 83.042969 108.789062 67.875 120.144531 57.476562 109.296875 C 47.019531 98.386719 48.625 73.28125 54.804688 60.5625 C 67.132812 35.191406 86.574219 15.066406 102.753906 -4.660156 C 119.765625 -25.402344 144.867188 -51.933594 169.375 -39.796875 C 185.664062 -31.734375 186.890625 -4.308594 181.117188 14.398438 C 179.621094 19.253906 169.515625 48.929688 179.90625 48.421875 C 197.324219 47.574219 209.511719 15.863281 227.660156 33.195312 C 234.015625 39.265625 231.984375 50.953125 230.824219 59.691406 C 228.667969 75.917969 219.878906 90.992188 214.546875 104.964844 C 211.457031 113.070312 208.242188 121.707031 209.222656 131.695312 C 209.761719 137.183594 210.957031 147.679688 215.847656 148.699219 C 220.433594 149.648438 224.25 145.441406 227.75 142.199219 C 233.007812 137.320312 238.554688 133.132812 243.882812 128.421875 C 252.71875 120.605469 301.234375 71.386719 304.644531 112.34375 C 305.597656 123.792969 306.109375 137.140625 303.777344 147.914062 Z M 303.777344 147.914062 "/></g></g></svg>`)}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }} data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* Top navigation */}
      <nav className="absolute top-6 left-0 right-0 z-10 flex justify-between items-center px-6" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
          <h1 className="text-4xl font-black text-black tracking-tight" style={{
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }} data-magicpath-id="3" data-magicpath-path="HeroSection.tsx">
            <span data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">R</span><em data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">e</em><span data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">axo</span>
          </h1>
        </div>
        
        {/* Login/Signup buttons */}
        <div className="flex gap-3 ml-auto" data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
          <button className="inline-block px-6 py-2 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-[#fe8363] hover:text-white focus:ring-4 focus:ring-[#fe8363]/30 transition-all duration-300 text-center border border-gray-200" data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
            Login
          </button>
          <button className="inline-block px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-[#8b7fff] focus:ring-4 focus:ring-[#8b7fff]/30 transition-all duration-300 text-center" data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 border-0 outline-none" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
        <div className="text-center max-w-4xl mx-auto" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
          <motion.h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
            <div className="flex flex-col items-center -space-y-4" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">
              <span className="block" data-magicpath-id="14" data-magicpath-path="HeroSection.tsx">Make every</span>
              <span className="block" data-magicpath-id="15" data-magicpath-path="HeroSection.tsx">post</span>
              <TypingEffect words={["Effortless", "viral", "Wins"]} colors={["#989cfc", "#fc7557", "#f9c558"]} className="block mt-2" data-magicpath-id="16" data-magicpath-path="HeroSection.tsx" />
            </div>
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl font-normal text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed mt-4" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} data-magicpath-id="17" data-magicpath-path="HeroSection.tsx">Stop struggling to understand your social performance. Our tools break down the numbers so you can focus on creating, connecting, and growing across every channel with confidence.</motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut"
        }} data-magicpath-id="18" data-magicpath-path="HeroSection.tsx">
            <motion.a href="https://reaxo.xyz" className="inline-block px-12 py-4 bg-primary-900 text-white text-xl font-semibold rounded-full hover:bg-jive-green focus:ring-4 focus:ring-jive-teal/30 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-all duration-300 text-center" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} data-magicpath-id="19" data-magicpath-path="HeroSection.tsx">
              Sign Up Free
            </motion.a>
            
            <motion.p className="text-sm text-gray-500 font-medium" whileHover={{
            scale: 1.02
          }} style={{
            display: "none"
          }} data-magicpath-id="20" data-magicpath-path="HeroSection.tsx">
              Get connected and start with Reaxo
            </motion.p>
          </motion.div>

          {/* Bottom text section */}
          <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center w-full px-6" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6,
          ease: "easeOut"
        }} style={{
          display: "none"
        }} data-magicpath-id="21" data-magicpath-path="HeroSection.tsx">
            <p className="text-lg text-gray-700 mb-8 font-light" data-magicpath-id="22" data-magicpath-path="HeroSection.tsx">
              Get connected and start jiving.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-6" style={{
            display: "none"
          }} data-magicpath-id="23" data-magicpath-path="HeroSection.tsx">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base font-medium">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base font-medium">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base font-medium">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-base font-medium">
                Contact
              </a>
            </div>
            
            <p className="text-gray-500 text-sm font-light" data-magicpath-id="24" data-magicpath-path="HeroSection.tsx">
              © 2025 Reaxo by Abdul Mazid
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;