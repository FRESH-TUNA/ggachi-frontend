import React from 'react'
import Link from 'next/link'
import './complete.css'

function Complete(props) {
    return ( 
        <div className="complete">
            <img src="/static/img/success.jpg"/>
            <h4>청첩장 생성이 완료됬습니다!</h4>
            <h4>다음 링크를 공유하세요</h4>
            <Link prefetch as={'/letters/' + props.newLetterPk} href={'/letter?pk=' + props.newLetterPk}>
                <p>http://34.84.205.190/letters/{props.newLetterPk}</p>
            </Link>
        </div>
    )
}


export default Complete;