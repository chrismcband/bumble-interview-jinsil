import { makeStyles } from '@material-ui/core/styles';

export const useTweetCardStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
  },
  cardContent: {
    paddingTop: 0,
  },
}));
