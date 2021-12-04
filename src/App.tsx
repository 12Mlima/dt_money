import { Dashboard } from './components/Dashboard/Index'
import { Header } from './components/Header/Index'
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal/Index'
import { TransactionsProvider } from './hooks/useTransactions'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsOpen, setIsNewTransactionsOpen] = useState(false)

  function handleOpenModal() {
    setIsNewTransactionsOpen(true)
  }

  function handleCloseModal() {
    setIsNewTransactionsOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
