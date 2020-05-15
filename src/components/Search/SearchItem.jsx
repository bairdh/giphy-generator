import React, { Component } from "react";
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';


class SearchItem extends Component{

    favorite = () => {
        this.props.dispatch({type:'ADD_FAVORITE', payload: this.props.gif})
    }

    render(){
        return(
            <Card className='card'>
                <CardMedia
                component="img"
                src={this.props.gif.images.downsized.url} />
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        This is a meme
                            </Typography>
                    <Button onClick={this.favorite} variant="contained">Favorite</Button>
                </CardContent>
            </Card>
        )
    }
}

export default SearchItem;