import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { activities } from "../datas/alldatas";
import { Link } from "react-router-dom";

const Activities = () => {
  const Card = ({ activity }) => {
    return (
      <div className="activity-card rounded-lg shadow-lg p-10">
        <div className="img-ctn flex justify-center items-center">
          <img
            data-aos="zoom-in"
            data-aos-offset="0"
            src={activity.img}
            alt=""
            width={65}
            height={65}
          />
        </div>
        <div className="activity text-center">
          <h3 className="text-xl font-bold 10 color_1 flex justify-center">
            {activity.name}
          </h3>
        </div>
        <div>
          <p className="text-md font-normal color_5">{activity.description}</p>
        </div>
        <div className="more rounded-md flex justify-center items-center">
          <Link to={activity.link} className="font-semibold">
            <span>En savoir plus</span>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="activities flex justify-center">
      <div className="activities-ctn flex justify-center gap-5 mw-1200 m-0 p-auto pg">
        {activities &&
          activities.map((activity, index) => (
            <Card activity={activity} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Activities;
