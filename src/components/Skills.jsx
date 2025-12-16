import React from 'react';
import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { TitleSmall } from './ui/TitleSmall';
import { Badge } from './ui/Badge';

export default function Skills() {
    return (
        <Section id="skills" title="SKILLS">
            <div className="grid gap-6 md:grid-cols-2">
                {/* Languages */}
                <GlassCard>
                    <TitleSmall>Languages</TitleSmall>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>JavaScript (ES6+)</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>Python</Badge>
                        <Badge>PHP</Badge>
                        <Badge>SQL</Badge>
                        <Badge>Solidity</Badge>
                        <Badge>HTML / CSS</Badge>
                    </div>
                </GlassCard>

                {/* Frameworks & Libraries */}
                <GlassCard>
                    <TitleSmall>Frameworks & Libraries</TitleSmall>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>React.js</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>Express.js</Badge>
                        <Badge>NestJS</Badge>
                        <Badge>TailwindCSS</Badge>
                        <Badge>Framer Motion</Badge>
                        <Badge>WordPress</Badge>
                    </div>
                </GlassCard>

                {/* Tools & DevOps */}
                <GlassCard>
                    <TitleSmall>Tools & DevOps</TitleSmall>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Git / GitHub</Badge>
                        <Badge>Docker</Badge>
                        <Badge>Postman</Badge>
                        <Badge>Prisma ORM</Badge>
                        <Badge>VS Code</Badge>
                    </div>
                </GlassCard>

                {/* IT Support & Systems */}
                <GlassCard>
                    <TitleSmall>IT Support & Systems</TitleSmall>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <Badge>Active Directory (AD DS)</Badge>
                        <Badge>Group Policy (GPO)</Badge>
                        <Badge>Windows Server</Badge>
                        <Badge>DNS / DHCP / TCP/IP</Badge>
                        <Badge>Hardware Assembly</Badge>
                        <Badge>BIOS Tuning</Badge>
                        <Badge>Backup & Recovery</Badge>
                        <Badge>VPN & Firewall</Badge>
                    </div>
                </GlassCard>
            </div>
        </Section>
    );
}
