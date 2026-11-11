import { Link } from "react-router-dom";
import "./Rental.css";
function MyRentals() {
  const rentals = JSON.parse(localStorage.getItem("rentspaceRentals") || "[]").slice().reverse();
  return <div className="history-page"><div className="history-heading"><span className="eyebrow">CATATAN PENYEWAAN</span><h1>Pesanan <em>saya.</em></h1><p>Riwayat permintaan sewa yang tersimpan di perangkat ini.</p></div>{rentals.length === 0 ? <div className="history-empty"><span>▤</span><h2>Belum ada pesanan.</h2><p>Barang yang kamu sewa akan muncul di halaman ini.</p><Link to="/product" className="primary-button">Lihat katalog ↗</Link></div> : <div className="history-list">{rentals.map((item) => <article className="history-card" key={item.id}><div className="history-icon">{item.icon}</div><div className="history-main"><span>{item.category} · RK-{String(item.id).slice(-5)}</span><h2>{item.productName}</h2><p>{item.name} <b>·</b> {item.startDate} — {item.endDate}</p></div><div className="history-total"><span>{item.days} hari</span><strong>Rp {item.total.toLocaleString("id-ID")}</strong><small>Permintaan tersimpan</small></div></article>)}</div>}</div>;
}
export default MyRentals;
