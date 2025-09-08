const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            <div className="space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Hello, I'm <span className="text-indigo-600">Your Name</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            フロントエンドエンジニア・デザイナーとして、美しく機能的なWebサイトを制作しています。
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">About Me</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              私は情熱を持ってWebサイトを作り続けています。ユーザー体験を重視し、最新の技術を使用して価値のあるプロダクトを開発します。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://via.placeholder.com/400x400"
                alt="Profile"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                経歴・スキル
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>• フロントエンド開発: React, TypeScript, Vue.js</li>
                <li>• UI/UXデザイン: Figma, Adobe Creative Suite</li>
                <li>• バックエンド: Node.js, Python</li>
                <li>• データベース: MySQL, MongoDB</li>
                <li>• その他: Git, Docker, AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Skills</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 text-4xl mb-4">💻</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Frontend
              </h4>
              <p className="text-gray-600">
                React, TypeScript, Tailwind CSS, Next.js
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 text-4xl mb-4">🎨</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Design
              </h4>
              <p className="text-gray-600">UI/UX Design, Figma, Adobe XD</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 text-4xl mb-4">⚙️</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Backend
              </h4>
              <p className="text-gray-600">Node.js, Python, Database Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Project 1
                </h4>
                <p className="text-gray-600 mb-4">
                  プロジェクトの詳細な説明がここに入ります。
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Project 2
                </h4>
                <p className="text-gray-600 mb-4">
                  プロジェクトの詳細な説明がここに入ります。
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                    Python
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Project 3
                </h4>
                <p className="text-gray-600 mb-4">
                  プロジェクトの詳細な説明がここに入ります。
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                    Next.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            新しいプロジェクトについてお話しましょう。お気軽にご連絡ください。
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:your@email.com"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Email
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              GitHub
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              LinkedIn
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
