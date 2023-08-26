import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import 'src/styles/homeStyles.css'

const Heading = () => {
  return (
    <div className="flex flex-col items-center gap-7 mb-10 md:mb-6 sm:mb-2">
      <h1 className="sm:pl-4 text-6xl sm:text-5xl font-semibold title is-1 headingOrahi">
        ORAHI
      </h1>
      <p className="w-full px-5 text-2xl sm:text-xl font-light text-center headingOrahi">
      Seamlessly Connecting Curiosity and Careers: Your OHire Interviewer for Success.
      </p>

      <Link className='linkStyle' to="/">
        <div className="subtitle is-4 p-3 mb-10 px-5 border border-solid border-gray-300 has-background-light rounded-md transition-all duration-150 hover:shadow-sectionInput">
           New
        </div>
      </Link>
    </div>
  );
};

export default Heading;
