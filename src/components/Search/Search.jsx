import React, { Component } from "react";
import { connect } from "react-redux";



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

    render(){
        console.log(this.props.reduxState.searchReducer);
        
        return(
            <div>
                <input onChange={(event) => this.handleChange(event)} placeholder="search"/>
                <button onClick={this.handleClick}>Search</button>
                <br/>
                {this.props.reduxState.searchReducer.map(gif => 
                    <img key={gif.id} src={gif.images.downsized.url} width='200px'/>)}
            </div>
        ) // return
    } // render
} //class

const reduxToProps = reduxState => ({reduxState});

export default connect(reduxToProps)(Search);