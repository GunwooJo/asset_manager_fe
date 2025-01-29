import React, { useState } from "react";
import styles from "./UserJoin.module.css";
import googleIcon from "../../assets/googleIcon.svg";
import {useGoogleLogin} from "@react-oauth/google";
import axios from "axios";

const UserJoin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 처리 로직 추가
    console.log("회원가입 요청: ", { email, password });
  };

    const googleOAuthLogin = useGoogleLogin({
        scope: 'email profile',
        onSuccess: async ({ code }) => {
            axios
                .post(`${import.meta.env.VITE_SERVER_URL}/auth/google/login`, { code })
                .then(({ data }) => {
                    console.log(data);
                });
        },
        onError: (errorResponse) => {
            console.error(errorResponse);
        },
        flow: 'auth-code',
    });

  return (
      <div className={styles.container}>
          <h1>회원가입</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                  <label htmlFor="email">이메일</label>
                  <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={styles.input}
                  />
              </div>

              <div className={styles.inputGroup}>
                  <label htmlFor="password">비밀번호</label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className={styles.input}
                  />
              </div>

              <button type="submit" className={styles.submitButton}>회원가입</button>

              <button onClick={() => googleOAuthLogin()} className={styles.googleButton}>
                  <img
                      src={googleIcon}
                      alt="구글 아이콘"
                      className={styles.googleIcon}
                  />
                  구글로 시작하기
              </button>
          </form>
      </div>
  );
};

export default UserJoin;