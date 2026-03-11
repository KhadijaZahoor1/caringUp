import React from "react";
import { useFormik } from "formik";
import contactSchema from "./contactValidation";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      organizationName: "",
      organizationDomain: "",
      role: "",
      country: "",
      topic: "",
      details: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Message sent successfully!");
    },
  });

  const labelStyle = "block mb-2 body-text text-primary font-medium font-heading";
  const inputStyle =
    "w-full px-4 py-3 body-text font-light rounded-2xl border border-borderClr bg-white placeholder-secondary focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all";
  const errorStyle = "text-red-500 text-xs mt-1 font-body";
  const hintStyle = "text-slate-400 text-xs mt-1.5 ml-1 font-body";

  return (
    <div className="md:rounded-[64px] rounded-[32px] border-borderClr my-16 py-[100px] bg-white">
      <div className="max-w-[696px] mx-auto">
        <h2 className="text-xs text-primary text-center font-heading font-medium tracking-[2px]">
          CONTACT FORM
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="max-w-[696px] mx-auto pt-16 md:px-0 px-5 space-y-6"
        >
          {/* Name Field */}
          <div>
            <label className={labelStyle}>
              Name<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              name="name"
              className={inputStyle}
              placeholder="Your full name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className={errorStyle}>{formik.errors.name}</div>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className={labelStyle}>
              Email Address (Corporate)
              <span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              name="email"
              className={inputStyle}
              placeholder="you@organization.com"
              {...formik.getFieldProps("email")}
            />
            <p className={hintStyle}>Please use your corporate email address</p>
            {formik.touched.email && formik.errors.email && (
              <div className={errorStyle}>{formik.errors.email}</div>
            )}
          </div>

          {/* Organization Name */}
          <div>
            <label className={labelStyle}>
              Organization Name<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              name="organizationName"
              className={inputStyle}
              placeholder="Your organization's name"
              {...formik.getFieldProps("organizationName")}
            />
          </div>

          {/* Organization Domain (Dropdown) */}
          <div>
            <label className={labelStyle}>
              Organization Domain<span className="text-red-500 ml-0.5">*</span>
            </label>
            <select
              name="organizationDomain"
              className={`${inputStyle} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_0.75rem_center]`}
              {...formik.getFieldProps("organizationDomain")}
            >
              <option value="">Select domain</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="tech">Technology</option>
            </select>
          </div>

          {/* Role Field */}
          <div>
            <label className={labelStyle}>
              Role<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              name="role"
              className={inputStyle}
              placeholder="Your role in the organization"
              {...formik.getFieldProps("role")}
            />
            <p className={hintStyle}>
              e.g. Chief Medical Officer, Operations Director, Researcher
            </p>
          </div>

           {/* Organization Domain (Dropdown) */}
          <div>
            <label className={labelStyle}>
              Country<span className="text-red-500 ml-0.5">*</span>
            </label>
            <select
              name="organizationDomain"
              className={`${inputStyle} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_0.75rem_center]`}
              {...formik.getFieldProps("organizationDomain")}
            >
              <option value="">Select domain</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="tech">Technology</option>
            </select>
          </div>


           {/* Organization Domain (Dropdown) */}
          <div>
            <label className={labelStyle}>
              Topic<span className="text-red-500 ml-0.5">*</span>
            </label>
            <select
              name="organizationDomain"
              className={`${inputStyle} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_0.75rem_center]`}
              {...formik.getFieldProps("organizationDomain")}
            >
              <option value="">Select domain</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="tech">Technology</option>
            </select>
          </div>

          {/* Details (Textarea) */}
          <div>
            <label className={labelStyle}>
              Details<span className="text-red-500 ml-0.5">*</span>
            </label>
            <textarea
              name="details"
              rows="4"
              className={`${inputStyle} resize-none`}
              placeholder="Please share details that help us understand your needs or objectives."
              {...formik.getFieldProps("details")}
            />
          </div>

          <p className="body-text-1">This form is protected against spam. Your information is handled in accordance with our Privacy Policy. Protected by reCAPTCHA v3.</p>

          {/* Submit Button */}
          <div className="pt-3">
           <button 
          type="submit" 
          className="w-full text-white py-4 bg-[#1B447D] body-text rounded-full transition-colors shadow-lg "
        >
          Send Message
        </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
