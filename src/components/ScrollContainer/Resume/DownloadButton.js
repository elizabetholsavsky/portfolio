import resumePDF from '../images/Olsavsky-Resume.pdf';
import SvgDownload from '../SVG/Download';

const DownloadButton = () => {
    return (
        <button className="download-button">
            <a href={resumePDF} download="Olsavsky-Resume.pdf">
                <div>
                    <SvgDownload/> <span>Download Resume</span>
                </div>
            </a>
        </button>
    );
};

export default DownloadButton;