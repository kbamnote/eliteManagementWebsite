import React from 'react';
import { 
  Building2, 
  Users, 
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react';
import Layout from '../components/Layout';

const companies = [
  { name: 'Google', logo: 'google', positions: 12 },
  { name: 'Microsoft', logo: 'microsoft', positions: 8 },
  { name: 'Amazon', logo: 'amazon', positions: 15 },
  { name: 'Apple', logo: 'apple', positions: 6 },
  { name: 'Meta', logo: 'meta', positions: 9 },
  { name: 'Netflix', logo: 'netflix', positions: 4 }
];

const successStories = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Senior Software Engineer',
    company: 'Google',
    salary: '$145,000',
    course: 'Full Stack Web Development',
    testimonial: 'The skills I learned at Elite Management directly led to my dream job at Google. The career support team was instrumental in my success.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Scientist',
    company: 'Amazon',
    salary: '$132,000',
    course: 'Data Science with Python',
    testimonial: 'Elite Management not only taught me the technical skills I needed, but also helped me build a portfolio that impressed recruiters.'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'Microsoft',
    salary: '$158,000',
    course: 'Product Management',
    testimonial: 'The mentorship program connected me with industry professionals who guided me throughout my career transition.'
  }
];

const stats = [
  { number: '95%', label: 'Job Placement Rate' },
  { number: '$85K', label: 'Average Starting Salary' },
  { number: '500+', label: 'Companies Hiring Our Graduates' },
  { number: '10,000+', label: 'Successful Placements' }
];

const processSteps = [
  {
    icon: CheckCircle,
    title: 'Career Assessment',
    description: 'Evaluate your skills and interests to identify suitable career paths.'
  },
  {
    icon: Users,
    title: 'Resume Building',
    description: 'Create a professional resume that highlights your strengths.'
  },
  {
    icon: Building2,
    title: 'Interview Preparation',
    description: 'Practice with mock interviews and receive expert feedback.'
  },
  {
    icon: TrendingUp,
    title: 'Job Matching',
    description: 'Get matched with positions that align with your skills and goals.'
  }
];

export default function Placements() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Career <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Placement</span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 max-w-2xl">
                We don't just teach skills - we connect you with top companies and help you land your dream job.
              </p>
              <div className="mt-10">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg">
                  View Job Openings
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-100">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building2 className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Industry Partnerships</h3>
                    <p className="mt-2 text-gray-300">Direct connections to top employers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Companies Hiring */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Companies <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Hiring Our Graduates</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              Leading organizations trust our graduates with critical roles
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 flex flex-col items-center justify-center text-center group shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 mb-4">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">{company.name}</h3>
                <p className="mt-2 text-purple-700 text-sm">{company.positions} positions</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Success <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              Hear from our graduates who have transformed their careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-purple-700">{story.role}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{story.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{story.salary}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  <span className="font-medium text-gray-800">Course:</span> {story.course}
                </p>
                
                <p className="text-gray-700 italic">"{story.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Placement Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Placement Process</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              A structured approach to help you secure your dream job
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 text-center group shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300 mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Launch Your <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Career?</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
              Join thousands of successful graduates who found their dream jobs through our placement program.
            </p>
            <div className="mt-10">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}