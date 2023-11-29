import { describe, expect, test } from "vitest";
import { searchUtil } from "./searchUtil";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "../../helpers/helperSearchUtilText";
import { adminProductInterface } from "../../../../inventory/interfaces/adminProductInterface";

describe("search util", () => {
  test("Returns an object whose name value is equal to the value argument", () => {
    const products: adminProductInterface[] = [product5];
    const value = "test";
    const result = searchUtil(products, value);
    expect(result).toEqual(products);
  });
  test("Returns an object whose category value is equal to the value argument", () => {
    const products: adminProductInterface[] = [product5, product1];
    const value = "test";
    const result = searchUtil(products, value);
    expect(result).toEqual(products);
  });
  test("Returns an object whose supplier value is equal to the value argument", () => {
    const products: adminProductInterface[] = [product5, product1, product6];
    const value = "test";
    const result = searchUtil(products, value);
    expect(result).toEqual(products);
  });
  test("Returns an object whose createdBy value is equal to the value argument", () => {
    const products: adminProductInterface[] = [
      product5,
      product1,
      product6,
      product3,
    ];
    const value = "test";
    const result = searchUtil(products, value);
    expect(result).toEqual(products);
  });
  test("Does not return an object for which all four tested keys are not equal to the value argument", () => {
    const products: adminProductInterface[] = [
      product1,
      product2,
      product3,
      product4,
      product5,
      product6,
    ];
    const value = "test";
    const filteredProducts = [product1, product3, product5, product6];
    const result = searchUtil(products, value);
    expect(result).toEqual(filteredProducts);
  });
  test("Does not distinguish between upper and lower case letters", () => {
    const products: adminProductInterface[] = [
      product1,
      product2,
      product3,
      product4,
      product5,
      product6,
    ];
    const value = "TEST";
    const filteredProducts = [product1, product3, product5, product6];
    const result = searchUtil(products, value);
    expect(result).toEqual(filteredProducts);
  });
  test("If no object has a match returns an empty array", () => {
    const products: adminProductInterface[] = [product2, product4];
    const value = "TEST";
    const filteredProducts: adminProductInterface[] = [];
    const result = searchUtil(products, value);
    expect(result).toEqual(filteredProducts);
  });
  test("Accepting an empty array returns an empty array", () => {
    const products: adminProductInterface[] = [];
    const value = "TEST";
    const filteredProducts: adminProductInterface[] = [];
    const result = searchUtil(products, value);
    expect(result).toEqual(filteredProducts);
  });
  test("Returns an empty array if the value argument is not an string", () => {
    const products = [product1];
    const value = 44 as unknown as string;
    const filteredProducts: adminProductInterface[] = [];
    const result = searchUtil(products, value);
    expect(result).toEqual(filteredProducts);
  });
  test("Returns an empty array if the allProducts argument is not an array", () => {
    const products = "string" as unknown as adminProductInterface[];
    const value = "TEST";
    const filteredProducts: adminProductInterface[] = [];
    const result = searchUtil(products, value);
    expect(result).toEqual(filteredProducts);
  });
  test("Returns an empty array if the allProducts argument is an array and contains no product objects", () => {
    const products = [
      product2,
      "string",
      product1,
    ] as unknown as adminProductInterface[];
    const value = "TEST";
    const filteredProducts: adminProductInterface[] = [];
    const result = searchUtil(products, value);
    expect(result).toEqual(filteredProducts);
  });
  test("Returns an empty array if the allProducts argument is an array and contains no product objects", () => {
    const products = [
      product2,
      ["string"],
      product1,
    ] as unknown as adminProductInterface[];
    const value = "TEST";
    const filteredProducts: adminProductInterface[] = [];
    const result = searchUtil(products, value);
    expect(result).toEqual(filteredProducts);
  });
});
