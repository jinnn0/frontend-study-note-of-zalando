import { useState } from 'react';
import recomendedItems from './recommendedItems';
import './App.scss';

function App() {
  const [isLayoutEnabled, setIsLayoutEnabled] = useState(false);

  const enableLayout = () => {
    setIsLayoutEnabled(!isLayoutEnabled);
  };

  return (
    <>
      <Recommendation isLayoutEnabled={isLayoutEnabled} />
      <button className="enable-layout-btn" onClick={enableLayout}>
        Enable layouts
      </button>
    </>
  );
}

export default App;

function Recommendation({ isLayoutEnabled }) {
  return (
    <section className={`recommendation ${isLayoutEnabled ? 'show-layout' : ''}`}>
      <div className="heading">
        <h2>
          <p>Similar items</p>
          <p>How about these ?</p>
        </h2>

        <a href="./" className="see-more">
          <span>See more →</span>
        </a>
      </div>

      <ul className="carousel">
        {recomendedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

function Item({ item }) {
  return (
    <li>
      <a href="./">
        <div className="image-wrapper">
          <img src={item.image} alt={item.image} />
        </div>

        <div className="item-description">
          <span>{item.brand}</span>
          <span>{item.description}</span>
          <span className="price">{item.price}</span>
        </div>
      </a>
    </li>
  );
}
