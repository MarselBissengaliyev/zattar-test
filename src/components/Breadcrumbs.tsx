import { Category } from "@/types";

interface Props {
  path: Category[];
}

export default function Breadcrumbs({ path }: Props) {
  return (
    <nav className="text-sm mb-4">
      {path.map((cat, idx) => (
        <span key={cat.id}>
          {cat.name}
          {idx < path.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
