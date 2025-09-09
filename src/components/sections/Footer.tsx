import { FOOTER } from '../../constants/content';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">{FOOTER.COPYRIGHT}</p>
      </div>
    </footer>
  );
};

export default Footer;
