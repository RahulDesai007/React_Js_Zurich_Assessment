


import { makeStyles } from "@material-ui/core/styles";

import { Container, Grid, Typography } from "@material-ui/core";

//Maaterial UI Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';


const useStyles = makeStyles((theme) => ({
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#2a0d3c",
        color: "white",
        textAlign: "center",
    },
    link: {
        fontSize: "1.25em",
        color: "#fff",
        "&:hover": {
            color: theme.palette.info.main,
        },
    },
    copylight: {
        color: "#fff",
        paddingLeft: "20px",
        fontSize: "1em",
        "&:hover": {
            color: theme.palette.info.main,
        },
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={3} justify="center">


                </Grid>
                <Grid container direction="column" style={{ margin: "0.9em 0" }}>

                </Grid>
                <Grid
                    item
                    container
                    component={"a"}
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.zurich.com/"
                    justify="center"
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <Typography className={classes.copylight}>
                        <FacebookIcon />
                    </Typography>
                    <Typography className={classes.copylight}>
                        <InstagramIcon />
                    </Typography>
                    <Typography className={classes.copylight}>
                        <TwitterIcon />
                    </Typography>
                    <Typography className={classes.copylight}>
                        <LinkedInIcon />
                    </Typography>
                    <Typography className={classes.copylight}>
                        <TelegramIcon />
                    </Typography>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;