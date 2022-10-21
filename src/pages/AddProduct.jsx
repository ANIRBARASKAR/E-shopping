import React from 'react'
import { useFormik } from 'formik'
import {Link} from "react-router-dom"
import * as yup from "yup"
import {useDispatch} from "react-redux"
import { registerProductAction } from '../store/actions/productAction'


export default function AddProduct() {

    const dispatch = useDispatch()



    const formik = useFormik({
        initialValues: ({
            productName: "",
            price: "",
            stock: "",
            img: "",
            description: ""
        }),
        validationSchema: yup.object({
            productName: yup
                .string()
                .required(" Entre  Product Name "),
            price: yup
                .string()
                .required("Product Price"),
            stock: yup
                .string()
                .required("Product Price"),
            img: yup
                .string()
                .required(" Product Img / Avtar "),
            description: yup
                .string()
                .required(" Product Description "),
           
        }),
        onSubmit: (values,{resetForm}) => {

            console.log("Add Product Data",values);
            dispatch(registerProductAction(values))
            resetForm()
        }
    })
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">

                        <div className="card">
                            <h4 className="card-header bg-dark text-light text-center">Add-Products</h4>
                            <div className="card-body ">
                                <form onSubmit={formik.handleSubmit}>  <div>
                                    <label htmlFor="productName" className="form-label">Product Name</label>
                                    <input
                                    placeholder='Enter Product Name'
                                        type="text"
                                        name='productName'
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        className={formik.errors.productName && formik.touched.productName ? "form-control is-invalid" : "form-control "}
                                        id="name"
                                        value={formik.values.productName}

                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">{formik.errors.productName}</div>
                                </div>
                                    <div className="mt-2">
                                        <label htmlFor="price" className="form-label"> Product Price</label>
                                        <input
                                    placeholder='Enter Your Product Price'
                                            type="text"
                                            name='price'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.price && formik.touched.price ? "form-control is-invalid" : "form-control"}
                                            id="price"
                                            value={formik.values.price}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.price}</div>
                                    </div>

                                    <div className="mt-2">
                                        <label htmlFor="stock" className="form-label"> Product Stock</label>
                                        <input
                                    placeholder='Enter Your Product stock'
                                            type="number"
                                            name='stock'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.stock && formik.touched.stock ? "form-control is-invalid" : "form-control"}
                                            id="stock"
                                            value={formik.values.stock}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.stock}</div>
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="stock" className="form-label"> Product Image/url</label>
                                        <input
                                    placeholder='Enter Your Product URL'
                                            type="text"
                                            name='img'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.img && formik.touched.img ? "form-control is-invalid" : "form-control"}
                                            id="img"
                                            value={formik.values.img}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.img}</div>
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="description" className="form-label"> Product Image/url</label>
                                        <textarea
                                            placeholder='Product Description'
                                            type="text"
                                            name='description'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.errors.description && formik.touched.description ? "form-control is-invalid" : "form-control"}
                                            id="description"
                                            value={formik.values.description}

                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.description}</div>
                                    </div>
                                  
                                  
                                 
                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Add Product
                                    </button>
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}