import { useEffect, useState } from 'react';
import { PhonesList } from '../components/CardList/PhonesList';
import { fetchData } from '../services/dataService';
import { Phone } from '../types/PhoneTypes';
import { Pagination } from '../components/Pagination';

const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage] = useState(8);

  useEffect(() => {
    async function loadData() {
      const fetchedPhones = await fetchData({
        page: currentPage,
        limit: phonesPerPage,
        sortField: 'price',
        sortOrder: 'asc',
      });

      if (fetchedPhones) {
        setPhones(fetchedPhones);
      }
    }

    loadData();
  }, [currentPage, phonesPerPage]);

  const total = 71;

  const handlePageSwitch = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container">
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
