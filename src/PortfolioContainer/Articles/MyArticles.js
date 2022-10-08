import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import Carousel from "../Carousel";
import "./MyArticles.css"

const images = [
    {
        src: "https://images.unsplash.com/photo-1663123878899-065f74376300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        link:"https://www.google.com"
        
    },
    {
        src: "https://images.unsplash.com/photo-1663106516321-2575f0dfd562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
          link:"https://www.facebook.com"
        
    },
    {
        src: "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
          link:"https://www.tesla.com"
        
    },

]


export default function MyArticles(props) {
    return (
        <>
            <div className="myarticles-container screen-container" id={props.id || ""}>
            <ScreenHeading subHeading={"Read my articles"} title={"My Articles"} />
            <Carousel images={images}/>   
            </div>
        </>
    );
}
