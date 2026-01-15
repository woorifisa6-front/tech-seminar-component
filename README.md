# woori-product-component

A **ProductCard UI component library** for financial applications.

This library is built with React and uses **design system tokens (CSS Variables)**  
to enable easy reuse across different projects and environments.

> This package provides UI components only.  
> It does not include routing, data fetching, or business logic.

---

## ✨ Features

- 💳 Financial product summary card UI (deposit, savings, loan, etc.)
- 🎨 CSS Variables–based design tokens
- ♻️ Reusable component design using props
- 🧭 Navigation delegated via `href` or `onClick`
- ♿ Accessibility considerations (role, tabIndex, keyboard interaction)
- 🧩 Minimal React dependencies (`peerDependencies` only)

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
