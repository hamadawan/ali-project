import * as React from 'react';
import Select from '../ui/Select';
import { useTranslation } from 'next-i18next';

const ProductStatus: React.FunctionComponent<{
  className: string;
  status: string;
  setStatus: Function;
}> = ({ className, status, setStatus }) => {
  const { t } = useTranslation('add-product');
  return (
    <div className={className}>
      <div className=" text-2xl font-bold leading-8  mb-5 text-[#170F49]">
        {t('status')}
      </div>
      <div className="w-100 min-h-[131px] p-7 rounded-[20px] bg-[#FFF] ">
        <label
          htmlFor="EStatus"
          className="block font-normal text-sm mb-2 leading-5 text-[#6F6C90]"
        >
          {t('status')}
        </label>
        <Select
          id="Estatus"
          required={true}
          name="Estatus"
          options={[
            { name: 'Active', value: 'active' },
            { name: 'Pending', value: 'pending' },
          ]}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder={t('asset')}
          className="w-full border px-4 py-4 mb-4 rounded-[10px] text-sm font-normal leading-5 bg-[#fff] border-[#D2DAE2] text-[#576D99] focus:border-[#D2DAE2] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ProductStatus;
