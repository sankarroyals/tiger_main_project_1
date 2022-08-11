import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Search } from "js-search";

const List = () => {
  const [pageN, setPage] = useState(2)
  const [load, setLoad] = useState(false)
  const [rows, setRows] = useState([{
    "id": 1,
    "name": "Sankar",
    "parent_project_name": "Weather Forecast",
    "status": "approved",
    "pipeline_status": "approved",
    "performance_status": "approved",
    "last_run_status": "04-Apr-2022 11:03 AM",
    "developer": "Smith White",
    "control": "play"
  }]);




  const [search, setSearch] = useState([...rows])
  const [se, setSe] = useState('')
  // console.log(search.length)









 



 
// var sea = new Search('isbn');
// sea.addIndex('title');
// sea.addIndex(['author', 'name']);
// sea.addIndex('tags')
 
// sea.addDocuments([{
//   isbn: '9781597226769',
//   title: 'The Great Gatsby',
//   author: {
//     name: 'F. Scott Fitzgerald'
//   },
//   tags: ['bot', 'inspirational']
// },{
//   isbn: '0307474275',
//   title: 'The DaVinci Code',
//   author: {
//     name: 'Dan Brown'
//   },
//   tags: ['book', 'mystery']
// } , {
//   isbn: '074349346X',
//   title: 'Angels & Demons',
//   author: {
//     name: 'Dan Brown',
//   },
//   tags: ['bot', 'mystery']
// }]);
 
  
// console.log(sea.search('angel') )// [angelsAndDemons, theDaVinciCode]





  const changeSe = (e) => {
    setSe(e.target.value)
    if (e.target.value !== '') {

      // USING NORMAL SEARCH METHOD BY FILTER

      // const d = rows.filter(s => s.name.toLowerCase().includes(e.target.value) || s.parent_project_name.toLowerCase().includes(e.target.value)
      //   || s.developer.toLowerCase().includes(e.target.value))

        
      // using "js-search" npm package
  
      var sea= new Search('id')
      sea.addIndex('name')
      sea.addIndex('developer')
      sea.addIndex( 'parent_project_name')

      sea.addDocuments([...rows])
  
      const d = sea.search(e.target.value)


      setSearch(d)
    
    }
    else {
      setSe('')
      setSearch([...rows])
    }

  }


  const selecting = (e) => {
    setPage(e.target.value)
  }


  const datas = async () => {
    const s = document.documentElement.scrollHeight - window.innerHeight
    const sc = window.scrollY


    if (Math.ceil(sc) === s) {
     
        setPage(pageN+1)
        setLoad(false)
       
    }
    

  }

  if (pageN < rows.length) {
    

    setTimeout(() => {
      setLoad(true)

      window.addEventListener('scroll', datas)

    }, 1000)
  }





  return (

    <>
      <div>

        {/* <input className="in" placeholder="Search by columns..." autoComplete="off" type="text" name="search" value={se} onChange={changeSe} /> */}
        <select onChange={selecting} style={{
          padding: "10px", border: "none", borderBottom: "2px solid rgb(114, 111, 111)", outline: "none"
        }}>
          <option>Paginate</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="t">
              <TableCell className="tableCell head">Model Name</TableCell>
              <TableCell className="tableCell head">Parent Project</TableCell>
              <TableCell className="tableCell head">Status</TableCell>
              <TableCell className="tableCell head">Pipeline Health</TableCell>
              <TableCell className="tableCell head">Performance Drift</TableCell>
              <TableCell className="tableCell head">Left Run Status</TableCell>
              <TableCell className="tableCell head">Left Run Status</TableCell>
              <TableCell className="tableCell head">Devloper</TableCell>
              <TableCell className="tableCell head">Control Panel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (

              <>
                {index < pageN && <TableRow key={row.id}>

                  <TableCell className="tableCell bo">{row.name}</TableCell>

                  <TableCell className="tableCell bo">{row.parent_project_name}</TableCell>

                  <TableCell className="tableCell">
                    {row.status === 'approved' ?
                      <span className={`status ${row.status}`}>
                        <i className="fas fa-check"></i>
                      </span>
                      :

                      (row.status === 'pending' ?


                        <span className={`status ${row.status}`}><i className="fas fa-exclamation"></i></span>

                        :
                        <span className={`status ${row.status}`}><i className="fa-solid fa-xmark"></i></span>

                      )

                    }
                  </TableCell>
                  <TableCell className="tableCell">
                    {row.pipeline_status === 'approved' ?
                      <span className={`status ${row.pipeline_status}`}>
                        <i class="fas fa-check"></i>
                      </span>
                      :

                      (row.status === 'pending' ?


                        <span className={`status ${row.pipeline_status}`}><i className="fas fa-exclamation"></i></span>

                        :
                        <span className={`status ${row.pipeline_status}`}><i className="fa-solid fa-xmark"></i></span>

                      )

                    }
                  </TableCell>
                  <TableCell className="tableCell">
                    {row.performance_status === 'approved' ?
                      <span className={`status ${row.performance_status}`}>
                        <i class="fas fa-check"></i>
                      </span>
                      :

                      (row.status === 'pending' ?


                        <span className={`status ${row.performance_status}`}><i className="fas fa-exclamation"></i></span>

                        :
                        <span className={`status ${row.performance_status}`}><i className="fa-solid fa-xmark"></i></span>

                      )

                    }
                  </TableCell>
                  <TableCell className="tableCell bo">{row.last_run_status}</TableCell>

                  <TableCell className="tableCell">
                    <div className="boxC">

                      <div className="box"
                        onClick={(e) => {
                          if (e.target.checked) {
                            console.log('checked')
                          }
                          else {
                            console.log("unchecked")
                          }
                        }}
                      ></div>
                      <div className="box"
                        onClick={(e) => {
                          if (e.target.checked) {
                            console.log('checked')
                          }
                          else {
                            console.log("unchecked")
                          }
                        }}

                      ></div>
                      <div className="box"
                        onClick={(e) => {
                          if (e.target.checked) {
                            console.log('checked')
                          }
                          else {
                            console.log("unchecked")
                          }
                        }}

                      ></div>
                      <div className="box"
                        onClick={(e) => {
                          if (e.target.checked) {
                            console.log('checked')
                          }
                          else {
                            console.log("unchecked")
                          }
                        }}

                      ></div>
                      <div className="box"
                        onClick={(e) => {
                          if (e.target.checked) {
                            console.log('checked')
                          }
                          else {
                            console.log("unchecked")
                          }
                        }}

                      ></div>

                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{row.developer}</TableCell>
                  <TableCell className="tableCell plays">
                    <i className="fa-solid fa-stop stop"></i>
                    {row.control === 'play' && <i className="fa-solid fa-play play"></i>}
                    {row.control === 'pause' && <i className="fa-solid fa-pause pause"></i>}

                  </TableCell>
                </TableRow>}
              </>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
      {load === true && <p style={{textAlign:"center",padding:"15px"}}>Loading More...</p>}
    </>
  );
};

export default List;
