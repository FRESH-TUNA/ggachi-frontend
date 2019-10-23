import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

import Header from '../components/index/header'
import './letters.css'

function Letters(props) {
    const [letters, setLetters] = useState([]);
    const fetchData = async() => {
        axios({
            method: 'post',
            url: 'letters/mine',
            data: {...props.query}
        }).then((response) => {
            setLetters(response.data)
        }).catch((error) => {
            alert('아이디나 패스워드를 잘못 입력하셧습니다')
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="letters">
            <Header/>
            <h2>내가 쓴 청첩장</h2>
            <div className="letters-data">
                {letters.map((value, index) => {
                    return <Link 
                        prefetch as={'/letters/' + value.id} 
                        href={'/letter?pk=' + value.id}
                    ><h4>{value.bride} & {value.groom}</h4>
                    </Link>
                })}
            </div>
        </div>
    )
}

Letters.getInitialProps = ({ query }) => {
    return {query}
}
export default Letters