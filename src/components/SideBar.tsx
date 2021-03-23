import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SideBar({ children }: Props) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">{children}</div>
    </nav>
  );
}

export default SideBar;
