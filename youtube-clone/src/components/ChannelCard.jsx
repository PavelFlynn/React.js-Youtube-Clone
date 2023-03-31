import { Link } from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelUrl, demoChannelTitle } from '../utils/constants';

export default function ChannelCard(props) {

    const data = props.channelDetail;
    //const { channelDetail } = props;

    return (
        <Box
            sx={{ 
                display: 'flex', 
                width: { xs: '356px', md: '320px' }, 
                height: '326px', 
                margin: 'auto', 
                justifyContent: 'center', 
                alignItems: 'center',
                borderRadius: 'none', 
                boxShadow: '20px',
                marginTop: props.marginTop
            }}
        >

            <Link to={data?.id?.channelId ? `/channel/${data?.id?.channelId}` : demoChannelUrl}>

                <CardContent
                    sx={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        textAlign: 'center', 
                        color: '#fff'
                    }}
                >

                    <CardMedia
                        image={data?.snippet?.thumbnails?.high?.url}
                        alt={data?.snippet?.title}
                        sx={{ borderRadius: '50%', width: 180, height: 180, mb: 2, border: '1px solid #e3e3e3' }}
                    />

                    <Typography variant='h6'>
                        {data?.snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}/>
                    </Typography>

                    {data?.statistics?.subscriberCount && (
                        <Typography variant='subtitle2'>
                            {parseInt(data?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}

                </CardContent>

            </Link>

        </Box>
    )
    
}
