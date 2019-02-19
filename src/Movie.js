import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Movie extends Component{

    static propTypes ={
      title: PropTypes.string.isRequired,
      large_cover_image: PropTypes.string.isRequired
    }

    render(){
        return(
        <div>
            <MoviePoster large_cover_image={this.props.large_cover_image} />
            <h1>{this.props.title}</h1>

        </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes ={
        large_cover_image: PropTypes.string.isRequired
      }

    render(){
        return(
            <img src={this.props.large_cover_image} alt = "WHAT"/>
        )
    }
}

export default Movie;
