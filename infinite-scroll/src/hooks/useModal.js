import { useState } from "react"

export const useModal = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const colseModal = () => setIsOpen(false);

  return {openModal, colseModal, isOpen};
}