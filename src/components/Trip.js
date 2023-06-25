import React from 'react';
import './Trip.css';
import { TripsData } from './TripsData';

export const Trip = () => {
    return (
        <div className='Trip'>
            <h1>Recent Trips</h1>
            <p className='trip-para'>You Can Discover Unique Destination In the World</p>
            <div className='trip-container'>
                {/* It is a trip container which is store the photo and h4 heading and description */}
                <TripsData
                    image='https://cdn.pixabay.com/photo/2016/11/08/05/54/agriculture-1807581_960_720.jpg'
                    heading='Malasiya Green Land'
                    text= {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages` }
                />
                 <TripsData
                    image='https://cdn.pixabay.com/photo/2019/07/21/20/04/paris-4353532_960_720.jpg'
                    heading='Malasiya '
                    text= {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages` }
                />
                 <TripsData
                    image='https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_960_720.jpg'
                    heading='London Efill Tower'
                    text= {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages` }
                />
                
            </div>
        </div>
    )
}
