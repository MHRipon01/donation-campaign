import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-5 rounded-lg shadow-md">

<img className=" h-12 pl-6" src="https://i.ibb.co/JnLMZnJ/Logo.png" alt="" />

<ul className="flex gap-5 px-2">
  <li>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-[#FF444A] underline"
          : ""
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/alldonation"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-[#FF444A] underline"
          : ""
      }
    >
    Donation
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/statistics"
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-[#FF444A] underline"
          : ""
      }
    >
      Statistics{" "}
    </NavLink>
  </li>
</ul>

</nav>
        </div>
    );
};

export default Navbar;