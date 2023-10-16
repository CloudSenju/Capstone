import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { LoremIpsum } from 'react-lorem-ipsum';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';

const namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function getRandomName(names) {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

export default function Testimonials() {
  return (
    <div id="testimonial-card">
    <Box
      sx={{ maxWidth: 345, }}
    >
      <Typography component="legend" id="testimonialText">{getRandomName(namesArray)}</Typography>
      <CardContent justifyContent="space-between">
        <Typography variant="body2" color="text.secondary" display="flex" flex="1">
          <Avatar sx={{
              marginRight: "15px",
              width: "80px",
              height: "80px",
            }}>
          </Avatar>
          <div id="testimonialText">
            <LoremIpsum p={1} avgSentencesPerParagraph={2} />
          </div>
        </Typography>
      </CardContent>
      <div class="container">
        <Typography component="legend" id="testimonialText">Customer Service Rating</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={Math.random() * (5.1 - 3) + 3}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography component="legend" id="testimonialText">Food Rating</Typography>
        <Rating name="customized-10" defaultValue={Math.random() * (10 - 7) + 7} max={10} />
      </div>
      <CardActions disableSpacing>

      </CardActions>
    </Box>
    </div>
  );
}