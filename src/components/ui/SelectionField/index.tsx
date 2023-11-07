import React from 'react'
// eslint-disable-next-line import/named
import Select, { GroupBase, Props, StylesConfig } from 'react-select'

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
  > {
    inputRef?: React.Ref<Select<Option, IsMulti, Group>>
    error?: string | undefined
  }
}

function SelectionField<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>): JSX.Element {
  const styles: StylesConfig<Option, IsMulti, Group> = {
    control: (styles, { isFocused }) => {
      let borderColor = 'var(--bs-border-color-translucent)'

      if (isFocused) {
        borderColor = 'var(--colors-darker)'
      } else if (props.error) {
        borderColor = 'var(--bs-red) !important'
      }

      return {
        ...styles,
        height: '50px',
        borderRadius: '6px',
        borderColor,
        boxShadow: 'none ',
        fontSize: '0.875rem',

        svg: {
          color: !isFocused
            ? 'var(--bs-border-color-translucent)'
            : 'var(--colors-darker)',
        },

        '&:hover': {
          borderColor: !isFocused
            ? 'var(--bs-border-color-translucent)'
            : 'var(--colors-darker)',

          svg: {
            color: !isFocused
              ? 'var(--bs-border-color-translucent)'
              : 'var(--colors-darker)',
          },
        },
      }
    },
    valueContainer: (styles) => ({ ...styles, padding: '0 14px' }),
    placeholder: (styles) => ({
      ...styles,
      color: 'var(--bs-border-color-translucent)',
    }),
    indicatorSeparator: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: !isFocused
        ? 'var(--bs-border-color-translucent)'
        : 'var(--colors-darker)',
    }),
    menu: (styles) => {
      return {
        ...styles,
        boxShadow: '0 0 0px 1px var(--bs-border-color-translucent)',
      }
    },
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        padding: '12px',
        backgroundColor: !isSelected ? 'transparent' : 'var(--colors-primary)',
        fontSize: '0.875rem',

        ':hover': {
          backgroundColor: !isSelected ? '#f3f7fa' : 'var(--colors-primary)',
        },
      }
    },
  }

  return (
    <Select
      {...props}
      ref={props.inputRef}
      id="selection-field"
      instanceId="selection-field"
      blurInputOnSelect
      noOptionsMessage={() => 'Sem resultados'}
      styles={styles}
    />
  )
}

export { SelectionField }
