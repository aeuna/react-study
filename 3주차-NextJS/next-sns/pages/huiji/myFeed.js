import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '../../components/Avatar';
import { Divider, Grid, Link } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  primary: {
    color: '#2196f3',
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(10, 0),
  },
}));

const myFeed = () => {
  const classes = useStyles();

  return (
    <div style={{ padding: 20 }}>
      <Grid
        container direction='column'
        justify='center'
        alignItems='center'
      >
        <Avatar />
      
      {/*<Grid
        container direction='column'
        justify='center'
        alignItems='center'
      >*/}
        <Grid container direction='column'>
            <Grid container direction='row' justify='center' alignItems='center'>
              계정 아이디(DB 연동 예정)
            </Grid>
            <Grid container direction='row' justify='center' alignItems='center'>
              프로필 설명(DB 연동 예정)
            </Grid>
            <Button variant="contained" color="primary" onClick={()=>{}}>
              프로필 수정하기
            </Button>
        </Grid>        
      {/*</Grid>*/}
      </Grid>
      <Divider variant='middle' light className={classes.divider}/>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
  {/*{tileData.map((tile) => (
    <GridListTile key={tile.img} cols={tile.cols || 1}>
      <img src={tile.img} alt={tile.title} />
    </GridListTile>
  ))}*/}
      </GridList>
    </div>
  );
};

export default myFeed;
