import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import {connect} from 'react-redux'; 
import {fetchWebcards,fetchProgcards,fetchDraweritem} from '../redux/ActionCreators';
import  ResponsiveDrawer from './webreact';
import Webboots from './webboots';

const mapStateToProps = state =>{
	return{
		webcards : state.webcards,
		progcards : state.progcards,
		draweritem : state.draweritem
	}
}

const mapDispatchToProps = dispatch => ({
	fetchWebcards : () => {dispatch(fetchWebcards())},
	fetchProgcards : () => {dispatch(fetchProgcards())},
	fetchDraweritem : () => {dispatch(fetchDraweritem())}
});
class Main extends Component{	
	componentDidMount(){
		this.props.fetchWebcards();
		this.props.fetchProgcards();
		this.props.fetchDraweritem();
	}
	render(){
			return(
				<>
					<Switch>
						<Route path="/home" component={
							() => <Home 
								webcards={this.props.webcards} 
								progcards = {this.props.progcards}
							/>} 
						/>
						<Route path="/contact" component={Contact} />
						<Route path="/about" component={About} />
						<Route path="/reactjs" component={() => <ResponsiveDrawer draweritem={this.props.draweritem}/>} />
						<Route path="/bootstrap" component={Webboots} /> 
						<Redirect to="/home" />
					</Switch>
		       	</>
			);
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));