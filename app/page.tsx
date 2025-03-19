"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [length, setLength] = useState(1);
  const [height, setHeight] = useState(1);
  const [material, setMaterial] = useState("steel");
  const [price, setPrice] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "Jakie materiały stosujecie?", answer: "Pracujemy ze stalą, aluminium i miedzią." },
    { question: "Ile czasu zajmuje produkcja?", answer: "Średni czas produkcji wynosi od 5 do 14 dni w zależności od stopnia skomplikowania zamówienia." },
    { question: "Czy można zamówić indywidualny projekt?", answer: "Tak, wykonujemy produkty według indywidualnych szkiców klientów." },
    { question: "Jakie są dostępne metody płatności?", answer: "Akceptujemy gotówkę, przelewy bankowe i płatności kartą." },
    { question: "Czy udzielacie gwarancji na produkty?", answer: "Tak, gwarancja na wszystkie produkty wynosi 12 miesięcy." },
    { question: "Czy można zamówić montaż?", answer: "Tak, mamy ekipę montażową, która zamontuje produkt na Twojej działce." },
    { question: "Czy dostarczacie zamówienia do innych miast?", answer: "Tak, wysyłamy zamówienia na terenie całego kraju za pośrednictwem firm transportowych." },
    { question: "Jak obliczyć koszt produktu?", answer: "Możesz skorzystać z naszego kalkulatora online lub skontaktować się z menedżerem." },
    { question: "Jakie kolory są dostępne?", answer: "Oferujemy szeroką gamę kolorów, w tym malowanie proszkowe." },
    { question: "Jak złożyć zamówienie?", answer: "Skontaktuj się z nami telefonicznie lub złóż wniosek na stronie, a nasz menedżer oddzwoni." }
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const calculatePrice = () => {
    let basePrice = 1000;
    if (material === "aluminum") basePrice = 1200;
    if (material === "copper") basePrice = 1500;
    const total = basePrice * length * height;
    setPrice(total);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-3xl font-extrabold text-blue-400">MetalMaster</h1>
          <nav className="space-x-6 text-lg">
            <a href="#about" className="hover:text-blue-400 transition">O nas</a>
            <a href="#works" className="hover:text-blue-400 transition">Nasze prace</a>
            <a href="#calculator" className="hover:text-blue-400 transition">Kalkulator</a>
            <a href="#faq" className="hover:text-blue-400 transition">FAQ</a>
            <a href="#contact" className="hover:text-blue-400 transition">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-6 text-center">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                   className="text-4xl font-bold text-blue-400 mb-6">
          О нас
        </motion.h2>
        <p className="text-lg max-w-3xl mx-auto">
          Jesteśmy zespołem profesjonalistów zajmujących się produkcją wyrobów metalowych na zamówienie.
          Wysoka jakość, nowoczesne technologie i indywidualne podejście to nasze zasady.
        </p>
      </section>

      {/* Works Section */}
      <section id="works" className="bg-gray-800 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Nasze prace</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/*<img src="/work1.jpg" alt="Работа 1" className="rounded-lg shadow-lg aspect-square object-cover" />*/}
          {/*<img src="/work2.jpg" alt="Работа 2" className="rounded-lg shadow-lg aspect-square object-cover" />*/}
          {/*<img src="/work3.jpg" alt="Работа 3" className="rounded-lg shadow-lg aspect-square object-cover" />*/}
        </div>
      </section>

      {/* Calculator */}
      {/* Kalkulator */}
      <section id="calculator" className="container mx-auto py-16 px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                   className="text-4xl font-bold text-blue-400 mb-6">
          Kalkulator kosztów
        </motion.h2>
        <div className="max-w-xl mx-auto bg-gray-800 p-8 shadow-lg rounded-lg border border-gray-700">
          <div className="mb-6">
            <label className="block text-left text-lg">Długość (m): <span className="text-blue-400">{length}</span></label>
            <input type="range" min="1" max="10" step="0.1" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full accent-blue-400" />
          </div>
          <div className="mb-6">
            <label className="block text-left text-lg">Wysokość (m): <span className="text-blue-400">{height}</span></label>
            <input type="range" min="1" max="5" step="0.1" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-blue-400" />
          </div>
          <div className="mb-6">
            <label className="block text-left text-lg">Materiał:</label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg">
              <option value="stal">Stal</option>
              <option value="aluminium">Aluminium</option>
              <option value="miedź">Miedź</option>
            </select>
          </div>
          <button onClick={calculatePrice} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
            Oblicz
          </button>
          <p className="mt-6 text-2xl font-semibold text-blue-400">Szacowany koszt: {price} zł</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6 container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-8">Najczęściej zadawane pytania</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 transition flex justify-between items-center"
              >
                <span className="text-lg">{item.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-700 border-t border-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sekcja Kontakt */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-400">Skontaktuj się z nami</h2>
          <div className="flex justify-center space-x-6 mt-6 text-lg">
            <a href="tel:+123456789" className="flex items-center space-x-2 hover:text-blue-400 transition">
              <FaPhoneAlt /> <span>+1 234 567 89</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center space-x-2 hover:text-blue-400 transition">
              <FaEnvelope /> <span>info@example.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
