import "./styles.css";
import Header from "../../components/Header";
import CardCar from "../../components/CardCar";

export default function Catalog() {
  return (
    <>
      <Header />
      <div className="dsct-card-car-text">
        <h3>Venha nos visitar</h3>
      </div>
      <main className="dsct-catalog-main">
        <section id="dsct-catalog-section" className="dsct-container">
          <div className="dsct-catalog-cards-container">
            <CardCar />
            <CardCar />
          </div>
        </section>
      </main>
    </>
  );
}
