import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export function Content({ title, children }: Props) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">{children}</div>
      </main>
    </div>
  );
}
