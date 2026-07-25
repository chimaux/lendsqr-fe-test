"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button, Input, Form } from "antd";
import styles from "./page.module.scss";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const onFinish = (values: { email: string; password: string }) => {
    console.log("Login values:", values);
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