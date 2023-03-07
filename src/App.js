// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';


function App() {
    let expenses = [
        {
            id: 'e1',
            title: 'school Fee',
            amount: 250,
            date: new Date(2023, 7, 16)
        },
        {
            id: 'e2',
            title: 'Books',
            amount: 240,
            date: new Date(2023, 6, 15)
        },
        {
            id: 'e3',
            title: 'House Rent',
            amount: 230,
            date: new Date(2023, 5, 14)
        },
        {
            id: 'e4',
            title: 'Food',
            amount: 540,
            date: new Date(2023, 4, 12)
        }
    ]


    return (
        <div>
            <h2>Let get started</h2>
            <Expenses item={expenses} />
            {/* <ExpenseItem
                date={expenses[0].date }
                title={expenses[0].title}
                amount={expenses[0].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={expenses[1].date}
                title={expenses[1].title}
                amount={expenses[1].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={expenses[2].date}
                title={expenses[2].title}
                amount={expenses[2].amount}>
            </ExpenseItem>
            <ExpenseItem
                date={expenses[3].date}
                title={expenses[3].title}
                amount={expenses[3].amount}>
            </ExpenseItem> */}
        </div>

    );
}

export default App;
