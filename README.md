# woori-product-component

금융 애플리케이션에서 사용할 수 있는 **상품 정보 카드(ProductCard) UI 컴포넌트 라이브러리**입니다.  
React 기반으로 설계되었으며, **디자인 시스템 토큰(CSS Variables)** 을 활용해  
다양한 프로젝트 환경에서 재사용할 수 있도록 구현되었습니다.

> 본 패키지는 UI 컴포넌트만 제공하며,  
> 라우팅·데이터 패칭·비즈니스 로직에는 의존하지 않습니다.

---

## ✨ Features

- 💳 금융 상품 요약 카드 UI (예금/적금/대출 등)
- 🎨 CSS 변수 기반 디자인 토큰 적용
- ♻️ props 기반 재사용 가능한 컴포넌트 설계
- 🧭 페이지 이동은 `href` / `onClick`으로 외부 위임
- ♿ 접근성 고려 (role, tabIndex, keyboard interaction)
- 🧩 React 의존 최소화 (`peerDependencies`)

---

## 📦 Installation

```bash
npm install woori-product-component
# or
yarn add woori-product-component
```

## Usage

```jsx
import { ProductCard } from "woori-product-component";

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
  eligible={true}
  onClick={() => console.log("상품 클릭됨")}
/>

## Disclaimer

This project is intended for **educational and demonstration purposes only**.

It is **not affiliated with, endorsed by, or sponsored by Woori Bank**.
All product names, brands, and trademarks are the property of their respective owners.
```
