import React, { Component } from 'react';
import '../App.css';
import Tourism from '../Tourism/Tourism';


class Destination extends Component {

  render() {
    return (
       <div>
            <h1>TOURISM</h1>
            <p>Tourism in India is a booming and at an all-time high in the country.</p>
            <p>Most international and domestic travellers put India on their bucket lists,</p>
            <p>primarily due to the country’s incredible cultural heritage and immense diversity. </p>
            <p> Every state, city and town has different glamour and feels which invites visitors from across</p>
            <p>the globe, to come and explore India.</p>
            <div className="App">
                <div>
                    <Tourism state='Goa' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/goa-1.jpg'/>
                    <Tourism state='Haridwar' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/haridwar.jpg'/>
                    <Tourism state='Hyderabad' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/hyderabad.jpg'/>
                    <Tourism state='Indore' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/indore.jpg'/>    
                </div>
                <div>
                    <Tourism state='Jaisalmar' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/jaisalmer.jpg'/>
                    <Tourism state='Kolkata' source='https://static-blog.treebo.com/wp-content/uploads/2017/09/Kolkata-Thumb.jpg'/>
                    <Tourism state='Kovalam' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/kovalam.jpg'/>
                    <Tourism state='Lucknow' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/lucknow.jpg'/>
                </div>
                <div>
                    <Tourism state='Madurai' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/madurai.jpg'/>
                    <Tourism state='Manali' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/manali.jpg'/>
                    <Tourism state='Pune' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/pune.jpg'/>
                    <Tourism state='Agra' source='https://static-blog.treebo.com/wp-content/uploads/2017/09/Agra-Thumb.jpg'/>
                </div>
                <div>
                    <Tourism state='Jaipur' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/jaipur.jpg'/>
                    <Tourism state='Alleppey' source='https://static-blog.treebo.com/wp-content/uploads/2017/09/Alleppy-Thumb.jpg'/>
                    <Tourism state='Amritsar' source='https://static-blog.treebo.com/wp-content/uploads/2017/09/Amritsar-Thumb.jpg'/>
                    <Tourism state='Banglore' source='https://static-blog.treebo.com/wp-content/uploads/2017/09/Bangalore-Thumb.jpg'/>
                </div>
                <div>
                    <Tourism state='Chandigarh' source='https://static-blog.treebo.com/wp-content/uploads/2017/09/Chandigarh-Thumb.jpg'/>
                    <Tourism state='Coorg' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/coorg.jpg'/>
                    <Tourism state='Mumbai' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/mumbai.jpg'/>
                    <Tourism state='Pushkar' source='https://static-blog.treebo.com/wp-content/uploads/2017/06/pushkar.jpg'/>
                </div>
            </div>
            <div class="footer"></div>
       </div>
    );
  }
}

export default Destination;
