import React, { Component } from 'react';
import '../../Product/Product.css';
import '../../Main.css';
import './ProductCarousel.css';
import {Carousel} from 'react-bootstrap';

class ProductCarousel extends Component {
    render() {
        const slides =  this.props.photos.map((photo, index) =>
            <Carousel.Item className ="slide-container">
                <img className="carousel-image center-images" alt="900x500" src={photo}/>
                <Carousel.Caption>
                    <h3 className="caption-padding">{this.props.photoCaptions[index]}</h3>
                </Carousel.Caption>
            </Carousel.Item>);

        return(
            <Carousel className="carousel" interval={5000} carousel="true" slide>
                {slides}
            </Carousel>
        );
    }
}

export default ProductCarousel;
