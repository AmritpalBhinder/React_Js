import { Form, useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import './Student.css';
const Student = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            grade: '',
            gender: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full Name is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
            grade: Yup.string().required('Grade is required'),
            gender: Yup.string().required('Gender is required'),
        }),
        onSubmit: (values) => {
            console.log('Form data', values);
            formik.resetForm();
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="student-form">
            <h1 style={{textAlign:"center"}}>Student Registration Form</h1>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="error">{formik.errors.fullName}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="grade">Grade</label>
                <select
                    id="grade"
                    name="grade"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.grade}
                >
                    <option value="">Select Grade</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                {formik.touched.grade && formik.errors.grade ? (
                    <div className="error">{formik.errors.grade}</div>
                ) : null}
            </div>
            <div>
                <label>Gender:</label><br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={formik.handleChange}
                    /> Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={formik.handleChange}
                    /> Female
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={formik.handleChange}
                    /> Other
                </label>
                {formik.touched.gender && formik.errors.gender && (
                    <div style={{ color: 'red' }}>{formik.errors.gender}</div>
                )}
            </div>

            <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
        </form>
    );
};

export default Student;