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

                
                <div className="date">
                <label for="jb-input-text">날짜</label>
                <div className="year">
                    <select name="yearlist" form="carform" onChange={(event) => this.props.setYear(event.target.value)}>
                        {(function (rows, i, len) {
                            while (i <= len) {
                                rows.push(<option value={i}>{i}</option>)
                                i++
                            }
                            return rows;
                        })([], 2019, 2030)}
                    </select>
                    <label for="jb-input-text">년</label>
                </div>
                <div className="month">
                    <select name="monthlist" form="carform" onChange={(event) => this.props.setMonth(event.target.value)}>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <label for="jb-input-text">월</label>
                </div>
                
                <div className="day">
                <select name="daylist" form="carform" onChange={(event) => this.props.setDay(event.target.value)}>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <label for="jb-input-text">일</label>
                </div>
                </div>
                
                
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