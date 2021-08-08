import React, { useState, useEffect } from 'react'
import { List, Title, LoaderWrap } from './ImageGallery.style'
import NewFetchApiImage from '../../services/apiService'
import ImageGalleryItem from '../ImageGalleryItem'
import Button from '../Button'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'

const newFetchApiImage = new NewFetchApiImage()

const Status = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
}

export default function ImageGallery({ searchQuery, onOpenModal }) {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState(Status.idle)
  const [error, setError] = useState('')

  useEffect(() => {
    if (searchQuery === '') {
      return
    }
    setStatus(Status.pending)

    newFetchApiImage
      .fetchApiImage(searchQuery, page)
      .then((images) => {
        setImages((prevState) => [...prevState, ...images.hits])
        setStatus(Status.resolved)
      })
      .catch((error) => {
        setError(error)
        setStatus(Status.rejected)
      })
      .finally(() => {
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
        }
      })
  }, [page, searchQuery])

  const loadsMorePages = (e) => {
    setPage((prevState) => prevState + 1)
    newFetchApiImage.incrementPage()
  }

  if (status === 'idle') {
    return (
      <Title>Find your image, wraith now. Please, write your image query</Title>
    )
  }

  if (status === 'pending') {
    return (
      <LoaderWrap>
        <Loader
          type="Puff"
          color="#1f2527"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </LoaderWrap>
    )
  }

  if (status === 'resolved') {
    return (
      <>
        {images.length === 0 && (
          <Title>Sorry, we didn't find anything of the request!</Title>
        )}
        {images.length > 0 && (
          <List className="ImageGallery">
            {images.map((image) => {
              const { id, webformatURL, tags, largeImageURL } = image
              return (
                <ImageGalleryItem
                  key={id}
                  smallImage={webformatURL}
                  alt={tags}
                  largeImage={largeImageURL}
                  onClick={onOpenModal}
                />
              )
            })}
          </List>
        )}
        {images.length >= 12 && (
          <Button onClick={loadsMorePages}>Load more</Button>
        )}
      </>
    )
  }

  if (status === 'rejected') {
    return (
      <Title data-error-id={error.message}>
        Uh, oh we have a problem: Error 404
      </Title>
    )
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
}
