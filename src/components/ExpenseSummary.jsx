export default function ExpenseSummary({ expenses }) {
    const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
  
    return (
      <div className="max-w-md mx-auto mt-8 bg-blue-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold">Total Expenses</h2>
        <p className="text-2xl">${totalAmount.toFixed(2)}</p>
      </div>
    );
  }