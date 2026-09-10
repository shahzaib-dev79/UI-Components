export default function Navbar() {
  const logo = "Vector";
  const links = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "Contact",
    },
  ];
  return (
    <div className="px-[5%] py-5 bg-amber-300 flex justify-between items-center mx-auto">
      <h1 className="text-md font-bold">
        <a href="/home">{logo}</a>
      </h1>
      <div className="flex gap-5">
        {links.map((link) => {
          return (
            <p className="text-lg flex gap-4 hover:scale-105 transition-all duration-200">
              <a href={link.path}>{link.name}</a>
            </p>
          );
        })}
      </div>
      <button className="bg-gray-700 hover:bg-gray-800 text-white border-gray-600">
        Get Started
      </button>
    </div>
  );
}
