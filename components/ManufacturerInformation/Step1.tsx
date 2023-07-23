import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTranslation } from "next-i18next";
import { useAddManufacturerMutation } from "@/graphql/mutations/useAddManufacturerMutation";

const ManufacturerInformation: React.FunctionComponent = () => {
  const data = ["1123413", "2123213", "31312323"];
  const { t } = useTranslation("dashboard");
  const [createManufacturer] = useAddManufacturerMutation();

  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [industry, setIndustry] = useState("");
  const [operationYear, setOperationYear] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await createManufacturer({
      variables: {
        input: {
          name: companyName,
          companySize,
          industry,
          yearEstablished: operationYear,
          street,
          state,
          city,
          zipCode,
          pointOfContactId: "1",
        },
      },
    });
    console.log(result, "here");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-5 mt-[25px]">
        <div>
          <Input
            required={true}
            type="text"
            id="companyName"
            label={t("companyName")}
            name="companyName"
            placeholder="Introducir nombre de la empresa"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
          >
            {t("contactName")}
          </label>
          <select
            id="contactName"
            required={true}
            name="contactName"
            placeholder="Nombre completo"
            className="w-full border px-4 py-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
          >
            {data.map((op) => (
              <option key={op}>{op}</option>
            ))}
          </select>
        </div>
        <div>
          <Input
            required={true}
            type="number"
            id="companySize"
            label={t("companySize")}
            name="companySize"
            placeholder="Mediana"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="industry"
            label={t("industry")}
            name="industry"
            placeholder="Textil"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="street"
            label={t("street")}
            name="street"
            placeholder="Calle"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div>
          <Input
            required={true}
            type="number"
            id="operationYear"
            label={t("operationYear")}
            name="operationYear"
            placeholder="Textil"
            value={operationYear}
            onChange={(e) => setOperationYear(e.target.value)}
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="city"
            label={t("city")}
            name="city"
            placeholder="Ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="state"
            label={t("state")}
            name="state"
            placeholder="Estado"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <Input
            required={true}
            type="text"
            id="country"
            label={t("country")}
            name="country"
            placeholder="Pais"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div>
          <Input
            required={true}
            type="number"
            id="zipCode"
            label={t("zipCode")}
            name="zipCode"
            placeholder="Codigo postal"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
      </div>
      <Button variant="primary" className="mt-5 mb-8" type="submit">
        {t("buttonText")}
      </Button>
    </form>
  );
};

export default ManufacturerInformation;
