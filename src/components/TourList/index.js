import React, { Component } from 'react';
import Tour from "../Tour/Tour";
import './TourList.scss';
import {tourData} from '../tourData';

export default class TourList extends Component {
    constructor(props){
        super(props);
        this.state={
            tours:tourData
        };
        this.removeTour = this.removeTour.bind(this);
        
    }

    removeTour= (id)=>{
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours:sortedTours
        })
    }

  render() {
      const {tours} = this.state;
      
    return(
        <section className="tourlist"> 
            {tours.map(tour =>{
                return(
                    <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                )
            })}
        </section>
    )}
}

