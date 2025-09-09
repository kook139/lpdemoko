import { HERO } from "../../constants/content";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          {HERO.IAM}
          <span className="text-indigo-600">{HERO.NAME}</span>
        </h2>
        <div className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
          {HERO.DESCRIPTION}
        </div>
      </div>
    </section>
  );
};

export default Hero;
