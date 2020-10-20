import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import { useTweetCardStyles } from './styles';

export const TweetCardSkeleton = () => {
  const classes = useTweetCardStyles();

  return (
    <>
      {Array(9)
        .fill()
        .map((_, index) => (
          <Card
            key={index}
            className={classes.card}
            variant="outlined"
            elevation={0}
          >
            <CardHeader
              avatar={
                <Skeleton
                  animation="wave"
                  variant="circle"
                  width={40}
                  height={40}
                />
              }
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
            />
            <CardContent className={classes.cardContent}>
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            </CardContent>
          </Card>
        ))}
    </>
  );
};
