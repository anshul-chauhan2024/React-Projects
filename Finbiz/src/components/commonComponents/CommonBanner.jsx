import { Link, useLocation } from "react-router-dom";

const CommonBanner = ({ name }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); 
  // e.g. "/services/web-design" → ["services", "web-design"]

  return (
    <div className="commonBanner flex items-center justify-center text-white py-16 bg-blue-700">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Page Heading */}
          <h2 className="text-5xl font-bold">{name}</h2>

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm">
              {/* Home link */}
              <li>
                <Link
                  to="/"
                  className="font-semibold text-gray-600 hover:text-blue-700 transition duration-300"
                >
                  Home
                </Link>
              </li>

              {pathnames.map((value, index) => {
                const to = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;

                return (
                  <li key={to} className="flex items-center gap-2">
                    <span className="text-gray-400">/</span>
                    {isLast ? (
                      <span className="font-semibold text-gray-800 capitalize">
                        {value.replace("-", " ")}
                      </span>
                    ) : (
                      <Link
                        to={to}
                        className="font-semibold text-gray-600 hover:text-blue-700 transition duration-300 capitalize"
                      >
                        {value.replace("-", " ")}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
