import axios from "axios";

export function storeExpense(expenseData) {
    axios.post("https://react-http-6e69f-default-rtdb.firebaseio.com/expenses.json", expenseData);
}
