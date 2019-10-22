import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import * as NewLetterStore from '../../states/newLetterStore/newLetterAction'

import './content.css'


class Content extends React.Component {
    render() {
        return ( 
            <div className="content">
                <h2>정보 입력</h2>
                <input 
                    type="text" 
                    placeholder="신부 이름" 
                    value={this.props.bride}
                    onChange={(event) => this.props.setBride(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="신랑 이름" 
                    value={this.props.groom}
                    onChange={(event) => this.props.setGroom(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="결혼식장 이름" 
                    value={this.props.placeName}
                    onChange={(event) => this.props.set_place_name(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="결혼식장 주소" 
                    value={this.props.place}
                    onChange={(event) => this.props.set_place_address(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="시각" 
                    value={this.props.time}
                    onChange={(event) => this.props.set_start_time(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="버스 교통 이용방법" 
                    value={this.props.bus}
                    onChange={(event) => this.props.setHowtobus(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="지하철 교통 이용방법" 
                    value={this.props.subway}
                    onChange={(event) => this.props.setHowtosubway(event.target.value)}
                />
                <label for="jb-input-text">메세지</label>
                <textarea 
                    onChange={(event) => this.props.setMessage(event.target.value)}
                >{this.props.message}
                </textarea>
                <Link prefetch as={`/newletter/template`} href={`/newletter?componentState=template`}>
                    <button>다음 단계</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)