import './TechSpecs.scss';

export const TechSpecs = () => (
  <article className="Specifications">
    <h3 className="Specifications__title">Tech specs</h3>
    <ul className="Specifications__details">
      <li className="Specifications__details--info">
        <p>Screen</p>
        <p className="Specifications__details--value">6.5” OLED</p>
      </li>

      <li className="Specifications__details--info">
        <p>Resolution</p>
        <p className="Specifications__details--value">Apple A12 Bionic</p>
      </li>

      <li className="Specifications__details--info">
        <p>Processor</p>
        <p className="Specifications__details--value">2688x1242</p>
      </li>

      <li className="Specifications__details--info">
        <p>RAM</p>
        <p className="Specifications__details--value">3 GB</p>
      </li>

      <li className="Specifications__details--info">
        <p>Built in memory</p>
        <p className="Specifications__details--value">64 GB</p>
      </li>

      <li className="Specifications__details--info">
        <p>Camera</p>
        <p className="Specifications__details--value">
          12 Mp + 12 Mp + 12 Mp (Triple)
        </p>
      </li>

      <li className="Specifications__details--info">
        <p>Zoom</p>
        <p className="Specifications__details--value">Optical, 2x</p>
      </li>

      <li className="Specifications__details--info">
        <p>Cell</p>
        <p className="Specifications__details--value">GSM, LTE, UMTS</p>
      </li>
    </ul>
  </article>
);
