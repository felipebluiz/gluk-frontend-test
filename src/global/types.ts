export type SelectOption = {
  value: string
  label: string
}

export type Product = {
  id: string
  reference: string
  description: string
  quantity: number
  unitPrice: number
  discountPrice?: number
}

export type Customer = {
  id: string
  socialReason: string
  tradeName: string
  cnpj: string
}

export interface ProductFormValues {
  quantity: number
  unitPrice: number
  discountPrice?: number
  totalPrice: number
}
