import SkillLevel from "../ui/SkillLevel";
import { SKILLS } from '../../constants/content';

const Skills = () => {
  const skillCategories = [
    { key: 'frontend', data: SKILLS.FRONTEND, colorClass: 'text-blue-600' },
    { key: 'backend', data: SKILLS.BACKEND, colorClass: 'text-green-600' },
    { key: 'devops', data: SKILLS.DEVOPS, colorClass: 'text-orange-600' },
    { key: 'design', data: SKILLS.DESIGN, colorClass: 'text-purple-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{SKILLS.TITLE}</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {SKILLS.SUBTITLE}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(({ key, data, colorClass }) => (
            <div key={key} className="bg-white p-6 rounded-lg shadow-sm">
              <div className={`text-4xl mb-4 ${colorClass}`}>
                {data.ICON}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {data.TITLE}
              </h4>
              <div className="space-y-2 text-sm">
                {data.SKILLS.map((skill, index) => (
                  <SkillLevel key={index} skill={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span>{SKILLS.LEGEND.EXPERT}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span>{SKILLS.LEGEND.ADVANCED}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
              <span>{SKILLS.LEGEND.INTERMEDIATE}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
