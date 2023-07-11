import DownloadButton from "./DownloadButton";
import ViewButton from "./ViewButton";
import "./Resume.css";

const Resume = () => {
	return (
		<section aria-label="resume" id="resume">
            <div className="content-container">
                <div className="content-text">
                    <h2> Resume </h2>
                    <h3> Join My Journey </h3>
                        <div className="resume-button-container">
                            <DownloadButton/>
                            <ViewButton/>
                        </div>  
                </div>
            </div>
        </section>
	)
}
export default Resume