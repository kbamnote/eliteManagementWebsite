/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Users,
  Award,
  Globe,
  Target,
  Lightbulb,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import AnimatedPageWrapper from '../components/AnimatedPageWrapper';
import { AnimatedOnScroll, StaggerContainer, StaggerItem, ParallaxElement } from '../hooks/useScrollAnimations.jsx';
import CompanyImg from '../assets/Untitled design (1).png';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Former tech executive with 15+ years of experience in education technology.',
    image: 'team-1'
  },
  {
    name: 'Sarah Williams',
    role: 'Chief Academic Officer',
    bio: 'PhD in Education with expertise in curriculum development and learning science.',
    image: 'team-2'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Technology',
    bio: 'Full-stack developer and cloud architect with passion for educational platforms.',
    image: 'team-3'
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Operations',
    bio: 'Operations specialist focused on student success and platform optimization.',
    image: 'team-4'
  }
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest standards in education and service delivery.'
  },
  {
    icon: Heart,
    title: 'Student-Centered',
    description: 'Everything we do is focused on empowering student success and growth.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technology to enhance learning experiences.'
  }
];

export default function About() {
  return (
    <AnimatedPageWrapper>
      {/* Enhanced Hero Section */}
      <ParallaxElement
        className="relative content-center overflow-hidden bg-secondary"
      >
        <div className="absolute inset-0 z-0">
          <ParallaxElement speed={0.3} className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full opacity-20 blur-3xl"></ParallaxElement>
          <ParallaxElement speed={0.5} className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl"></ParallaxElement>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-24 lg:py-24">
          {/* Small label */}
          <AnimatedOnScroll
            className="text-center"
            direction="up"
            delay={0}
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold tracking-wide">
              About Elite Management
            </span>
          </AnimatedOnScroll>

          {/* Main heading */}
          <AnimatedOnScroll
            className="text-center mt-4 mb-10"
            direction="up"
            delay={0.1}
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-primary">
              Empowering careers with
              <span className="block text-accent mt-2">industry‑ready education</span>
            </h1>
          </AnimatedOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <AnimatedOnScroll
              className="relative"
              direction="right"
              delay={0.4}
            >
              <div className="absolute -top-6 -right-6 h-32 w-32 bg-primary/10 blur-3xl rounded-full" />

              <div className="relative rounded-3xl overflow-hidden shadow-subtle border border-primary/10 bg-white">
                <img
                  src={CompanyImg}
                  alt="Elite Management Campus"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small stat card */}
              <div className="absolute -bottom-6 left-6 bg-[lavender] rounded-2xl shadow-lg px-4 py-3 border border-primary/10">
                <p className="text-xs text-secondary" style={{ margin: 1 }}>Learners placed</p>
                <p className="text-lg font-semibold text-primary" style={{ margin: 0 }}>1,500+ globally</p>
              </div>
            </AnimatedOnScroll>

            {/* Text side */}
            <AnimatedOnScroll
              className="space-y-6"
              direction="left"
              delay={0.2}
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-primary">
                Elite Management
              </h2>

              <p className="text-base md:text-lg text-secondary font-medium max-w-2xl leading-relaxed">
                We&apos;re on a mission to democratize education and empower learners worldwide
                with accessible, high‑quality courses.
              </p>

              <ul className="mt-4 space-y-3 text-sm md:text-base text-secondary">
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    1
                  </span>
                  <div>
                    <p className="font-semibold">Industry‑aligned curriculum</p>
                    <p className="text-xs md:text-sm text-secondary/80">
                      Programs designed with inputs from experienced professionals.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    2
                  </span>
                  <div>
                    <p className="font-semibold">Hands‑on learning</p>
                    <p className="text-xs md:text-sm text-secondary/80">
                      Real projects that help learners build a strong portfolio.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    3
                  </span>
                  <div>
                    <p className="font-semibold">Career support</p>
                    <p className="text-xs md:text-sm text-secondary/80">
                      Guidance, mentoring, and placement assistance for job‑ready graduates.
                    </p>
                  </div>
                </li>
              </ul>
            </AnimatedOnScroll>
          </div>
        </div>

      </ParallaxElement>

      {/* Enhanced Mission & Vision */}
      <AnimatedOnScroll
        className="lg:py-20 md:py-20 bg-white"
        direction="up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">

            {/* Mission */}
            <AnimatedOnScroll
              className="relative group bg-secondary rounded-3xl p-8 lg:p-10 shadow-subtle border border-subtle/70
                 hover:shadow-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              direction="up"
              delay={0.2}
            >
              {/* glow */}
              <div className="pointer-events-none absolute -top-24 -right-20 h-40 w-40 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black mb-4 text-accent">
                Our Mission
              </h2>

              <p className="text-base md:text-lg text-secondary/90 leading-relaxed font-medium">
                To provide accessible, high‑quality education to learners everywhere, breaking down barriers
                to knowledge and empowering individuals to reach their full potential through innovative
                online learning experiences.
              </p>

              {/* bottom bar */}
              <div className="mt-6 pt-5 border-t border-subtle/60 flex items-center justify-between gap-4">
                <p className="text-sm md:text-base text-accent italic font-semibold">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Nelson&nbsp;Mandela
                </span>
              </div>
            </AnimatedOnScroll>

            {/* Vision */}
            <AnimatedOnScroll
              className="relative group bg-secondary rounded-3xl p-8 lg:p-10 shadow-subtle border border-subtle/70
                 hover:shadow-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              direction="up"
              delay={0.35}
            >
              {/* glow */}
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-12 h-12 text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-black mb-4 text-accent">
                Our Vision
              </h2>

              <p className="text-base md:text-lg text-secondary/90 leading-relaxed font-medium">
                To become the world&apos;s leading online learning platform, where anyone, anywhere can access
                the education they need to build the career they&apos;ve always wanted, fostering a global
                community of lifelong learners.
              </p>

              <div className="mt-6 pt-5 border-t border-subtle/60 flex items-center justify-between gap-4">
                <p className="text-sm md:text-base text-accent italic font-semibold">
                  Creating a borderless world of education.
                </p>
                <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Future‑ready learning
                </span>
              </div>
            </AnimatedOnScroll>
          </div>
        </div>

      </AnimatedOnScroll>

      {/* Enhanced Values */}
      <AnimatedOnScroll
        className="lg:py-20 md:py-20 bg-secondary"
        direction="up"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <AnimatedOnScroll
              className="text-4xl md:text-5xl font-black mb-4 text-primary"
              direction="up"
              delay={0}
            >
              <span className="text-primary">Our Core </span>
              <span className="text-accent">Values</span>
            </AnimatedOnScroll>

            <AnimatedOnScroll
              className="mt-2 text-base md:text-lg text-secondary font-medium"
              direction="up"
              delay={0.1}
            >
              The principles that guide everything we do.
            </AnimatedOnScroll>
          </div>

          {/* Cards */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <StaggerItem key={index} delay={0.2 + index * 0.1}>
                  <motion.div
                    className="relative bg-white rounded-3xl p-8 border border-subtle/70
                       shadow-subtle hover:shadow-hover group text-center
                       transition-all duration-300"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* subtle top accent */}
                    <div className="pointer-events-none absolute inset-x-10 -top-10 h-10 rounded-full bg-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* icon */}
                    <div className="w-18 h-18 md:w-20 md:h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6
                            group-hover:bg-accent/90 transition-all duration-300 shadow-md">
                      <value.icon className="w-9 h-9 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-primary mb-3">
                      {value.title}
                    </h3>

                    <p className="text-sm md:text-base text-secondary font-medium leading-relaxed">
                      {value.description}
                    </p>

                    {/* pill at bottom */}
                    <div className="mt-5 pt-4 border-t border-subtle/60">
                      <span className="inline-flex px-3 py-1 rounded-full bg-secondary/60 text-xs font-semibold text-primary/90">
                        Guided by this value every day
                      </span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

      </AnimatedOnScroll>

      {/* Enhanced Team */}
      <AnimatedOnScroll
        className="lg:py-20 md:py-20 bg-white"
        direction="up"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <AnimatedOnScroll
              className="text-4xl md:text-5xl font-black mb-4 text-primary"
              direction="up"
              delay={0}
            >
              <span className="text-primary">Meet Our </span>
              <span className="text-accent">Team</span>
            </AnimatedOnScroll>

            <AnimatedOnScroll
              className="mt-2 text-base md:text-lg text-secondary font-medium"
              direction="up"
              delay={0.1}
            >
              The passionate people behind our success.
            </AnimatedOnScroll>
          </div>

          {/* Cards */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <StaggerItem key={index} delay={0.2 + index * 0.1}>
                  <motion.div
                    key={index}
                    className="relative bg-secondary rounded-3xl overflow-hidden border border-subtle/70
                       shadow-subtle group transition-all duration-300"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* top accent */}
                    <div className="pointer-events-none absolute inset-x-10 -top-10 h-10 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="p-7 pb-8">
                      {/* avatar / icon */}
                      <div className="relative mb-6 flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center
                                border-4 border-[#494949] shadow-lg transition-transform duration-300
                                group-hover:scale-105">
                          <Users className="w-12 h-12 text-[#494949]" />
                        </div>
                      </div>

                      <h3 className="text-lg md:text-xl font-black text-center text-primary">
                        {member.name}
                      </h3>

                      <p className="text-accent text-center font-semibold mt-1 text-sm md:text-base">
                        {member.role}
                      </p>

                      <p className="text-secondary text-center mt-3 text-xs md:text-sm font-medium leading-relaxed">
                        {member.bio}
                      </p>

                      {/* social / tag row (optional placeholder) */}
                      <div className="mt-5 flex items-center justify-center gap-2">
                        <span className="inline-flex px-3 py-1 rounded-full bg-white/70 text-[11px] font-semibold text-primary/90">
                          Dedicated mentor
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

      </AnimatedOnScroll>

      {/* Enhanced Stats */}
      <AnimatedOnScroll
        className="lg:py-20 md:py-20 bg-accent relative overflow-hidden"
        direction="up"
      >
        {/* Decorative elements */}
        <ParallaxElement speed={0.3} className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></ParallaxElement>
        <ParallaxElement speed={0.5} className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></ParallaxElement>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
          {/* Heading */}
          <div className="text-center mb-12">
            <AnimatedOnScroll
              className="text-4xl md:text-5xl font-black text-white mb-3"
              direction="up"
              delay={0}
            >
              Our Impact in{" "}
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text">
                Numbers
              </span>
            </AnimatedOnScroll>
            <AnimatedOnScroll
              className="text-sm md:text-base text-dark/80 font-medium"
              direction="up"
              delay={0.1}
            >
              A quick snapshot of how we&apos;re changing careers.
            </AnimatedOnScroll>
          </div>

          {/* Stats */}
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[{ number: 10000, label: "Students Enrolled", icon: Users, suffix: "+" },
              { number: 200, label: "Courses Available", icon: Award, suffix: "+" },
              { number: 50, label: "Expert Instructors", icon: Users, suffix: "+" },
              { number: 95, label: "Job Placement Rate", icon: Target, suffix: "%" },
              ].map((stat, index) => (
                <StaggerItem key={index} delay={index * 0.1}>
                  <motion.div
                    key={index}
                    className="relative text-center bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-7
                       shadow-subtle border border-dark/20 transition-all duration-300
                       hover:bg-white/16 hover:shadow-hover"
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    {/* glow accent */}
                    <div className="pointer-events-none absolute inset-x-8 -top-10 h-10 rounded-full bg-accent/25 blur-2xl opacity-0 group-hover:opacity-100" />

                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-dark" />
                    </div>

                    <div className="text-3xl md:text-4xl font-black text-dark mb-5 leading-none">
                      <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                    </div>

                    <div className="text-xs md:text-sm font-semibold text-dark/85 tracking-wide uppercase mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

      </AnimatedOnScroll>
    </AnimatedPageWrapper>
  );
}