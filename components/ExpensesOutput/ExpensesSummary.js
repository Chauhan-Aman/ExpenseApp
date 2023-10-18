import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

const ExpensesSummary = ({ expenses, periodName }) => {

    const expensesSum = expenses.reduce((sum, expense) => {   // Executed on arrays and allows you to combine multiple values in an array into a single value
        return sum + expense.amount;
    }, 0);  // Initial value of sum

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>₹{expensesSum.toFixed(2)}</Text>
        </View>
    )
}

export default ExpensesSummary

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    }
})

// ToFixed(2) - Exactly two decimal places