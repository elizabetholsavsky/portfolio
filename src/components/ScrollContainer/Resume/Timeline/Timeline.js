import SvgSchool from "../../SVG/School.js";
import SvgWork from "../../SVG/Work.js";
import SvgSmile from "../../SVG/Smile.js";
import SvgUp from "../../SVG/Up.js";
import DownloadButton from "../DownloadButton.js";
import ViewButton from "../ViewButton.js";
import './Timeline.css';
import "../Resume.css";

const Timeline = () => {
    return (
            <div className="timeline-container">
                <div className='timeline-event'>

                    <div className="timeline-item">
                        <div className="timeline-dot"><SvgSmile/></div>
                        <div className="timeline-date">TODAY</div>
                        <div className="timeline-content">
                            
                            <h4>Ready for new experiences</h4>

                            <div className="resume-button-container">
                                <DownloadButton/> <ViewButton/>
                            </div>  

                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><SvgSchool/></div>
                        <div className="timeline-date">2023</div>
                        <div className="timeline-content">
                            <h4>Full Stack Web Development Certificate</h4>
                            <h5>UT Austin Boot Camps</h5>
                            <h6>Jan. 2023 - Jul. 2023</h6>
                            <p>● collaborative teamwork</p>
                            <p>● git version control</p>
                        </div>
                    </div>
                
                
                    <div className="timeline-item">
                        <div className="timeline-dot"><SvgWork/></div>
                        <div className="timeline-date">2015</div>
                        <div className="timeline-content">
                            <h4>Classroom Educator</h4>
                            <h5>Del Valle ISD</h5>
                            <h6>Aug. 2015 - Aug. 2023</h6>
                            <p>● leadership & mentorship roles</p>
                            <p>● Google Certified Educator</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><SvgSchool/></div>
                        <div className="timeline-date">2014</div>
                        <div className="timeline-content">
                            <h4>Master of Science in Literacy</h4>
                            <h4>Master of Science in Curriculum & Instruction</h4>
                            <h5>Youngstown State University</h5>
                            <h6>Aug. 2012 - Aug. 2014</h6>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><SvgWork/></div>
                        <div className="timeline-date">2012</div>
                        <div className="timeline-content">
                            <h4>Graduate Assistant</h4>
                            <h5>Youngstown State University</h5>
                            <h6>Aug. 2012 - Aug. 2014</h6>
                            <p>● academic and action research</p>
                            <p>● public speaking</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"><SvgSchool/></div>
                        <div className="timeline-date">2011</div>
                        <div className="timeline-content">
                            <h4>Bachelor of Science in Early Childhood Education</h4>
                            <h5>Cleveland State University</h5>
                            <p>● academic and action research</p>
                        </div>
                        <div className="timeline-dot"><a href="#resume"><SvgUp title="Scroll to top of timeline"/></a></div>
                    </div>

                </div>
            </div>     
    )
}
export default Timeline