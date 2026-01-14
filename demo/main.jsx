import React from "react";
import { createRoot } from "react-dom/client";

import "../src/index";
import { ProductCard } from "../src/index";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 사용예시 */}
    <ProductCard
      title="우리 첫거래우대 정기예금"
      description="우리은행 첫거래 고객을 우대하는 비대면 전용 예금"
      items={[
        { label: "예상금리", value: "연 X.XX%" },
        { label: "기간", value: "XX개월" },
        { label: "금액", value: "X,XXX만원" },
        { label: "예상이자", value: "최대 XXX만원", highlight: true },
      ]}
      tone="recommend"
      onClick={() => console.log("상품 클릭됨")}
    />
  </React.StrictMode>
);
