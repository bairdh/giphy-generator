import React, { Component } from "react";
import { Card, CardMedia, CardContent, Typography, Button, Select, MenuItem, InputLabel, FormControl} from '@material-ui/core';


class SearchItem extends Component{

    state = {
        category: 0
    }

    favorite = () => {
        let payload = {
            url: this.props.gif.images.downsized.url,
            category: this.state.category
        }

        this.props.dispatch({type:'ADD_FAVORITE', payload: payload})
    }

    handleSelect = (event) =>{
        this.setState({
            category: event.target.value
        })
    }

    render(){
        // console.log();
        return(
            <Card className='card'>
                <CardMedia
                component="img"
                src={this.props.gif.images.downsized.url} />
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        This is a meme
                            </Typography>
                    <Button size="small" onClick={this.favorite} variant="contained">&hearts;</Button>
                   <FormControl>
                    <InputLabel id="demo-simple-select-label">SELECT</InputLabel>
                    <Select labelId="demo-simple-select-label" onChange={event => this.handleSelect(event)}>
                        <MenuItem value={1}>funny</MenuItem>
                        <MenuItem value={2}>cohort</MenuItem>
                        <MenuItem value={3}>cartoon</MenuItem>
                        <MenuItem value={4}>nsfw</MenuItem>
                        <MenuItem value={5}>meme</MenuItem>
                    </Select>
                   </FormControl>
                </CardContent>
            </Card>
        )
    }
}

export default SearchItem;