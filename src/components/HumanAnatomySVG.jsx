export default function HumanAnatomySVG({ highlight }) {
  const active = "fill-emerald-500 opacity-90";
  const inactive = "fill-slate-300 opacity-40";

  return (
    <svg
      viewBox="0 0 300 600"
      className="w-[360px] h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* HEAD */}
      <circle cx="150" cy="70" r="35" className={inactive} />

      {/* TORSO */}
      <rect x="110" y="110" width="80" height="180" rx="40" className={inactive} />

      {/* HEART */}
      <circle
        cx="150"
        cy="190"
        r="12"
        className={highlight === "heart" ? active : inactive}
      />

      {/* LUNGS */}
      <circle
        cx="130"
        cy="170"
        r="10"
        className={highlight === "lungs" ? active : inactive}
      />
      <circle
        cx="170"
        cy="170"
        r="10"
        className={highlight === "lungs" ? active : inactive}
      />

      {/* BRAIN */}
      <circle
        cx="150"
        cy="65"
        r="14"
        className={highlight === "brain" ? active : inactive}
      />

      {/* SIGNAL NODES */}
      {[...Array(18)].map((_, i) => (
        <circle
          key={i}
          cx={120 + (i % 6) * 12}
          cy={320 + Math.floor(i / 6) * 14}
          r="2"
          className="fill-emerald-400 opacity-50"
        />
      ))}
    </svg>
  );
}
