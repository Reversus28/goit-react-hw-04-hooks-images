import React, { useState } from 'react'
import { Header, Form, Button, Span, Input } from './Searchbar.style'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase())
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (searchQuery === '') {
      toast.warn('🦄 Enter yor query!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    onSubmit(searchQuery)

    setSearchQuery('')
  }

  return (
    <Header className="Searchbar">
      <Form className="SearchForm" onSubmit={handleFormSubmit}>
        <Button type="submit" className="SearchForm-button">
          <Span className="SearchForm-button-label">Search</Span>
        </Button>

        <Input
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={searchQuery}
        />
      </Form>
    </Header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
