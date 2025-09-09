interface TechTagProps {
  name: string;
  color?: 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'orange' | 'teal';
}

const TechTag = ({ name, color = 'blue' }: TechTagProps) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
    orange: 'bg-orange-100 text-orange-800',
    teal: 'bg-teal-100 text-teal-800',
  };

  return (
    <span className={`px-3 py-1 ${colorClasses[color]} text-sm rounded-full`}>
      {name}
    </span>
  );
};

export default TechTag;