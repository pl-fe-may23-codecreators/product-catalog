import './AboutSection.scss';

interface Description {
  title: string;
  text: string[];
}

interface AboutSectionProps {
  description: Description[];
}

export const AboutSection: React.FC<AboutSectionProps> = (props) => (
  <article className="About">
    <h3 className="About__title">About</h3>
    
    {props.description.map((desc, index) => (
      <section key={index}>
        <h4 className="About__info">{desc.title}</h4>
        {desc.text.map((paragraph, pIndex) => (
          <p key={pIndex} className="About__text">{paragraph}</p>
        ))}
      </section>
    ))}
  </article>
);