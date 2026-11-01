
const moods = [
    {
        label: "Relaxed",
        icon: "fa-face-smile-beam",
        bg: "bg-[#EBF7E3]",
        iconColor: "text-green-700",
        textColor: "text-green-900",
        border: "border-green-700"
    },
    {
        label: "Tired",
        icon: "fa-face-tired",
        bg: "bg-[#EDE9F5]",
        textColor:"text-indigo-900",
        iconColor: "text-indigo-500",
        border: "border-indigo-700"
    },
    {
        label: "Stressed",
        icon: "fa-face-frown",
        bg: "bg-[#FCEAE7]",
        iconColor: "text-red-500",
        textColor: "text-red-900",
        border: "border-red-700"
    },
    {
        label: "Energetic",
        icon: "fa-bolt",
        bg: "bg-[#FEF0DE]",
        iconColor: "text-orange-500",
        textColor: "text-orange-600",
        border: "border-orange-700"

    }, {
        label: "Happy",
        icon: "fa-face-smile",
        bg: "bg-[#FCF4D9]",
        iconColor: "text-yellow-500",
        textColor: "text-yellow-600",
        border: "border-yellow-700"
    }]
function MoodSelector() {
  return (
    <div
      style={{ backgroundColor: "#F9F5ED" }}
      className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 rounded-xl py-3 px-3 mx-0 md:mx-10"
    >
      <div className="md:w-1/4">
        <h3 style={{ color: "#254223", fontWeight: "bold" }}>
          How are you feeling today?
        </h3>
        <p style={{ color: "#0e580e" }}>
          Choose a mood to get personalized inspiration.
        </p>
      </div>

      <div className="flex gap-2 w-full md:flex-1">
        {moods.map((mood) => (
          <button
            key={mood.label}
            className={`flex flex-1 flex-col gap-2 items-center rounded-2xl px-1 md:px-6 py-3 ${mood.bg} border-2 ${mood.border}`}
          >
            <i className={`fa-solid ${mood.icon} ${mood.iconColor} text-base md:text-2xl`}></i>
            <span className={`text-[10px] md:text-sm font-semibold ${mood.textColor}`}>
              {mood.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default MoodSelector