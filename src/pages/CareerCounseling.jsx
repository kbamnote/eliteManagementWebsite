import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Users,
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    icon: Briefcase,
    title: 'Career Assessment',
    description: 'Comprehensive evaluation of your skills, interests, and personality to identify ideal career paths.',
    features: [
      'Personality assessment',
      'Skills evaluation',
      'Interest mapping',
      'Detailed report with recommendations'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Skill Development Planning',
    description: 'Personalized roadmap to acquire the skills needed for your target career.',
    features: [
      'Gap analysis',
      'Learning pathway',
      'Resource recommendations',
      'Progress tracking'
    ]
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Connect with industry professionals for guidance and networking opportunities.',
    features: [
      'One-on-one mentoring sessions',
      'Industry insights',
      'Networking events',
      'Career advice and support'
    ]
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Free 30-minute consultation to discuss your career goals and challenges.'
  },
  {
    number: '02',
    title: 'Comprehensive Assessment',
    description: 'In-depth evaluation using industry-standard tools and techniques.'
  },
  {
    number: '03',
    title: 'Personalized Plan',
    description: 'Custom roadmap tailored to your unique situation and aspirations.'
  },
  {
    number: '04',
    title: 'Implementation Support',
    description: 'Ongoing guidance as you execute your career development plan.'
  }
];

export default function CareerCounseling() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Career <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Counseling</span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 max-w-2xl">
                Unlock your potential with personalized career guidance from industry experts. Navigate your professional journey with confidence.
              </p>
              <div className="mt-10">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-100">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Briefcase className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Professional Career Guidance</h3>
                    <p className="mt-2 text-gray-300">Personalized plans for your success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              Comprehensive career counseling services designed to accelerate your professional growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-300 group shadow-sm"
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-gray-600">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              A structured approach to career development that delivers results
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-purple-500 to-purple-700 hidden md:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-8"
                >
                  <div className="md:col-span-5 flex items-center">
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="md:text-right md:pr-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {step.number}
                        </div>
                        <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-white z-10"></div>
                  </div>
                  
                  <div className="md:col-span-5 flex items-center">
                    <div className="md:pl-8">
                      <div className="bg-white rounded-2xl p-6 border border-purple-100 h-full shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                            {index === 0 && <Calendar className="w-6 h-6 text-purple-600" />}
                            {index === 1 && <TrendingUp className="w-6 h-6 text-purple-600" />}
                            {index === 2 && <Briefcase className="w-6 h-6 text-purple-600" />}
                            {index === 3 && <Users className="w-6 h-6 text-purple-600" />}
                          </div>
                          <h4 className="ml-4 font-semibold">What to Expect</h4>
                        </div>
                        <p className="text-gray-600">
                          {index === 0 && "During our initial meeting, we'll discuss your career aspirations, current challenges, and what you hope to achieve through counseling."}
                          {index === 1 && "We'll conduct a thorough assessment using validated tools to understand your strengths, weaknesses, interests, and values."}
                          {index === 2 && "Based on our findings, we'll create a customized career development plan with actionable steps and timelines."}
                          {index === 3 && "We'll provide ongoing support as you implement your plan, with regular check-ins and adjustments as needed."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Career?</span>
            </h2>
            <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
              Take the first step towards a fulfilling career with our expert guidance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg flex items-center justify-center">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-purple-700 font-medium rounded-lg hover:bg-purple-50 transition-all duration-300 border border-purple-200">
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}