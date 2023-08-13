import * as React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const Varients: React.FunctionComponent<{
  className: string;
  varients: [];
  setVarients: Function;
}> = ({ className, varients, setVarients }) => {

  const addRow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setVarients([...varients, { name: "", value: "", price: 0 }]);
  };

  const removeRow = (i: number) => {
    const newForm = [...varients];
    newForm.splice(i, 1);
    setVarients(newForm);
  };

  const handleOption = (value: string | number, option: string, i: number) => {
    const opts = [...varients];
    opts[i] = { ...varients[i], [option]: value };
    setVarients([...opts]);
  };

  return (
    <div className={className}>
      <div className="font-[Raleway] text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        Variantes
      </div>
      <div className="w-100 min-h-[467px] p-7 rounded-[20px] bg-[#FFF] ">
        <Input
          className="mb-4"
          required={true}
          type="varientName"
          id="varient"
          label="Nombre variante"
          name="varient"
          placeholder="Color"
        />
        <div>
          <div className="relative font-[DM Sans] font-medium text-2xl leading-[28px] text-[#26B9F1] mb-5">
            Opciones
            <div className="flex justify-end">
              <button className=" absolute mt-[-14px] pl-6" onClick={addRow}>
                <Image src="/icons/plus.svg" alt="plus image" width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
        <div>
          {varients.map((option, i) => {
            return (
              <div className="flex flex-row gap-5 mb-5">
                <Input
                  required={true}
                  type="Option"
                  id="Option"
                  label="Opciones 1"
                  name="Option"
                  placeholder="color 1"
                  value={option.name}
                  onChange={(e) => handleOption(e.target.value, "name", i)}
                />
                <div className="relative">
                  <Input
                    className="pl-12"
                    required={true}
                    type="Worth"
                    id="Worth"
                    label="Valor"
                    name="Worth"
                    placeholder="#232323"
                    value={option.value}
                    onChange={(e) => handleOption(e.target.value, "value", i)}
                  />
                  <div
                    className="absolute left-4 top-11 w-5 h-5 rounded-[5px]"
                    style={{ background: option.value }}
                  ></div>
                </div>
                <Input
                  required={true}
                  type="Price"
                  id="Price"
                  label="Precio"
                  name="Price"
                  placeholder="$10.00"
                  value={option.price}
                  onChange={(e) => handleOption(e.target.value, "price", i)}
                />
                <button onClick={() => removeRow(i)}>
                  <Image src="/bin.svg" alt="" width={21} height={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Varients;
