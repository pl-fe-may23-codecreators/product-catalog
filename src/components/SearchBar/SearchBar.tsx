import { useState, useRef, useEffect } from 'react';
import searchIcon from '../../images/search.svg';
import type { Phone } from '../../types/PhoneTypes';
import './SearchBar.scss';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchData } from '../../services/dataService';

export const SearchBar: React.FC<{ data: Phone[] }> = ({ data }) => {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState<Phone[]>([]);
  const [, setIsLoading] = useState<boolean>(true);
  const [wordEntered, setWordEntered] = useState<string>('');
  const { phoneId } = useParams();

  useEffect(() => {
    if (phoneId) {
      fetchData(`/product/${phoneId}`)
        .then((fetchedData) => {
          if (fetchedData && fetchedData.length > 0) {
            setFilteredData(fetchedData[0]);
          } else {
            setFilteredData([]);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [phoneId]);

  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);
  window.addEventListener('load', () => inputRef.current?.focus());

  const handleFilter = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const searchWord: string = target.value.toLowerCase();
    setWordEntered(searchWord);

    const newFilter: Phone[] = data.filter(
      ({ name, itemId = '' }): boolean =>
        name.toLowerCase().includes(searchWord) ||
        itemId.toLowerCase().includes(searchWord),
    );

    setFilteredData(newFilter);
  };

  return (
    <div className="search-container">
      <div className="Search">
        <div className="Search__input">
          <img className="searchIcon" src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={wordEntered}
            onChange={handleFilter}
            ref={inputRef}
          />
        </div>
        {wordEntered !== '' && filteredData.length === 0 && (
          <div className="Search__results">
            <p className="Serch__no-results">No results</p>
          </div>
        )}
        {wordEntered !== '' && filteredData.length !== 0 && (
          <div className="Search__results">
            {filteredData.map(({ phoneId, name }, key) => (
              <Link
                to={`/phones/${phoneId}`}
                key={key}
                rel="noopener noreferrer"
                onClick={() => {
                  navigate(`/phones/${phoneId}`);
                  setWordEntered('');
                }}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
