import React, { useState } from 'react';
import { ArrowUpRight, Check, Package, X, Mail } from 'lucide-react';

interface ProductItem {
  id: string;
  category: string;
  image: string;
}

export const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [sampleSuccess, setSampleSuccess] = useState(false);

  const [modalForm, setModalForm] = useState({
    company: '',
    email: '',
    country: '',
    notes: ''
  });

  const categories = [
    'All',
    'Goat Leather',
    'Sheep Leather',
    'Footwear Leather',
    'Garment Leather',
    'Bag Leather'
  ];

  const products: ProductItem[] = [
    // Goat Leather
    {
      id: 'p-1',
      category: 'Goat Leather',
      image: '/assets/images/goat-leather-cognac.jpg'
    },
    {
      id: 'p-2',
      category: 'Goat Leather',
      image: '/assets/images/goat-leather-trio-rolls.jpg'
    },
    // Sheep Leather
    {
      id: 'p-3',
      category: 'Sheep Leather',
      image: '/assets/images/sheep-leather-burgundy.jpg'
    },
    {
      id: 'p-4',
      category: 'Sheep Leather',
      image: '/assets/images/sheep-leather-gold-foil.jpg'
    },
    // Footwear Leather Collection
    {
      id: 'p-5',
      category: 'Footwear Leather',
      image: '/assets/images/footwear-black-oxford.jpg'
    },
    {
      id: 'p-6',
      category: 'Footwear Leather',
      image: '/assets/images/footwear-brown-boots.jpg'
    },
    {
      id: 'p-7',
      category: 'Footwear Leather',
      image: '/assets/images/footwear-mahogany-brogues.jpg'
    },
    {
      id: 'p-8',
      category: 'Footwear Leather',
      image: '/assets/images/footwear-suede-loafers.jpg'
    },
    {
      id: 'p-9',
      category: 'Footwear Leather',
      image: '/assets/images/footwear-chelsea-boots.jpg'
    },
    {
      id: 'p-10',
      category: 'Footwear Leather',
      image: '/assets/images/footwear-sandals-chocolate.jpg'
    },
    {
      id: 'p-11',
      category: 'Footwear Leather',
      image: '/assets/images/footwear-sandals-cognac.jpg'
    },
    // Garment Leather Collection
    {
      id: 'p-12',
      category: 'Garment Leather',
      image: '/assets/images/garment-vintage-jacket.jpg'
    },
    {
      id: 'p-13',
      category: 'Garment Leather',
      image: '/assets/images/garment-suede-trucker.jpg'
    },
    {
      id: 'p-14',
      category: 'Garment Leather',
      image: '/assets/images/garment-navy-field.jpg'
    },
    {
      id: 'p-15',
      category: 'Garment Leather',
      image: '/assets/images/garment-slate-bomber.jpg'
    },
    {
      id: 'p-16',
      category: 'Garment Leather',
      image: '/assets/images/crackle-leather.jpg'
    },
    // Bag Leather Collection
    {
      id: 'p-17',
      category: 'Bag Leather',
      image: '/assets/images/bag-suede-totes.jpg'
    },
    {
      id: 'p-18',
      category: 'Bag Leather',
      image: '/assets/images/bag-croc-black.jpg'
    },
    {
      id: 'p-19',
      category: 'Bag Leather',
      image: '/assets/images/bag-mahogany-holdall.jpg'
    },
    {
      id: 'p-20',
      category: 'Bag Leather',
      image: '/assets/images/bag-minimal-black.jpg'
    },
    {
      id: 'p-21',
      category: 'Bag Leather',
      image: '/assets/images/bag-pebbled-briefcase.jpg'
    }
  ];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleRequestSample = (product: ProductItem) => {
    setSelectedProduct(product);
    setRequestModalOpen(true);
    setSampleSuccess(false);
    setModalForm({ company: '', email: '', country: '', notes: '' });
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSuccess(true);

    const messageText = `*NEW INQUIRY - THW INTERNATIONAL*
----------------------------------------
*Category:* ${selectedProduct?.category || 'Finished Leather'}
*Company / Brand:* ${modalForm.company}
*Work Email:* ${modalForm.email}
*Country:* ${modalForm.country}
*Sample Requirements & Color Specs:* ${modalForm.notes || 'Standard Sample Swatches'}
----------------------------------------`;

    const encodedWA = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/919442627480?text=${encodedWA}`;

    const mailSubject = encodeURIComponent(`Leather Sample Request - ${selectedProduct?.category}`);
    const mailBody = encodeURIComponent(messageText.replace(/\*/g, ''));
    const mailtoUrl = `mailto:thw.international@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    // Open WhatsApp Chat with pre-filled message
    window.open(waUrl, '_blank');

    // Trigger Mail client to thw.international@gmail.com
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setRequestModalOpen(false);
      setSampleSuccess(false);
    }, 2500);
  };

  return (
    <section id="products" className="py-28 bg-[#0E0E0E] relative border-b border-[#C8A45A]/15">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A45A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A45A]">
            <Package className="w-4 h-4" />
            <span>GLOBAL PRODUCT CATALOG</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            PREMIUM LEATHER <span className="text-gold-shimmer font-italic">COLLECTIONS</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm tracking-widest uppercase font-light">
            Engineered in Vaniyambadi for International Footwear, Garments & Luxury Goods Manufacturers.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#C8A45A] text-[#0E0E0E] shadow-[0_0_20px_rgba(200,164,90,0.3)] font-semibold'
                  : 'bg-[#1B1B1B] text-slate-300 hover:bg-[#262626] hover:text-[#C8A45A] border border-[#C8A45A]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-luxury glass-luxury-hover rounded-3xl overflow-hidden border border-[#C8A45A]/25 flex flex-col justify-between group shadow-xl p-3"
            >
              {/* Product Image Header with Category Badge */}
              <div className="relative h-72 w-full rounded-2xl overflow-hidden mb-4 bg-[#141414]">
                <img
                  src={product.image}
                  alt={product.category}
                  className="w-full h-full object-cover filter brightness-95 contrast-110 transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0E0E0E]/80 backdrop-blur-md border border-[#C8A45A]/40 text-xs uppercase tracking-widest text-[#C8A45A] font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-2">
                <button
                  onClick={() => handleRequestSample(product)}
                  className="w-full py-3 rounded-full border border-[#C8A45A]/50 bg-[#0E0E0E] text-slate-100 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#C8A45A] hover:text-[#0E0E0E] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Request Swatch</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C8A45A] group-hover/btn:text-[#0E0E0E] transition-colors" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Swatch Sample Request Modal */}
      {requestModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-luxury bg-[#141414] border border-[#C8A45A]/40 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl space-y-6">
            
            <button
              onClick={() => setRequestModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            {sampleSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#C8A45A]/20 text-[#C8A45A] rounded-full flex items-center justify-center mx-auto border border-[#C8A45A]">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white">Sample Request Dispatched</h3>
                <p className="text-xs text-slate-300 tracking-widest uppercase">
                  Opening WhatsApp to <span className="text-[#C8A45A] font-semibold">+91 9442627480</span> & Email to <span className="text-[#C8A45A] font-semibold">thw.international@gmail.com</span>...
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A45A]">
                    <Mail className="w-4 h-4" />
                    <span>International Swatch Order</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white">
                    Request Leather Sample
                  </h3>
                  <p className="text-xs text-slate-400">
                    Category: <span className="text-[#C8A45A] font-semibold">{selectedProduct.category}</span>
                  </p>
                </div>

                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      required
                      value={modalForm.company}
                      onChange={(e) => setModalForm({ ...modalForm, company: e.target.value })}
                      placeholder="e.g. Milan Footwear Ltd"
                      className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8A45A]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={modalForm.email}
                        onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                        placeholder="buyer@brand.com"
                        className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8A45A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Country</label>
                      <input
                        type="text"
                        required
                        value={modalForm.country}
                        onChange={(e) => setModalForm({ ...modalForm, country: e.target.value })}
                        placeholder="e.g. Italy, USA, Germany"
                        className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8A45A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Sample Requirements & Custom Color Specs</label>
                    <textarea
                      rows={3}
                      value={modalForm.notes}
                      onChange={(e) => setModalForm({ ...modalForm, notes: e.target.value })}
                      placeholder="Specify thickness, color swatch codes, or end use..."
                      className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C8A45A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#C8A45A] text-[#0E0E0E] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#FFF0C3] transition-colors"
                  >
                    Dispatch Express Swatches
                  </button>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
