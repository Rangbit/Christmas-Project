import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './components/layout'
import Home from "./router/home"
import Join from "./router/join"
import Mytree from "./router/mytree"
import styled, { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { auth } from './firebase'
import LoadingScreen from './components/loading-screen'
import Login from './router/login'
import ProtectedRoute from './components/protected-route'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path: "", // 위와 동일한 path 경로를 갖는다
        element: <ProtectedRoute><Home /></ProtectedRoute> // 로그인시에만 볼수있게 보호하기
      },
      {
        path: "mytree", // 내트리 보기( 공유된 url )
        element: <Mytree />
      }
    ],
  },
  {
    path: "/login", // 로그인
    element: <Login />
  },
  {
    path: "join", // 회원가입
    element: <Join />
  },
])



const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  // Firebase가 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인여부를 확인하는동안 기다리는 역할
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    // 이후 수정할 테스트용 코드
    setTimeout(() => setLoading(false), 2000);
    await auth.authStateReady();
    // setLoading(false);
  };

  // 사용자에게 로딩화면을 출력
  useEffect(() => {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  )
}

export default App
