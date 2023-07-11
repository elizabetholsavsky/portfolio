import './Timeline.css';

const Timeline = () => {
    return (
            <div className="timeline-container">
                <div className='timeline-event'>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2023</div>
                        <div className="timeline-content">
                            <h4>Full Stack Web Development Certificate</h4>
                            <h5>UT Austin Boot Camps</h5>
                            <h6>January 2023-July 2023</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                
                
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2015</div>
                        <div className="timeline-content">
                            <h4>Classroom Educator</h4>
                            <h5>Del Valle ISD</h5>
                            <h6>August 2015-August 2023</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2014</div>
                        <div className="timeline-content">
                            <h4>Master of Science in Literacy</h4>
                            <h4>Master of Science in Curriculum & Instruction</h4>
                            <h5>Youngstown State University</h5>
                            <h6>August 2012-2014</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2012</div>
                        <div className="timeline-content">
                            <h4>Graduate Assistant</h4>
                            <h5>Youngstown State University</h5>
                            <h6>August 2012-2014</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2011</div>
                        <div className="timeline-content">
                            <h4>Bachelor of Science in Early Childhood Education</h4>
                            <h4 className='italics'>summa cum laude</h4>
                            <h5>Cleveland State University</h5>
                            <h6>August 2008-December 2011</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="timeline-dot"></div>
                    </div>

                </div>
            </div>     
    )
}
export default Timeline