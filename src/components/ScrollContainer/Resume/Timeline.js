import './Timeline.css';

const Timeline = () => {
    return (
            <div className="timeline-container">

                <div className='timeline-event'>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2023</div>
                        <div className="timeline-content">
                            <h4>Title</h4>
                            <h5>Employer/School</h5>
                            <h6>dates</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2015</div>
                        <div className="timeline-content">
                            <h4>Title</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2014</div>
                        <div className="timeline-content">
                            <h4>Title</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2012</div>
                        <div className="timeline-content">
                            <h4>Title</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>

                </div>
            </div>     
    )
}
export default Timeline