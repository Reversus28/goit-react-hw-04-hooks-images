import React, { useEffect } from 'react'
import { Overlay, ModalWrapper, Img } from './Modal.style'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root')

export default function Modal({ onClose, modalImage }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const onClickModalClose = (e) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }
  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  return createPortal(
    <Overlay className="Overlay" onClick={onClickModalClose}>
      <ModalWrapper className="Modal">
        <Img src={modalImage} alt="image" />
      </ModalWrapper>
    </Overlay>,
    modalRoot,
  )
}

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}
