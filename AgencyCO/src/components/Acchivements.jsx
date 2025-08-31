import "../App.css";
import Counter from "./Counter";

function Acchivements() {
  return (
    <div className="acchivements_container ">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="acchive_counter">
          <Counter target={2350} />
          <p>Happy Clients</p>
        </div>
        <div className="acchive_counter">
          <Counter target={2161} />
          <p>App Download</p>
        </div>
        <div className="acchive_counter">
          <Counter target={1781} />
          <p>Total Rates</p>
        </div>
        <div className="acchive_counter">
          <Counter target={2134} />
          <p>Awards Win</p>
        </div>
      </div>
    </div>
  );
}

export default Acchivements;
