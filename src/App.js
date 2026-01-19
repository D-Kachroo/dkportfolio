import React, { useState, useEffect } from 'react';
import {
  User, Briefcase, GraduationCap, FolderGit2, Mail, Code, TrendingUp, BarChart3,
  ExternalLink, Award, Calendar, MapPin, Terminal, Zap, Activity
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('summary');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [animateStats, setAnimateStats] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null); // click-activated glow

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const tabs = [
    { id: 'summary', label: 'Overview', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const education = [
    { 
      school: 'University of Waterloo', 
      degree: 'Bachelor of Computer Science & Finance (CFM)', 
      year: '2025-2030', 
      gpa: '3.7/4.0',
      location: 'Waterloo, ON',
      achievements: ['President\'s Scholarship of Distinction ($2000 + $1500)', 'UWaterloo Entrance Scholarship ($2000)', 'Relevant Courses: Financial Markets and Data Analytics, Designing Functional Programs, Algorithm Design & Data Abstraction']
    },
    { 
      school: 'Erindale Secondary School', 
      degree: 'High School + IB Diploma', 
      year: '2021-2025', 
      gpa: '98%',
      location: 'Mississauga, ON',
      achievements: ['Ontario DECA: 1st Place (out of ~250) in Finance Operations Research Event', 'freeCodeCamp: Data Analysis with Python Certificate', 'freeCodeCamp: Scientific Computing with Python Certificate']
    }
  ];

  const extracurriculars = [
    { name: 'Vice-President of Investments (FinTech Club)', period: 'Oct. 2025 - Present', icon: TrendingUp },
    { name: 'Quantitative Researcher (Quant Finance Club)', period: 'Jan. 2026 - Present', icon: Code },
    { name: 'Quantitative Analyst (Stocks Club)', period: 'Sept. 2025 - Dec. 2025', icon: BarChart3 }
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'SQL', 'R', 'JavaScript', 'TypeScript', 'C++', 'C#', 'VBA'], level: 95, icon: Code, color: 'blue' },
    { category: 'Frameworks & Libraries', items: ['pandas', 'NumPy', 'scikit-learn', 'statsmodels', 'Matplotlib', 'Streamlit', 'yfinance', 'QuantLib'], level: 92, icon: Terminal, color: 'blue' },
    { category: 'Software & Dev Tools', items: ['VS Code', 'GitHub', 'Jira', 'Docker', 'Postman', 'Anaconda', 'JupyterLab', 'Tableau', 'Power BI'], level: 88, icon: Zap, color: 'blue' },
    { category: 'Databases & Cloud', items: ['MongoDB', 'PostgreSQL', 'Snowflake', 'Firebase', 'BigQuery', 'AWS CloudShell', 'Railway'], level: 85, icon: Activity, color: 'blue' },
    { category: 'Finance & Analytics', items: ['Financial Modeling', 'Risk Analysis', 'Data Visualization', 'Statistical Analysis', 'ETL', 'Excel VBA'], level: 90, icon: TrendingUp, color: 'blue' },
    { category: 'Soft Skills', items: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration'], level: 94, icon: Award, color: 'blue' }
  ];

  const experiences = [
    { 
      company: 'Innodata Inc.', 
      role: 'AI Research Data Analyst', 
      period: 'April 2025 - September 2025',
      location: 'Ridgefield Park, New Jersey, USA',
      description: '• I processed 200+ daily AI evaluation tasks for search relevance across Apple Music, IMDb, and iOS + Android app store queries.• Set up monthly QA scripts using Python, SQL, and R to audit model outputs, debug failures, and track BI metrics (x4) with Tableau. • Computed precision@k, recall, and NDCG on ~10K samples to boost ML model accuracy by 15%+ and guide 6 retraining cycles.',
      tech: ['Python', 'Pandas', 'SQL', 'Data Visualization'],
      achievements: ['Processed 500K+ data points', 'Reduced annotation errors by 40%', 'Implemented automated QC pipeline']
    },
    { 
      company: 'Finlo.AI', 
      role: 'Financial Research & Strategy Intern', 
      period: 'June 2025 - September 2025',
      location: 'Vancouver, British Columbia, Canada',
      description: '• I analyzed the financial records of ~150 SMBs by calculating EBITDA margins, debt-to-equity (D/E) ratios, liquidity, and ROI metrics. • Developed an AI + ML software with 5K+ data points to evaluate business credit score ratings, using Matplotlib and scikit-learn. • Measured financial risk via 4+ KPIs such as price-to-earnings (P/E), income variance, cash-flow volatility, and market stress-tests.',
      tech: ['Excel', 'Python', 'Bloomberg', 'Financial Modeling'],
      achievements: ['Generated 15+ market analysis reports', 'Built predictive models with 85% accuracy', 'Presented strategies to C-suite executives']
    },
    { 
      company: 'Canada Learning Code', 
      role: 'Coding Instructor', 
      period: 'September 2021 - August 2024',
      location: 'Toronto, Ontario, Canada',
      description: '• I led 90+ workshops in HTML, CSS, Python, and Scratch for 200+ youth (ages 8–14), to promote digital literacy across the GTA. • Organized 24/7 technical support and live mentorship chats during ~30 tutorial sessions, leading to a 25% drop in learning errors.',
      tech: ['Python', 'JavaScript', 'Scratch', 'HTML/CSS'],
      achievements: ['Taught 200+ students', 'Developed custom curriculum', '4.81/5 student satisfaction rating']
    }
  ];

  const projects = [
    { 
      name: 'QuantETF Advisor', 
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Alpha Vantage API'],
      description: 'AI-powered ETF recommendation platform using quantitative analysis and machine learning to suggest optimal portfolio allocations based on risk tolerance and investment goals.',
      link: 'https://quant-etf-advisor.streamlit.app/',
      github: 'https://github.com/D-Kachroo/ETF-Portfolio-Advisor',
      status: 'Live',
      featured: true,
      image: '📊'
    },
    { 
      name: 'AutoPay+', 
      tech: ['Python', 'TensorFlow', 'React', 'Firebase', 'Stripe API'],
      description: 'Intelligent bill payment automation system with ML-powered spending predictions and automated payment scheduling to help users avoid late fees.',
      link: 'https://autopay-plus.netlify.app',
      github: 'https://github.com/D-Kachroo/autopay-plus',
      status: 'In Progress',
      featured: true,
      image: '💳'
    },
    { 
      name: 'Quant-Indexer', 
      tech: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL', 'TradingView'],
      description: 'Real-time market data visualization platform with custom technical indicators and backtesting capabilities for quantitative trading strategies.',
      link: 'https://quant-indexer.vercel.app',
      github: 'https://github.com/D-Kachroo/quant-indexer',
      status: 'Live',
      featured: true,
      image: '📈'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: 10, suffix: '+' },
    { label: 'Lines of Code', value: 27000, suffix: '+' },
    { label: 'Technologies Mastered', value: 8, suffix: '+' },
    { label: 'GitHub Repositories', value: 15, suffix: '+' }
  ];

  const palette = {
    green: '#22c55e',
    blue:  '#1d4ed8',
    red:   '#db0202',      // left untouched elsewhere
    teal:  '#08ceb7',
    indigo:'#4f46e5'       // NEW: cool accent for Experience
  };

  const getColorClasses = (color) => {
    const colors = {
      blue:   { bg: 'bg-blue-600',   text: 'text-blue-300',   border: 'border-blue-600' },
      green:  { bg: 'bg-green-500',  text: 'text-green-400',  border: 'border-green-500' },
      red:    { bg: 'bg-red-500',    text: 'text-red-400',    border: 'border-red-500' },
      teal:   { bg: 'bg-teal-500',   text: 'text-teal-400',   border: 'border-teal-500' }
    };
    return colors[color] || colors.blue;
  };

  const glowStyle = (hex, active) => ({
    boxShadow: active ? `0 0 0 1px ${hex}55, 0 0 18px ${hex}33` : 'none',
    borderColor: active ? `${hex}66` : undefined
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-3 sticky top-0 z-50 backdrop-blur-sm bg-gray-800/95">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
              DK
            </div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              Portfolio
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Last Updated: {new Date().toLocaleDateString()}</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-800 border-b border-gray-700 px-4 py-2 sticky top-[57px] z-40 backdrop-blur-sm bg-gray-800/95">
        <div className="flex gap-2 max-w-7xl mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-600 to-blue-700 text-white shadow-lg scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-102'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto">
        {activeTab === 'summary' && (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-[40px] leading-tight font-extrabold text-white mb-1">David Kachroo</h2>
                <p className="text-[18px] md:text-[20px] text-gray-200 mb-4">
                  Computer Science & Finance Student | University of Waterloo
                </p>
                <div className="flex flex-wrap gap-2 mb-6 text-[13px]">
                  {['CFM @ UWaterloo','Fintech','Data-Driven','Portfolio Apps','Backtesting','ML Models'].map((t)=>(
                    <span key={t} className="px-3 py-1 rounded-full bg-gray-700 text-gray-200 border border-gray-600">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="mailto:d2kachro@uwaterloo.ca" className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-700 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
                    Contact Me
                  </a>
                  <a href="https://github.com/D-Kachroo" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition-all flex items-center gap-2">
                    <FolderGit2 size={18} />
                    View GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-5 text-center transition-all hover:scale-105"
                  style={{ boxShadow: '0 0 20px rgba(34,197,94,0.12)' }}
                >
                  <div className={`text-[28px] font-extrabold text-green-400 mb-1 ${animateStats ? 'animate-pulse' : ''}`}>
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Education & Extracurriculars */}
              <div
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-200 cursor-pointer transition-shadow hover:shadow-[0_0_20px_rgba(34,197,94,.18)]"
                onMouseEnter={() => setHoveredSection('education')}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => setSelectedSection('education')}
                style={{
                  ...glowStyle(palette.green, hoveredSection === 'education' || selectedSection === 'education')
                }}
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-700">
                  <GraduationCap className="text-green-400" size={28} />
                  <h2 className="text-2xl font-extrabold text-green-400">Education & Activities</h2>
                </div>
                <div className="space-y-5">
                  {education.slice(0, 2).map((edu, i) => (
                    <div key={i} className="border-l-4 border-green-500 pl-4 hover:pl-5 transition-all">
                      <h3 className="font-bold text-white text-[18px] leading-tight">{edu.school}</h3>
                      <p className="text-sm text-gray-300 mt-1">{edu.degree}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.year}
                        </span>
                        <span className="text-green-400 font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-5 pt-4 border-t border-gray-700">
                    <h3 className="text-sm font-bold text-gray-300 mb-3 flex items-center gap-2">
                      <Award size={16} className="text-green-400" />
                      Extracurricular Leadership
                    </h3>
                    {extracurriculars.map((extra, i) => (
                      <div key={i} className="flex items-start gap-3 py-2 hover:bg-gray-700/50 rounded px-2 -mx-2 transition-colors">
                        <extra.icon size={16} className="text-green-400 mt-0.5" />
                        <div className="flex-1">
                          <span className="text-sm text-gray-200 block">{extra.name}</span>
                          <span className="text-xs text-green-400">{extra.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills (enhanced visual effects) */}
              <div
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-200 cursor-pointer transition-shadow hover:shadow-[0_0_20px_rgba(29,78,216,.18)]"
                onMouseEnter={() => setHoveredSection('skills')}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => setSelectedSection('skills')}
                style={{
                  ...glowStyle(palette.blue, hoveredSection === 'skills' || selectedSection === 'skills')
                }}
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-700">
                  <Code className="text-blue-300" size={28} />
                  <h2 className="text-2xl font-extrabold text-blue-300">Technical Expertise</h2>
                </div>
                <div className="space-y-4">
                  {skills.slice(0, 4).map((skill, i) => {
                    const colors = getColorClasses(skill.color);
                    return (
                      <div key={i} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-[15px] font-bold text-white">{skill.category}</h3>
                          <span className={`text-xs font-semibold ${colors.text}`}>{skill.level}%</span>
                        </div>
                        {/* animated striped progress with shimmer on hover */}
                        <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden relative">
                          <div
                            className={`${colors.bg} h-3 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_16px_rgba(29,78,216,0.35)]`}
                            style={{
                              width: animateStats ? `${skill.level}%` : '0%',
                              backgroundImage:
                                'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0 8px, transparent 8px 16px)',
                              backgroundSize: '24px 24px',
                              animation: 'stripeSlide 2s linear infinite'
                            }}
                          ></div>
                        </div>
                        {/* floating tag cloud on hover */}
                        <div className="flex flex-wrap gap-1.5">
                          {skill.items.map((item, j) => (
                            <span
                              key={j}
                              className="text-xs bg-gray-700 px-2.5 py-1 rounded-md text-gray-200 transition-transform group-hover:-translate-y-[1px]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Work Experience (INDIGO instead of red) */}
              <div
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-200 cursor-pointer transition-shadow hover:shadow-[0_0_20px_rgba(79,70,229,.18)]"
                onMouseEnter={() => setHoveredSection('experience')}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => setSelectedSection('experience')}
                style={{
                  ...glowStyle(palette.indigo, hoveredSection === 'experience' || selectedSection === 'experience')
                }}
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-700">
                  <Briefcase className="text-indigo-400" size={28} />
                  <h2 className="text-[26px] md:text-[28px] font-extrabold text-indigo-400 tracking-tight">Professional Experience</h2>
                </div>
                <div className="space-y-4">
                  {experiences.slice(0, 3).map((exp, i) => (
                    <div key={i} className="border-l-4 border-indigo-500 pl-4 hover:pl-5 transition-all hover:bg-gray-700/30 rounded-r pr-2 py-2">
                      <h3 className="font-extrabold text-white text-[20px] md:text-[22px] leading-snug tracking-tight">{exp.role}</h3>
                      <p className="text-base text-indigo-300 mt-0.5 leading-tight">{exp.company}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-300 mt-1 leading-tight">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects (teal) */}
              <div
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-200 cursor-pointer transition-shadow hover:shadow-[0_0_20px_rgba(20,184,166,.18)]"
                onMouseEnter={() => setHoveredSection('projects')}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => setSelectedSection('projects')}
                style={{
                  ...glowStyle(palette.teal, hoveredSection === 'projects' || selectedSection === 'projects')
                }}
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-700">
                  <FolderGit2 className="text-teal-400" size={28} />
                  <h2 className="text-2xl font-extrabold text-teal-400">Featured Projects</h2>
                </div>
                <div className="space-y-3">
                  {projects.filter(p => p.featured).map((project, i) => (
                    <div 
                      key={i} 
                      className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all cursor-pointer group"
                      onClick={() => window.open(project.link, '_blank')}
                      style={{ boxShadow: '0 0 14px rgba(20, 184, 166, 0.15)' }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{project.image}</span>
                          <h3 className="font-bold text-white group-hover:text-teal-400 transition-colors">{project.name}</h3>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'Live' ? 'bg-green-900/50 text-green-300' : 'bg-teal-900/50 text-teal-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                      <div className="flex items-center gap-2">
                        <ExternalLink size={12} className="text-teal-400" />
                        <span className="text-xs text-teal-400">View Live Demo</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* skills shimmer keyframes */}
            <style>{`
              @keyframes stripeSlide {
                0% { background-position: 0 0; }
                100% { background-position: 48px 0; }
              }
            `}</style>
          </div>
        )}

        {/* EDUCATION */}
        {activeTab === 'education' && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700">
              <GraduationCap className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold text-green-400">Education</h2>
            </div>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="border-l-4 border-green-500 pl-8 py-6 bg-gradient-to-r from-gray-700/50 to-transparent rounded-r-lg hover:from-gray-700 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                      <p className="text-lg text-gray-300 mt-2">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 flex items-center gap-2 justify-end">
                        <Calendar size={16} />
                        {edu.year}
                      </div>
                      <div className="text-green-400 font-bold text-lg mt-1">GPA: {edu.gpa}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  {edu.achievements && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                        <Award size={16} />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, j) => (
                          <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-700">
                <Award className="text-green-400" size={28} />
                <h3 className="text-2xl font-bold text-green-400">Extracurricular Activities</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {extracurriculars.map((extra, i) => (
                  <div key={i} className="bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-all group">
                    <div className="flex items-start gap-3 mb-2">
                      <extra.icon className="text-green-400 group-hover:scale-110 transition-transform" size={24} />
                      <div>
                        <h4 className="font-bold text-white group-hover:text-green-400 transition-colors">{extra.name}</h4>
                        <p className="text-sm text-gray-400 mt-1">{extra.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EXPERIENCE (indigo theme + zoomed text) */}
        {activeTab === 'experience' && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700">
              <Briefcase className="text-indigo-400" size={32} />
              <h2 className="text-[32px] font-extrabold text-indigo-400 tracking-tight">Work Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="border-l-4 border-indigo-500 pl-8 py-6 bg-gradient-to-r from-gray-700/50 to-transparent rounded-r-lg hover:from-gray-700 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[24px] md:text-[26px] font-extrabold text-white leading-snug tracking-tight">{exp.role}</h3>
                      <p className="text-[18px] text-indigo-300 mt-0.5 leading-tight">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4 leading-relaxed">{exp.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-indigo-400 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, j) => (
                        <span key={j} className="bg-indigo-900/30 text-indigo-300 px-3 py-1.5 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {exp.achievements && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-indigo-400 mb-2 flex items-center gap-2">
                        <Award size={16} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, j) => (
                          <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-indigo-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS (teal theme) */}
        {activeTab === 'projects' && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700">
              <FolderGit2 className="text-teal-400" size={32} />
              <h2 className="text-3xl font-bold text-teal-400">Projects</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <div 
                  key={i} 
                  className={`bg-gray-700 p-6 rounded-xl transition-all duration-300 cursor-pointer group ${
                    hoveredProject === i ? 'scale-105 shadow-2xl shadow-teal-500/20 border-2 border-teal-500' : 'border-2 border-transparent'
                  }`}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{project.image}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{project.name}</h3>
                        <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Live' ? 'bg-green-900/50 text-green-300' : 'bg-teal-900/50 text-teal-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span key={j} className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-gray-900 rounded-lg font-semibold transition-all hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-semibold transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FolderGit2 size={16} />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SKILLS (full page, uses deeper blue too) */}
        {activeTab === 'skills' && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700">
              <Code className="text-blue-300" size={32} />
              <h2 className="text-3xl font-bold text-blue-300">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, i) => {
                const colors = getColorClasses(skill.color);
                return (
                  <div key={i} className="bg-gray-700 p-6 rounded-xl transition-all hover:scale-102 hover:shadow-[0_0_20px_rgba(29,78,216,.25)]">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                      <span className={`text-2xl font-bold ${colors.text}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-4 mb-5 overflow-hidden relative">
                      <div 
                        className={`${colors.bg} h-4 rounded-full shadow-inner`}
                        style={{
                          width: `${skill.level}%`,
                          backgroundImage:
                            'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0 8px, transparent 8px 16px)',
                          backgroundSize: '24px 24px',
                          animation: 'stripeSlide 2.2s linear infinite'
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, j) => (
                        <span key={j} className="bg-gray-800 text-gray-200 px-3 py-2 rounded-lg transition-transform hover:-translate-y-[1px]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <style>{`
              @keyframes stripeSlide {
                0% { background-position: 0 0; }
                100% { background-position: 48px 0; }
              }
            `}</style>
          </div>
        )}

        {/* CONTACT */}
        {activeTab === 'contact' && (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-700">
              <Mail className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold text-green-400">Contact Information</h2>
            </div>
            <p className="text-gray-300 mb-8 text-center">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and finance. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:d2kachro@uwaterloo.ca"
                className="flex items-center gap-4 p-5 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all group hover:scale-102"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Mail className="text-green-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">Email</h3>
                  <p className="text-gray-400 text-sm">d2kachro@uwaterloo.ca</p>
                </div>
                <ExternalLink className="text-gray-500 group-hover:text-green-400 transition-colors" size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/david-kachroo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all group hover:scale-102"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <TrendingUp className="text-blue-300" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">linkedin.com/in/david-kachroo</p>
                </div>
                <ExternalLink className="text-gray-500 group-hover:text-blue-300 transition-colors" size={20} />
              </a>
              <a 
                href="https://github.com/D-Kachroo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all group hover:scale-102"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                  <FolderGit2 className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white group-hover:text-red-400 transition-colors">GitHub</h3>
                  <p className="text-gray-400 text-sm">github.com/D-Kachroo</p>
                </div>
                <ExternalLink className="text-gray-500 group-hover:text-red-400 transition-colors" size={20} />
              </a>
              <a 
                href="https://devpost.com/DK-CFM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all group hover:scale-102"
              >
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <BarChart3 className="text-teal-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white group-hover:text-teal-400 transition-colors">Devpost</h3>
                  <p className="text-gray-400 text-sm">devpost.com/DK-CFM</p>
                </div>
                <ExternalLink className="text-gray-500 group-hover:text-teal-400 transition-colors" size={20} />
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 px-6 py-4 mt-12">
        <div className="flex justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto">
          <span>© 2026 DKPortfolio. All rights reserved.</span>
          <span>Built with React, Tailwind CSS, & JS</span>
        </div>
      </footer>
    </div>
  );
}