/* eslint-disable @typescript-eslint/no-explicit-any */
import IMask from 'imask'

const masker = ({
  masked,
  transform,
  maskDefault,
}: {
  masked: any
  transform?: any
  maskDefault?: any
}) =>
  (function () {
    const mask = IMask.createPipe(
      masked,
      IMask.PIPE_TYPE.UNMASKED,
      IMask.PIPE_TYPE.MASKED,
    )

    const unmask = IMask.createPipe(
      masked,
      IMask.PIPE_TYPE.MASKED,
      IMask.PIPE_TYPE.UNMASKED,
    )

    const onChange = (e: any) => {
      const unmasked = unmask(e.target.value)
      const newValue = mask(unmasked)
      e.target.value = newValue
    }

    return {
      mask,
      onChange,
      transform: transform || unmask,
      unmask,
      maskDefault: maskDefault || mask,
    }
  })()

export const currencyMask = masker({
  masked: {
    mask: 'R$ num{,}cents',
    blocks: {
      num: {
        mask: Number,
        signed: true,
        thousandsSeparator: '.',
        mapToRadix: [''],
        scale: 0,
      },
      cents: {
        mask: '00',
        normalizeZeros: true,
        padFractionalZeros: true,
      },
    },
  },
  transform: (value: string) => {
    return Number(currencyMask.unmask(value).replace(',', '.'))
  },
  maskDefault: (value: number) => {
    return currencyMask.mask(value.toFixed(2).replace('.', ','))
  },
})
