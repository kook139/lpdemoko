import { CONTACT } from '../../constants/content';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">{CONTACT.TITLE}</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          {CONTACT.SUBTITLE}
        </p>
        <div className="flex justify-center space-x-6">
          {CONTACT.LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-indigo-400 hover:text-indigo-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
