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
    <div className="p-5 bg-amber-300 flex justify-around mx-auto rounded-2xl">
      <h1 className="text-md font-bold">
        <a href="/home">{logo}</a>
      </h1>
      <div className="flex gap-5">
        {links.map((link) => {
          return (
            <p className="text-[13px] flex gap-4">
              <a href={link.path}>{link.name}</a>
            </p>
          );
        })}
      </div>
      <button>Get Started</button>
    </div>
  );
}
