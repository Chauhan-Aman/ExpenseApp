import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native'

import { GlobalStyles } from '../constants/styles';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';

import { ExpensesContext } from '../store/expenses-context';

const ManageExpense = ({ route, navigation }) => {

  const expensesCtx = useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId;   // check params if it is undefined then not drill into expenseId 
  const isEditing = !!editedExpenseId;                 //Covert value into boolean

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpenseId,
        {
          description: 'Test!!!',
          amount: 20.99,
          date: new Date('2022-05-20')
        });
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2022-05-19')
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>

      {isEditing &&
        <View style={styles.deleteContainer}>
          <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
        </View>}

    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary500,
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  }
})

// if params(ie id exists) then we are editing expense else adding expen