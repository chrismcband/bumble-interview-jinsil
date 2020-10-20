import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useTweetCardStyles } from './styles';

const TweetCard = ({ image, text, username }) => {
  const classes = useTweetCardStyles();

  return (
    <Card className={classes.card} variant="outlined" elevation={0}>
      <CardHeader
        avatar={<Avatar aria-label="user" src={image} alt={username} />}
        title={username}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

TweetCard.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  username: PropTypes.string
};

export default React.memo(TweetCard);
