import { useEffect, useState } from 'react';
import { PhonesList } from '../components/CardList/PhonesList';
import { fetchData } from '../services/dataService';
import { Phone } from '../types/Phone';
import { Pagination } from '../components/Pagination';

const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage] = useState(8);

  useEffect(() => {
    async function loadData() {
      const fetchedPhones = await fetchData({
        page: 1,
        limit: 48,
        sortField: 'price', // price or year
        sortOrder: 'asc', // asc or desc
      });

      if (fetchedPhones) {
        setPhones(fetchedPhones);
      }
    }

    loadData();
  }, []);

  const indexOfLastPhone = currentPage * phonesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
  const currentPhones = phones.slice(indexOfFirstPhone, indexOfLastPhone);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <PhonesList phones={currentPhones} />
      <Pagination
        currentPage={currentPage}
        totalCount={phones.length}
        siblingCount={2}
        pageSize={phonesPerPage}
        onPageChange={paginate}
        className="pagination"
      />
    </>
  );
};

export default PhonesPage;
