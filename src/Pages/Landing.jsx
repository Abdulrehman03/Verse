import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Grid, Typography, Container } from '@mui/material';
import Layout from '../Components/Layout/Layout';
import Image from '../Assets/landingPage.png';
// import { Data } from "../Data/Index";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            height: '75vh',
            width: '100%',
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
            [theme.breakpoints.down('sm')]: {
                height: '250px',
            },
            [theme.breakpoints.down('md')]: {
                height: '350px',
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
            //
        },
    }),
);

const Landing = () => {
    const classes = useStyles();
    return (
        <Layout>
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
                                <div className={classes.searchContainer}></div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Layout>
    );
};

export default Landing;
