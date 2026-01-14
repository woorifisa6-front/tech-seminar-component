import React from "react";
import { createRoot } from "react-dom/client";

import "./styles/tokens.css";
// import { ProductCard } from "./components/ProductCard/ProductCard";

/**
 * 초기 세팅 단계
 * - 실제 데이터는 연동 전
 * - 컴포넌트 구조 확인용
 */

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ padding: 24, maxWidth: 560 }}>
      {/*
        <ProductCard
          title="상품명"
          description="상품 설명"
          tone="recommend"
          items={[
            { label: "예상금리", value: "연 X.XX%" },
            { label: "기간", value: "XX개월" },
            { label: "금액", value: "X,XXX만원" },
            { label: "예상이자", value: "최대 XXX만원", highlight: true },
          ]}
          onClick={() => {}}
        />
      */}
    </div>
  </React.StrictMode>
);
