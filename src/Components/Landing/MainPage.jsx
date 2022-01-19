import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Grid, Typography, Container } from '@mui/material';
import Image from '../../Assets/landingPage.png';
import Search from '../Search/Select';
import { ShowDetailContext } from '../../Context/ShowDetail';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '80vh',
        },
        logoDiv: {
            [theme.breakpoints.down('md')]: {
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
            },
        },
        logo: {
            height: '450px',
            [theme.breakpoints.down('md')]: {
                height: '450px',
            },
            [theme.breakpoints.down('sm')]: {
                height: '250px',
            },
        },
        mainHeading: {
            width: '300px',
            fontFamily: 'AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important',
            color: theme.palette.primary.heading,
            fontSize: '50px !important',
            lineHeight: '60px !important',
            [theme.breakpoints.down('md')]: {
                margin: 'auto !important',
                textAlign: 'center',
            },
        },
        subHeading: {
            fontFamily: 'AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important',
            color: theme.palette.primary.heading,
            fontSize: '30px !important',
            marginTop: '16px !important',
            [theme.breakpoints.down('md')]: {
                textAlign: 'center',
            },
        },
        searchContainer: {
            '& #react-select-3-placeholder': {
                fontFamily: 'AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important',
                fontSize: '14px !important',
                color: theme.palette.primary.heading,
            },
            '& #react-select-3-input': {
                fontFamily: 'AppleSDGothicNeo-Regular, Apple SD Gothic Neo, sans-serif !important',
                fontSize: '14px !important',
                color: '#fff9f9 !important',
            },
            '& .css-1ko62if-control': {
                backgroundColor: 'transparent !important',
                border: `1px solid ${theme.palette.primary.heading}`,
                color: theme.palette.primary.heading,
            },
            '& .css-1w77nty-control': {
                color: theme.palette.primary.heading,
                backgroundColor: 'transparent !important',
                border: `1px solid ${theme.palette.primary.heading}`,
            },
        },
    }),
);

const data = [
    { label: "Snoop Dogg's Crib", value: '01-131' },
    { label: 'Samsung Center', value: '02-231' },
    { label: 'Jenifer Crib', value: '01-131' },
    { label: 'Oppo Center', value: '02-231' },
    { label: 'Alba Flores Crib', value: '01-131' },
    { label: 'Ahmad Center', value: '02-231' },
    { label: 'John Doe', value: '01-131' },
    { label: 'Apple Center', value: '02-231' },
];

const MainPage = () => {
    const classes = useStyles();
    const { setShowDetails } = React.useContext(ShowDetailContext);

    const onClick = () => {
        setShowDetails(true);
    };

    return (
        <div className={classes.root}>
            <Container>
                <Grid container justifyContent={'center'} alignItems={'center'} spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={classes.logoDiv}>
                            <img className={classes.logo} src={Image} alt="landing Page" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className={classes.headingContainer}>
                            <Typography className={classes.mainHeading}>Metaverse Intelligence in Realtime.</Typography>
                            <Typography className={classes.subHeading}>Search for a Decentraland location</Typography>
                            <Search data={data} onClick={onClick} />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MainPage;
