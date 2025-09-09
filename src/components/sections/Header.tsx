import { HEADER } from '../../constants/content';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{HEADER.TITLE}</h1>
          <div className="space-x-6">
            {HEADER.NAVIGATION.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;