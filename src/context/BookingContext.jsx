import { createContext, useContext, useState, useCallback } from 'react'
import BookingModal from '../components/booking/BookingModal'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [preSelectedService, setPreSelectedService] = useState(null)

  const openBooking = useCallback((serviceName = null) => {
    setPreSelectedService(serviceName)
    setIsOpen(true)
  }, [])
  
  const closeBooking = useCallback(() => {
    setIsOpen(false)
    // Clear pre-selected service after modal closes
    setTimeout(() => setPreSelectedService(null), 300)
  }, [])

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking, isOpen }}>
      {children}
      <BookingModal 
        isOpen={isOpen} 
        onClose={closeBooking} 
        preSelectedService={preSelectedService}
      />
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider')
  return ctx
}
