import * as React from 'react';
import './Home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Home ({activeUser}) {
    return (
        <div className="home">
            <h2>Welcome</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={activeUser.imgUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {activeUser.fullName}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
