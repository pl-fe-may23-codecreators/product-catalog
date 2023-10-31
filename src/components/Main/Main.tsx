const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Pierwszy div */}
      <div className="section section-1">
        <div className="section__content">
          <h1 className="section__title">Welcome to Nice Gadgets store!</h1>
          <div className="section__album">
            <div className="section__button responsive left"></div>{' '}
            {/* Dodaj klasę responsive */}
            <div className="section__image responsive"></div>{' '}
            {/* Dodaj klasę responsive */}
            <div className="section__button responsive right"></div>{' '}
            {/* Dodaj klasę responsive */}
          </div>
        </div>
      </div>

      {/* Drugi div */}
      <div className="section section-2">
        <div className="section__content">
          <h2 className="section__title">Brand new models</h2>
          <div className="section__models">
            {/* Tutaj możesz dodać 4 divy z nowymi modelami obok siebie */}
            <div className="section__model responsive section__model--1"></div>
            <div className="section__model responsive section__model--2"></div>
            <div className="section__model responsive section__model--3"></div>
            <div className="section__model responsive section__model--4"></div>
          </div>
        </div>
      </div>

      {/* Trzeci div */}
      <div className="section section-3">
        <div className="section__content">
          <h2 className="section__title">Shop by category</h2>
          <div className="section__categories">
            {/* Tutaj możesz dodać 3 divy do wyboru kategorii obok siebie */}
            <div className="section__category-content">
              <div className="section__image2 responsive"></div>
              <div className="section__text">
                <div className="section__text-line">Text 1</div>
                <div className="section__text-line">Text 2</div>
              </div>
            </div>

            <div className="section__category-content">
              <div className="section__image2 responsive"></div>
              <div className="section__text">
                <div className="section__text-line">Text 1</div>
                <div className="section__text-line">Text 2</div>
              </div>
            </div>

            <div className="section__category-content">
              <div className="section__image2 responsive"></div>
              <div className="section__text">
                <div className="section__text-line">Text 1</div>
                <div className="section__text-line">Text 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Czwarty div */}
      <div className="section section-4">
        <div className="section__content">
          <h2 className="section__title">Hot prices</h2>
          <div className="section__models">
            {/* Tutaj możesz dodać 4 divy z gorącymi cenami obok siebie */}
            <div className="section__model section__model--5"></div>
            <div className="section__model section__model--6"></div>
            <div className="section__model section__model--7"></div>
            <div className="section__model section__model--8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
