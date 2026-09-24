interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

const SectionHeading = ({ eyebrow, title, description, align = "left", dark = false }: Props) => {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div
          className={`eyebrow mb-3 ${dark ? "text-brand" : "text-brand"} ${
            centered ? "" : ""
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-3xl lg:text-[2.1rem] leading-tight ${
          dark ? "text-primary-foreground" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15px] leading-relaxed ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
      <div className={`mt-5 h-[3px] w-12 bg-brand ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
