import "./styles.css";
import Header from "../../components/Header";
import CardCar from "../../components/CardCar";
import CardComments from "../../components/CardComments";

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
        <section id="dsct-catalog-section-comments">
          <div className="dsct-container">
            <div className="dsct-comments-car-text">
              <h3>O que estão dizendo</h3>
            </div>
            <div className="dsct-catalog-cards-container">
              <CardComments />
              <CardComments />
              <CardComments />
              <CardComments />
              <CardComments />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
