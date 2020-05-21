import React, {Component} from 'react';
import { connect } from 'react-redux';
import FavoriteItem from './FavoriteItem';

class Favorite extends Component{

    componentDidMount(){
        this.props.dispatch({ type: 'FETCH_FAVORITES'});
    }

    render(){
        return(
            <div>
                {this.props.reduxState.favoriteReducer.map(gif => <FavoriteItem key={gif.id} gif={gif}/>)}
            </div>
        )
    }
}

const reduxToProps = reduxState => ({reduxState})

export default connect(reduxToProps)(Favorite);