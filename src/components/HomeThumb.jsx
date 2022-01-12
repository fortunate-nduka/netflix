import { Link } from "react-router-dom";
import { imgBase } from "../utils/requests";

const HomeThumb = ({ poster_path, title, name }) => {
  return (
    <Link to="/" className="last:pr-5 first:pl-5 group">
      <img
        src={imgBase + poster_path}
        alt={title}
        className="w-52 rounded-md md:group-hover:scale-105 transition-all duration-150 ease-in-out"
      />
      <div className="w-52 truncate ... pt-3 font-semibold">{title ? title : name}</div>
    </Link>
  );
};

export default HomeThumb;
