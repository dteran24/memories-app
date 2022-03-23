import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grid, Grow} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts.js'
import Form from './components/form/Form.js';
import Posts from './components/posts/Posts.js'
import useStyles from './styles.js'

import memories from './images/memories.png';
function App() {
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt='memories' height='60'/>
      </AppBar>
    
    <Grow in> 
      <Container>
        <Grid className={classes.mainContainer} container justifyContent= 'space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Container>

    </Grow>
    </Container>
  );
}

export default App;