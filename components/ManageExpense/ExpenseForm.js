import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Input from './Input';
import Button from '../UI/Button'

const ExpenseForm = ({ submitButtonLabel, onSubmit, onCancel }) => {

    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: '',
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue  //[inputIdentifier] targets the value stored in inputIdentifier
            };
        });
    };

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,       // + converts it(string) to number
            date: new Date(inputValues.date),
            description: inputValues.description
        };

        onSubmit(expenseData);
    }

    return (
        <View style={styles.form}>

            <Text style={styles.title}>Your Expense</Text>

            <View style={styles.inputsRow}>

                <Input
                    label="Amount"
                    style={styles.rowInput}
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputValues.amount,
                    }}
                />

                <Input
                    label="Date"
                    style={styles.rowInput}
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputValues.date,
                    }}
                />

            </View>

            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    // autoCorrect:false // default is true
                    // autoCapitalize: 'none', // default sentences
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputValues.description,
                }}
            />

            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>

        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
})