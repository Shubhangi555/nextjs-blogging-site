// components/HeroSection.js
export default function HeroSection() {
  return (
    <section className="text-center py-16 bg-gradient-to-r from-violet-600 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Best Deals on Trending Products</h1>
      <p className="text-lg mb-6">Curated reviews & top picks with affiliate links</p>
      <a href="#products" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100">
        Explore Products
      </a>
    </section>
  );
}
