import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import './pink.css'
// import flower from '../../assets/img/flower.jpg'
// interface IProps {
//   announcementMessage: string
//   updateAnnouncement: any
// }

// interface IState {}


function Pink(props)  {
    return ( 
        <div className="pink">
            <section className="bride-broom">
                <div>
                    <h1>{props.month}.{props.day}</h1>
                    <h4>{props.start_time}</h4>
                    <h4>{props.place_name}</h4>
                </div>
                <img src="/static/img/flower.png"/>
                <div>
                    <h4>groom & bride</h4>
                    <h2>{props.groom}</h2>
                    <h2>{props.bride}</h2>
                </div>
            </section>

            <section className="invitation">
                <h2>INVITATION</h2>
                <p>{props.message}</p>
                <img src="/static/img/wedding.jpeg"/>
                
                <h2>Gift for our wedding</h2>
                <div className="buttons">
                    <div>
                        <button></button>
                        <h6>선물하기</h6>
                    </div>
                    <div>
                        <button></button>
                        <h6>축의금 보내기</h6>
                    </div>
                    <div>
                        <button></button>
                        <h6>축하메세지</h6>
                    </div>
                </div>
            </section>

            <section className="map">
                <h2>Gift for our wedding</h2>
                <h4>{props.place_address}</h4>
                <h4>{props.place_name}</h4>
                <img src="/static/img/buket.jpg"/>
                <div className="howto">
                    <div>
                        <h4>버스</h4>
                        <p>{props.howtobus}</p>
                    </div>
                    <div>
                        <h4>지하철</h4>
                        <p>{props.howtosubway}</p>
                    </div>
                </div>
                <div className="ad"></div>
            </section>
        </div>
    )
}

Pink.getInitialProps = ({ query }) => {
    return {query}
}

export default Pink;