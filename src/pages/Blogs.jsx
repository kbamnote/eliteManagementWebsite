import Footer from '../components/Footer';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Online Learning: Trends to Watch in 2024',
      excerpt:
        'Exploring the latest trends in online education and how they are shaping the future of learning.',
      date: 'January 15, 2024',
      author: 'Dr. Sarah Johnson',
      category: 'Education Trends',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'How to Choose the Right Course for Your Career Goals',
      excerpt:
        'Learn proven strategies to select courses that align with your professional objectives.',
      date: 'January 10, 2024',
      author: 'Michael Chen',
      category: 'Career Guidance',
      readTime: '7 min read',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Building a Strong Professional Portfolio',
      excerpt:
        'Discover how to create a compelling portfolio that showcases your skills and achievements.',
      date: 'January 5, 2024',
      author: 'Emma Rodriguez',
      category: 'Professional Development',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'The Art of Effective Learning: Best Practices',
      excerpt:
        'Essential tips for maximizing your learning efficiency and retention.',
      date: 'December 28, 2023',
      author: 'Robert Williams',
      category: 'Learning Tips',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Remote Work: Skills That Matter Most',
      excerpt:
        'How to develop the skills needed to succeed in remote work environments.',
      date: 'December 20, 2023',
      author: 'Lisa Anderson',
      category: 'Remote Work',
      readTime: '8 min read',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Digital Marketing in the AI Era',
      excerpt:
        'Understanding how artificial intelligence is changing the digital marketing landscape.',
      date: 'December 15, 2023',
      author: 'James Wilson',
      category: 'Marketing',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1451187580459-401b681d5e8c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = [
    'All Posts',
    'Education Trends',
    'Career Guidance',
    'Professional Development',
    'Learning Tips',
    'Remote Work',
    'Marketing'
  ];

  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen bg-muted">

{/* HERO */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image + Overlay */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black/80" />
    <img 
      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
      alt="Elite Management"
      className="w-full h-full object-cover opacity-30"
      style={{ transform: `translateY(${scrollY * 0.3}px)` }}
    />
  </div>



  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-4xl">
    <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 text-white text-sm tracking-widest uppercase animate-fade-up">
      Knowledge Hub
    </span>

    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up delay-150">
      Insights & Articles
    </h1>

    <p className="text-xl text-white/90 mb-8 animate-fade-up delay-300">
      Practical knowledge, expert insights & career guidance
    </p>

    <button className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-lg animate-fade-up delay-450">
      Explore Articles
    </button>
  </div>

  {/* Bottom gradient fade */}

  {/* Tailwind Animations */}
  <style>{`
    @keyframes fade-up {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-up { animation: fade-up 1s ease-out forwards; opacity: 0; }
    .delay-150 { animation-delay: 0.15s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-450 { animation-delay: 0.45s; }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
  `}</style>
</section>




      {/* CONTENT */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* MAIN */}
          <div className="lg:col-span-3">

            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    i === 0
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-card border hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* BLOG GRID */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <article
                  key={post.id}
                  className="group bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-3 gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        By {post.author}
                      </span>
                      <button className="text-primary font-semibold hover:underline">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* LOAD MORE */}
            <div className="text-center mt-14">
              <button className="px-10 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-xl">
                Load More Articles
              </button>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">

            {/* SEARCH */}
            <div className="bg-card border rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">Search Articles</h3>
              <input
                type="text"
                placeholder="Search blogs..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* CATEGORIES */}
            <div className="bg-card border rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.slice(1).map((cat, i) => (
                  <li key={i} className="flex justify-between hover:text-primary cursor-pointer">
                    <span>{cat}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full">
                      {i + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RECENT POSTS */}
            <div className="bg-card border rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map(post => (
                  <div key={post.id} className="flex gap-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-semibold hover:text-primary cursor-pointer">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="relative bg-primary rounded-2xl p-6 text-white shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-30" />
              <div className="relative">
                <h3 className="text-lg font-bold mb-2">
                  Subscribe to Newsletter
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  Get insights & updates directly in your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 mb-3"
                />
                <button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:scale-105 transition">
                  Subscribe
                </button>
              </div>
            </div>

          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
