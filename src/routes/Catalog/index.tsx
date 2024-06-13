import "./styles.css";
import Header from "../../components/Header";
import Description from "../../components/Description";
import CardCar from "../../components/CardCar";

export default function Catalog() {
  return (
    <>
      <Header />
      <main className="dsct-catalog-main">
        <section id="dsct-catalog-section" className="dsct-container">
          <div className="dsct-description-container">
            <Description />
          </div>
          <div className="dsct-cards-container">
            <CardCar />
          </div>
        </section>
      </main>
    </>
  );
}
