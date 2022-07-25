import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from "../reducer/userSlice";
import axios from 'axios';

function Login(){

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        if (msg && loading) {
            setTimeout(() => {
                setMsg("");
                setLoading(false);
            }, 1500);
        }
    }, [msg, loading]);

    const LoginFunc = (e) => {
        e.preventDefault();
        if(!id){
            return alert("ID를 입력하세요.");
        }
        else if(!pw){
            return alert("Password를 입력하세요.");
        }
        else{
            axios.post("Endpoint", body)
            .then((res) => {
                console.log(res.data);
                if(res.data.code === 200){
                    console.log("로그인");
                    dispatch(loginUser(res.data.userInfo));
                    setMsg("");
                }
                if(res.data.code === 400){
                    setMsg("");
                }
                if(res.data.code === 401){
                    setMsg("");
                }
                if(res.data.code === 402){
                    setMsg("");
                }
                })
        }
        setLoading(true);
    }

    return (
        <div className="login">
            <h1 className="title">로그인</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default" style={{width: '90px', justifyContent: 'center'}}>
                아 이 디
                </span>
                <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={(event) => {
                    setId(event.target.value);
                }}
                />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default" style={{width: '90px', justifyContent: 'center'}}>
                비밀번호
                </span>
                <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={(event) => {
                    setPw(event.target.value);
                }}
                />
            </div>

            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                disabled={loading}
                >
                로그인
            </button>
            {msg}
        </div>
    );
};

export default Login;