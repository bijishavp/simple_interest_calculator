
import { useState } from 'react';
import './App.css';
import { Button, Stack, TextField } from '@mui/material';

function App() {
  const [principle, setPriciple] =useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setInterest] = useState("")

  const calculateInterest = (e) => {

    // automatic reloading/refresh events get here and prevented it
    e.preventDefault()
    // showing feteched values from below i/p box in js code part
    console.log(principle, rate, year);

    if (!principle||!rate||!year) {

      alert("please fill the form completely")

    }
    else{
      setInterest(principle*rate*year/100)
    }
  }


  const resetForm=()=>{
    setPriciple("")
    setRate("")
    setYear("")
    setInterest(0)
  }
  return (
    <>
      <div className="app">
        <div className="container">

          <div className='heading-text'>

            <h1 className='title'>SIMPLE_INTEREST_CALCULATOR</h1>
            

          </div>
          <div className='amount-card'>

            <div className='card-text'>

            <h3>Total Simple Interest</h3>
              <h1 className='total-amount'>₹ {interest}</h1>
              
            </div>
    
          </div>
          <form onSubmit={calculateInterest} >
            {/* to hold text field */}
            {/* form submit when button clicked */}

            <div className='text-fields'>

              {/* principle amount */}
              <div className='input'>
                {/* event onchange....value assigned to this value should go to principle in usestae()so call setprinciple fn..event nadakmbo event value will be in target..event nu adthulla fn vech upadate cheyyum */}
                <TextField value={principle||""} onChange={e => setPriciple(e.target.value)}
                  className='outlined-basic' id="outlined-basic" label="Principle Amount" variant="outlined"  />

              </div>
              {/* interest */}
              <div className='input'>

                <TextField value={rate||""} onChange={e => setRate(e.target.value)}
                  className='outlined-basic' id="outlined-basic" label="Rate Of Interest(p.a)%" variant="outlined" />

              </div>
              {/* year*/}
              <div className='input'>

                <TextField value={year||""} onChange={e => setYear(e.target.value)}
                  className='outlined-basic' id="outlined-basic" label="TimePeriod(yr)" variant="outlined" />

              </div>

            </div>
            {/* button */}

            <div className='btn-group'>
              <Stack direction="row" spacing={2}>
                {/* button click for submit-- give type='submit' */}
                <Button className='btn' type='submit' style={{ backgroundColor: ' rgb(15, 3, 66)'}} variant="outlined">Calculate</Button>
                <Button onClick={resetForm} className='btn'style={{ backgroundColor: 'rgb(190, 7, 7)'}} variant="outlined">Reset</Button>
              </Stack>
            </div>

          </form>


        </div>
      </div>
    </>
  );
}

export default App;
