import { useEffect, useState, useContext } from 'react'
import  getItems  from '../services/getItems.js'
import { ItemsContext } from '../context/ItemsContext'

const INITIAL_PAGE = 1

export const useItems = () => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [keywordToUse, setKeyword] = useState('');
  const [numberOfPages, setNumberOfPages] = useState(1);
  const { items, setItems } = useContext(ItemsContext)

  const keywordFromStorage = localStorage.getItem('lastKeyword') || ''

  useEffect(() => {
    setLoading(true);
    getItems({ keyword: keywordToUse })
      .then(listOfItems => {
        setItems && setItems([...listOfItems.data]);
        setPage(INITIAL_PAGE);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });  
        setNumberOfPages(listOfItems.pages);
        localStorage.setItem('lastKeyword', keywordToUse);
        setLoading(false);
      })
  }, [keywordToUse])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true);
    getItems({ keyword: keywordFromStorage, page })
      .then(nextItems => {
        setItems(prevItems => prevItems.concat(nextItems.data));
        setLoadingNextPage(false);
      })
  }, [page])

  return { loading, loadingNextPage, items, setPage, numberOfPages, setKeyword, keywordToUse }
}
