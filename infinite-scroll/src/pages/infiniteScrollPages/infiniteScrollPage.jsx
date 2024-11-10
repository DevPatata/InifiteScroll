import React, { useRef, useEffect } from 'react';
import { useItems, useNearScreen } from '../../hooks';
import { ListOfItems, InputSearch, Spinner } from '../../components';
import './infiniteScroll.css';
import img from '../../assets/patata.webp';
import imgNotFound from '../../assets/404notfound.webp';

export function InfiniteScrollPage() {
  const { loading, items, setPage, numberOfPages, setKeyword, loadingNextPage } = useItems();

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false });

  useEffect(() => {
    if (isNearScreen) setPage(prevPage => { return (numberOfPages > prevPage) ? prevPage + 1 : prevPage });
  }, [isNearScreen]);

  return (
    <>
      <header className='header-position-fixed header-display'>
        <span className='header-span header-span-text'>
          <img src={img} width={'50px'} alt='logo_patata' />
          PatataScroll
        </span>
        <div className='header-input'>
          <InputSearch action={setKeyword} />
        </div>
      </header>
      <main>
        {loading ?
          <div className='div-spinner'>
            <Spinner />
          </div>
          :
          items && items.length > 0 ?
            <>
              <ListOfItems products={items} />
              <div id="visor" ref={externalRef}></div>
            </>
            :
            <>
              <img src={imgNotFound} alt='404_notFound' />
              <h1>Revisar si el server esta levantado en el puerto correcto</h1>
            </>
        }
      </main>
      {loadingNextPage ? <Spinner /> : ''}
    </>
  )
}