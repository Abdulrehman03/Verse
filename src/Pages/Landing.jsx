import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Layout from '../Components/Layout/Layout';
import MainPage from '../Components/Landing/MainPage';
import DetailsPage from '../Components/Landing/DetailsPage';
import { ShowDetailContext } from '../Context/ShowDetail';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            height: '75vh',
            width: '100%',
        },
    }),
);

const Landing = () => {
    const classes = useStyles();
    const { showDetails } = React.useContext(ShowDetailContext);

    return <Layout>{showDetails === true ? <DetailsPage /> : <MainPage />}</Layout>;
};

export default Landing;
