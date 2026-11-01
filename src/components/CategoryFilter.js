
const categories = [
  { label: "All", icon: null },
  { label: "Nature", icon: "fa-leaf" },
  { label: "Fitness & Wellness", icon: "fa-dumbbell" },
  { label: "Cozy Moments", icon: "fa-mug-hot" },
  { label: "Travel", icon: "fa-plane" },
  { label: "Aesthetic", icon: "fa-palette" },
];
function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-2 md:mt-5 md:ml-20">
      {categories.map((cat) => (
        <button
          key={cat.label}
          className="flex items-center gap-2 bg-green-200 text-xs text-green-950 md:text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap hover:bg-green-950 hover:text-white"
        >
          {cat.icon && <i className={`fa-solid ${cat.icon}`}></i>}
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;