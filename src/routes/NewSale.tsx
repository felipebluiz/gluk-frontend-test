import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useForm, Controller } from 'react-hook-form'
import { CheckCircle, PlusCircle } from '@phosphor-icons/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { DatePickerField } from '@/components/ui/DatePickerField'
import { SelectionField } from '@/components/ui/SelectionField'
import { ProductTable } from '@/components/ui/ProductsTable/Table'
import {
  NewProductModal,
  NewProductModalHandle,
} from '@/components/modal/NewProductModal'
import {
  Customer,
  Product,
  ProductFormValues,
  SelectOption,
} from '@/global/types'
import { GET_CUSTOMERS } from '@/graphql/queries'

const statusMock = [
  { value: 'open', label: 'Aberto' },
  { value: 'completed', label: 'Concluído' },
  { value: 'canceled', label: 'Cancelado' },
]

type FormValues = {
  date: Date
  status: SelectOption
  customer: SelectOption
}

type CustomerSelect = SelectOption & Product

const validationSchema = yup.object().shape({
  date: yup.date().required('Campo obrigatório'),
  status: yup.object().shape({
    value: yup.string().required('Campo obrigatório'),
    label: yup.string().required('Campo obrigatório'),
  }),
  customer: yup.object().shape({
    value: yup.string().required('Campo obrigatório'),
    label: yup.string().required('Campo obrigatório'),
  }),
})

export default function NewSale() {
  const newProductModalRef = useRef<NewProductModalHandle>(null)
  const [customers, setCustomers] = useState<CustomerSelect[]>([])
  const [formLoading, setFormLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    shouldFocusError: false,
  })

  const addProduct = (data: Product) => {
    setProducts([...products, data])
  }

  const updateProduct = (id: string, data: ProductFormValues) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...data } : product,
      ),
    )
  }

  const deleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const onSubmit = (data: FormValues) => {
    if (products.length) {
      setFormLoading(true)

      setTimeout(() => {
        console.log({ ...data, products })
        setFormLoading(false)
      }, 2000)
    } else {
      setError('root.random', {
        type: 'random',
        message: 'Você precisa adicionar pelomenos um produto',
      })
    }
  }

  useQuery(GET_CUSTOMERS, {
    onCompleted: (data) => {
      setCustomers(
        data.customers.map((data: Customer) => ({
          value: data.id,
          label: data.socialReason,
        })),
      )
    },
  })

  useEffect(() => {
    document.title = 'Cadastrar Venda - Gluk'
  }, [])

  return (
    <>
      <div className="content-container">
        <Breadcrumb
          pages={[{ url: '/sales', name: 'Vendas' }, { name: 'Cadastro' }]}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <Row xs={1} md={2} lg={6}>
              <Col>
                <label htmlFor="date">
                  <p>
                    Data e horário <span className="required">*</span>
                  </p>
                </label>
                <Controller
                  control={control}
                  name="date"
                  render={({ field: { value, onChange } }) => (
                    <DatePickerField
                      selected={value}
                      onChange={(date: Date) => onChange(date)}
                      error={errors.date && 'true'}
                    />
                  )}
                />
                {errors.date?.message && (
                  <p className="error-message">{errors.date.message}</p>
                )}
              </Col>
              <Col>
                <label htmlFor="status">
                  <p>
                    Status <span className="required">*</span>
                  </p>
                </label>
                <Controller
                  control={control}
                  name="status"
                  render={({ field: { ref, value, onChange } }) => (
                    <SelectionField
                      inputRef={ref}
                      error={errors.status && 'true'}
                      placeholder="Selecione"
                      isSearchable
                      options={statusMock}
                      value={statusMock.find((c) => c.value === value?.value)}
                      onChange={onChange}
                    />
                  )}
                />
                {errors.status?.value?.message && (
                  <p className="error-message">
                    {errors.status.value?.message}
                  </p>
                )}
              </Col>
            </Row>
            <Row md={1} lg={2} style={{ marginTop: '25px' }}>
              <Col>
                <label htmlFor="customer">
                  <p>
                    Cliente <span className="required">*</span>
                  </p>
                </label>
                <Controller
                  control={control}
                  name="customer"
                  render={({ field: { ref, value, onChange } }) => (
                    <SelectionField
                      inputRef={ref}
                      error={errors.customer && 'true'}
                      placeholder="Selecione"
                      options={customers}
                      value={customers?.find((c) => c.value === value?.value)}
                      onChange={onChange}
                    />
                  )}
                />
                {errors.customer?.value?.message && (
                  <p className="error-message">
                    {errors.customer.value?.message}
                  </p>
                )}
              </Col>
            </Row>
            <h2 style={{ margin: '25px 0 15px' }}>Produtos</h2>
            <Button
              variant="primary"
              onClick={() => newProductModalRef.current?.openModal()}
            >
              <PlusCircle size={20} weight="fill" />
              Adicionar Produto
            </Button>
            {!!products.length && (
              <ProductTable
                products={products}
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
              />
            )}
            {errors.root?.random?.message && !products.length && (
              <p className="error-message" style={{ margin: '15px 0 0' }}>
                {errors.root.random.message}
              </p>
            )}
          </Card>
          <div className="buttons-container">
            <Button type="submit" disabled={formLoading} variant="success">
              <div style={formLoading ? { visibility: 'hidden' } : {}}>
                <CheckCircle size={20} weight="fill" />
                Salvar
              </div>
              {formLoading && <Spinner color="light" size="sm" />}
            </Button>
          </div>
        </form>
      </div>
      <NewProductModal
        ref={newProductModalRef}
        addProduct={addProduct}
        products={products.map((product) => product.id)}
      />
    </>
  )
}
