import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Navbar Component (สไตล์วิศวกรเครื่องกล) ---
const Navbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'HOME', id: 'home' },
    { name: 'BLOG', id: 'blog' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'ABOUT', id: 'about' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 border-b-2 border-[#f97316] px-6 py-4 flex justify-between items-center text-white">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#f97316] animate-pulse"></div>
        <span className="text-[#f97316] font-black text-xl tracking-widest">MAKANEMA.SYS</span>
      </div>
      
      {/*ปุ่มสามขีด*/}
      <button onClick={() => setIsOpen(!isOpen)} className="z-50 flex flex-col gap-1.5 focus:outline-none">
        <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }} className="w-8 h-1 bg-[#f97316]" />
        <motion.div animate={{ opacity: isOpen ? 0 : 1 }} className="w-8 h-1 bg-[#f97316]" />
        <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }} className="w-8 h-1 bg-[#f97316]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 right-0 h-screen w-full md:w-80 bg-[#111] border-l-4 border-[#f97316] p-12 flex flex-col gap-6 shadow-2xl"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActivePage(item.id); setIsOpen(false); }}
                className={`text-2xl font-bold text-left skew-x-[-10deg] transition-all ${activePage === item.id ? 'bg-[#f97316] text-black px-4' : 'text-gray-400 hover:text-[#f97316]'}`}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- หน้า Home ---
const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
    <div className="relative">
      <motion.img 
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        src="/Logo.png" 
        className="w-48 h-48 rounded-lg border-2 border-[#f97316] mb-8 z-10 relative bg-[#111]"
      />
      <div className="absolute -top-2 -right-2 w-48 h-48 border-2 border-[#f97316]/30 -z-0"></div>
    </div>
    <h1 className="text-5xl font-black text-white mb-2 italic">HELLO, I AM <span className="text-[#f97316]">MAKA</span></h1>
    <p className="text-gray-400 font-mono tracking-tighter">Welcome to Personal Site for me</p>
    <div className="w-full max-w-xs h-[2px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent my-6"></div>
    <p className="text-lg text-white font-medium">สวัสดีครับ ผมชื่อมากะ ยินดีต้อนรับสู่เว็บส่วนตัวของผมนะครับ</p>
  </motion.div>
);

// --- หน้า Blog (Gears & Specs) ---
const Blog = () => {
  const gears = [
    { name: "Desktop NongBeta", img: "/dt.png", details: [
      "CPU : intel Core i3-7100 2c/4t 3.9GHz",
      "RAM : 8GB DDR4 2133MHz T-Force Vulcan-Z (8*1)",
      "MB : GIGABYTE H110M-DS2 Rev1.2",
      "GPU : Galax Geforce GT 1030 2GB GDDR5",
      "iGPU : intel HD Graphics 630",
      "SSD : 256GB SATA2.5 T-Force Vulcan-Z",
      "HDD0 : 1TB SATA3.5 SEAGATE 7.2kRPM",
      "HDD1 : 500GB SATA2.5 SEAGATE 7.2kRPM",
      "PSU : 600W MSI MAG A600DN 80plus White",
      "Case : Tsunami Protector Goliath TG (Pink)",
      "OS : ZorinOS 18 Core"
    ]},
    { name: "Microphone", img: "/mic.png", details: ["Model : Onikuma HOKO M830"] },
    { name: "Headphone", img: "/hph.png", details: ["Model : AULA S608"] },
    { name: "Monitor", img: "/mnt.png", details: ["Model : Compaq HD+ (1600x900) 60Hz"] }
  ];

  return (
    <motion.div initial={{ x: 100 }} animate={{ x: 0 }} className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10 border-l-8 border-[#f97316] pl-6">
        <h2 className="text-4xl font-black text-white italic">MY GEARS & LINUX SETUP</h2>
        <p className="text-[#f97316] font-mono">LATEST_UPDATE: 14_MAR_2026</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gears.map((item, idx) => (
          <div key={idx} className="bg-[#111] border border-[#f97316]/20 p-4 hover:border-[#f97316] transition-all group">
            <div className="relative h-56 mb-4 overflow-hidden border border-[#333]">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-2 left-2 bg-[#f97316] text-black text-xs font-bold px-2 py-1 uppercase">Hardware_Unit_{idx + 1}</div>
            </div>
            <h3 className="text-[#f97316] text-xl font-bold mb-3 italic underline">{item.name}</h3>
            <ul className="space-y-1 text-gray-400 text-xs font-mono">
              {item.details.map((line, i) => <li key={i} className="hover:text-white"> {">"} {line}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// --- หน้า Projects ---
const Projects = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="bg-[#f97316] text-black px-8 py-4 skew-x-[-15deg] font-black text-3xl animate-bounce">
      PENDING UPDATE
    </div>
    <div className="mt-4 text-white font-mono tracking-[10px] text-xl">
      アップデート待ち
    </div>
  </div>
);

// --- หน้า About ---
const About = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pt-32 px-6 max-w-2xl mx-auto">
    <h2 className="text-3xl font-black text-white mb-8 border-b-2 border-[#f97316] inline-block italic">SYSTEM_CONNECT</h2>
    <div className="grid gap-4">
      {[
        { label: "YouTube: MakanemaMMD", link: "https://youtube.com/@makanemachan?si=qCZU0lhLVe0FPQUF" },
        { label: "YouTube: MakanemaMMD V2", link: "https://youtube.com/@makanemachanv2?si=3rIft3zgEYj2Cl_P" },
        { label: "X (Twitter)", link: "https://x.com/MaxGuMu" },
        { label: "TikTok", link: "https://www.tiktok.com/@makanemamaxy?_r=1&_t=ZS-94fmOYPxW0T" }
      ].map((social, i) => (
        <a key={i} href={social.link} target="_blank" rel="noreferrer" className="flex justify-between items-center p-4 bg-[#111] border-l-4 border-gray-600 hover:border-[#f97316] hover:bg-[#1a1a1a] transition-all group">
          <span className="text-white font-bold group-hover:text-[#f97316]">{social.label}</span>
          <span className="text-[#f97316]">{"[LINK]"}</span>
        </a>
      ))}
    </div>
  </motion.div>
);

// --- ส่วนหลัก ---
export default function MakanemaSite() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-200 font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {activePage === 'home' && <Home />}
        {activePage === 'blog' && <Blog />}
        {activePage === 'projects' && <Projects />}
        {activePage === 'about' && <About />}
      </main>
      <footer className="fixed bottom-4 right-6 text-[10px] text-gray-600 font-mono hidden md:block">
        MODEL: BELOBOG_HEAVY_INDUSTRIES // USER: MAKA_HISURIMA
      </footer>
    </div>
  );
    }
  
