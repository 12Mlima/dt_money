import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import totalImg from '../../assets/total.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acumulator, transaction) => {
      if (transaction.type === 'deposit') {
        acumulator.deposits += transaction.amount
        acumulator.total += transaction.amount
      } else {
        acumulator.withdraw += transaction.amount
        acumulator.total -= transaction.amount
      }

      return acumulator
    },
    { deposits: 0, withdraw: 0, total: 0 },
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div style={{ background: '#33cc95', color: '#ffffff' }}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
    </Container>
  )
}
