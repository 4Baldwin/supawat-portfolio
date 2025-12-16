import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { TitleSmall } from './ui/TitleSmall';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

    // Combine all images
    const allImages = [
        ...blockchainImages, ...storefrontImages, ...connectParkImages, ...speechImages,
        ...windowsImages, ...biosImages, ...adLabImages, ...cpuImages, ...gpuImages
    ];

    // Calculate offsets
    const blockchainOffset = 0;
    const storefrontOffset = blockchainImages.length;
    const connectParkOffset = storefrontOffset + storefrontImages.length;
    const speechOffset = connectParkOffset + connectParkImages.length;
    const windowsOffset = speechOffset + speechImages.length;
    const biosOffset = windowsOffset + windowsImages.length;
    const adLabOffset = biosOffset + biosImages.length;
    const cpuOffset = adLabOffset + adLabImages.length;
    const gpuOffset = cpuOffset + cpuImages.length;

    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [lightboxIndex]);

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
                        Developed a decentralized crowdfunding platform on <strong>Sepolia Testnet</strong>.
                        Built with <strong>Solidity</strong> Smart Contracts and a responsive <strong>React</strong> frontend.
                        Ensures transparency and security for all donations via blockchain technology.
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => setLightboxIndex(blockchainOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 4 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {blockchainImages.map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(blockchainOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
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
                        Customized WooCommerce Storefront theme to a <strong>Dark Neon Glass UI</strong>.
                        Modified Header, Product Cards, and Cart pages using Custom CSS and PHP hooks without altering the core theme.
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => setLightboxIndex(storefrontOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 6 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {storefrontImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(storefrontOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
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
                        Production-ready RESTful API for a smart parking system.
                        Built with <strong>NestJS</strong>, <strong>Prisma</strong>, and <strong>PostgreSQL</strong>.
                        Features JWT Authentication, Ticket Management, and Docker containerization.
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => setLightboxIndex(connectParkOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 5 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {connectParkImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(connectParkOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
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
                        Desktop application for converting Thai speech to text.
                        Supports real-time microphone input and file processing (.mp3, .wav).
                        Built with <strong>Python</strong> and <strong>Flet</strong> framework.
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <TitleSmall>PREVIEW</TitleSmall>
                            <button onClick={() => setLightboxIndex(speechOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 3 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {speechImages.map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(speechOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
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
                            <button onClick={() => setLightboxIndex(windowsOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 41 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {windowsImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(windowsOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
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
                            <button onClick={() => setLightboxIndex(biosOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 8 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {biosImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(biosOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
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
                            <button onClick={() => setLightboxIndex(adLabOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 9 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {adLabImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(adLabOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
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
                            <button onClick={() => setLightboxIndex(cpuOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 8 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {cpuImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(cpuOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
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
                            <button onClick={() => setLightboxIndex(gpuOffset)} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:underline">
                                View All 6 Images
                            </button>
                        </div>
                        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {gpuImages.slice(0, 4).map((img, index) => (
                                <button key={index} onClick={() => setLightboxIndex(gpuOffset + index)} className="group block overflow-hidden rounded-xl border border-cyan-400/20 shadow-lg transition hover:border-cyan-300/60">
                                    <img src={img.src} alt={img.alt} className="w-full object-cover opacity-90 transition group-hover:opacity-100 group-hover:scale-[1.03]" />
                                </button>
                            ))}
                        </div>
                    </div>
                </GlassCard>

            </div>

            {/* Lightbox Overlay */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
                    onClick={() => setLightboxIndex(null)}
                >
                    <div className="relative w-full max-w-[95vw] px-4" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center overflow-hidden">
                            <img
                                src={allImages[lightboxIndex].src}
                                alt={allImages[lightboxIndex].alt}
                                className="max-h-[90vh] max-w-full rounded-2xl border border-cyan-400/40 bg-black object-contain shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                            />
                        </div>
                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="fixed right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md text-slate-100 transition hover:bg-cyan-500 hover:text-black hover:scale-110"
                        >
                            <X size={24} />
                        </button>
                        <button
                            onClick={() => setLightboxIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
                            className="fixed left-6 top-1/2 z-[60] -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md text-slate-100 transition hover:bg-cyan-500 hover:text-black hover:scale-110"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={() => setLightboxIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))}
                            className="fixed right-6 top-1/2 z-[60] -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md text-slate-100 transition hover:bg-cyan-500 hover:text-black hover:scale-110"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div>
            )}
        </Section>
    );
}
