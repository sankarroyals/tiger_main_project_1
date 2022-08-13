
import "./home.scss";
import Table from "../../components/table/Table";

import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router";
import Validation from "../../components/validation/Validation";
// added home





const Home = () => {


  const [projectName, setProjectname] = useState('')

  //fetch this project names from api
  const [projects, setProjects] = useState(['sankar', 'mukesh', 'tiger'])

  // user inputs into this dataset
  const [dataset, setDataset] = useState('')

  //used for column heading table
  const [columnHeader, setColumnHeader] = useState([])
  const [ExpectationHeader, setExpectationHeader] = useState([])

  //column rows
  const [rows, setRows] = useState([])

  //expectation rows
  const [expRows, setExprow] = useState([])

  const [showTable, setShowTable] = useState(false)

  // storing the column data
  const [col, setCol] = useState('')
  const [exp, setExp] = useState('')

  const [inputs, setInputs] = useState([])



  const handleChange = (e) => {
    // here api will be call to fetch input dataset name
    setProjectname(e.target.value)
    console.log(e.target.value)
  }


  const getData = (e) => {
    //fetch api and place response in rows variable using dataset variable

    setColumnHeader(['columns'])
    setExpectationHeader(['Expectation'])
    setExprow(["Expectation1", "Expectation2", "Expectation3", "Expectation4", "Expectation5"])
    setRows(['id', 'email', 'first_name', 'last_name', 'role'])

  }

  const showPop = (e) => {
    document.querySelector('.pop').classList.toggle('tran')
    document.querySelector('#overf').classList.toggle('overf')
    console.log(document.querySelector('#overf'))
  }

  // saving into local or api
  const saveData = () => {

    const data = {
      "id": 1,
      "column": col,
      "Expectation": exp,
      "Database": projectName
    }
    const local = [...JSON.parse(localStorage.getItem('savedData')), data]
    localStorage.setItem('savedData', JSON.stringify(local))
    document.querySelector('#overf').classList.toggle('overf')
    console.log(document.querySelector('#overf'))
    navigate('/saved')

  }





  const navigate = useNavigate()

  return (
    <div className="home">

      <div className="homeContainer">

        <div className="d">


          <div className="innerD">

            <div className="widgets">




              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Project Name</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={projectName}
                  onChange={handleChange}
                  label="Age"
                >
                  {projects.map(p => (<MenuItem value={p}>{p}</MenuItem>))}


                </Select>
              </FormControl>

              <TextField id="standard-basic" label="Data Set" variant="standard" value={dataset}
                onChange={(e) => {
                  setDataset(e.target.value)
                  console.log(e.target.value)
                }} />
              {projectName && (dataset && <Button variant="outlined" className="getB display-none" onClick={getData}>Get</Button>)}




            </div>
            <div>
              {col !== '' && (exp !== '' &&
                <table className="tb">

                  <thead>
                    <tr>
                      <td>Column</td>
                      <td>Expectation</td>
                      <td>Run</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody className="bg-dark p-1" >
                    <tr>
                      <td style={{marginTop:"-5px",marginLeft:"10px",color:"white"}}>
                        {col}

                      </td>
                      <td style={{marginTop:"-5px",color:"white"}}>{exp}</td>
                      <td style={{marginTop:"-5px",color:"white"}}>{projectName}</td>
                      <td style={{marginTop:"-5px",color:"white"}}>{dataset}</td>
                      <td style={{marginTop:"-10px"}}><Button 
                        onClick={showPop}>Run</Button></td>

                    </tr>
                  </tbody>


                </table>
              )

              }
            </div>

            <div style={{ width: "900px", marginLeft: "100px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Table header={columnHeader} data={rows} w="180px" setCol={setCol} />
              <Table header={ExpectationHeader} data={
                expRows
              } w="230px" setExp={setExp} />
            </div>
            <div class="pop">
              <div style={{ width: "100%" }} className="inpop">
                <div className="vali">
                  <i class="fa-solid fa-xmark" onClick={showPop} ></i>
                  <Validation setInputs={setInputs} saveData={saveData} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
