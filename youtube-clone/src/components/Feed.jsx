import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function Feed() {

    const [selectedCategory, setselectedCategory] = useState(() => 'New');
    const [videos, setvideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setvideos(data?.items));
    }, [selectedCategory]);
    
    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' }}}>
            
            <Box 
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: '1px solid #3d3d3d', 
                    px: { sx: 0, md: 2 }
                }}
            >

                <SideBar seLectedCategory={selectedCategory} setSeLectedCategory={setselectedCategory} />

                <Typography variant='body2' sx={{ mt: 1.5, color: '#fff', fontSize: 12, textAlign: 'center' }} className='copyright'>
                    Copyright 2023 Youtube Clone
                </Typography>

            </Box>

            <Box 
                sx={{
                    flex: 2,
                    height: { sx: 'auto', md: '92vh' },
                    p: '10px',
                    overflowY: 'auto'
                }}
            >

                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
                </Typography>

                <Videos videos={videos} />

            </Box>

        </Stack>
    )

}
