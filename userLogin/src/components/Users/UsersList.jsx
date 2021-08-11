import React from 'react'
import Card from '../UI/Card';
import classes from './usersList.module.css';

function UsersList(props) {
    return (
        <Card className={classes.users}>
        <ul>
            {props.users.map(user => {
                return <li key={user.id}>{user.username} ({user.age} years old)</li>
            })}
        </ul>
        </Card>
    )
}

export default UsersList
