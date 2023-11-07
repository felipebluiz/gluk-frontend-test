import { useEffect, useState } from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CheckCircle } from '@phosphor-icons/react'
import * as yup from 'yup'
import * as masks from '@/utils/masks'

import { TextField } from '@/components/ui/TextField'
import { lengthCheck, blockInvalidChar } from '@/utils/numberField'
import { Product, ProductFormValues } from '@/global/types'

interface ProductTableSectionProps {
  product: Product
  toggle: () => void
  updateProduct: (id: string, product: ProductFormValues) => void
}

const validationSchema = yup.object().shape({
  quantity: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required('Campo obrigatório')
    .moreThan(0, 'A quantidade deve ser maior que zero'),
  unitPrice: yup
    .number()
    .required()
    .moreThan(0, 'Campo obrigatório')
    .transform((_, originalValue) =>
      masks.currencyMask.transform(originalValue),
    ),
  discountPrice: yup
    .number()
    .min(0, 'O valor de desconto não pode ser menor que zero')
    .transform((_, originalValue) =>
      masks.currencyMask.transform(originalValue),
    ),
  totalPrice: yup
    .number()
    .required('Campo obrigatório')
    .min(0, 'O valor total não pode ser menor que zero')
    .transform((_, originalValue) =>
      masks.currencyMask.transform(originalValue.toString()),
    ),
})

export const ProductTableSection: React.FC<ProductTableSectionProps> = ({
  product,
  toggle,
  updateProduct,
}) => {
  const [formLoading, setFormLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProductFormValues>({
    defaultValues: {
      quantity: product.quantity,
      unitPrice: masks.currencyMask.maskDefault(product.unitPrice),
      discountPrice: masks.currencyMask.maskDefault(product.discountPrice || 0),
      totalPrice: masks.currencyMask.maskDefault(
        product.unitPrice * product.quantity - (product.discountPrice || 0),
      ),
    },
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data: ProductFormValues) => {
    setFormLoading(true)

    setTimeout(() => {
      updateProduct(product.id, data)
      setFormLoading(false)
      toggle()
    }, 1000)
  }

  useEffect(() => {
    const subscription = watch((_, { name }) => {
      if (
        name === 'quantity' ||
        name === 'unitPrice' ||
        name === 'discountPrice'
      ) {
        const quantity = watch('quantity') || 0
        const unitPrice = watch('unitPrice') || '0'
        const discountPrice = watch('discountPrice') || '0'
        const totalPrice =
          masks.currencyMask.transform(unitPrice) * quantity -
          masks.currencyMask.transform(discountPrice)

        setValue('totalPrice', masks.currencyMask.maskDefault(totalPrice))
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, setValue])

  return (
    <tr className="content">
      <td colSpan={5}>
        <div className="table-content">
          <Row xs={1} md={2} lg={4}>
            <Col>
              <label htmlFor="quantity">
                <p>
                  Quantidade <span className="required">*</span>
                </p>
              </label>
              <TextField.Root error={errors.quantity && 'true'}>
                <TextField.Input
                  {...register('quantity')}
                  type="number"
                  maxLength={10}
                  onInput={lengthCheck}
                  onKeyDown={blockInvalidChar}
                />
              </TextField.Root>
              {errors.quantity?.message && (
                <p className="error-message">{errors.quantity.message}</p>
              )}
            </Col>
            <Col>
              <label htmlFor="unitPrice">
                <p>
                  Valor unitário <span className="required">*</span>
                </p>
              </label>
              <TextField.Root error={errors.unitPrice && 'true'}>
                <TextField.Input
                  {...register('unitPrice', {
                    onChange: masks.currencyMask.onChange,
                  })}
                  type="text"
                />
              </TextField.Root>
              {errors.unitPrice?.message && (
                <p className="error-message">{errors.unitPrice.message}</p>
              )}
            </Col>
            <Col>
              <label htmlFor="discountPrice">
                <p>Valor de desconto</p>
              </label>
              <TextField.Root error={errors.discountPrice && 'true'}>
                <TextField.Input
                  {...register('discountPrice', {
                    onChange: masks.currencyMask.onChange,
                  })}
                  type="text"
                />
              </TextField.Root>
              {errors.discountPrice?.message && (
                <p className="error-message">{errors.discountPrice.message}</p>
              )}
            </Col>
            <Col>
              <label htmlFor="totalPrice">
                <p>
                  Valor total <span className="required">*</span>
                </p>
              </label>
              <TextField.Root error={errors.totalPrice && 'true'}>
                <TextField.Input
                  {...register('totalPrice', {
                    onChange: masks.currencyMask.onChange,
                  })}
                  disabled
                  type="text"
                />
              </TextField.Root>
              {errors.totalPrice?.message && (
                <p className="error-message">{errors.totalPrice.message}</p>
              )}
            </Col>
          </Row>
          <div className="buttons-container">
            <Button
              disabled={formLoading}
              variant="success"
              size="sm"
              onClick={handleSubmit(onSubmit)}
            >
              <div style={formLoading ? { visibility: 'hidden' } : {}}>
                <CheckCircle size={20} weight="fill" />
                Salvar
              </div>
              {formLoading && <Spinner color="light" size="sm" />}
            </Button>
          </div>
        </div>
      </td>
    </tr>
  )
}
