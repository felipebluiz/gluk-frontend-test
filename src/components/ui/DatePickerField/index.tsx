import DatePicker, { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from './styles'

registerLocale('pt-BR', ptBR)

interface DatePickerFieldProps {
  selected: Date
  onChange: (date: Date) => void
  error: string | undefined
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  error,
  ...props
}) => (
  <Container error={error}>
    <DatePicker
      {...props}
      locale="pt-BR"
      timeInputLabel="Horário:"
      dateFormat="Pp"
      showTimeInput
      placeholderText="Selecione"
    />
  </Container>
)
