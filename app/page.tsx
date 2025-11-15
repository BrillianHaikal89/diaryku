'use client';

import Navbar from './components/navbar';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-indigo-50 font-sans dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section - Beranda */}
        <section id="beranda" className="max-w-6xl mx-auto py-16 px-4 sm:px-8 pt-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-6">
                Catatan <span className="text-rose-500">Perjalanan Hidupku</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Sebuah koleksi kenangan, cerita, dan momen berharga yang telah aku jalani. 
                Setiap tulisan adalah jejak perjalanan yang ingin kukenang selamanya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('cerita')}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full transition-colors font-medium text-center"
                >
                  Jelajahi Cerita
                </button>
                <button 
                  onClick={() => scrollToSection('galeri')}
                  className="border border-gray-300 hover:border-rose-500 text-gray-700 dark:text-gray-300 dark:border-gray-600 px-6 py-3 rounded-full transition-colors font-medium text-center"
                >
                  Lihat Galeri Foto
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                {/* Menggunakan foto tempat jersey yang sudah ada */}
                <img 
                  src="/ceritaJerseyAC/foto_tempatjersey.jpg" 
                  alt="Arsip Kenangan Digital"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-white text-lg font-medium backdrop-blur-sm bg-black/30 px-4 py-2 rounded-lg">Arsip Kenangan Digital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Stories */}
        <section id="cerita" className="max-w-6xl mx-auto py-16 px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Cerita Terbaru</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Beberapa tulisan terbaru dari perjalananku
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 - Pendakian Upas Hill */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/ceritaUpas/foto_upas.jpg" 
                  alt="Pendakian ke Upas Hill via Sukawana"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Petualangan
                </div>
                <div className="absolute top-4 right-4 text-white text-sm bg-black/60 px-2 py-1 rounded">
                  18 April 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Trekking ke Upas Hill via Sukawana</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  Perjalanan menakjubkan menuju Upas Hill melalui jalur Sukawana. Dinginnya udara pagi, kabut yang menyelimuti bukit, dan pemandangan sunrise yang memukau membuat semua lelah terbayar lunas...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">10 menit baca</span>
                  <button className="text-rose-500 hover:text-rose-600 text-sm font-medium">Baca Cerita</button>
                </div>
              </div>
            </div>

            {/* Story 2 - Happy Anniversary 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/ceritaJerseyAC/foto_jerseyac2.jpg" 
                  alt="Happy Anniversary 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Anniversary
                </div>
                <div className="absolute top-4 right-4 text-white text-sm bg-black/60 px-2 py-1 rounded">
                  7 Februari 2025
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Happy Anniversary 3</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  Tiga tahun penuh kebahagiaan bersama. Setiap momen bersamamu adalah cerita indah yang ingin selalu kukenang. Terima kasih untuk semua cinta dan kebahagiaan...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">3 tahun bersama</span>
                  <button className="text-rose-500 hover:text-rose-600 text-sm font-medium">Baca Cerita</button>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 relative">
                <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Refleksi
                </div>
                <div className="absolute top-4 right-4 text-white text-sm bg-black/20 px-2 py-1 rounded">
                  12 Des 2024
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Belajar Menerima Proses</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  Setiap tahapan hidup mengajarkanku sesuatu yang berharga. Hari ini aku memahami bahwa tidak semua hal harus berjalan sesuai rencana...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">8 menit baca</span>
                  <button className="text-rose-500 hover:text-rose-600 text-sm font-medium">Baca Cerita</button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('cerita')}
              className="inline-block border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white px-6 py-3 rounded-full transition-colors font-medium"
            >
              Lihat Semua Cerita
            </button>
          </div>
        </section>

        {/* Categories */}
        <section id="galeri" className="max-w-6xl mx-auto py-16 px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Kategori Cerita</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Jelajahi cerita berdasarkan tema dan kategori
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <button className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Perjalanan</h3>
              <p className="text-sm text-gray-500 mt-1">13 cerita</p>
            </button>

            <button className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Refleksi</h3>
              <p className="text-sm text-gray-500 mt-1">8 cerita</p>
            </button>

            <button className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Keluarga</h3>
              <p className="text-sm text-gray-500 mt-1">15 cerita</p>
            </button>

            <button className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white">Hobi</h3>
              <p className="text-sm text-gray-500 mt-1">10 cerita</p>
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-rose-500 mb-2">49</div>
                <div className="text-gray-600 dark:text-gray-300">Total Cerita</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-500 mb-2">128</div>
                <div className="text-gray-600 dark:text-gray-300">Foto Kenangan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-500 mb-2">4</div>
                <div className="text-gray-600 dark:text-gray-300">Kategori</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-500 mb-2">2</div>
                <div className="text-gray-600 dark:text-gray-300">Tahun Menulis</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="tentang" className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Tentang Diaryku</h2>
            <p className="text-rose-100 mb-6 text-lg leading-relaxed">
              Diaryku adalah ruang pribadi tempat aku menyimpan semua kenangan berharga, cerita perjalanan hidup, 
              dan momen-momen spesial yang ingin kukenang selamanya. Setiap tulisan adalah bagian dari perjalanan 
              yang membentuk diriku menjadi seperti sekarang.
            </p>
            <p className="text-rose-100 text-lg leading-relaxed">
              Melalui website ini, aku ingin melestarikan semua kenangan indah, pelajaran hidup, dan cerita-cerita 
              kecil yang mungkin terlupakan seiring berjalannya waktu.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={scrollToTop}
                className="bg-white text-rose-500 hover:bg-rose-50 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Kembali ke Atas
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-rose-500 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Diaryku</h2>
              </div>
              <div className="flex gap-6 text-sm">
                <button
                  onClick={() => scrollToSection('tentang')}
                  className="text-gray-600 hover:text-rose-500 dark:text-gray-300 transition-colors"
                >
                  Tentang
                </button>
                <button
                  onClick={scrollToTop}
                  className="text-gray-600 hover:text-rose-500 dark:text-gray-300 transition-colors"
                >
                  Beranda
                </button>
              </div>
            </div>
            <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
              <p>© 2024 Diaryku. Semua cerita adalah kenangan pribadi.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}