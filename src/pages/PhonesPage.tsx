import { useEffect, useState } from 'react';
import { PhonesList } from '../components/CardList/PhonesList';
import { fetchData } from '../services/dataService';
import { Phone } from '../types/PhoneTypes';
import { Pagination } from '../components/Pagination';
import { PhonesLayout } from '../components/PhonesLayout';

const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(8);
  const [sortBy, setSortBy] = useState('price-asc');

  useEffect(() => {
    async function loadData() {
      const sortField = sortBy.split('-')[0];
      const sortOrder = sortBy.split('-')[1];

      const fetchedPhones = await fetchData({
        page: currentPage,
        limit: phonesPerPage,
        sortField,
        sortOrder,
      });

      if (fetchedPhones) {
        setPhones(fetchedPhones);
      }
    }

    loadData();
  }, [currentPage, phonesPerPage, sortBy]);

  const total = 71;

  const handlePageSwitch = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container">
        <PhonesLayout
          sortBy={sortBy}
          setSortBy={setSortBy}
          productsPerPage={phonesPerPage}
          setProductsPerPage={setPhonesPerPage}
        />
        <PhonesList phones={phones} />
        <Pagination
          onPageChange={handlePageSwitch}
          totalCount={total}
          pageSize={phonesPerPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default PhonesPage;
