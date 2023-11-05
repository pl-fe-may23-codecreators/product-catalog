import './TechSpecs.scss';

interface TechSpecsProps {
  phone: {
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera: string;
    zoom: string;
    cell: string[];
  };
}

export const TechSpecs: React.FC<TechSpecsProps> = ({ phone }) => (
  <article className="Specifications">
    <h3 className="Specifications__title">Tech specs</h3>
    <ul className="Specifications__details">
      <li className="Specifications__details--info">
        <p>Screen</p>
        <p className="Specifications__details--value">{phone.screen}</p>
      </li>
      <li className="Specifications__details--info">
        <p>Resolution</p>
        <p className="Specifications__details--value">{phone.resolution}</p>
      </li>
      <li className="Specifications__details--info">
        <p>Processor</p>
        <p className="Specifications__details--value">{phone.processor}</p>
      </li>
      <li className="Specifications__details--info">
        <p>RAM</p>
        <p className="Specifications__details--value">{phone.ram}</p>
      </li>
      <li className="Specifications__details--info">
        <p>Camera</p>
        <p className="Specifications__details--value">{phone.camera}</p>
      </li>
      <li className="Specifications__details--info">
        <p>Zoom</p>
        <p className="Specifications__details--value">{phone.zoom}</p>
      </li>
      <li className="Specifications__details--info">
        <p>Cell</p>
        <p className="Specifications__details--value">{phone.cell.join(', ')}</p>
      </li>
    </ul>
  </article>
);