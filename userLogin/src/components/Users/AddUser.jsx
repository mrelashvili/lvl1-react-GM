import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './addUser.module.css';

function AddUser(props) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const usernameChangeHandler = e => {
        setEnteredUserName(e.target.value);
    }
    const ageChangeHandler = e => {
        setEnteredAge(e.target.value);
    }
    const addUserHandler = (e) => {
        e.preventDefault();
       if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
           setError({
               title: 'Invalid Input',
               message: 'Please enter a valid name (non-empty value)'
           })
           return;
       }
       if(+enteredAge < 1){
           setError({
               title: 'Invalid age',
               message: 'please enter a valid age'
           })
           return;
       }
        props.onAdd(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(false);
    }
    return (
        <div>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input value={enteredUserName} id='username' type='text' onChange={usernameChangeHandler}></input>
             <label htmlFor='age'>Age (Years)</label>
            <input value={enteredAge} id='age' type='number' onChange={ageChangeHandler}></input>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser
