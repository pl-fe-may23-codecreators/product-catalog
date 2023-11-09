import { useEffect, useState } from 'react';
import { PhonesList } from '../components/CardList/PhonesList';
import { fetchData } from '../services/dataService';
import { Phone } from '../types/PhoneTypes';
import { Pagination } from '../components/Pagination';
import { PhonesLayout } from '../components/PhonesLayout';
import { useSearchParams } from 'react-router-dom';

const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(8);
  const [searchParams] = useSearchParams();
  const sortField = searchParams.get('sort');
  const sortOrder= searchParams.get('order');

  useEffect(() => {
    async function loadData() {
      const fetchedPhones = await fetchData('/products', {
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
  }, [currentPage, phonesPerPage, sortField, sortOrder]);

  const total = 71;

  const handlePageSwitch = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="container">
        <PhonesLayout
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
