// External Components
import YouTube from "react-youtube";

//CSS Style
import './publikeco.css';

export const Publikeco = () => {
    return (
        <div className="PublikecoPage">
            <img
                draggable={false}
                alt=''
                src='./images/shortcut-icons/publikeco-full-icon.png'
                style={{maxWidth: "256px", alignSelf: "center"}}
            />
            <br />
            <YouTube videoId="DYo1yFZMlvM" />
        </div>
    )
}