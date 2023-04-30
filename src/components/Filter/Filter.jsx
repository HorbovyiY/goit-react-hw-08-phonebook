import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';

import { Title, FilterWrapper } from "./Filter.styled";
import { changeFilter } from "redux/contactsSlice";

export const Filter = () => { 
    const filter = useSelector(state => state.contacts.filter)
    const dispatch = useDispatch();

    return (
        <FilterWrapper>
            <Title>Find contacts by name</Title>
            <TextField
                type="text"
                value={filter}
                onChange={(e) => {dispatch(changeFilter(e.currentTarget.value))}}
            />
        </FilterWrapper>
    )
}