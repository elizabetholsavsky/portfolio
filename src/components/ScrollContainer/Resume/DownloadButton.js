import resumePDF from '../images/Olsavsky-Resume.pdf';

const DownloadButton = () => {
    return (
        <button>
            <a href={resumePDF} download="Olsavsky-Resume.pdf">
                Download Resume
            </a>
        </button>
    );
};

export default DownloadButton;