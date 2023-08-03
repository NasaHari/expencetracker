import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/addTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App" >
      <GlobalProvider>
        <Header />
        <div className="container">
          <div className='balance-history-div'>
            <Balance />
            <IncomeExpenses />
            <TransactionList />
          </div>
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
