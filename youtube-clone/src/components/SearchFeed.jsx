import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

export default function SearchFeed() {

    const [videos, setvideos] = useState([]);

    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setvideos(data.items));
    }, [searchTerm]);
    
    return (
        <Box 
            sx={{
                flex: 2,
                height: { sx: 'auto', md: '92vh' },
                p: '10px',
                overflowY: 'auto'
            }}
        >

            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />

        </Box>
    )

}
