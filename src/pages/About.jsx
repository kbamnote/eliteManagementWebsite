import React from 'react';
import { 
  Users, 
  Award, 
  Globe,
  Target,
  Lightbulb,
  Heart
} from 'lucide-react';
import Layout from '../components/Layout';

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
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                About <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Elite Management</span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 max-w-2xl">
                We're on a mission to democratize education and empower learners worldwide with accessible, high-quality courses.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-100">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Globe className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Global Learning Platform</h3>
                    <p className="mt-2 text-gray-300">Connecting learners and educators worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide accessible, high-quality education to learners everywhere, breaking down barriers to knowledge and empowering individuals to reach their full potential through innovative online learning experiences.
              </p>
              <div className="mt-8 flex items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <p className="ml-4 text-gray-600 italic">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the world's leading online learning platform, where anyone, anywhere can access the education they need to build the career they've always wanted, fostering a global community of lifelong learners.
              </p>
              <div className="mt-8 flex items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <p className="ml-4 text-gray-600 italic">Creating a borderless world of education</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 group text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center mx-auto group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              The passionate people behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-300 group shadow-sm"
              >
                <div className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center">{member.name}</h3>
                  <p className="text-purple-700 text-center mt-1">{member.role}</p>
                  <p className="text-gray-600 text-center mt-3 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Students Enrolled', icon: Users },
              { number: '200+', label: 'Courses Available', icon: Award },
              { number: '50+', label: 'Expert Instructors', icon: Users },
              { number: '95%', label: 'Job Placement Rate', icon: Target }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}