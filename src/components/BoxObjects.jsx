import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PercentIcon from '@mui/icons-material/Percent';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'; 
import React from 'react';
const BoxSection = [
    {
        
        id:1,
        events: 'All Events',
        number : '08',
        icon : <EventOutlinedIcon/>,
        price : 'Rs80,000',
        bgColor : 'linear-gradient(270deg, #9F42C1 0%, #7142C1 100%) 0% 0% no-repeat padding-box',
    },
    {
        id:2,
        events: 'Movies',
        number : '08',
        icon : <MovieFilterIcon />,
        price : 'Rs80,000',
        bgColor : 'linear-gradient(90deg, #007DFE 0%, #009FF3 64%, #01D6E1 100%) 0% 0% no-repeat padding-box',
    },
    {
        id:3,
        events: 'Musical Events',
        number : '08',
        icon : <LibraryMusicIcon/>,
        price : 'Rs80,000',
        bgColor : 'linear-gradient(270deg, #FE8793 0%, #FF2B2F 100%) 0% 0% no-repeat padding-box',
    },
    {
        id:4,
        events: 'Sports Events',
        number : '08',
        icon : <SportsBasketballIcon/>,
        price : 'Rs80,000',
        bgColor : 'linear-gradient(270deg, #FFD710 0%, #CBB001 100%) 0% 0% no-repeat padding-box',
    },
    {
        id:5,
        events: 'Gross Sales',
        number : '08',
        icon : <PercentIcon/>,
        price : 'Rs80,000',
        bgColor : 'linear-gradient(270deg, #67AD2B 0%, #419927 100%) 0% 0% no-repeat padding-box',
    },
    {
        id:6,
        events: 'Vendors Fund',
        number : '08',
        icon : <TrendingUpOutlinedIcon/>,
        price : 'Rs80,000',
        bgColor : 'linear-gradient(90deg, #7400FC 0%, #6C00F6 51%, #3301E5 100%) 0% 0% no-repeat padding-box',
    },
    {
        id:5,
        events: 'Net Profit',
        number : '08',
        icon : <PercentIcon/>,
        price : 'Rs80,000',
        bgColor : 'linear-gradient(270deg, #CC4824 0%, #9F3F1D 100%) 0% 0% no-repeat padding-box',
    },
    {
        id:8,
        events: 'Gateway Commission',
        number : '08',
        icon : <TrendingUpOutlinedIcon/>,
        price : 'Rs80,000',
        bgColor : 'linear-gradient(270deg, #0F345D 0%, #0A2646 100%) 0% 0% no-repeat padding-box',
    }
];

export default BoxSection;