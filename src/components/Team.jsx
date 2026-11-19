import React from 'react';
import babatundeImg from '../assets/images/team/babatunde-adeyemi.webp';
import chiomaImg from '../assets/images/team/chioma-okonkwo.webp';
import olumideImg from '../assets/images/team/olumide-bakare.webp';
import aminaImg from '../assets/images/team/amina-bello.webp';
import chineduImg from '../assets/images/team/chinedu-eze.webp';
import kayodeImg from '../assets/images/team/kayode-balogun.webp';

export function Team() {
  const teamMembers = [
    {
      id: 'babatunde',
      name: 'Dr. Babatunde Adeyemi',
      role: 'Co-Founder & CEO',
      bio: 'Ex-Staff Security Architect with a PhD in Distributed Systems. Led enterprise cloud defense across large-scale African and global fintech infrastructures.',
      image: babatundeImg,
      location: 'Lagos, Nigeria'
    },
    {
      id: 'chioma',
      name: 'Chioma Okonkwo',
      role: 'Co-Founder & CTO',
      bio: 'Former Principal Kernel Engineer and open-source eBPF contributor. Built ultra-low-latency telemetry probes handling millions of requests per second.',
      image: chiomaImg,
      location: 'Abuja, Nigeria'
    },
    {
      id: 'olumide',
      name: 'Olumide Bakare',
      role: 'Head of AI & Security Research',
      bio: 'Machine learning specialist focused on behavioral anomaly models and real-time graph inference for continuous threat classification.',
      image: olumideImg,
      location: 'Lagos, Nigeria'
    },
    {
      id: 'amina',
      name: 'Amina Bello',
      role: 'Principal Systems Engineer',
      bio: 'Distributed streaming systems expert architecting SentinelX lock-free SIMD event parsers and high-throughput Rust ingestion pipelines.',
      image: aminaImg,
      location: 'Kaduna, Nigeria'
    },
    {
      id: 'chinedu',
      name: 'Chinedu Eze',
      role: 'Head of Product Design & DevEx',
      bio: 'Passionate about human-centered security tooling. Leads developer ergonomics, CLI workflows, and interactive graph topology visualization.',
      image: chineduImg,
      location: 'Enugu, Nigeria'
    },
    {
      id: 'kayode',
      name: 'Kayode Balogun',
      role: 'Lead Threat Intelligence & Forensics',
      bio: 'Veteran incident responder and digital forensics investigator specializing in automated attack chain correlation and blast-radius mapping.',
      image: kayodeImg,
      location: 'Ibadan, Nigeria'
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#080B12] relative border-b border-[#243044]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#F4F7FC] tracking-tight">
            Meet the Minds Behind SentinelX.
          </h2>

          <p className="text-base sm:text-lg text-[#929EAE] leading-relaxed">
            An engineering-first team of security researchers, distributed systems architects, and kernel developers building resilient infrastructure intelligence.
          </p>
        </div>

        {/* 6 Team Members Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#101622] border border-[#243044] rounded-2xl overflow-hidden hover:border-[#3978E8]/40 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161F2D]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                  className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent opacity-80" />
                
                {/* Location Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#080B12]/80 backdrop-blur-md border border-[#243044] text-[11px] font-mono text-[#43D9C3]">
                  {member.location}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-[#F4F7FC] group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#3978E8] font-medium pt-1">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-[#929EAE] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

