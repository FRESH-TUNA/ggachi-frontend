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
        <h1>서비스</h1>
        <div className="home-menu">
          <Link href="/newletter"><button className="newLetter">새 청첩장</button></Link>
          <Link href="/myletter"><button className="myLetter">내 청첩장</button></Link>
          <Link href="/mygift"><button className="myGiftToOther">선물한 내역</button></Link>
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