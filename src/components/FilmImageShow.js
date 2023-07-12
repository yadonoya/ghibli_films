import './FilmImageShow.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

function FilmImageShow({ film }) {
    return <div className='film-image-show'>
        <Link to={film.id}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="400"
                    image={film.image}
                    alt={film.title}
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {film.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Year: {film.release_date}  
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Minutes: {film.running_time}  
                            </Typography>
                        </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    </div>
}

export default FilmImageShow;

/*
{film.title}
{film.release_date}
<Link to={film.id}>
    <img src={film.image} alt={film.title}/>
</Link>
*/