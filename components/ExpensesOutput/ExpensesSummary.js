import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ expenses, periodName }) => {

    const expensesSum = expenses.reduce((sum, expense) => {   // Executed on arrays and allows you to combine multiple values in an array into a single value
        return sum + expense.amount;
    }, 0);  // Initial value of sum

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>₹{expensesSum.toFixed(2)}</Text>
            <Text>{/* Exactly 2 decimal places */}</Text>
        </View>
    )
}

export default ExpensesSummary

const styles = StyleSheet.create({})