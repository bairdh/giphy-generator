import React, { Component } from "react";
import { connect } from "react-redux";
import {Card, CardMedia, CardContent, Typography, Button} from '@material-ui/core';
import SearchItem from './SearchItem';
 
class Search extends Component{

    state = {
        input: ''
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleClick = () =>{
        this.props.dispatch({ type: 'FETCH_SEARCH', payload: this.state.input});
    }

    goToFavorites = () => {
        this.props.history.push('/favorite');
    }

    render(){
        console.log(this.props.reduxState.searchReducer);
        
        return(
            <div>
                <input onChange={(event) => this.handleChange(event)} placeholder="search"/>
                <button onClick={this.handleClick}>Search</button>

                <Button onClick={this.goToFavorites} variant="contained" color="secondary">Favorites</Button>
                <br/>

                {this.props.reduxState.searchReducer.map(gif => <SearchItem 
                                                                    key={gif.id} 
                                                                    gif={gif}
                                                                    dispatch={this.props.dispatch}/>
                    
                    )}
            </div>
        ) // return
    } // render
} //class

const reduxToProps = reduxState => ({reduxState});

export default connect(reduxToProps)(Search);