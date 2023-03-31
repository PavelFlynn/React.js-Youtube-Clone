import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            
            // Reset Search Term to an empty string
            setSearchTerm('');
        }
    }

    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                pl: 2,
                border: '1px solid #e3e3e3',
                borderRadius: 20,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >

            <input 
                type='text' 
                value={searchTerm} 
                placeholder='Search...' 
                className='search-bar' 
                onChange={(event) => setSearchTerm(event.target.value)} 
                style={{ border: 'none', background: 'none', outline: 'none' }}
            />
            
            <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>

        </Paper>
    )
    
}
