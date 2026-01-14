import "./ProductCard.css";

const LABELS = ["예상금리", "기간", "금액", "예상이자"];

/**
 * @typedef {{ label: string; value: string; highlight?: boolean }} ProductItem
 */

/**
 * @param {{
 *  title: string,
 *  description?: string,
 *  items?: ProductItem[],
 *  tone?: "default" | "recommend",
 *  onClick?: () => void
 * }} props
 */

export function ProductCard({
  title,
  description,
  items = [],
  tone = "default",
  onClick,
}) {
  const clickable = typeof onClick === "function";
  const byLabel = new Map(items.map((it) => [it.label, it]));

  return (
    <div
      className={`pc pc--${tone}`}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
    >
      <header className="pc__header">
        <h3 className="pc__title">{title}</h3>
        {description ? <p className="pc__desc">{description}</p> : null}
      </header>

      <div className="pc__box">
        <ul className="pc__list">
          {LABELS.map((label) => {
            const item = byLabel.get(label);
            return (
              <li key={label} className="pc__row">
                <span className="pc__label">{label}</span>
                <span
                  className={`pc__value${
                    item?.highlight ? " pc__value--highlight" : ""
                  }`}
                >
                  {item?.value ?? "-"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
