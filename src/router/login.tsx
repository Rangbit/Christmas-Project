import styled from "styled-components";
import GithubButton from "../components/github-btn";
import GoogleButton from "../components/google-btn";


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
    width: 30%;
    position: absolute;
    bottom: 80px;
    right: 30px;
`;

export default function Login() {
    return (
        <Wrapper>
            <StarSky src="https://i.pinimg.com/originals/09/e4/f2/09e4f23efc1b66fee6ded1850eea98dc.gif" />
            <SnowHill src="https://png.pngtree.com/png-vector/20221101/ourmid/pngtree-winter-snowy-hills-landscape-free-vector-clipart-png-image_6404648.png" />
            <ChristmasTree src="https://www.freepnglogos.com/uploads/christmas-tree-png/large-transparent-christmas-tree-with-red-ribbon-clipart-28.png" />
            <TreeSiva src="/treesiva.png" />
            <GithubButton />
            <GoogleButton />
        </Wrapper>
    );
}