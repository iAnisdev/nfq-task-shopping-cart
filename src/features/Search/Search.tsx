import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ChangeEvent } from 'react';
import { SearchActions } from './SearchSlice';

function Search() {
    const search = useAppSelector((state) => state.search.search)
    const dispatch = useAppDispatch()
    function updateSearch(value: string): void {
        dispatch(SearchActions.setSeach(value))
    }
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Products"
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateSearch(e.target.value)}
                inputProps={{ 'aria-label': 'Search Products' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <FilterAltIcon />
            </IconButton>
        </Paper>
    )
}

export default Search