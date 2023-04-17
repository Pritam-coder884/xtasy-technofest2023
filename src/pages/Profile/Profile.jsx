import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import ProfileTop from '../../component/ProfileTop/ProfileTop'
import Footer from '../../component/Footer/Footer'
import { events } from '../../component/events'
import EventCards from '../../component/EventCards/EventCards'
import "./Profile.scss"

const Profile = () => {
    const handleClick = () => {

    }
    return (
        <>
            <Navbar />
            <ProfileTop />
            <div className="event-cards">
                <div className="all">
                    <div className="cards">
                        {events.map((event) => {
                            return (
                                <EventCards key={event.id} id={event.id} name={event.name} desc={event.desc} handleClick={handleClick} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile