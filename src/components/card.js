import React from "react"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

import "../styles/card.css"

const theme = createTheme()

theme.typography.h4 = {
    fontSize: '40px',
    paddingBottom: '20px'
}

const nav = createTheme({
    typography:{
        button: {
            fontSize: "15px",
            color: "#92817A",
            marginLeft: "300px",
            display: "flex",

            '&:hover':{
                color: '#0075F2'
            }
        }
    }
})

const MediaCard = (props) => {
    const { title, body, img } = props
    return (
        <Card sx={{ maxWidth: 450, height: 300, borderRadius: "20px", "&:hover":{boxShadow: "0px 2px 15px rgb(0, 0 ,0, 0.4)"}}}>
            <CardContent className="card-content">
                <CardMedia image={img} component="img" sx={{ height: 40, width: 40, paddingBottom: "20px", paddingTop: "15px" }} />
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">{title}</Typography>
                </ThemeProvider>
                <Typography className="card-body" sx={{paddingBottom: "20px", fontSize: "16px"}}>
                    {body}
                </Typography>
                <ThemeProvider theme={nav}>
                    <Typography variant="button">
                        <div>
                        View More <FontAwesomeIcon icon={faGreaterThan} />
                        </div>
                    </Typography>
                </ThemeProvider>

            </CardContent>
        </Card>
    )
}

export default MediaCard


/* 

        <Card sx={{ maxWidth: 300, height: 400 }}>
            <CardMedia image={pfp} component="img" />
            <CardContent className="card-content">
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">Project #</Typography>
                </ThemeProvider>
                <Typography className="card-body">
                    "Lorem ipsum dolor sit amet.
                    Et incidunt voluptatem ex tempore repellendus
                    qui dicta nemo sit deleniti minima."
                </Typography>
                <Typography className="card-year"></Typography>
            </CardContent>
        </Card>



*/