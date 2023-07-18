import React from 'react'
// import {Carousel} from 'react-bootstrap'
import Slide from './slideone.jpg'


const Carousls = () => {
    const containerStyle = {
        backgroundImage: `url(${Slide})`,
        backgroundSize: 'cover',
        height: '640px',
        position: 'relative'
    };
    const overlayStyle = {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient( 90deg ,rgba(0, 0, 9, 1), rgba(0, 0, 0, 0.7))'

    };
    return (
        

        <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div className="text-container"
                style={
                    {
                        color: '#ffffff',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-80%, -90%)',
                        fontSize: '80px',
                        textAlign: 'left'
                    }
            }>
                <h1 style={
                    {
                        Width: '250',
                        fontSize: '60px'
                    }
                }>Unlimited movies, Anime show, and more...</h1>
                <p style={
                    {fontSize: '30px'}
                }>Plans now start at 15 TND/month.</p>
            </div>
            
        </div>

    )
}

export default Carousls
