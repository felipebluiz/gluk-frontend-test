/* eslint-disable @typescript-eslint/no-explicit-any */
export const lengthCheck = (e: any) => {
  if (e.target.value.length > e.target.maxLength) {
    e.target.value = e.target.value.slice(0, e.target.maxLength)
  }
}

export const blockInvalidChar = (e: any) =>
  ['e', 'E', '+', '-', ',', '.'].includes(e.key) && e.preventDefault()
