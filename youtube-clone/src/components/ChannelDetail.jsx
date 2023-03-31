import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function ChannelDetail() {

    const [channelDetail, setchannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    // Object of key/values from the the current URL : Get Channel ID from URL
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setchannelDetail(data?.items[0]));
        fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then((data) => setVideos(data?.items));
    }, [id]);

    return (
        <Box minHeight='95vh'>

            <Box>

                <div style={{ zIndex: 10, height: '300px', background: 'linear-gradient(180deg, rgba(37,0,184,1) 26%, rgba(0,212,255,1) 100%)' }} />

                <ChannelCard channelDetail={channelDetail} marginTop={'-130px'} />

            </Box>

            <Box display='flex' p='2'>

                <Box sx={{ mr: { sm: '100px' } }} />

                <Videos videos={videos} />
            
            </Box>

        </Box>
    )

}
