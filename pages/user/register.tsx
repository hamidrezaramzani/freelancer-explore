import AuthContainer from "@/components/AuthContainer/AuthContainer";
import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
interface RegisterFormValues {
  fullname: string;
  email: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const handleSubmitForm = async (values: RegisterFormValues) => {
    try {
      setLoading(true);
      await axios.post("/api/auth/register", values);
      toast.success("حساب شما با موفقیت ایجاد شد و میتوانید ورود کنید");
      router.push("/user/login");
      setLoading(false);
    } catch (error) {
      setLoading(true);
      toast.error("خطایی در ثبت کاربر جدید پیش آمده است. مجدد امتحان کنید");
    }
  };
  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit(values) {
      handleSubmitForm(values);
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required("نام و نام خانوادگی نمیتواند خالی باشد"),
      email: Yup.string()
        .required("پست الکترونیکی نمیتواند خالی باشد")
        .email("پست الکترونیکی صحیح نمیباشد")
        .test("emailUnique", async function (email: string) {
          setLoading(false);
          const {
            data: { isDuplicate },
          } = await axios.get(
            `/api/auth/checkUserEmailIsNotDuplicate/${email}`
          );
          if (isDuplicate) {
            setLoading(true);
            return this.createError({
              path: "email",
              message: "پست الکترونیکی از قبل ثبت شده است",
            });
          }
          setLoading(false);
          return true;
        }),
      password: Yup.string()
        .min(8, "رمز عبور باید حداقل حاوی ۸ کاراکتر باشد")
        .max(20, "رمز عبور حداکثر میتواند شامل ۲۰ کاراکتر باشد")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
          " رمز عبور باید حداقل یک حرف بزرگ انگلیسی یک حرف کوچک انگلیسی و یک عدد و یک کاراکتر خاص باشد"
        )
        .required("رمز عبور نمیتواند خالی باشد"),
    }),
  });
  return (
    <AuthContainer
      title="ثبت نام به حساب"
      description="با ثبت نام به حساب میتونید امکانات مختلف را تجربه کنید"
    >
      <div className="w-full">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="w-full flex flex-col justify-center items-center gap-5 py-5">
            <Input
              type="text"
              name="fullname"
              error={formik.errors.fullname}
              value={formik.values.fullname}
              onChange={formik.handleChange}
              label="نام و نام خانوادگی"
            />
            <Input
              type="email"
              name="email"
              error={formik.errors.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              label="پست الکترونیکی"
            />
            <Input
              type="password"
              name="password"
              value={formik.values.password}
              error={formik.errors.password}
              onChange={formik.handleChange}
              label="رمز عبور"
            />
            <Button isLoading={isLoading}>ثبت نام</Button>
          </div>
        </form>
      </div>
    </AuthContainer>
  );
};

export default Register;
