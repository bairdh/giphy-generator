import React, { Component } from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@material-ui/core";

class FavoriteItem extends Component{
    render(){
        return(
            <Box>
                <Card className="card">
                    <CardMedia component="img"  src={this.props.gif.url}/>
                    <CardContent>
        <Typography>Category: {this.props.gif.name}</Typography>
                    </CardContent>
                </Card>
            </Box>
        )
    }
}

export default FavoriteItem;