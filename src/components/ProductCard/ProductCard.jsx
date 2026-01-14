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
 *  eligible?: boolean,
 *  onClick?: () => void
 * }} props
 */

export function ProductCard({
  title,
  description,
  items = [],
  tone = "default",
  eligible,
  onClick,
}) {
  const clickable = typeof onClick === "function" && eligible;
  const byLabel = new Map(items.map((it) => [it.label, it]));

  return (
    <div
      className={`pc pc--${tone}`}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={clickable ? onClick : undefined}
      aria-disabled={!eligible}
    >
      {/* Header */}
      <header className="pc__header">
        <h3 className="pc__title">{title}</h3>
        {description ? <p className="pc__desc">{description}</p> : null}
      </header>

      {/* Info Box */}
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

      {/* Eligibility */}
      {!eligible && (
        <div className="pc__eligibility">
          <span className="pc__eligibility-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 7v6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="17" r="1.2" fill="currentColor" />
            </svg>
          </span>

          <span className="pc__eligibility-text">가입 대상이 아니에요</span>
        </div>
      )}
    </div>
  );
}
