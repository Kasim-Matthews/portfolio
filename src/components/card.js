import React from "react"

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";



import "../styles/card.css"

const theme = createTheme()

theme.typography.h4 = {
    fontSize: '25px',
    paddingBottom: '15px'
}



const MediaCard = (props) => {
    const { title, body, img, link } = props
    return (
        <Card sx={{ maxWidth: 450, height: 300, borderRadius: "20px", "&:hover": { boxShadow: "0px 2px 15px rgb(0, 0 ,0, 0.4)" } }}>
            <CardContent className="card-content">
                <CardMedia image={img} component="img" sx={{ height: 40, width: 40, paddingBottom: "15px", paddingTop: "15px" }} />
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">{title}</Typography>
                </ThemeProvider>
                <Typography className="card-body" sx={{ paddingBottom: "10px", fontSize: "15px" }}>
                    {body}
                </Typography>

                <a className="details" href={link} target="_blank" rel="noopener noreferrer">
                    <div>
                        View More <FontAwesomeIcon icon={faGreaterThan} />
                    </div>
                </a>


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