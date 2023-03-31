import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import '../css/videoDetail.css';

export default function VideoDetail() {

    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data?.items[0]));
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data?.items));
    }, [id]);

    // Fix data hasn't loaded yet
    if (!videoDetail?.snippet) return 'Loading...';

    // Destructuring
    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <Box minHeight='95vh'>

            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>

                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player' />

                        <Typography variant='h5' fontWeight='bold' color='#fff' p={2}>
                            {title}
                        </Typography>

                        <Stack
                            direction='row' 
                            justifyContent='space-between' 
                            sx={{ color: '#fff' }} 
                            py={1} 
                            px={2}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}/>
                                </Typography>
                            </Link>

                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{ opacity: '0.7' }}>
                                    {parseInt(viewCount).toLocaleString()} Views
                                </Typography>
                                <Typography variant='body1' sx={{ opacity: '0.7' }}>
                                    {parseInt(likeCount).toLocaleString()} Likes
                                </Typography>
                            </Stack>

                        </Stack>

                    </Box>
                </Box>

                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center'>

                    <Videos videos={videos} direction={'column'} />

                </Box>

            </Stack>

        </Box>
    )
    
}
