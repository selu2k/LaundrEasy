//Room no, reg no, no of clothes, token no, yes|no, 
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Input } from '@mui/material';
import axios from "axios";
//Employee css
import "../styles/empDashboard.css";

//For Approved
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const columns = [
    { id: 'room', label: 'Room No', minWidth: 170 },
    { id: 'userid', label: 'Reg No.', minWidth: 100 },
    {
        id: 'clothescount',
        label: 'Number of Clothes',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'tokenNo',
        label: 'Token Number',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'requestAct',
        label: 'Action',
        minWidth: 170,
        align: 'right',
    },
];

/* Utility Functions */

function yesClick(tokenno, userid) {
    // console.log(tokenno);
    // // let token = tokenno.JSON;
    // console.log(tokenno?.[userid]);
    // console.log(userid);
    const formData = new FormData();
    formData.append("tokenno", tokenno?.[userid]);
    formData.append("userid", userid);
    axios
        .post('http://localhost/laundashphp/empaccept.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            response = response.data;
            if (response === "Invalid") {
                alert("Invalid Token Number");
            }
        });

    // When yes button is clicked
};

function noClick(userid) {
    const formData = new FormData();
    formData.append("userid", userid);
    axios
        .post('http://localhost/laundashphp/empdeny.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
};


function clothesReady(tokenno) {
    // console.log(tokenno);
    const formData = new FormData();
    formData.append("tokenno", tokenno);
    axios
        .post('http://localhost/laundashphp/clothesready.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    // For when clothes are ready
}
function clothesCollected(tokenno) {
    // console.log(tokenno);
    const formData = new FormData();
    formData.append("tokenno", tokenno);
    axios
        .post('http://localhost/laundashphp/clothescollected.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    // For when clothes are ready
}



function Employee() {
    // console.log(rows);
    const [Data, getData] = useState(null);
    const [Data2, getData2] = useState(null);
    const [Data3, getData3] = useState(null);
    const [tok, setTok] = useState();
    // function randomToken(){
    //     var ran = Math.floor(1000 + Math.random() * 9000);
    //     return ran;
    // };
    function handleTokenNumber(event,user) {
        let newArr = [];
        newArr[user] = event.target.value;
        // console.log(newArr);
        setTok(newArr);
        // console.log(tok)
    };

    const getAllData3 = () => {
        axios
            .get('http://localhost/laundashphp/empgetcollected.php')
            .then((response) => {
                // console.log(response.data);
                const allDesc3 = response.data;
                getData3(allDesc3);
                // console.log(allDesc);
                // console.log(Description);
            });
    };

    useEffect(() => {
        getAllData3();
        const interval = setInterval(() => {
            getAllData3();
        }, 3000);
        return () => clearInterval(interval);
    }, [])


    const getAllData2 = () => {
        axios
            .get('http://localhost/laundashphp/empgetready.php')
            .then((response) => {
                // console.log(response.data);
                const allDesc2 = response.data;
                getData2(allDesc2);
                // console.log(allDesc);
                // console.log(Description);
            });
    };

    useEffect(() => {
        getAllData2();
        const interval = setInterval(() => {
            getAllData2();
        }, 3000);
        return () => clearInterval(interval);
    }, [])


    const getAllData = () => {
        axios
            .get('http://localhost/laundashphp/empgetpending.php')
            .then((response) => {
                // console.log(response.data);
                const allDesc = response.data;
                getData(allDesc);
                // console.log(allDesc);
                // console.log(Description);
            });
    };

    useEffect(() => {
        getAllData();
        const interval = setInterval(() => {
            getAllData();
        }, 3000);
        return () => clearInterval(interval);
    }, [])


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <div className="dashboard">
                <div className="dashboard__wrapper">
                    <h2 className="dashboard__title">Current Requests</h2>
                    <StyledEngineProvider injectFirst>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead sx={{background: 'red !important'}}>
                                        <TableRow >
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {Data
                                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((Data) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1}>
                                                        {columns.map((column) => {

                                                            const val = column.id;
                                                            let value = "Hi";
                                                            if (column.id === 'room') {
                                                                value = Data.room;
                                                            } else if (column.id === 'userid') {
                                                                value = Data.userid;
                                                            } else if (column.id === 'clothescount') {
                                                                value = Data.clothescount;
                                                            } else if (column.id === 'tokenNo') {
                                                                value = 5;
                                                            } else if (column.id === 'requestAct') {
                                                                value = 6;
                                                            }
                                                            // const ran = randomToken();

                                                            // console.log(value);
                                                            return (
                                                                <TableCell key={val} align={column.align}>
                                                                    {val === 'requestAct' ? (
                                                                        <>
                                                                            <Button variant="contained" color="success" size="small" onClick={() => { yesClick(tok, Data.userid); }}>
                                                                                Yes
                                                                            </Button>  <Button variant="outlined" color="error" size="small" onClick={() => { noClick(Data.userid) }}>
                                                                                No
                                                                            </Button>
                                                                        </>) : (val === "tokenNo") ? (<Input type="number" id="tokenInput"
                                                                            value={tok?.user} placeholder={5} onChange={(e)=>{handleTokenNumber(e,Data.userid)}} />) : (
                                                                        column.format && typeof value === 'string'
                                                                            ? column.format(value)
                                                                            : value)
                                                                    }
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={Data?.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </StyledEngineProvider>
                </div>



                {/* Approved Requests */}


                <br /><br /><br />                           
                <div className="dashboard__wrapper">
                    <h2 className="dashboard__title">Approved Requests</h2>
                    <StyledEngineProvider injectFirst>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {Data2
                                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((Data2) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1}>
                                                        {columns.map((column) => {
                                                            const val = column.id;
                                                            let value = "Hi";
                                                            if (column.id === 'room') {
                                                                value = Data2.room;
                                                            } else if (column.id === 'userid') {
                                                                value = Data2.userid;
                                                            } else if (column.id === 'clothescount') {
                                                                value = Data2.clothescount;
                                                            } else if (column.id === 'tokenNo') {
                                                                value = Data2.tokenno;
                                                            } else if (column.id === 'requestAct') {
                                                                value = Data2.userid;
                                                            }
                                                            return (
                                                                <TableCell key={val} align={column.align}>
                                                                    {val === 'requestAct' ? (
                                                                        <>
                                                                            <Button variant="contained" startIcon={<TaskAltIcon />} id={value} onClick={() => { clothesReady(Data2.tokenno); }}> Ready</Button>
                                                                        </>) : (
                                                                        column.format && typeof value === 'string'
                                                                            ? column.format(value)
                                                                            : value)
                                                                    }
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={Data2?.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </StyledEngineProvider>
                </div>


                {/* Collected Requests */}

                <br /><br /><br />
                <div className="dashboard__wrapper">
                    <h2 className="dashboard__title">Laundry Collection Requests</h2>
                    <StyledEngineProvider injectFirst>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {Data3
                                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((Data3) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1}>
                                                        {columns.map((column) => {
                                                            const val = column.id;
                                                            let value = "Hi";
                                                            if (column.id === 'room') {
                                                                value = Data3.room;
                                                            } else if (column.id === 'userid') {
                                                                value = Data3.userid;
                                                            } else if (column.id === 'clothescount') {
                                                                value = Data3.clothescount;
                                                            } else if (column.id === 'tokenNo') {
                                                                value = Data3.tokenno;
                                                            } else if (column.id === 'requestAct') {
                                                                value = Data3.userid;
                                                            }
                                                            return (
                                                                <TableCell key={val} align={column.align}>
                                                                    {val === 'requestAct' ? (
                                                                        <>
                                                                            <Button variant="contained" startIcon={<TaskAltIcon />} id={value} onClick={() => { clothesCollected(Data3.tokenno); }}> Collected</Button>
                                                                        </>) : (
                                                                        column.format && typeof value === 'string'
                                                                            ? column.format(value)
                                                                            : value)
                                                                    }
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={Data3?.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </StyledEngineProvider>
                </div>
            </div>
        </>
    );
};

export default Employee;