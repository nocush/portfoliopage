import { Col } from "react-bootstrap";


interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
}

const ProjectCard = ({ title, description, imgUrl }: ProjectCardProps) => {

    return(
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
    )

}

export default ProjectCard;