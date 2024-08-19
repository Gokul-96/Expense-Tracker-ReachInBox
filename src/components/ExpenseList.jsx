export default function ExpenseList({ expenses, onDeleteExpense }) {
    return (
      <div className="max-w-md mx-auto mt-8">
        {expenses.length === 0 ? (
          <p className="text-center text-gray-500">No expenses logged yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {expenses.map((expense) => (
              <li key={expense._id} className="flex justify-between items-center p-4">
                <div>
                  <p className="text-lg font-semibold">${expense.amount}</p>
                  <p className="text-sm text-gray-500">{expense.category} - {new Date(expense.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-400">{expense.description}</p>
                </div>
                <button
                  onClick={() => onDeleteExpense(expense._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }