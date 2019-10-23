import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../components/index/header'
import Router from 'next/router'

import './index.css'

function Index(props) {
  const [modalState, setModalState] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className="home" onClick={() => document.getElementsByClassName('menu')[0].style.display = 'none'}>
      <Header />
      <img src="/static/img/bird_logo.svg"/>
      <h1>피카</h1>
      <p>맟춤형 청첩장 플랫폼</p>
      <div className="home-menu">
        <Link prefetch as={`/newletter/content`} href={`/newletter?componentState=content`}>
          <button className="newLetter">
            <img src="/static/img/newletter.svg"/>
            <p>새로운 청첩장</p>
          </button>
        </Link>
        {/* <Link href="/myletter"> */}
          <button className="myLetter" onClick={() => setModalState(!modalState)}>
            <img src="/static/img/my.svg"/>
            <p>내 청첩장</p>
          </button>
        {/* </Link> */}
        {/* <Link href="/mygift">
          <button className="myGiftToOther">
            <img src="/static/img/gift.svg"/>
            <p>선물한 내역</p>
          </button>
        </Link> */}
          {
            modalState ? 
            (<div className="modal" onClick={() => setModalState(!modalState)}>
            <div className="modal-body" onClick={(event) => event.stopPropagation()}>
              <h2>필요한 정보 입력</h2>
              <input 
                type="text" 
                value={email}
                placeholder="이메일 입력"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input 
                type="password" 
                value={password}
                placeholder="패스워드 입력"
                onChange={(event) => setPassword(event.target.value)}
              />
              <button 
                onClick={() => {
                  Router.push(
                    '/letters?email=' + email + '&password=' + password,
                    '/letters',
                  )
                }}
              >내가 쓴 청첩장 확인하기</button>
            </div>
            </div>) : (<div/>)
          }
      </div>
    </div>
  )
}

export default Index