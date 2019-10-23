import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'

import Pink from '../letter_templates/pink'
import './check.css'

function Check(props) {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const createLetter = () => {
        axios({
            method: 'post',
            url: 'letters',
            data: {...props, email, password1, password2},
        }).then((response) => {
            props.setNewLetterPk(response.data.id)
            console.log(props.newLetterPk)
        })
        .then(() => {
            Router.push(
                '/newletter?componentState=complete', 
                '/newletter/complete'
            )
        })
    }
    
    return (
        <div className="check">
            <h2>청첩장 확인</h2>
            <Pink {...props} />
            <h2>향후 확인을 위한 정보 입력</h2>
            <div className="userdata">
                <input 
                    type="text" 
                    placeholder="이메일"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="비밀번호"
                    value={password1}
                    onChange={(event) => setPassword1(event.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="비밀번호 재입력"
                    value={password2}
                    onChange={(event) => setPassword2(event.target.value)}
                />
            </div>
            <Link prefetch as={`/newletter/template`} href={`/newletter?componentState=template`}>
                <button>이전 단계</button>
            </Link>
            {/* <Link prefetch as={`/newletter/complate`} href={`/newletter?componentState=complate`}> */}
            <button onClick={createLetter}>완료 하기</button>
            {/* </Link> */}
        </div>
    )
}

export default Check;