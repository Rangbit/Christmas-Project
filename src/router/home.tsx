import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

const StarSky = styled.img`
    width: 100%;
    position: absolute;
`;

const SnowHill = styled.img`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

const ChristmasTree = styled.img`
    width: 40%;
    position: absolute;
    bottom: 100px;
`;

const TreeSiva = styled.img`
    width: 100%;
    max-width: 200px;
    position: absolute;
    bottom: 80px;
    right: 30px;
`;

const Logout = styled.button`
    position: absolute;
    top: 0;
    z-index: 1;
`;


export default function Home() {
    const navigate = useNavigate();
    const logOut = async () => {
        const ok = confirm("Are you sure you want to log out?");
        if(ok){
            await auth.signOut();
            navigate("/login");
        }
    }
    return (
        <Wrapper>
            <Logout onClick={logOut} className="log-out">Log out</Logout>
            <StarSky src="https://i.pinimg.com/originals/09/e4/f2/09e4f23efc1b66fee6ded1850eea98dc.gif" />
            <SnowHill src="https://png.pngtree.com/png-vector/20221101/ourmid/pngtree-winter-snowy-hills-landscape-free-vector-clipart-png-image_6404648.png" />
            <ChristmasTree src="https://www.freepnglogos.com/uploads/christmas-tree-png/large-transparent-christmas-tree-with-red-ribbon-clipart-28.png" />
            <TreeSiva src="/treesiva.png" />
        </Wrapper>
    );
}