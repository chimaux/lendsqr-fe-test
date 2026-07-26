"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button, Input, Form, Alert } from "antd";
import styles from "./page.module.scss";
import type { LoginForm } from "@/lib/schemas/auth";
import { useAuthStore } from "@/lib/stores/auth.store";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";





export default function login_page() {

const { login, loading, error } = useAuthStore(
  useShallow((state) => ({
    login: state.login,
    loading: state.loading,
    error: state.error,
  }))
);

const router = useRouter();




  const [showPassword, setShowPassword] = useState(false);

const onFinish = async (values: LoginForm) => {
  const success = await login(values);

  if (success) {
    router.replace("/dashboard");
  }
};

  return (
    <div className={styles.loginPage}>
      {/* Left Side - Illustration */}
      <aside className={styles.illustrationSide}>
        <div className={styles.logo}>
          <Image
            src="/images/logos/lendsqr-logo.svg"
            alt="Lendsqr"
            width={138}
            height={36}
            priority
          />
        </div>
        <div className={styles.illustration}>
          <Image
            src="/images/illustrations/pablo-sign-in.svg"
            alt="Sign in illustration"
            width={600}
            height={338}
            priority
          />
        </div>
      </aside>

      {/* Right Side - Form */}
      <main className={styles.formSide}>
        <div className={styles.formContainer}>
          {/* Mobile Logo */}
          <div className={styles.mobileLogo}>
            <Image
              src="/images/logos/lendsqr-logo.svg"
              alt="Lendsqr"
              width={138}
              height={36}
              priority
            />
          </div>

          <header className={styles.formHeader}>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </header>


{error && (
    <Alert 
     title={error}
    type="error"
    showIcon
    style={{ marginBottom: 24 }}
    />
  

)}



          <Form
            name="login"
            onFinish={onFinish}
            className={styles.loginForm}
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Email" size="large" className={styles.input} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password
                placeholder="Password"
                size="large"
                className={styles.input}
                iconRender={(visible) => (
                  <button
                    type="button"
                    className={styles.showButton}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {visible ? "HIDE" : "SHOW"}
                  </button>
                )}
                visibilityToggle={{ visible: showPassword }}
              />
            </Form.Item>

            <Link href="/forget-passord" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </Link>

            <Form.Item className={styles.submitItem}>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className={styles.submitButton}
                loading={loading}
              >
                LOG IN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </main>
    </div>
  );
}