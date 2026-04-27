type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false
}: SectionTitleProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-extrabold uppercase tracking-[0.2em] ${
            inverted ? "text-red-200" : "text-brand-red"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-black leading-tight sm:text-4xl ${
          inverted ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            inverted ? "text-white/72" : "text-zinc-600"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
