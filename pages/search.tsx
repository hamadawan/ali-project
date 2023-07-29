import * as React from 'react';
import Header from '@/components/Header';
import FilterChip from '@/components/FilterChip';
import { useRouter } from 'next/router';
import InfoCard from '@/components/InfoCard';
import Footer from '@/components/Footer';
import { isPresent } from '@/utils/isPresent';
import { PuentifyApi } from '@/lib/puentifyApi';

const Search = (props: any) => {
  const { products } = props;
  const router = useRouter();
  const { query } = router.query;
  const [activeFilters, setFilter] = React.useState({});
  const toggleFilter = (id: string) => {
    setFilter({ ...activeFilters, [id]: !activeFilters[id] });
  };

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="w-90 min-h-screen  m-auto">
          <h1 className="text-3xl font-semibold mt-2 mb-2">
            Search Results for {query}
          </h1>
          <div className="hidden lg:inline-flex">
            <FilterChip
              active={activeFilters.all}
              id="all"
              title="All"
              onClick={toggleFilter}
            />
            <FilterChip
              active={activeFilters.customizable}
              id="customizable"
              title="Customizable"
              onClick={toggleFilter}
            />
            <FilterChip
              active={activeFilters['ready-to-ship']}
              id="ready-to-ship"
              title="Ready to Ship"
              onClick={toggleFilter}
            />
            <FilterChip
              active={activeFilters.verified}
              id="verified"
              title="Verified Only"
              onClick={toggleFilter}
            />
          </div>
          {!isPresent(products) && (
            <div className="m-8">
              No products found. Try searching for other products
            </div>
          )}
          {products.map((product) => (
            <InfoCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              thumbnail={product.thumbnail}
              category={product.category}
              manufacturer={product.brand}
              url={`/products/${product.id}`}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const { query } = context?.query;
  const products = await PuentifyApi.search(query);

  return {
    props: {
      products: products ?? [],
    },
  };
}
