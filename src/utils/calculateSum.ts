/* eslint-disable @typescript-eslint/no-explicit-any */
export const calculateSum = (
  array: any,
  property1: string,
  property2: string = '',
) => {
  const total = array.reduce((accumulator: any, object: any) => {
    return accumulator + (object[property1] || 0) * (object[property2] || 1)
  }, 0)

  return total
}
