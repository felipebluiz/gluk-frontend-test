import { Link } from 'react-router-dom'
import { CaretRight } from '@phosphor-icons/react'

import { Container } from './styles'

interface Pages {
  url?: string
  name: string
}

interface BreadcrumbProps {
  pages: Pages[]
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ pages }) => (
  <Container>
    {pages.map((page, index: number) => (
      <div
        key={page.name}
        className={pages.length - 1 === index ? 'highlight' : ''}
      >
        {index !== 0 && <CaretRight size={16} weight="fill" />}
        {page.url ? (
          <Link to={page.url}>{page.name}</Link>
        ) : (
          <span>{page.name}</span>
        )}
      </div>
    ))}
  </Container>
)
