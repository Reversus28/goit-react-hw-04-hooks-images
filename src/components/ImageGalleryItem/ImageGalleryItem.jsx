import React from 'react'
import { Item, Img } from './ImageGalleryItem.style'
import PropTypes from 'prop-types'

function ImageGalleryItem({ smallImage, alt, onClick, largeImage }) {
  return (
    <Item className="ImageGalleryItem" onClick={onClick}>
      <Img
        src={smallImage}
        alt={alt}
        data-image={largeImage}
        className="ImageGalleryItem-image"
      />
    </Item>
  )
}

export default ImageGalleryItem

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
