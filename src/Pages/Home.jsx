import { Link } from "react-router-dom";
import { products } from "../data/products";
import "./Home.css";

function Home() {
  const featured = [products[0], products[3], products[5]];
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> PERLENGKAPAN, TANPA HARUS MEMBELI</div>
          <h1>Pinjam yang kamu perlu.<br/><em>Kembalikan setelahnya.</em></h1>
          <p>Kamera, audio, dan perlengkapan acara untuk tugas kampus, proyek kreatif, atau kegiatan komunitas.</p>
          <div className="hero-actions"><Link to="/product" className="primary-button">Jelajahi katalog <span>↗</span></Link><span className="hero-note">Pilih barang · Atur tanggal · Selesai</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustrasi perlengkapan rental">
          <div className="art-label label-top">GEAR FOR YOUR NEXT PROJECT</div>
          <div className="gear-card camera-card"><span>📷</span><small>CAMERA</small><strong>01</strong></div>
          <div className="gear-card audio-card"><span>🎙️</span><small>AUDIO</small><strong>02</strong></div>
          <div className="gear-card projector-card"><span>📽️</span><small>DISPLAY</small><strong>03</strong></div>
          <div className="art-stamp">USE<br/>WHAT<br/>YOU NEED.</div>
          <div className="art-label label-bottom">RENTALKAN / EST. 2026</div>
        </div>
      </section>

      <section className="trust-strip"><span>01 / PILIH PERLENGKAPAN</span><span>02 / TENTUKAN TANGGAL</span><span>03 / AMBIL & GUNAKAN</span><span>04 / KEMBALIKAN</span></section>

      <section className="featured-section">
        <div className="section-top"><div><span className="eyebrow">PILIHAN MINGGU INI</span><h2>Sering dibutuhkan.</h2></div><Link to="/product" className="text-link">Lihat semua barang ↗</Link></div>
        <div className="featured-grid">{featured.map((item, i) => <Link to="/rental" state={{ product: item }} className="featured-item" key={item.id}><div className={`featured-visual visual-${i}`}><span>{item.icon}</span><small>0{i + 1}</small></div><div className="featured-info"><div><span>{item.category}</span><h3>{item.name}</h3></div><strong>Rp {item.price.toLocaleString("id-ID")}<small> / hari</small></strong></div></Link>)}</div>
      </section>
      <section className="home-bottom"><div><span className="eyebrow">SEDERHANA SAJA</span><h2>Barangnya dipakai.<br/>Bukan disimpan.</h2></div><p>Butuh perangkat untuk satu hari atau satu akhir pekan? Cek ketersediaan barang dan sesuaikan masa sewa dengan jadwalmu.</p><Link to="/product" className="outline-button">Buka katalog ↗</Link></section>
    </div>
  );
}
export default Home;
