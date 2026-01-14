import "./ProductCard.css";

/**
 * ProductCard
 *
 * 공용 금융 상품 카드 컴포넌트
 *
 * @param {{
 *  title: string,                         // 상품명
 *  description?: string,                 // 상품 설명
 *  items: {                              // 상품 정보 리스트
 *    label: string;
 *    value: string;
 *    highlight?: boolean;
 *  }[],
 *  tone?: "default" | "recommend",        // 카드 스타일 톤
 *  onClick?: () => void                   // 클릭 핸들러
 * }} props
 */

export function ProductCard({
  //   title,
  //   description,
  //   items,
  tone = "default",
  onClick,
}) {
  return (
    <div
      className={`pc pc--${tone}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
    >
      <header className="pc__header">
        {/* 상품명 */}
        <h3 className="pc__title">
          {/*
            title
            ex) "우리 첫거래우대 정기예금"
          */}
        </h3>

        {/* 상품 설명 */}
        {/*
          description && (
            <p className="pc__desc">
              상품에 대한 간단한 설명 텍스트
            </p>
          )
        */}
      </header>

      <div className="pc__box">
        <ul className="pc__list">
          {/*
            items.map((item) => (
              <li key={item.label} className="pc__row">
                <span className="pc__label">
                  item.label
                </span>
                <span
                  className={`pc__value ${
                    item.highlight ? "pc__value--highlight" : ""
                  }`}
                >
                  item.value
                </span>
              </li>
            ))
          */}
        </ul>
      </div>
    </div>
  );
}
