import { useEffect, useState } from 'react';
import { createUser,changeMode } from '../store/UsersSlice';
import {useSelector,useDispatch} from 'react-redux';

const ListUsers = (props)=>{

    const users = useSelector(state=>state.usersArr);
    const currMode = useSelector(state=>state.mode);
    const [newUserInput,setNewUserInput]=useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(users);
    },[])

    const userAddHandler = ()=>{
        dispatch(createUser({newUser:{id:users[users.length-1].id+1,name:newUserInput}}));
        setNewUserInput("");
    }

    const handlenewUserInp = (eve)=>{
        console.log(eve.target.value);
        setNewUserInput(eve.target.value);
    }

    const userModeHandler = ()=>{
        dispatch(changeMode({mode:'Change Mode'}));
    }
    return (
        <>
        <div>
        <p>Current Mode is {currMode}</p>
        <button onClick={userModeHandler}>change Mode</button>
        <div>
            <div>
                <label htmlFor="newuserText">New user name</label>
                <input onChange={handlenewUserInp} id="newuserText" value={newUserInput} type="text" />
            </div>
                <button onClick={userAddHandler}>add User</button>
        </div>
            {
                users.map((val)=>{
                    return <div key={val.id}>{val.name}</div>;
                    
                })
            }
        </div>
        </>
    )
}

export default ListUsers;