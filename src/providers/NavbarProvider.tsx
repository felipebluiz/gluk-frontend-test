import React, { createContext, useState } from 'react'

export interface NavbarContextProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

interface NavbarProviderProps {
  children: React.ReactNode
}

export const NavbarContext = createContext<NavbarContextProps>(
  {} as NavbarContextProps,
)

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  )
}
