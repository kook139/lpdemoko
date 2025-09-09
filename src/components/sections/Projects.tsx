import TechTag from '../ui/TechTag';
import { PROJECTS, PROJECTS_ITEMS } from '../../constants/content';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{PROJECTS.TITLE}</h3>
        </div>
        <div className="grid lg:grid-cols-1 gap-8">
          {PROJECTS_ITEMS.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className={`bg-gradient-to-br ${project.iconBg} rounded-lg p-6 h-48 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className={`text-4xl ${project.iconColor} mb-2`}>
                        {project.icon}
                      </div>
                      <div className={`text-lg font-semibold ${project.titleColor}`}>
                        {project.title.split('（')[0]}
                      </div>
                      <div className={`text-sm ${project.subtitleColor}`}>
                        {project.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span className="font-medium">期間:</span>
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">業種:</span>
                      <span>{project.industry}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">役割:</span>
                      <span>{project.role}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">チーム規模:</span>
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  <div className="text-gray-600 mb-4 leading-relaxed">
                    <div className="font-medium mb-2">主な担当・実績:</div>
                    <ul className="space-y-1 ml-4">
                      {project.responsibilities.map((responsibility, index) => (
                        <li key={index}>• {responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <TechTag key={index} name={tech.name} color={tech.color} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;