import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-slate-900">
                HUFEISEN <span className="text-blue-600">GROUP</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {['Hizmetler', 'Projeler', 'Kurumsal'].map((item) => (
                <Link key={item} href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wide">
                  {item}
                </Link>
              ))}
              <Link href="#" className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Arka Plan Resmi */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Hufeisen Architecture"
            fill
            className="object-cover"
            priority
          />
          {/* V4 Uyumlu Gradient Overlay */}
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        {/* İçerik */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-sm font-semibold mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            Geleceği İnşa Ediyoruz
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            Mükemmeliyetin <br/>
            {/* V4 Düzeltmesi: bg-gradient-to-r yerine bg-linear-to-r */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-300">
              Mimari Hali
            </span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Global mühendislik standartlarını estetik tasarımla buluşturuyoruz. 
            Güvenli, sürdürülebilir ve ikonik yapılar.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-transform hover:scale-105 shadow-xl">
              Projelerimizi İnceleyin
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-transform hover:scale-105">
              Hizmetlerimiz
            </button>
          </div>
        </div>
      </section>

      {/* --- İSTATİSTİKLER --- */}
      <section className="relative z-20 -mt-20 mx-4 md:mx-auto max-w-6xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "15+", text: "Yıllık Tecrübe" },
            { num: "200+", text: "Proje" },
            { num: "50+", text: "Mühendis" },
            { num: "%100", text: "Memnuniyet" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-4xl font-black text-slate-900">{stat.num}</div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">{stat.text}</div>
            </div>
          ))}
        </div>
      </section>
    {/* --- HİZMETLER BÖLÜMÜ --- */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Uzmanlık Alanlarımız</h2>
      <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
        Bütüncül Mühendislik ve Tasarım
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Mimari Tasarım",
          desc: "Estetik ve fonksiyonelliği birleştiren, sürdürülebilir yaşam alanları tasarlıyoruz.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool"><path d="M15.707 4.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L14 14l-5 1 1-5z"/><path d="m18 10 3 3-2 2-3-3"/><path d="m9 15-5 5"/><path d="m11 13-4 4"/></svg>
        },
        {
          title: "Statik Proje & Mühendislik",
          desc: "En karmaşık yapıları en güvenli mühendislik çözümleriyle hayata geçiriyoruz.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shovels"><path d="M2 22v-5l5-5 5 5-5 5z"/><path d="M9.5 14.5L16 8"/><path d="m17 2 5 5-5 5-5-5z"/><path d="m11 13 5-5"/></svg>
        },
        {
          title: "İnşaat Yönetimi",
          desc: "Planlamadan anahtar teslime, tüm yapım sürecini titizlikle yönetiyoruz.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hard-hat"><path d="M2 12a10 10 0 1 1 20 0H2Z"/><path d="M12 2v10"/><path d="M12 7H7"/><path d="m12 7 5 1.5"/></svg>
        }
      ].map((service, i) => (
        <div key={i} className="group p-10 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-default">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-blue-200">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed font-medium">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    {/* --- İLETİŞİM BÖLÜMÜ --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sol: Metin Alanı */}
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Bizimle İletişime Geçin</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                Bir Sonraki Projenizi <br /> Birlikte Tasarlayalım
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hufeisen Group uzmanlığıyla projelerinize değer katıyoruz. 
                Soru ve talepleriniz için form doldurabilir veya doğrudan bize ulaşabilirsiniz.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 font-bold italic text-xl">H</div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase">Email</p>
                    <p className="text-slate-900 font-semibold">info@hufeisengroup.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ: İletişim Formu */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Adınız</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="Kaya..." />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">E-posta</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none" placeholder="ornek@mail.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Mesajınız</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none" placeholder="Projenizden bahsedin..."></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (ALT BİLGİ) --- */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold tracking-tighter">
                HUFEISEN <span className="text-blue-400">GROUP</span>
              </span>
              <p className="mt-6 text-slate-400 max-w-sm leading-relaxed">
                Mühendislik, Mimarlık ve İnşaat sektörlerinde küresel standartları belirleyen, 
                yenilikçi çözümler üreten teknoloji odaklı bir yapı grubudur.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Hızlı Menü</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Hizmetlerimiz</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Projeler</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Kurumsal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Yasal</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Gizlilik Politikası</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Kullanım Şartları</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>© 2026 Hufeisen Group. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}