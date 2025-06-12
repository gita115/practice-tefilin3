import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  content: string;
  image?: string;
};

export default function RecipeReviewCard({ title, content, image }: Props) {
  return (
    <Card sx={{ maxWidth: 345, margin: '16px auto' }}>
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">פרטים נוספים</Button>
      </CardActions>
    </Card>
  );
}