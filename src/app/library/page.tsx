"use client";
import { BookOpen, Download, Search, Star, Bookmark } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

export default function Library() {
  const books = [
    { title: "The Republic", author: "Plato", hiAuthor: "प्लेटो", tag: "Western Thought", type: "PDF", rating: 4.9 },
    { title: "The Prince", author: "Niccolò Machiavelli", hiAuthor: "मैकियावेली", tag: "Western Thought", type: "PDF", rating: 4.8 },
    { title: "Politics", author: "Aristotle", hiAuthor: "अरस्तू", tag: "Western Thought", type: "PDF", rating: 4.9 },
    { title: "The Social Contract", author: "Jean-Jacques Rousseau", hiAuthor: "रूसो", tag: "Political Theory", type: "PDF", rating: 4.7 },
    { title: "Annihilation of Caste", author: "B.R. Ambedkar", hiAuthor: "बी.आर. अंबेडकर", tag: "Indian Thought", type: "PDF", rating: 4.9 },
    { title: "Hind Swaraj", author: "Mahatma Gandhi", hiAuthor: "महात्मा गांधी", tag: "Indian Thought", type: "PDF", rating: 4.8 },
  ];

  return (
    <PageTransition>
      <div className="tab-pane active" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          className="rounded-3xl p-8 md:p-12 relative mb-8 shadow-2xl overflow-hidden flex flex-col items-start"
          style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4338ca 50%, #312e81 100%)' }}
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
          
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md mb-6 shadow-lg border border-white/10">
            <BookOpen size={40} color="white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            <span className="hi">ई-पुस्तकालय</span><span className="en">Research Library</span>
          </h1>
          <p className="text-lg max-w-2xl font-medium" style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            <span className="hi">क्लासिक राजनीतिक ग्रंथ और महत्वपूर्ण अध्ययन सामग्री का संग्रह।</span>
            <span className="en">A collection of classic political texts and essential study material.</span>
          </p>
        </div>

        <div className="library-controls p-4">
          <div className="search-bar flex items-center bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <Search size={18} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Search books, authors, or topics..." className="bg-transparent border-none outline-none w-full text-gray-700 dark:text-gray-200" />
          </div>
        </div>

        <div className="library-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {books.map((book, idx) => (
            <div key={idx} className="library-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex">
              <div className="book-cover-placeholder w-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center border-r border-gray-100 dark:border-gray-700">
                <Bookmark size={32} className="text-blue-300 dark:text-gray-500" />
              </div>
              <div className="library-card-content p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="book-tag text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-md inline-block mb-2">{book.tag}</span>
                  <h3 className="book-title font-bold text-gray-800 dark:text-white leading-tight mb-1">{book.title}</h3>
                  <p className="book-author text-sm text-gray-500 dark:text-gray-400">
                    <span className="hi">{book.hiAuthor}</span>
                    <span className="en">{book.author}</span>
                  </p>
                </div>
                <div className="book-footer flex justify-between items-center mt-4">
                  <span className="book-rating text-xs flex items-center font-medium text-gray-600 dark:text-gray-300"><Star size={12} className="fill-yellow-400 text-yellow-400 mr-1" /> {book.rating}</span>
                  <a href="/pdfs/dummy.pdf" target="_blank" rel="noopener noreferrer" className="download-btn text-xs bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/40 dark:text-indigo-300 dark:hover:bg-indigo-900/60 px-4 py-2 rounded-xl flex items-center font-bold transition-all shadow-sm hover:shadow">
                    <Download size={14} className="mr-1" /> Open {book.type}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
