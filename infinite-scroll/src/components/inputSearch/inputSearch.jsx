import React from 'react';
import { useForm } from '../../hooks'
import './inputSearch.css'

export const InputSearch = ({ action, placeholder = 'Buscar por titulo' }) => {

  const { searchText, onInputChange } = useForm({ searchText: '' })

  const formatInputValue = (inputValue) => {
    return inputValue.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
  }

  const onSearchSubmit = (event) => {
    event.preventDefault();
    action(formatInputValue(searchText));
  }

  return (
    <form onSubmit={onSearchSubmit} className='form-padding' aria-label="form">
      <input
        type='Text'
        placeholder={placeholder}
        name='searchText'
        autoComplete='off'
        className='input-search-button input-search'
        value={searchText}
        onChange={onInputChange}>
      </input>
      <button className='input-search-button input-button'>
        <i className="fas fa-search search__icon" id="icon"></i>
      </button>
    </form>
  )
}
