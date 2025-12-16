"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, Github, Facebook, ArrowUp, Download, ExternalLink,
  Code2, Terminal, Cpu, Database, Monitor, Server, Layers,
  X, ChevronLeft, ChevronRight
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  // ===== รูปของแต่ละโปรเจกต์ =====

  // โปรเจกต์ 1: Blockchain DApp (4 รูป)
  const dappImages = [
    {
      src: "/projects/crowdfunding-preview-1.png",
      alt: "Crowdfunding DApp Preview 1",
    },
    {
      src: "/projects/crowdfunding-preview-2.png",
      alt: "Crowdfunding DApp Preview 2",
    },
    {
      src: "/projects/crowdfunding-preview-3.png",
      alt: "Crowdfunding DApp Preview 3",
    },
    {
      src: "/projects/crowdfunding-preview-4.png",
      alt: "Crowdfunding DApp Preview 4",
    },
  ];

  // โปรเจกต์ 2: Storefront Dark Neon — Admin Console (2 รูป)
  const storefrontAdminImages = [
    {
      src: "/projects/storefront-admin-1.png",
      alt: "Storefront Admin Console Preview 1",
    },
    {
      src: "/projects/storefront-admin-2.png",
      alt: "Storefront Admin Console Preview 2",
    },
  ];

  // โปรเจกต์ 2: Storefront Dark Neon — Shop UI (8 รูป)
  const storefrontUiImages = [
    {
      src: "/projects/storefront-ui-1.png",
      alt: "Storefront Shop UI Preview 1",
    },
    {
      src: "/projects/storefront-ui-2.png",
      alt: "Storefront Shop UI Preview 2",
    },
    {
      src: "/projects/storefront-ui-3.png",
      alt: "Storefront Shop UI Preview 3",
    },
    {
      src: "/projects/storefront-ui-4.png",
      alt: "Storefront Shop UI Preview 4",
    },
    {
      src: "/projects/storefront-ui-5.png",
      alt: "Storefront Shop UI Preview 5",
    },
    {
      src: "/projects/storefront-ui-6.png",
      alt: "Storefront Shop UI Preview 6",
    },
    {
      src: "/projects/storefront-ui-7.png",
      alt: "Storefront Shop UI Preview 7",
    },
    {
      src: "/projects/storefront-ui-8.png",
      alt: "Storefront Shop UI Preview 8",
    },
  ];

  // โปรเจกต์ 3: ConnectAPark (5 รูป)
  const connectAParkImages = [
    {
      src: "https://img2.pic.in.th/pic/200801CB-E912-4744-B6E7-892136E6C69D.png",
      alt: "ConnectAPark - Docker Desktop",
    },
    {
      src: "https://img5.pic.in.th/file/secure-sv1/ED5E3849-2A05-4AEA-A35A-17246D2F551F.png",
      alt: "ConnectAPark - Prisma Studio 1",
    },
    {
      src: "https://img2.pic.in.th/pic/8A924C19-DCEC-4DDF-BA21-FA1218614E80.png",
      alt: "ConnectAPark - Prisma Studio 2",
    },
    {
      src: "https://img5.pic.in.th/file/secure-sv1/41DA44F7-C75B-4AD2-B58D-CB45CCC8DB5E.png",
      alt: "ConnectAPark - Swagger UI 1",
    },
    {
      src: "https://img2.pic.in.th/pic/2AED09D9-9F33-48AB-AD90-8720ACD5EA68.png",
      alt: "ConnectAPark - Swagger UI 2",
    },
  ];

  // โปรเจกต์ 4: Speech to Text (Thai) (4 รูป - Placeholder)
  const speechToTextImages = [
    {
      src: "/projects/speech-to-text-1.png",
      alt: "Speech to Text Preview 1",
    },
    {
      src: "/projects/speech-to-text-2.png",
      alt: "Speech to Text Preview 2",
    },
    {
      src: "/projects/speech-to-text-3.png",
      alt: "Speech to Text Preview 3",
    },
  ];

  // รวมทั้งหมดไว้ให้ Lightbox ใช้
  const allImages = [
    ...dappImages,
    ...storefrontAdminImages,
    ...storefrontUiImages,
    ...connectAParkImages,
    ...speechToTextImages,
  ];

  // index ของรูปที่เปิดใน Lightbox (null = ยังไม่เปิด)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // Zoom state
  const [zoom, setZoom] = useState(1);
  // Pan state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Scroll to Top logic
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Active Section State
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Scroll to Top visibility
      setShowScrollTop(window.scrollY > 300);

      // Active Section detection
      const sections = ["about", "skills", "projects", "contact"];
      let current = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) { // 150px offset
            current = section;
          }
        }
      }

      // Check if reached bottom of page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        current = "contact";
      }

      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      setZoom(1); // Reset zoom when opening new image
      setPosition({ x: 0, y: 0 }); // Reset position
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxIndex]);

  // Handle mouse wheel for zooming
  const handleWheel = (e: React.WheelEvent) => {
    if (lightboxIndex !== null) {
      const delta = e.deltaY * -0.001;
      setZoom((prevZoom) => {
        const newZoom = prevZoom + delta;
        const clampedZoom = Math.min(Math.max(newZoom, 1), 5); // Clamp between 1x and 5x

        // If zooming out to 1x, reset position
        if (clampedZoom === 1) {
          setPosition({ x: 0, y: 0 });
        }

        return clampedZoom;
      });
    }
  };

  // Handle panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      e.preventDefault(); // Prevent default drag behavior
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // offset สำหรับแต่ละกลุ่ม
  const dappOffset = 0;
  const storefrontAdminOffset = dappImages.length; // ต่อจาก dapp
  const storefrontUiOffset = dappImages.length + storefrontAdminImages.length; // ต่อจาก admin
  const connectAParkOffset =
    dappImages.length + storefrontAdminImages.length + storefrontUiImages.length; // ต่อจาก storefrontUi
  const speechToTextOffset =
    connectAParkOffset + connectAParkImages.length; // ต่อจาก connectAPark

  return (
    <main className="relative min-h-screen bg-black text-slate-50 selection:bg-cyan-400/40 selection:text-white">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/20 blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[80px]"
        />
      </div>

      {/* กล่องความกว้างหลัก */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-20">
        {/* ===== NAVBAR ===== */}
        <header className="sticky top-0 z-40 -mx-4 mb-6 border-b border-cyan-500/10 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-xl">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <div className="text-xs font-semibold tracking-[0.35em] text-cyan-300">
              SUPAWAT · PORTFOLIO
            </div>
            <nav className="hidden gap-8 text-xs font-medium text-slate-400 md:flex">
              {["about", "skills", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`transition hover:text-cyan-300 ${activeSection === section ? "text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" : ""}`}
                >
                  {section.toUpperCase()}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* ===== HERO ===== */}
        <section id="hero" className="mt-6 grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-center">
          {/* ฝั่งซ้าย: ชื่อ / ปุ่ม / tags */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              <Terminal size={14} /> WEB · SOFTWARE · IT SUPPORT
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 md:text-5xl">
              ศุภวัทน์ อารักษ์รัตนกุล
            </h1>

            {/* Tag Skills */}
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-200">
              <Badge><Code2 size={12} className="mr-1 inline" /> JavaScript · React.js · Node.js</Badge>
              <Badge><Monitor size={12} className="mr-1 inline" /> Web Application</Badge>
              <Badge><Layers size={12} className="mr-1 inline" /> UI / UX Design</Badge>
              <Badge><Cpu size={12} className="mr-1 inline" /> Hardware & System</Badge>
            </div>

            {/* ปุ่ม */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Resume_Supawat.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                <Download size={16} />
                ดาวน์โหลด Resume
              </a>

              <a
                href="https://github.com/4Baldwin"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-white/5 px-6 py-2.5 text-xs font-medium text-slate-100 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-300/10"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* รูปโปรไฟล์ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-fuchsia-500/30 to-transparent blur-xl transition duration-500 group-hover:blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition duration-500 group-hover:scale-[1.02]">
                <img
                  src="/profile.png"
                  alt="Supawat portrait"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===== ABOUT ===== */}
        <Section id="about" title="ABOUT">
          <div className="grid gap-6 md:grid-cols-[2fr_1.4fr]">
            <GlassCard>
              <p className="text-sm text-slate-200">
                ผมเป็นนักศึกษาคณะวิทยาการคอมพิวเตอร์ที่มีพื้นฐานด้านการพัฒนาเว็บไซต์และการเขียนโปรแกรม
                สามารถทำงานกับเทคโนโลยีเว็บ เช่น
                <span className="text-cyan-300"> JavaScript, React.js, Node.js</span>{" "}
                และมีความเข้าใจในการออกแบบโครงสร้างระบบและหลักการพัฒนาซอฟต์แวร์ที่ถูกต้อง
              </p>
              <p className="mt-3 text-sm text-slate-200">
                นอกจากนี้ยังมีทักษะพื้นฐานด้าน
                <span className="text-cyan-300"> UI/UX Design</span> สามารถออกแบบ
                Wireframe และ Layout ของเว็บไซต์ให้ใช้งานง่ายและเป็นระบบ รวมถึงมีประสบการณ์ด้าน
                <span className="text-cyan-300"> Hardware</span> และการดูแลระบบ เช่น
                การประกอบคอมพิวเตอร์ การติดตั้งระบบปฏิบัติการ และการตั้งค่าอุปกรณ์เครือข่ายเบื้องต้น
                ทำให้สามารถมองภาพรวมของระบบไอทีได้ทั้งฝั่งซอฟต์แวร์และฮาร์ดแวร์
              </p>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                SUMMARY
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>
                  🎓 <span className="font-medium">สาขา:</span> Computer Science
                </li>
                <li>
                  🏫 <span className="font-medium">มหาวิทยาลัย:</span>{" "}
                  มหาวิทยาลัยรังสิต
                </li>
                <li>
                  💼 <span className="font-medium">สายงานที่สนใจ:</span> Web Dev,
                  Software Dev, System Admin, IT Support, UI/UX
                </li>
              </ul>
            </GlassCard>
          </div>
        </Section>

        {/* ===== SKILLS ===== */}
        <Section id="skills" title="SKILLS">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Languages */}
            <GlassCard>
              <TitleSmall>Languages</TitleSmall>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>HTML / CSS</Badge>
                <Badge>JavaScript (ES6+)</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Python</Badge>
                <Badge>PHP</Badge>
                <Badge>SQL</Badge>
                <Badge>Solidity</Badge>
              </div>
            </GlassCard>

            {/* Frameworks & Libraries */}
            <GlassCard>
              <TitleSmall>Frameworks & Libraries</TitleSmall>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>React.js</Badge>
                <Badge>Next.js</Badge>
                <Badge>Vite</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express.js</Badge>
                <Badge>NestJS</Badge>
                <Badge>JWT</Badge>
                <Badge>WordPress</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Framer Motion</Badge>
                <Badge>Axios</Badge>
                <Badge>RESTful API</Badge>
              </div>
            </GlassCard>

            {/* Tools & Platforms */}
            <GlassCard>
              <TitleSmall>Tools & Platforms</TitleSmall>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Git / GitHub</Badge>
                <Badge>Docker</Badge>
                <Badge>Postman / Swagger</Badge>
                <Badge>Hardhat</Badge>
                <Badge>Ethers.js</Badge>
                <Badge>Figma</Badge>
                <Badge>VS Code</Badge>
              </div>
            </GlassCard>

            {/* Databases & Systems */}
            <GlassCard>
              <TitleSmall>Databases & Systems</TitleSmall>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>PostgreSQL</Badge>
                <Badge>MySQL / MariaDB</Badge>
                <Badge>Prisma ORM</Badge>
                <Badge>SQLite</Badge>
                <Badge>Linux (Ubuntu)</Badge>
                <Badge>Windows Admin</Badge>
              </div>
            </GlassCard>

            {/* Hardware */}
            <GlassCard className="md:col-span-2">
              <TitleSmall>Hardware</TitleSmall>
              <ul className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  ตรวจสอบและแก้ไขปัญหาเครื่อง Desktop / Notebook เบื้องต้น
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  ติดตั้งและอัปเกรดอุปกรณ์ Hardware (RAM, SSD, PSU)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  ติดตั้งและตั้งค่าระบบ Windows และ Driver พื้นฐาน
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  บริหารจัดการอุปกรณ์เครือข่ายเบื้องต้น (Router / Switch)
                </li>
              </ul>
            </GlassCard>
          </div>
        </Section>

        {/* ===== PROJECTS ===== */}
        <Section id="projects" title="PROJECTS" className="space-y-6">
          <div className="space-y-20">
            {/* ================== PROJECT 1: Blockchain DApp ================== */}
            <GlassCard className="space-y-6">
              {/* TITLE */}
              <div>
                <h2 className="text-2xl font-bold text-slate-50">
                  Blockchain Crowdfunding DApp
                </h2>
                <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                  SOLIDITY · ETHERS.JS · REACT · TAILWINDCSS · SEPOLIA TESTNET
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                Developed a decentralized crowdfunding platform on <strong>Sepolia Testnet</strong> using <strong>Solidity</strong> Smart Contracts.
                Built a responsive frontend with <strong>React.js</strong> and <strong>Tailwind CSS</strong> to interact with the blockchain via <strong>Ethers.js</strong>.
                Ensures transparency and security for all donations.
              </p>

              {/* KEY FEATURES */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  KEY FEATURES
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                  <li>✔ สร้างแคมเปญ พร้อมข้อมูลครบ (เป้าหมาย, รูปภาพ, วันสิ้นสุด)</li>
                  <li>✔ บริจาค ETH ผ่าน MetaMask (Sepolia Testnet)</li>
                  <li>✔ เจ้าของแคมเปญถอนเงินได้เมื่อถึงกำหนด</li>
                  <li>✔ ลบแคมเปญได้ (หากยังไม่มีผู้บริจาค)</li>
                  <li>✔ ผู้บริจาคและธุรกรรมแสดงแบบโปร่งใส</li>
                  <li>✔ ทุกธุรกรรมตรวจสอบได้บน Blockchain</li>
                </ul>
              </div>

              {/* TECH STACK */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  TECH STACK
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm text-slate-200">
                  <li>- Solidity</li>
                  <li>- Sepolia Testnet</li>
                  <li>- React + Vite</li>
                  <li>- TailwindCSS</li>
                  <li>- ethers.js</li>
                  <li>- Context API</li>
                </ul>
              </div>

              {/* LINKS */}
              <div className="mt-6 flex flex-wrap gap-5 pt-2">
                <a
                  href="https://crowdfunding-dapp-mocha.vercel.app"
                  target="_blank"
                  className="text-xs font-medium text-cyan-300 hover:text-cyan-200"
                >
                  🌐 Live Demo →
                </a>
                <a
                  href="https://github.com/4Baldwin/crowdfunding-dapp.git"
                  target="_blank"
                  className="text-xs font-medium text-cyan-300 hover:text-cyan-200"
                >
                  💻 GitHub →
                </a>
                <a
                  href="https://sepolia.etherscan.io/address/0x12f0966E9DbA8dc7107C6c966eFd1D6788da040A"
                  target="_blank"
                  className="text-xs font-medium text-cyan-300 hover:text-cyan-200"
                >
                  🔎 Smart Contract →
                </a>
              </div>

              {/* IMAGE PREVIEW — Thumbnail + Lightbox (ใช้ dappImages) */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  PREVIEW
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {dappImages.map((img, index) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setLightboxIndex(dappOffset + index)}
                      className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* ================== PROJECT 2: Storefront Dark Neon ================== */}
            <GlassCard className="space-y-6">
              {/* TITLE */}
              <div>
                <h2 className="text-2xl font-bold text-slate-50">
                  Storefront Dark Neon Custom (WooCommerce)
                </h2>
                <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                  WORDPRESS · WOOCOMMERCE · STOREFRONT THEME · CUSTOM CSS · PHP
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                โปรเจกต์ปรับแต่งธีม Storefront ของ WooCommerce ให้เป็นสไตล์ Dark Neon Glass UI
                โดยปรับ Header, Product Card, Badge ลดราคา, Mini Cart, Single Product
                และ Cart Page ให้เข้าชุดกันบนโทนมืดแต่ยังคงโครงสร้างเดิมของธีมไว้ครบถ้วน
              </p>

              {/* KEY FEATURES */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  KEY FEATURES
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                  <li>✔ ปรับ UI ทั้งเว็บให้เป็น Dark Neon Glass</li>
                  <li>✔ ออกแบบ Product Card ใหม่พร้อม Hover Effect</li>
                  <li>✔ ปรับตำแหน่ง Badge ลดราคาไปอยู่บนรูปสินค้า</li>
                  <li>✔ ปรับ Mini Cart, Cart Page และ Single Product ให้เป็น Glass UI</li>
                  <li>✔ ใช้ Custom CSS + Code Snippets โดยไม่แก้ธีมหลักโดยตรง</li>
                </ul>
              </div>

              {/* TECH STACK */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  TECH STACK
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm text-slate-200">
                  <li>- WordPress</li>
                  <li>- WooCommerce</li>
                  <li>- Storefront Theme</li>
                  <li>- Custom CSS</li>
                  <li>- PHP (Theme Override)</li>
                  <li>- Code Snippets Plugin</li>
                </ul>
              </div>

              {/* LINKS */}
              <div className="mt-6 flex flex-wrap gap-5 pt-2">
                <a
                  href="https://github.com/4Baldwin/storefront-dark-neon-custom"
                  target="_blank"
                  className="text-xs font-medium text-cyan-300 hover:text-cyan-200"
                >
                  💻 GitHub →
                </a>
              </div>

              {/* PREVIEW — Admin Console (2 รูป) */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  ADMIN CONSOLE PREVIEW
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {storefrontAdminImages.map((img, index) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() =>
                        setLightboxIndex(storefrontAdminOffset + index)
                      }
                      className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* PREVIEW — Shop UI (8 รูป) */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  SHOP UI PREVIEW
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {storefrontUiImages.map((img, index) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() =>
                        setLightboxIndex(storefrontUiOffset + index)
                      }
                      className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* ================== PROJECT 3: ConnectAPark ================== */}
            <GlassCard className="space-y-6">
              {/* TITLE */}
              <div>
                <h2 className="text-2xl font-bold text-slate-50">
                  ConnectAPark – Parking API
                </h2>
                <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                  NESTJS · PRISMA · POSTGRESQL · DOCKER · JWT · SWAGGER
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                Architected and developed a production-ready RESTful API for a smart parking system using <strong>NestJS</strong> and <strong>TypeScript</strong>.
                Designed database schema with <strong>PostgreSQL</strong> and <strong>Prisma</strong>.
                Implemented secure <strong>JWT</strong> authentication and containerized the entire system using <strong>Docker</strong>.
              </p>

              {/* KEY FEATURES */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  KEY FEATURES
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                  <li>✔ ผู้ใช้งาน (Users): สมัครสมาชิก / ล็อกอิน, ดูโปรไฟล์, ระบบลืมรหัสผ่าน</li>
                  <li>✔ ระบบตั๋ว (Tickets): จองที่จอดล่วงหน้า, เช็คอิน (Scan QR / Sensor)</li>
                  <li>✔ เช็คเอาต์และคำนวณราคา, ชำระเงินผ่าน Payment Gateway</li>
                  <li>✔ ระบบจุดจอด (Spaces): เช็กสถานะที่จอดทั้งหมด, Sensor ยืนยันการว่าง</li>
                  <li>✔ ระบบกลาง (App): Health Check, Clean expired tickets</li>
                </ul>
              </div>

              {/* TECH STACK */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  TECH STACK
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm text-slate-200">
                  <li>- NestJS</li>
                  <li>- Prisma ORM</li>
                  <li>- PostgreSQL</li>
                  <li>- Docker Desktop</li>
                  <li>- JWT Authentication</li>
                  <li>- Swagger (OpenAPI 3.0)</li>
                </ul>
              </div>

              {/* LINKS */}
              <div className="mt-6 flex flex-wrap gap-5 pt-2">
                <a
                  href="https://github.com/4Baldwin/Parking-API.git"
                  target="_blank"
                  className="text-xs font-medium text-cyan-300 hover:text-cyan-200"
                >
                  💻 GitHub →
                </a>
              </div>

              {/* PREVIEW */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  PREVIEW
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {connectAParkImages.map((img, index) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() =>
                        setLightboxIndex(connectAParkOffset + index)
                      }
                      className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* ================== PROJECT 4: Speech to Text (Thai) ================== */}
            <GlassCard className="space-y-6">
              {/* TITLE */}
              <div>
                <h2 className="text-2xl font-bold text-slate-50">
                  Speech to Text (Thai)
                </h2>
                <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                  PYTHON · FLET · SPEECH RECOGNITION · PYAUDIO · GOOGLE API
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                แอปพลิเคชันเดสก์ท็อปสำหรับแปลงเสียงพูดภาษาไทยเป็นข้อความ
                รองรับทั้งไฟล์เสียง (.mp3, .wav, .m4a, .flac) และการรับเสียงจากไมโครโฟนแบบ Real-time
                (Start/Stop) พัฒนาด้วย Python และ Flet Framework
              </p>

              {/* KEY FEATURES */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  KEY FEATURES
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
                  <li>✔ แปลงไฟล์เสียงเป็นข้อความ (รองรับ .mp3, .wav, .m4a, .flac)</li>
                  <li>✔ รับเสียงจากไมโครโฟน (Start / Stop Recording)</li>
                  <li>✔ ประมวลผลผ่าน Google Speech Recognition API</li>
                  <li>✔ UI ใช้งานง่าย: เลือกไฟล์, แสดงสถานะ, กล่องผลลัพธ์</li>
                  <li>✔ Portable: รันได้ทันทีไม่ต้องติดตั้ง Python (ผ่าน .bat)</li>
                </ul>
              </div>

              {/* TECH STACK */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  TECH STACK
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-y-1.5 text-sm text-slate-200">
                  <li>- Python 3.12</li>
                  <li>- Flet (GUI)</li>
                  <li>- Google Speech Recognition</li>
                  <li>- PyAudio</li>
                  <li>- Pydub + FFmpeg</li>
                </ul>
              </div>

              {/* PREVIEW */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
                  PREVIEW
                </h3>
                <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {speechToTextImages.map((img, index) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() =>
                        setLightboxIndex(speechToTextOffset + index)
                      }
                      className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-64 w-full object-cover object-top opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </Section>

        {/* ===== LIGHTBOX OVERLAY (ใช้ allImages) ===== */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            onClick={() => setLightboxIndex(null)} // คลิกพื้นหลัง = ปิด
          >
            <div
              className="relative w-full max-w-[95vw] px-4"
              onClick={(e) => e.stopPropagation()} // กันไม่ให้คลิกในรูปแล้วปิด
            >
              {/* รูปใหญ่ */}
              <div
                className="flex items-center justify-center overflow-hidden"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={allImages[lightboxIndex].src}
                  alt={allImages[lightboxIndex].alt}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                    transition: isDragging ? "none" : "transform 0.1s ease-out",
                    cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                  }}
                  className="max-h-[90vh] max-w-full rounded-2xl border border-cyan-400/40 bg-black object-contain shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                  onClick={(e) => e.stopPropagation()}
                  draggable={false} // Disable default image dragging
                />
              </div>

              {/* ปุ่มปิด */}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="fixed right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md text-slate-100 transition hover:bg-cyan-500 hover:text-black hover:scale-110"
              >
                <X size={24} />
              </button>

              {/* ปุ่มก่อนหน้า */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev === null
                      ? 0
                      : prev === 0
                        ? allImages.length - 1
                        : prev - 1
                  )
                }
                className="fixed left-6 top-1/2 z-[60] -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md text-slate-100 transition hover:bg-cyan-500 hover:text-black hover:scale-110"
              >
                <ChevronLeft size={32} />
              </button>

              {/* ปุ่มถัดไป */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev === null
                      ? 0
                      : prev === allImages.length - 1
                        ? 0
                        : prev + 1
                  )
                }
                className="fixed right-6 top-1/2 z-[60] -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md text-slate-100 transition hover:bg-cyan-500 hover:text-black hover:scale-110"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        )}

        {/* ===== CONTACT ===== */}
        <Section id="contact" title="CONTACT">
          <GlassCard>
            <p className="mb-4 text-sm text-slate-200">
              หากสนใจติดต่อสอบถามหรือต้องการข้อมูลเพิ่มเติม
              สามารถติดต่อผมผ่านช่องทางด้านล่างได้เลยครับ 🙂
            </p>
            <div className="grid gap-4 text-xs text-slate-100 md:grid-cols-2">
              <ContactItem label="โทร" icon={<Phone size={16} />}>
                <span>098-175-2447</span>
              </ContactItem>
              <ContactItem label="Email" icon={<Mail size={16} />}>
                <a
                  href="mailto:naay1928@gmail.com"
                  className="hover:text-cyan-300"
                >
                  naay1928@gmail.com
                </a>
              </ContactItem>
              <ContactItem label="Line ID" icon={<Monitor size={16} />}>
                <span>.198819</span>
              </ContactItem>
              <ContactItem label="GitHub" icon={<Github size={16} />}>
                <a
                  href="https://github.com/4Baldwin"
                  target="_blank"
                  className="hover:text-cyan-300"
                >
                  github.com/4Baldwin
                </a>
              </ContactItem>
              <ContactItem label="Facebook" icon={<Facebook size={16} />}>
                <a
                  href="https://www.facebook.com/supawat.arrakrattanakun"
                  target="_blank"
                  className="hover:text-cyan-300"
                >
                  /supawat.arrakrattanakun
                </a>
              </ContactItem>
            </div>
          </GlassCard>
        </Section>

        {/* ===== FOOTER ===== */}
        <footer className="mt-20 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Supawat Arrakrattanakun · Portfolio
        </footer>

        {/* Scroll To Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 rounded-full bg-cyan-500 p-3 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] transition hover:bg-cyan-400 hover:scale-110"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

/* ===== Components ย่อย ===== */

function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mt-20 scroll-mt-24 ${className}`}>
      <FadeIn>
        <h2 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
          <span className="h-px w-8 bg-cyan-500/50"></span>
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </FadeIn>
    </section>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 bg-gradient-to-br from-cyan-500/5 via-slate-900/80 to-black/90 p-4 shadow-[0_0_20px_rgba(8,145,178,0.3)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_60%)] opacity-60" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1 text-[10px] font-medium text-cyan-100 backdrop-blur-md">
      {children}
    </span>
  );
}

function TitleSmall({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300 ${className}`}
    >
      {children}
    </h3>
  );
}



function ContactItem({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-white/5 px-4 py-3 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/10">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300/70">
          {label}
        </div>
        <div className="text-sm font-medium text-slate-100">{children}</div>
      </div>
    </div>
  );
}
