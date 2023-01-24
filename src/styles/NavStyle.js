// Styling related to the Navigation Bar
import { styled, IconButton } from '@mui/material';


const NavPages = styled('div')({
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // marginLeft: '5%',
    transitionDuration: '0.5s',
    '&:hover': {
        transform: "scale(1.5)",
        // opacity: '0.5',
    },
});

const TransIconButton = styled(IconButton)(({ theme }) => ({
    cursor: 'pointer',
    transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.complex,
    }),
    '&:hover': {
        transform: "rotate(3.14rad)",
    },

}));



const NavStyles = {
    NavPages,
    TransIconButton,
};

export default NavStyles;