import { useFilterStore } from "../routes/stores/filterStore";

interface Props {
  type: "user" | "comment";
}

function FilterName({ type }: Props) {
  const { userFilter, commentFilter, setUserFilter, setCommentFilter } =
    useFilterStore();

  const value = type === "user" ? userFilter : commentFilter;

  const handleChange = (text: string) => {
    if (type === "user") {
      setUserFilter(text);
    } else {
      setCommentFilter(text);
    }
  };

  return (
    <input
      type="text"
      placeholder="Filter by name..."
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className="border rounded-md px-3 py-2"
    />
  );
}

export default FilterName;
