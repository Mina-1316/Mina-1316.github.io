import { Avatar, AvatarFallback, AvatarImage } from "#components/shadcn/avatar";
import profile from "~/assets/img/profile.jpg?url";
import ButtonGroup from "./navbar/button-group";

interface NavMenuProps {
  menu: NavMenu;
  nestLevel: number;
}

export interface NavMenu {
  label: string;
  ref: string;
  segments?: NavMenu[];
}

interface Props {
  menus: NavMenu[];
  // The reason why this exists - Navbar's buttongroup need full client-side functionality for localStorage access.
  // To Isolate Client section to buttonGroup only - receive full client component as children.
  children?: React.ReactNode;
}

export const NavbarButtonGroup = ButtonGroup;

export function getDefaultNavMenus(): NavMenu[] {
  return [
    {
      label: "Home",
      ref: "/",
    },
    {
      label: "About",
      ref: "/about",
    },
    {
      label: "Posts",
      ref: "/posts",
    },
  ];
}

function NavMenu({ menu, nestLevel }: NavMenuProps) {
  let { label, ref, segments = [] } = menu;

  function getNavigateCallback(path: string): () => void {
    // Browser is already smart enough to handle same path - just pass it through window.location.href
    return () => {
      window.location.href = path;
    };
  }

  return (
    <>
      <div
        id={`navmenu-${ref}`}
        onClick={getNavigateCallback(ref)}
        className="cursor-pointer pl-(--dynamic-padding) not-hover:truncate hover:underline hover:text-green-400"
        style={{ "--dynamic-padding": nestLevel + "rem" }}
      >
        {"┕ "}
        {label}
      </div>
      {segments.map((seg) => (
        <NavMenu menu={seg} nestLevel={nestLevel + 1} />
      ))}
    </>
  );
}

export default function Navbar({ menus, children }: Props) {
  return (
    <div className="flex flex-col py-8 px-3 gap-3 border-r-gray-800 border-r h-full">
      <div className="flex flex-row  font-bold text-xl gap-2 items-center grow-0">
        <Avatar size="lg" className="border-2 border-primary">
          <AvatarImage src={profile} alt="Profile Image" />
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
        <p>
          Mina <br />
          Cho
        </p>
      </div>
      <div className="flex flex-col gap-1 text-lg grow">
        {menus.map((menu) => (
          <NavMenu menu={menu} nestLevel={0} />
        ))}
      </div>
      {children}
      <div className="grow-0 text-sm text-secondary-foreground">
        <p>Busan, South Korea</p>
        <p>UTC+9</p>
      </div>
    </div>
  );
}
