/* eslint-disable import/no-duplicates */
import { forwardRef, useRef, useImperativeHandle, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useForm, Controller } from 'react-hook-form'
import { Button, Spinner } from 'react-bootstrap'
import { CheckCircle, XCircle } from '@phosphor-icons/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Modal, ModalHandle } from '@/components/ui/Modal'
import { SelectionField } from '@/components/ui/SelectionField'
import { Product, SelectOption } from '@/global/types'
import { GET_PRODUCTS } from '@/graphql/queries'

import { Container } from './styles'

export type NewProductModalHandle = {
  openModal: () => void
}

export type NewProductModalProps = {
  addProduct: (product: Product) => void
  products: string[]
}

type FormValues = {
  product: ProductSelect
}

type ProductSelect = SelectOption & Product

const validationSchema = yup.object().shape({
  product: yup.object().shape({
    value: yup.string().required('Campo obrigatório'),
    label: yup.string().required('Campo obrigatório'),
    id: yup.string().required('Campo obrigatório'),
    reference: yup.string().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório'),
    quantity: yup.number().required('Campo obrigatório'),
    unitPrice: yup.number().required('Campo obrigatório'),
  }),
})

export const NewProductModal = forwardRef<
  NewProductModalHandle,
  NewProductModalProps
>(({ addProduct, products: _products }, ref) => {
  const modalRef = useRef<ModalHandle>(null)
  const [products, setProducts] = useState<ProductSelect[]>([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    shouldFocusError: false,
  })

  const onSubmit = ({ product }: FormValues) => {
    setLoading(true)

    setTimeout(() => {
      addProduct({
        id: product.id,
        reference: product.reference,
        description: product.description,
        quantity: 1,
        unitPrice: product.unitPrice,
      })
      setLoading(false)
      modalRef.current?.closeModal()
    }, 1000)
  }

  useQuery(GET_PRODUCTS, {
    onCompleted: ({ products }) => {
      setProducts(
        products.map((data: Product) => ({
          ...data,
          value: data.id,
          label: data.description,
        })),
      )
    },
  })

  useImperativeHandle(ref, () => ({
    openModal() {
      reset()
      setModalIsOpen(true)
    },
  }))

  if (!modalIsOpen) return null

  const filteredProducts = products.filter(({ id }) => !_products.includes(id))

  return (
    <Modal
      ref={modalRef}
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
    >
      <Container>
        <header className="header-container">
          <h2>Adicionar Produto</h2>
          <Button
            variant="secondary"
            className="rounded-circle"
            onClick={() => modalRef.current?.closeModal()}
          >
            <XCircle size={22} weight="fill" />
          </Button>
        </header>
        <div className="content-container">
          <form>
            <label htmlFor="product">
              <p>
                Produto <span className="required">*</span>
              </p>
            </label>
            <Controller
              control={control}
              name="product"
              render={({ field: { ref, value, onChange } }) => (
                <SelectionField
                  inputRef={ref}
                  error={errors.product && 'true'}
                  placeholder="Selecione"
                  isSearchable
                  options={filteredProducts}
                  value={filteredProducts.find((c) => c.value === value?.value)}
                  onChange={onChange}
                />
              )}
            />
            {errors.product?.value?.message && (
              <p className="error-message">{errors.product.value?.message}</p>
            )}
          </form>
        </div>
        <footer className="footer-container">
          <Button
            type="submit"
            disabled={loading}
            variant="success"
            onClick={handleSubmit(onSubmit)}
          >
            <div style={loading ? { visibility: 'hidden' } : {}}>
              <CheckCircle size={20} weight="fill" />
              Salvar
            </div>
            {loading && <Spinner color="light" size="sm" />}
          </Button>
        </footer>
      </Container>
    </Modal>
  )
})
