import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}){
  // Firebase에 유저정보를 요청하여 로그인여부 검증하기
    const user = auth.currentUser
    console.log(user);
    
    // user가 null일경우에는 로그인 페이지로 보내주기
    if(user === null) {
        return <Navigate to="/login"/>
    }
    return children
}
