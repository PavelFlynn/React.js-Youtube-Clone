import { Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

export default function VideoCard(props) {

    const data = props.video;

    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>

            <Link to={data?.id?.videoId ? `/video/${data?.id?.videoId}` : demoVideoUrl}>

                <CardMedia
                    image={data?.snippet?.thumbnails?.high?.url}
                    alt={data?.snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
                />

            </Link>

            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '100px' }}>

                <Link to={data?.id?.videoId ? `/video/${data?.id?.videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                        {data?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                <Link to={data?.id?.channelId ? `/channel/${data?.id?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                        {data?.snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '10px' }}/>
                    </Typography>
                </Link>

            </CardContent>

        </Card>
    )

}
