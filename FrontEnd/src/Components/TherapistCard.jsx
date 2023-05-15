import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function TherapistCard({
  name,
  pictureUrl,
  jobTitle,
  specialties,
  languages,
  isLoggedIn,
}) {
  return (
    <div className="bg-slate-800 rounded-lg p-4 flex flex-col items-center w-72 h-96 overflow-hidden">
      <div
        className="rounded-full h-32 w-32 bg-gray-400 flex items-center justify-center"
        style={{ height: "8rem", width: "8rem" }}
      >
        <img
          src={pictureUrl}
          alt="Profile"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <div className="flex-1">
        <p className="font-Mont-b text-white">{name}</p>
        <p className="text-gray-400 text-sm mb-2 font-lato">{jobTitle}</p>
        <div className="mb-5">
          <span className="text-white font-medium mb-2">Specialties</span>
          <p className="text-gray-300 text-sm font-lato">
            {specialties && specialties.slice(0, 3).join(", ")}
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-white font-medium mb-2">Languages</h3>
          <p className="text-gray-300 text-sm font-lato">
            {languages && languages.slice(0, 3).join(", ")}
          </p>
        </div>
        <Link to={isLoggedIn ? "/Chat" : "/SignIn"}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-Mont-b font-medium py-2 px-4 rounded text-center">
            Chat Now
          </button>
        </Link>
      </div>
    </div>
  );
}
TherapistCard.propTypes = {
  name: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  specialties: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
export default TherapistCard;
