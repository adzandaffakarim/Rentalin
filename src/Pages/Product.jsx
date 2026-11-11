import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import "./Product.css";

const categories = ["Semua", ...new Set(products.map((p) => p.category))];
function Product() {
  const [category, setCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => products.filter((p) => (category === "Semua" || p.category === category) && `${p.name} ${p.description}`.toLowerCase().includes(search.toLowerCase())), [category, search]);
  return <div className="product-page">
    <div className="catalog-heading"><div><span className="eyebrow">KATALOG PERLENGKAPAN</span><h1>Temukan alat yang<br/><em>pas untuk kebutuhanmu.</em></h1></div><p>Daftar barang yang tersedia untuk disewa. Harga dihitung per hari.</p></div>
    <div className="catalog-toolbar"><div className="category-tabs">{categories.map((c) => <button key={c} className={category === c ? "selected" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="search-box"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari perlengkapan..." /></label></div>
    <div className="catalog-count">MENAMPILKAN {filtered.length} BARANG <span>•</span> HARGA DALAM RUPIAH</div>
    {filtered.length ? <div className="product-grid">{filtered.map((product, i) => <article className="product-card" key={product.id}><div className={`product-visual product-tone-${i % 4}`}><span className="product-number">RK / {String(product.id).padStart(2, "0")}</span>{product.tag && <span className="product-tag">{product.tag}</span>}<span className="product-emoji">{product.icon}</span><span className="visual-caption">{product.category.toUpperCase()}</span></div><div className="product-details"><span className="product-category">{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><div className="product-bottom"><div><strong>Rp {product.price.toLocaleString("id-ID")}</strong><small>/ hari</small><small className="stock-note">{product.stock} unit tersedia</small></div><Link to="/rental" state={{ product }} aria-label={`Sewa ${product.name}`}>Sewa <span>↗</span></Link></div></div></article>)}</div> : <div className="empty-results"><strong>Barang tidak ditemukan.</strong><p>Coba kata kunci atau kategori lain.</p><button onClick={() => {setSearch(""); setCategory("Semua");}}>Reset filter</button></div>}
  </div>;
}
export default Product;
