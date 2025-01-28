// src/utils/googleAuth.ts
export const redirectToGoogleOAuth = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // 환경변수에서 Client ID 가져오기
    const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI; // 환경변수에서 Redirect URI 가져오기
    const scope = encodeURIComponent("email profile"); // 필요한 권한
    const responseType = "code"; // OAuth 2.0 Authorization Code
    const authUrl = "https://accounts.google.com/o/oauth2/v2/auth";

    // Google OAuth 인증 URL 생성
    const oauthUrl = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&access_type=offline`;

    // 사용자를 Google OAuth URL로 리다이렉션
    window.location.href = oauthUrl;
};
