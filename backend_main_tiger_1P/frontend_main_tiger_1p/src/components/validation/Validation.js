import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import FormContainer from '../FormContainer'
import { makeStyles } from "@material-ui/core/styles";
import './validation.scss'


const Validation = ({setInputs,saveData}) => {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)

    const handleInputs = ()=>{
        setInputs([input1,input2])

        // calling saveData() which is in Home.js
        saveData()
        setInput1('')
        setInput2('')
    }

    return (



        <div style={{padding:"50px 0" , display:"flex",justifyContent:"center",alignItems:"center",}} className="cover">
            <FormContainer>
                    <Form>
                    <p>Enter the inputs</p>
                    <input  type="number" value={input1}  required
                        onChange={(e) => {
                            setInput1(e.target.value)
                            console.log(e.target.value)
                        }} 
                        autoComplete="off"
                            style={{display:"block",margin:"20px",width:"100%"}}
                        />

                    <input type="number" value={input2}
                   
                        onChange={(e) => {
                            setInput2(e.target.value)
                            console.log(e.target.value)
                            
                        }}  autoComplete="off"
                            style={{display:"block",margin:"20px",width:"100%",}}/>


                   {input1 > 0 ? 
                   (input2>0 ? 
                   <Button variant='outlined' style={{marginLeft:"50px"}} 
                    onClick={handleInputs}
                    >Save</Button>
                    :

                    <Button variant='outlined' disabled style={{marginLeft:"50px",color:"red"}}>Please Enter Inputs</Button>
                    )
                    :
                    <Button variant='outlined' style={{marginLeft:"50px",color:"red"}} disabled
                    
                    >Please Enter Inputs</Button>
                    }
                    </Form>



            </FormContainer></div>
    )
}

export default Validation