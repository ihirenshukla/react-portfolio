import React from 'react';
import Common from './Common'
import { NavLink } from 'react-router-dom';
import web from '../src/images/Vd9Q2GcI0c.svg';

const About = () => {
    return(
        <>
            <Common 
            name='Welcome to About Page'
            imgsrc={web}
            visit='/contact'
            btnname='Contact Now' 
            />
        </>
    );
}


export default About;