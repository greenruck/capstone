import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function CardCreator({image_id, title, description, id}) {

    if (description){
    const strippedDescription = description.replace(/<[^>]+>/g, '');
    

return (
    <Card sx={{ maxWidth: 345 }} style={{maxHeight: 600, overflow: 'auto'}} id={id}>
        <CardMedia
            sx={{ height: 140 }}
            image={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
            title={title}
        />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" colors="text.secondary">
                    {strippedDescription}
                </Typography>
                </CardContent>
                <CardActions >
                    <Button size="small" href={`/data/${id}`} >Learn More</Button>
                 </CardActions>
    </Card>
)
    }
}
export default CardCreator;

