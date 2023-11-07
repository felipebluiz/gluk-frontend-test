/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react'

import { StyledModal } from './styles'

export interface ModalHandle {
  closeModal: () => void
}

interface ModalProps {
  children: React.ReactNode
  modalIsOpen: boolean
  closeOnClickOutside?: boolean
  setModalIsOpen: (value: boolean) => void
}

export const Modal = forwardRef<ModalHandle, ModalProps>(
  (
    {
      children,
      modalIsOpen,
      closeOnClickOutside = true,
      setModalIsOpen,
      ...props
    },
    ref,
  ) => {
    const [opened, setOpened] = useState(true)
    const modalRef = useRef<HTMLDivElement>(null)

    const closeModal = () => {
      setOpened(false)
      setTimeout(() => {
        setModalIsOpen(false)

        document.documentElement.classList.remove('modal-open')
        document.body.style.removeProperty('overflow-y')
      }, 200)
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      if (modalRef.current && !modalRef.current?.contains(target)) {
        closeModal()
      }
    }

    useEffect(() => {
      if (closeOnClickOutside) {
        document.addEventListener('mousedown', handleClickOutside)

        return () =>
          document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    useEffect(() => {
      if (modalIsOpen) {
        setOpened(true)

        document.documentElement.classList.add('modal-open')
        document.body.style.overflowY = 'hidden'
      }
    }, [modalIsOpen])

    useImperativeHandle(ref, () => {
      return {
        closeModal,
      }
    })

    return (
      <StyledModal opened={opened.toString()} {...props}>
        <div ref={modalRef} className="modal-container">
          {children}
        </div>
      </StyledModal>
    )
  },
)
