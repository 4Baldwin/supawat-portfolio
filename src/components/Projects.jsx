import { useState, useEffect, useRef } from "react";
import { Section } from "./ui/Section";
import { TitleSmall } from "./ui/TitleSmall";
import { GlassCard } from "./ui/GlassCard";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
    // ================== WEB DEV IMAGES ==================
    const blockchainImages = [
        { src: "/projects/crowdfunding-preview-1.png", alt: "Crowdfunding DApp Preview 1" },
        { src: "/projects/crowdfunding-preview-2.png", alt: "Crowdfunding DApp Preview 2" },
        { src: "/projects/crowdfunding-preview-3.png", alt: "Crowdfunding DApp Preview 3" },
        { src: "/projects/crowdfunding-preview-4.png", alt: "Crowdfunding DApp Preview 4" },
    ];

    const storefrontImages = [
        { src: "/projects/storefront-admin-1.png", alt: "Storefront Admin Console 1" },
        { src: "/projects/storefront-admin-2.png", alt: "Storefront Admin Console 2" },
        { src: "/projects/storefront-ui-1.png", alt: "Storefront Shop UI 1" },
        { src: "/projects/storefront-ui-2.png", alt: "Storefront Shop UI 2" },
        { src: "/projects/storefront-ui-3.png", alt: "Storefront Shop UI 3" },
        { src: "/projects/storefront-ui-4.png", alt: "Storefront Shop UI 4" },
    ];

    const connectParkImages = [
        { src: "https://img2.pic.in.th/pic/200801CB-E912-4744-B6E7-892136E6C69D.png", alt: "ConnectAPark - Docker" },
        { src: "https://img5.pic.in.th/file/secure-sv1/ED5E3849-2A05-4AEA-A35A-17246D2F551F.png", alt: "ConnectAPark - Prisma Studio" },
        { src: "https://img2.pic.in.th/pic/8A924C19-DCEC-4DDF-BA21-FA1218614E80.png", alt: "ConnectAPark - Prisma Studio 2" },
        { src: "https://img5.pic.in.th/file/secure-sv1/41DA44F7-C75B-4AD2-B58D-CB45CCC8DB5E.png", alt: "ConnectAPark - Swagger UI" },
        { src: "https://img2.pic.in.th/pic/2AED09D9-9F33-48AB-AD90-8720ACD5EA68.png", alt: "ConnectAPark - Swagger UI 2" },
    ];

    const speechImages = [
        { src: "/projects/speech-to-text-1.png", alt: "Speech to Text Preview 1" },
        { src: "/projects/speech-to-text-2.png", alt: "Speech to Text Preview 2" },
        { src: "/projects/speech-to-text-3.png", alt: "Speech to Text Preview 3" },
    ];

    // ================== IT SUPPORT IMAGES ==================
    const windowsImages = Array.from({ length: 41 }, (_, i) => ({
        src: `/Custom-windowsOS/Custom-windowsOS-${i + 1}.png`,
        alt: `Custom Windows OS Step ${i + 1}`
    }));

    const biosImages = Array.from({ length: 8 }, (_, i) => ({
        src: `/Bios-setting/Bios-setting-${i + 1}.jpg`,
        alt: `BIOS Setting ${i + 1}`
    }));

    const adLabImages = [
        { src: "/ad-lab/ADLAB-1.png", alt: "Server Manager Dashboard" },
        { src: "/ad-lab/ADLAB-2.png", alt: "Active Directory Users & Computers (IT OU)" },
        { src: "/ad-lab/ADLAB-3.png", alt: "Active Directory Users & Computers (User Details)" },
        { src: "/ad-lab/ADLAB-4.png", alt: "Group Policy Management (Block USB)" },
        { src: "/ad-lab/ADLAB-5.png", alt: "Domain Login Screen" },
        { src: "/ad-lab/ADLAB-6.png", alt: "Server Dashboard Overview" },
        { src: "/ad-lab/ADLAB-7.png", alt: "Client Machine Setup" },
        { src: "/ad-lab/ADLAB-8.png", alt: "Joining the Domain" },
        { src: "/ad-lab/ADLAB-9.png", alt: "GPO Verification - Access Denied" },
    ];

    const cpuImages = Array.from({ length: 8 }, (_, i) => ({
        src: `/hardware-maintenance/cpu/${i + 1}.png`,
        alt: `CPU Maintenance Step ${i + 1}`
    }));

    const gpuImages = Array.from({ length: 6 }, (_, i) => ({
        src: `/hardware-maintenance/gpu/${i + 1}.png`,
        alt: `GPU Maintenance Step ${i + 1}`
    }));

    const [lightbox, setLightbox] = useState({
        isOpen: false,
        images: [],
        index: 0
    });

    const thumbnailRef = useRef(null);

    const openLightbox = (images, index) => {
        setLightbox({
            isOpen: true,
            images,
            index
        });
    };

    const closeLightbox = () => {
        setLightbox((prev) => ({ ...prev, isOpen: false }));
    };

    useEffect(() => {
        if (lightbox.isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Mouse wheel horizontal scroll logic
        const element = thumbnailRef.current;
        if (lightbox.isOpen && element) {
            const handleWheel = (e) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                element.scrollLeft += e.deltaY * 2; // Increased scroll speed
            };

            element.addEventListener("wheel", handleWheel, { passive: false });

            // Auto-scroll to active thumbnail
            const thumbnailContainer = element.firstElementChild;
            const activeThumbnail = thumbnailContainer?.children[lightbox.index];

            if (activeThumbnail) {
                activeThumbnail.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }

            return () => {
                element.removeEventListener("wheel", handleWheel);
            };
        }
    }, [lightbox.isOpen, lightbox.index]);

    return (
        <Section id="projects" title="PROJECTS" className="space-y-6">
            <div className="space-y-20">

                {/* ================== WEB DEVELOPMENT ================== */}

                {/* Project 1: Blockchain DApp */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">Blockchain Crowdfunding DApp</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            SOLIDITY · REACT · TAILWINDCSS · ETHERS.JS
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        พัฒนาแพลตฟอร์มระดมทุนแบบกระจายศูนย์ (Decentralized) บนเครือข่าย <strong>Sepolia Testnet</strong>
                        สร้างด้วย <strong>Solidity</strong> Smart Contracts และหน้าเว็บที่รองรับทุกอุปกรณ์ด้วย <strong>React</strong>
                        รับประกันความโปร่งใสและความปลอดภัยสำหรับการบริจาคทั้งหมดผ่านเทคโนโลยี Blockchain
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(blockchainImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 4 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {blockchainImages.map((img, index) => (
                                <button key={index} onClick={() => openLightbox(blockchainImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* Project 2: Storefront Dark Neon */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">Storefront Dark Neon (WooCommerce)</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            WORDPRESS · WOOCOMMERCE · CUSTOM CSS · PHP
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        ปรับแต่งธีม WooCommerce Storefront ให้เป็นดีไซน์ <strong>Dark Neon Glass UI</strong>
                        แก้ไขส่วน Header, การ์ดสินค้า และหน้าตะกร้าสินค้า โดยใช้ Custom CSS และ PHP Hooks โดยไม่กระทบกับธีมหลัก
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(storefrontImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 6 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {storefrontImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => openLightbox(storefrontImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* Project 3: ConnectAPark API */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">ConnectAPark – Parking API</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            NESTJS · POSTGRESQL · DOCKER · JWT · SWAGGER
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        RESTful API ระดับ Production สำหรับระบบจอดรถอัจฉริยะ
                        พัฒนาด้วย <strong>NestJS</strong>, <strong>Prisma</strong> และ <strong>PostgreSQL</strong>
                        มีระบบยืนยันตัวตนด้วย JWT, การจัดการตั๋ว และการทำ Containerization ด้วย Docker
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(connectParkImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 5 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {connectParkImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => openLightbox(connectParkImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* Project 4: Speech to Text */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">Speech to Text (Thai)</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            PYTHON · FLET · GOOGLE API · PYAUDIO
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        โปรแกรม Desktop สำหรับแปลงเสียงพูดภาษาไทยเป็นข้อความ
                        รองรับการรับเสียงผ่านไมโครโฟนแบบ Real-time และการประมวลผลไฟล์เสียง (.mp3, .wav)
                        พัฒนาด้วยภาษา <strong>Python</strong> และเฟรมเวิร์ก <strong>Flet</strong>
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(speechImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 3 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {speechImages.map((img, index) => (
                                <button key={index} onClick={() => openLightbox(speechImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* ================== IT SUPPORT & SYSTEMS ================== */}

                {/* Project 5: Custom Windows OS */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">Custom Windows OS Build</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            UUP DUMP · MSMG TOOLKIT · SYSTEM OPTIMIZATION
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        โปรเจกต์การปรับแต่ง Windows OS เพื่อเพิ่มประสิทธิภาพและลดการทำงาน background ของ Windows
                        โดยใช้ <strong>UUP Dump</strong> และ <strong>MSMG Toolkit</strong> เพื่อ Debloat และปรับปรุงทรัพยากรระบบ
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(windowsImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 41 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {windowsImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => openLightbox(windowsImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* Project 6: BIOS Optimization */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">BIOS Optimization</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            BIOS TUNING · OVERCLOCKING · LATENCY REDUCTION
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        การตั้งค่า BIOS เพื่อรีดประสิทธิภาพสูงสุดของฮาร์ดแวร์ ปรับจูนเพื่อลด Latency และเพิ่มความเสถียรของระบบ
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(biosImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 8 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {biosImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => openLightbox(biosImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* Project 7: Active Directory Home Lab */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">Active Directory Home Lab</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            WINDOWS SERVER · USER MANAGEMENT · GPO
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        จำลองระบบ Server ขององค์กรด้วย Windows Server 2019
                        ฝึกฝนการสร้าง Domain Controller, การจัดการ Users/Groups (OU),
                        และการกำหนด Group Policy (GPO) เพื่อควบคุมเครื่อง Client
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(adLabImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 9 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {adLabImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => openLightbox(adLabImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* Project 8: CPU Maintenance */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">CPU Thermal Paste Replacement</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            CPU MAINTENANCE · THERMAL MANAGEMENT
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        การบำรุงรักษา CPU โดยการทำความสะอาดและทาซิลิโคนใหม่คุณภาพสูง
                        ช่วยลดอุณหภูมิสะสมของ CPU ขณะทำงานหนัก
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(cpuImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 8 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {cpuImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => openLightbox(cpuImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

                {/* Project 9: GPU Maintenance */}
                <GlassCard className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-50">GPU Thermal Paste Replacement</h2>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                            GPU MAINTENANCE · DEEP CLEANING
                        </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-200">
                        การรื้อการ์ดจอ (GPU) เพื่อทำความสะอาดฝุ่นและเปลี่ยนซิลิโคนระบายความร้อนใหม่
                        ช่วยลดเสียงพัดลมดังและรักษาประสิทธิภาพเฟรมเรต (FPS)
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => openLightbox(gpuImages, 0)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 6 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {gpuImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => openLightbox(gpuImages, index)} className="group block aspect-video overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

            </div>

            {/* Lightbox Overlay */}
            {lightbox.isOpen && (
                <div
                    className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-md"
                    onClick={closeLightbox}
                >
                    {/* Main Image Area */}
                    <div className="relative flex-1 flex items-center justify-center overflow-hidden p-4">
                        <div className="relative h-full w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={lightbox.images[lightbox.index].src}
                                alt={lightbox.images[lightbox.index].alt}
                                className="max-h-full max-w-full rounded-lg object-contain shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeLightbox();
                            }}
                            className="absolute right-4 top-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-slate-100 backdrop-blur-md transition hover:bg-cyan-500 hover:text-black"
                        >
                            <X size={20} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightbox((prev) => ({
                                    ...prev,
                                    index: prev.index === 0 ? prev.images.length - 1 : prev.index - 1
                                }));
                            }}
                            className="absolute left-4 top-1/2 z-[60] -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-slate-100 backdrop-blur-md transition hover:bg-cyan-500 hover:text-black"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLightbox((prev) => ({
                                    ...prev,
                                    index: prev.index === prev.images.length - 1 ? 0 : prev.index + 1
                                }));
                            }}
                            className="absolute right-4 top-1/2 z-[60] -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-slate-100 backdrop-blur-md transition hover:bg-cyan-500 hover:text-black"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>

                    {/* Thumbnail Strip */}
                    <div
                        ref={thumbnailRef}
                        className="h-24 w-full border-t border-white/10 bg-black/80 backdrop-blur-xl overflow-x-auto scrollbar-hide flex"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex h-full items-center gap-3 px-4 py-3 m-auto">
                            {lightbox.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setLightbox((prev) => ({ ...prev, index }))}
                                    className={`relative aspect-video h-full flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${index === lightbox.index
                                        ? "border-cyan-400 opacity-100 shadow-[0_0_10px_rgba(34,211,238,0.5)] scale-105"
                                        : "border-transparent opacity-40 hover:opacity-80 hover:scale-105"
                                        }`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="h-full w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}
