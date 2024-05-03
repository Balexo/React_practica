import FormField from "../components/FormField";
import { useState } from "react";
import { newAd } from "./service";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "../components/Button";

export default function NewAdvertPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    sale: true,
    price: 0,
    tags: [],
    photo: null,
  });

  const [checkBoxValue, setChekBoxValue] = useState(true);
  const navigate = useNavigate();
  const { name, sale, price, tags, photo } = formValues;
  const buttonDisabled = !name || !sale || price <= 0 || tags.length === 0;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await newAd(formValues);
    navigate("/v1/adverts");
  };

  const handleChange = (event) => {
    setFormValues((currentValues) => ({
      ...currentValues,
      [event.target.name]: event.target.value,
    }));
  };
  const handleCheckBoxChange = () => {
    setChekBoxValue((previousState) => !previousState);
    setFormValues((currentValues) => ({
      ...currentValues,
      sale: !currentValues.sale,
    }));
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nombre"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></FormField>
        <FormField
          label="En venta"
          type="checkbox"
          name="sale"
          value={sale}
          onChange={handleChange}
        ></FormField>
        <FormField
          label="Precio"
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
        ></FormField>
        <FormField
          label="Familias de producto"
          type="text"
          name="tags"
          value={tags}
          onChange={handleCheckBoxChange}
        ></FormField>
        <FormField
          label="Foto"
          type="text"
          name="photo"
          value={photo}
          onChange={handleChange}
        ></FormField>
      </form>
      <Button type="submit" disabled={buttonDisabled}>
        Submit
      </Button>
    </Layout>
  );
}
