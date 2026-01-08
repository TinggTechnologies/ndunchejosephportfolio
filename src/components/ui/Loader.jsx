import './Loader.css';

export default function Loader() {
  const name = "NDUNCHE JOSEPH";
  const letters = name.split('');

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-name">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`loader-letter ${letter === ' ' ? 'space' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
        <div className="loader-subtitle">SOFTWARE ENGINEER</div>
        <div className="loader-spinner">
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
        </div>
      </div>
    </div>
  );
}

