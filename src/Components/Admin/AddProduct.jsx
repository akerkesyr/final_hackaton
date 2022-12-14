import React, { useContext, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import "./AddProduct.css";

import { productContext } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { addProduct, productsArr } = useContext(productContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (
      !category.trim() ||
      !title.trim() ||
      !country.trim() ||
      !description.trim() ||
      !price ||
      !img1.trim() ||
      !img2.trim() ||
      !img3.trim()
    ) {
      alert("Fill in all the fields!");
      return;
    }

    let obj = {
      category,
      title,
      country,
      description,
      price: +price,
      img1,
      img2,
      img3,
    };
    addProduct(obj);
    setCategory("");
    setTitle("");
    setCountry("");
    setDescription("");
    setPrice(0);
    setImg1("");
    setImg2("");
    setImg3("");
  }

  return (
    <>
      <h2 id="add-title">Add product</h2>
      <form
        id="form-add"
        onSubmit={e => handleAdd(e)}
        style={{ minWidth: "300px" }}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category}
            onChange={e => setCategory(e.target.value)}
            autoWidth
            label="Category">
            <MenuItem value="tickets">tickets</MenuItem>
            <MenuItem value="hotels">hotels</MenuItem>
            <MenuItem value="tours">tours</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Country"
          variant="outlined"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="img1"
          variant="outlined"
          value={img1}
          onChange={e => setImg1(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="img2"
          variant="outlined"
          value={img2}
          onChange={e => setImg2(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="img3"
          variant="outlined"
          value={img3}
          onChange={e => setImg3(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>
    </>
  );
};

export default AddProduct;