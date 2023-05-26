import AuthContainer from "@/components/AuthContainer/AuthContainer";
import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
interface LoginFormValues {
  email: string;
  password: string;
}
const Login = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmitForm = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      await axios.post("/api/auth/login", values);
      toast.success("حساب شما با موفقیت ایجاد شد و میتوانید ورود کنید");
      router.push("/user/login");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if ((error as AxiosError).response?.status === 401) {
        toast.error("نام کاربری یا رمز عبور اشتباه است");
      } else {
        toast.error("خطایی در ورود کاربر جدید پیش آمده است. مجدد امتحان کنید");
      }
    }
  };
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values) {
      handleSubmitForm(values);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("پست الکترونیکی نمیتواند خالی باشد")
        .email("پست الکترونیکی صحیح نمیباشد"),
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
      title="ورود به حساب"
      description="با ورود به حساب میتونید امکانات مختلف را تجربه کنید"
    >
      <div className="w-full">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="w-full flex flex-col justify-center items-center gap-5 py-5">
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
            <Button isLoading={isLoading}>ورود</Button>
          </div>
        </form>
      </div>
    </AuthContainer>
  );
};

export default Login;
