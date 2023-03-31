import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import '../css/sidebar.css';

export default function SideBar(props) {

    return (
        <Stack
            direction='row'
            sx={{
                flexDirection: 'column',
                height: { sx: 'auto', md: '95%' },
                paddingRight: '10px',
                overflowY: 'auto'
            }}
        >
            {categories.map(category => (
                <button 
                    className='category-btn' 
                    onClick={() => props.setSeLectedCategory(category.name)}
                    key={category.name} 
                    style={{ backgroundColor: category.name === props.seLectedCategory && '#FC1503' }}
                >
                    
                    <span style={{ color: category.name === props.seLectedCategory ? '#fff' : '#FC1503', marginRight: '15px' }}>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}

        </Stack>
    )

}
