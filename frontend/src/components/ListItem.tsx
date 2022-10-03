import { Listings } from "./ListMarket";
import { Box, Card, CardContent, CardActions, Typography, Button, CardMedia } from "@mui/material";

export function ListItem({ id, description }: Listings) {
  return <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 10}}>
   <Card sx={{ maxWidth: 345 }} >
    <CardMedia
      component="img"
      height="140"
      image="https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {id}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  </Box>
}