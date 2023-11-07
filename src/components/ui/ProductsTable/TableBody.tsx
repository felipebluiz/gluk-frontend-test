import { useState } from 'react'
import { Pencil, Trash } from '@phosphor-icons/react'

import { ProductTableSection } from './TableSection'
import { Product, ProductFormValues } from '@/global/types'
import * as masks from '@/utils/masks'

interface ProductTableBodyProps {
  product: Product
  updateProduct: (id: string, product: ProductFormValues) => void
  deleteProduct: (id: string) => void
}

export const ProductTableBody: React.FC<ProductTableBodyProps> = ({
  product,
  updateProduct,
  deleteProduct,
}) => {
  const [isOpen, toggle] = useState(false)

  const handleDelete = (
    e: React.MouseEvent<HTMLElement>,
    productId: string,
  ) => {
    e.stopPropagation()
    deleteProduct(productId)
  }

  return (
    <>
      <tr className={isOpen ? 'highlight' : ''} onClick={() => toggle(!isOpen)}>
        <td>{product.reference}</td>
        <td>{product.description}</td>
        <td>{product.quantity}</td>
        <td>{masks.currencyMask.maskDefault(product.unitPrice)}</td>
        <td>
          <div className="actions">
            <button type="button" onClick={() => toggle(!isOpen)}>
              <Pencil size={20} weight="fill" />
            </button>
            <button type="button" onClick={(e) => handleDelete(e, product.id)}>
              <Trash size={20} weight="fill" />
            </button>
          </div>
        </td>
      </tr>
      {isOpen && (
        <ProductTableSection
          product={product}
          toggle={() => toggle(!isOpen)}
          updateProduct={updateProduct}
        />
      )}
    </>
  )
}
