import * as React from "react";
import { Input } from "../ui/input";
import Select from "../ui/Select";
import { useTranslation } from "next-i18next";

const options = [
  { name: "USD", value: "USD" },
  { name: "EUR", value: "EUR" },
  { name: "GBP", value: "GBP" },
  { name: "JPY", value: "JPY" },
  { name: "MXN", value: "MXN" },
];

const ProductPrice: React.FunctionComponent<{
  className: string;
  price: number;
  setPrice: Function;
  currency: string;
  setCurrency: Function;
}> = ({ className, price, setPrice, currency, setCurrency }) => {
  const { t } = useTranslation("add-product");
  return (
    <div className={className}>
      <div className=" text-2xl font-bold leading-8  mb-5 text-[#170F49]">{t("price")}</div>
      <div className="w-100 p-7 min-h-[251px] rounded-[20px] bg-[#FFF] mt-5">
        <Input
          className="mb-4"
          required={true}
          type="number"
          id="price"
          label={t("price")}
          name="price"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          placeholder="$ 0.00"
        />
        <label
          htmlFor="EStatus"
          className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
        >
          {t("currency")}
        </label>
        <Select
          id="Moneda"
          required={true}
          name="Moneda"
          options={options}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          placeholder="USD"
          className="w-full border px-4 py-4 mb-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ProductPrice;
