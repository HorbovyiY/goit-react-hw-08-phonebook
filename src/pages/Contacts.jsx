import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from '@mui/material/Button';

import { Item,  Title } from "./Contacts.styled";
import { fetchContacts, deleteContact } from "../redux/operations";
import { Form } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";

export const Contacts = () => { 
    const filter = useSelector(state => state.contacts.filter)
    const contacts = useSelector(state => state.contacts.contacts.items)
    const isLoading = useSelector(state => state.contacts.contacts.isLoading)
    const error=useSelector(state => state.contacts.contacts.error)
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(fetchContacts())
    },[dispatch])

    return (
        <ul>
            <Title>Phonebook</Title>  
            <Form/>
            <Title>Contacts</Title>
            <Filter/>
            {isLoading && <p>Loading contacts...</p>}
            {(error) ? (<p>{error}</p>):
            (filter) ?
                contacts.filter(
                    ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
                ).map(
                    ({ id, name, number }) =>
                        <Item key={id}>
                            {name}: {number}
                            <Button sx={{marginLeft: '20px'}} type="button" variant="outlined" color="error" onClick={()=>{dispatch(deleteContact(id))}}>Delete</Button>
                        </Item>
                ):
                contacts.map(({ id, name, number }) => 
                    <Item key={id}>
                        {name}: {number}
                        <Button sx={{marginLeft: '20px'}} variant="outlined" color="error" type="button" onClick={()=>{dispatch(deleteContact(id))}}>Delete</Button>
                    </Item>
                )
            }
        </ul>
    )
}