import { Col, Row, Table } from 'react-bootstrap'

import { ProductTableBody } from './TableBody'
import { Product, ProductFormValues } from '@/global/types'
import * as masks from '@/utils/masks'
import { calculateSum } from '@/utils/calculateSum'

import { Container } from './styles'

interface ProductTableProps {
  products: Product[]
  updateProduct: (id: string, product: ProductFormValues) => void
  deleteProduct: (id: string) => void
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  updateProduct,
  deleteProduct,
}) => {
  const productsQtd = products.length
  const subtotal = calculateSum(products, 'quantity', 'unitPrice')
  const discount = calculateSum(products, 'discountPrice')
  const subtotalPrice = masks.currencyMask.maskDefault(subtotal)
  const discountPrice = masks.currencyMask.maskDefault(discount)
  const totalPrice = masks.currencyMask.maskDefault(subtotal - discount)

  return (
    <Container>
      <Table hover responsive striped>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Qtd.</th>
            <th>Valor Unit.</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductTableBody
              key={product.id}
              product={product}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          ))}
        </tbody>
      </Table>
      <div className="subtotals-container">
        <Row xs="auto">
          <Col>
            <p>Qtd. produtos</p>
            <h3>{productsQtd}</h3>
          </Col>
          <Col>
            <p>Subtotal</p>
            <h3>{subtotalPrice}</h3>
          </Col>
          <Col>
            <p>Total desconto</p>
            <h3>{discountPrice}</h3>
          </Col>
          <Col>
            <p>Total venda</p>
            <h3>{totalPrice}</h3>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
