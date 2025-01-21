import React, { useState } from "react";

interface UserJoinProps {
  onGoogleLogin: () => void; // Google 로그인 함수
}

const UserJoin: React.FC<UserJoinProps> = ({ onGoogleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 처리 로직 추가
    console.log("회원가입 요청: ", { email, password });
  };

  return (
      <div style={styles.container}>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email">이메일</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password">비밀번호</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitButton}>회원가입</button>
        </form>

        <div style={styles.socialLogin}>
          <p>또는</p>
          <button onClick={onGoogleLogin} style={styles.googleButton}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google Icon"
                style={styles.googleIcon}
            />
            Google로 로그인
          </button>
        </div>
      </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  socialLogin: {
    marginTop: "20px",
    textAlign: "center",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },
  googleIcon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
};

export default UserJoin;