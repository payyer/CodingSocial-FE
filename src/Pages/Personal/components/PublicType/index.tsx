import { FaLock } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

function PublicType() {
  return (
    <label className="swap mx-4">
      <input type="checkbox" />
      <div className="swap-on flex items-center justify-center">
        <FaLock className="text-xl mt-1" />
      </div>
      <div className="swap-off flex items-center justify-center">
        <FaEarthAmericas className="text-xl mt-1" />
      </div>
    </label>
  );
}

export default PublicType;
