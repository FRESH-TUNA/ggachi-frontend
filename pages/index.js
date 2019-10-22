import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Auth from '../states/authStore/authAction'
import Link from 'next/link'
import Header from '../components/index/header'
import './index.css'

class Index extends React.Component {
  render() {
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
          <Link href="/myletter">
            <button className="myLetter">
              <img src="/static/img/my.svg"/>
              <p>내 청첩장</p>
            </button>
          </Link>
          <Link href="/mygift">
            <button className="myGiftToOther">
              <img src="/static/img/gift.svg"/>
              <p>선물한 내역</p>
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    Auth: bindActionCreators(Auth, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)