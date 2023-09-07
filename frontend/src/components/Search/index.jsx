import { useState, useEffect } from 'react';
import ItemProduct from '../ItemProduct';
import { Item } from './style';
import useFetch from '../../hooks/useFetch';
import { GET_SEARCH } from '../../api';
import ItemProductSkeleton from '../ItemProductSkeleton';

const Search = () => {
  const [search, setSearch] = useState('');
  const { url, options } = GET_SEARCH(search);
  const { data: produtos, loading, error } = useFetch(url, options);

  return (
    <Item>
      <input
        className="inputFilter"
        value={search}
        placeholder="Pesquisar produtos"
        onChange={({ target }) => setSearch(target.value)}
        type="text"
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{`Error: ${error}`}</p>}
      {produtos && (
        <>
          {produtos.map((product) => (
            <ItemProduct key={product.id} product={product} />
          ))}
        </>
      )}
    </Item>
  );
};

export default Search;
