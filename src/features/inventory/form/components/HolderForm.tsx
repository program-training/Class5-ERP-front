import { FieldErrors, UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../interfaces/adminProductInterface";
import { DialogContent } from "@mui/material";
import NameField from "./formFields/NameField";
import CategoryField from "./formFields/CategoryField";
import DescriptionField from "./formFields/DescriptionField";
import SupplierField from "./formFields/SupplierField";
import QuantityField from "./formFields/QuantityField";
import DiscountPercentageField from "./formFields/DiscountPercentageField";
import SalePriceField from "./formFields/SalePriceField";
import CostPriceField from "./formFields/CostPriceField";
import URLImageField from "./formFields/URLImageField";
import AltImageField from "./formFields/AltImageField";
import IsForSaleField from "./formFields/IsForSaleField";
import { FC } from "react";

interface Props {
  product?: adminProductInterface;
  errors: FieldErrors<adminProductInterface>;
  register: UseFormRegister<adminProductInterface>;
}
type dinamicProps = {
  Props: Props;
};

const HolderForm: FC<dinamicProps> = ({ Props }) => {
  const { product, errors, register } = Props;

  return (
    <DialogContent>
      <CategoryField
        register={register}
        error={errors.category?.message}
        defaultValue={product ? product.category : product}
      />
      <NameField
        register={register}
        error={errors.name?.message}
        defaultValue={product ? product.name : product}
      />
      <DescriptionField
        register={register}
        error={errors.description?.message}
        defaultValue={product ? product.description : product}
      />
      <SupplierField
        register={register}
        error={errors.supplier?.message}
        defaultValue={product ? product.supplier : product}
      />
      <QuantityField
        register={register}
        error={errors.quantity?.message}
        defaultValue={product ? product.quantity : product}
      />
      <IsForSaleField
        register={register}
        defaultValue={product ? Boolean(product.isForSale) : true}
      />
      <CostPriceField
        register={register}
        error={errors.costPrice?.message}
        defaultValue={product ? product.costPrice : product}
      />
      <SalePriceField
        register={register}
        error={errors.salePrice?.message}
        defaultValue={product ? product.salePrice : product}
      />
      <DiscountPercentageField
        register={register}
        error={errors.discountPercentage?.message}
        defaultValue={product ? product.discountPercentage : product}
      />
      <URLImageField
        register={register}
        error={errors.imageUrl?.message}
        defaultValue={product ? product.imageUrl : product}
      />
      <AltImageField
        register={register}
        error={errors.imageAlt?.message}
        defaultValue={product ? product.imageAlt : product}
      />
    </DialogContent>
  );
};
export default HolderForm;
