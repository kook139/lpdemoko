interface SkillLevelProps {
  skill: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
}

const SkillLevel = ({ skill, level }: SkillLevelProps) => {
  const levelColors = {
    Expert: 'text-blue-600',
    Advanced: 'text-green-600',
    Intermediate: 'text-orange-600',
  };

  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{skill}</span>
      <span className={`${levelColors[level]} font-medium`}>
        {level}
      </span>
    </div>
  );
};

export default SkillLevel;