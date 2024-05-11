import { activities } from "../datas/alldatas";

const Activities = () => {
  const Card = ({ activity }) => {
    return (
      <div className="activity-card bg-white rounded-lg shadow-lg p-5 pb-10">
        <div className="img-ctn flex justify-center items-center w-full h-full">
          <div className="w-[70px] h-[70px] flex items-center justify-center">
            <img
              data-aos="zoom-in"
              data-aos-offset="0"
              src={activity.img}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="activity text-center">
          <h3 className="text-xl font-bold 10 color_1 flex justify-center">
            {activity.name}
          </h3>
        </div>
        <div>
          <p className="text-md leading-7 font-normal color_5">
            {activity.description.substring(0, 200)}...
          </p>
        </div>
        <div className="rounded-md flex justify-center items-center">
          <a
            href={activity.link}
            className="px-5 py-2 _bg-c1 color_4 font-semibold rounded-md hover:bg-white hover:text-primary hover:font-semibold hover:border-2 hover:border-primary text-sm md:text-md"
            rel="noopener noreferrer"
          >
            <span>En savoir plus</span>
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="activities flex  justify-center ">
      <div className="activities-ctn flex justify-center mw-1200 m-0 p-auto flex-wrap gap-5">
        {activities &&
          activities.map((activity, index) => (
            <Card activity={activity} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Activities;
