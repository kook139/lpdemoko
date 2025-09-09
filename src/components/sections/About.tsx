import { ABOUT } from '../../constants/content';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{ABOUT.TITLE}</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {ABOUT.SUBTITLE}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* チームワーク */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="text-blue-600 text-3xl mr-3">{ABOUT.TEAMWORK.ICON}</div>
              <h4 className="text-xl font-semibold text-gray-900">
                {ABOUT.TEAMWORK.TITLE}
              </h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              {ABOUT.TEAMWORK.ITEMS.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* 問題解決能力 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="text-green-600 text-3xl mr-3">{ABOUT.PROBLEM_SOLVING.ICON}</div>
              <h4 className="text-xl font-semibold text-gray-900">
                {ABOUT.PROBLEM_SOLVING.TITLE}
              </h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              {ABOUT.PROBLEM_SOLVING.ITEMS.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* 着実な業務遂行 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="text-purple-600 text-3xl mr-3">{ABOUT.EXECUTION.ICON}</div>
              <h4 className="text-xl font-semibold text-gray-900">
                {ABOUT.EXECUTION.TITLE}
              </h4>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              {ABOUT.EXECUTION.ITEMS.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
