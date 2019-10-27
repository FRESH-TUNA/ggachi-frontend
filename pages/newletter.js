import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from "react-redux";
import * as NewLetterAction from '../states/newLetterStore/newLetterAction'
import * as Auth from '../states/authStore/authAction'

import Header from '../components/index/header'
import Check from '../components/newletter/check'
import Content from '../components/newletter/content'
import Template from '../components/newletter/template'
import Complete from '../components/newletter/complete'
import './newletter.css'

function WriteLetter(props) {
  const [count, setCount] = useState(0);
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const [bride, setBride] = useState('');
  const [groom, setGroom] = useState('');
  const [place_address, set_place_address] = useState('');
  const [place_name, set_place_name] = useState('');
  const [start_time, set_start_time] = useState('');
  const [message, setMessage] = useState('');
  const [howtobus, setHowtobus] = useState('');
  const [howtosubway, setHowtosubway] = useState('');
  const [template, setTemplate] = useState(1);
  const [newLetterPk, setNewLetterPk] = useState('');

  const [year, setYear] = useState('2019');
  const [month, setMonth] = useState('01');
  const [day, setDay] = useState('01');

  const getComponent = () => {
    switch (props.query.componentState) {
      case 'content':
        return <Content 
          bride={bride} setBride={setBride}
          groom={groom} setGroom={setGroom}
          place_address={place_address} set_place_address={set_place_address}
          place_name={place_name} set_place_name={set_place_name}
          start_time={start_time} set_start_time={set_start_time}
          message={message} setMessage={setMessage}
          howtobus={howtobus} setHowtobus={setHowtobus}
          howtosubway={howtosubway} setHowtosubway={setHowtosubway}
          year={year} setYear={setYear}
          month={month} setMonth={setMonth}
          day={day} setDay={setDay}
        />
      case 'template':
        return <Template
          template={template} setTemplate={setTemplate}
        />
      case 'check':
          const finalData = {
            bride, groom, place_address,
            place_name, start_time, message,
            howtobus, howtosubway, template, 
            year, month, day
          }
        return <Check 
          {...finalData} 
          setNewLetterPk={setNewLetterPk}
          newLetterPk={newLetterPk}
        />
      case 'complete':
        console.log(newLetterPk)
        return <Complete newLetterPk={newLetterPk}/>
    }
  }

  return (
    <div className="newletter">
      <Header />
      {getComponent()}
    </div>
  );
}

WriteLetter.getInitialProps = ({ query }) => {
  return {query}
}

export default WriteLetter;
