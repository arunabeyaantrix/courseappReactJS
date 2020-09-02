import React from 'react';
import bgimage from './images/jumbo.png';
import{Jumbotron} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer';
import Header from './Header';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function RenderCard({card}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{flex: 1, padding:20}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}

          image= {baseUrl + card.image}
          title="Contemplative Reptile"
          style = {{ height: 0, paddingTop: '56%'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
          </Typography>
        </CardContent>
        <br/>
        <Link to={card.linkto}> 
        <Button variant="outlined" color="primary">
          Go To Course 
        </Button>
        </Link>
        <br/>
      </CardActionArea>
      <CardActions>
        
        
      </CardActions>
    </Card>
  );
}

const Home = (props) => {
  const webcard = props.webcards.webcards.map((webcard) => {
    return(

        <div key={webcard.id} className="col-4 col-md-5 mt-5 mb-5">
          <RenderCard card={webcard}/>
        </div>
    );

  });
  const progcard = props.progcards.progcards.map((progcard) => {
    return(
      <div key={progcard.id} className="col-4 col-md-5 mt-5 mb-5">
          <RenderCard card={progcard} />
      </div>
      );
  })

  return(
      <>
        <Header />
        <Jumbotron style={{background : "#399ef7", backgroundImage: `url(${bgimage})`, backgroundSize: 'cover'}}>
            <div className="container jumbo" >
                <div className="row row-header">
                    <div className= "col-12 col-sm-6">
                        <h1 style={{color:"white"}}>WELCOME !!!</h1>
                        <p style={{color:"white"}}>Join Us for Free and Learn Online. We provide the best contents for all the students with Video Explanations.</p>
                    </div>
                </div>
            </div>

        </Jumbotron>
        <div className= "container">
          <h1 style={{fontSize: "40",fontFamily: "Roboto",fontWeight: "400"}}>Web Technologies</h1>
          <hr />
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {webcard}
          </div>
          <h1 style={{fontSize: "40",fontFamily: "Roboto",fontWeight: "400"}}>Programming Languages</h1>
          <hr />
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {progcard}
          </div>
        </div>
        
        <Footer />
      </>
    );
}


export default Home;

