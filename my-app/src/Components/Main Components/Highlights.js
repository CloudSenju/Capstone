import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';




  export default function Highlights({dish, price, image, description}) {
    return (
        <div>
          <Card id="highlightscard" sx={{ maxWidth: 345 }}>
              <CardHeader
                title={dish}
                subheader={price}
              />
              <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"

              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>

              </CardActions>
        </Card>
      </div>
    );
  }