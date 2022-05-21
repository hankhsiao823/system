import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, ButtonBase, Divider } from "@mui/material";

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: "2020-01-05",
//         customerId: "11091700",
//         amount: 3,
//       },
//       {
//         date: "2020-01-02",
//         customerId: "Anonymous",
//         amount: 1,
//       },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& td": { border: "2px solid black" } }}>
//         <TableCell sx={{ width: "220px" }}>{row.name}</TableCell>
//         <TableCell sx={{ flex: 1 }} align="center">
//           {row.protein}
//         </TableCell>
//         <TableCell sx={{ width: "63px" }}>
//           <IconButton size="small" onClick={() => setOpen(!open)}>
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//       </TableRow>
//       {/* <Box sx={{ paddingBottom: "10px" }} >
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <Box sx={{ display: "flex",width:'100%',border: "2px solid black" }}>
//             <Box>收案紀錄表</Box>
//             <Box sx={{ display: "flex" }}>
//               <Box >
//                 <Button sx={{color:'#699B52'}} startIcon={<AddIcon/>}>新增</Button>
//               </Box>
//               <Box>
//                 <Button sx={{color:'#647A7A'}} startIcon={<RemoveRedEyeOutlinedIcon/>}>查看</Button>
//               </Box>
//             </Box>
//           </Box>
//         </Collapse>
//       </Box> */}
//       <TableRow sx={{ "& td": { padding: "0px" } }}>
//         <TableCell style={{ paddingBottom: 10, paddingTop: 5 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Table>
//               <Box
//                 sx={{
//                   border: "2px solid black",
//                   borderRadius:'25px'
//                 }}
//               >
//                 <TableCell sx={{ width: "220px" }}>
//                   <Box>收案紀錄表</Box>
//                 </TableCell>
//                 <TableCell sx={{ width: "calc(100% - 220px)" }} align="right">
//                   <Box
//                     sx={{
//                       display: "flex",
//                       width: "100%",
//                       justifyContent: "flex-end",
//                     }}
//                   >
//                     <Box>
//                       <Button sx={{ color: "#699B52" }} startIcon={<AddIcon />}>
//                         新增
//                       </Button>
//                     </Box>
//                     <Box>
//                       <Button
//                         sx={{ color: "#647A7A" }}
//                         startIcon={<RemoveRedEyeOutlinedIcon />}
//                       >
//                         查看
//                       </Button>
//                     </Box>
//                   </Box>
//                 </TableCell>
//               </Box>
//             </Table>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function CollapsibleTable() {
//   return (
//     <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow sx={{ "& th": { border: "2px solid black" } }}>
//             <TableCell sx={{ width: "220px" }}>
//               Dessert (100g serving)
//             </TableCell>
//             <TableCell sx={{ flex: 1, mr: "63px" }} align="right">
//               Protein&nbsp;(g)
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function CreateListTable() {
  return (
    <TableContainer sx={{ minWidth: "280px", width: "100%", px: 4 }}>
      <Table sx={{ overflow: "hidden" }}>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                border: "3px solid #5E574E",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#5E574E",
              },
            }}
          >
            <TableCell align="center">姓名</TableCell>
            <TableCell align="center">病歷號</TableCell>
            <TableCell align="center">表單</TableCell>
            <TableCell align="center">功能</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              sx={{
                "& td": {
                  border: "3px solid #5E574E",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                },
              }}
            >
              <TableCell align="center" sx={{ width: "20%" }}>
                王大明
              </TableCell>
              <TableCell align="center" sx={{ width: "20%" }}>
                123456789
              </TableCell>
              <TableCell align="center" sx={{ width: "30%" }}>
                收案紀錄表
              </TableCell>
              <TableCell align="center" sx={{ width: "20%" }}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <Button
                      sx={{
                        color: "#699B52",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        lineHeight: "1.25rem",
                      }}
                      startIcon={<AddIcon />}
                    >
                      新增
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        color: "#647A7A",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        lineHeight: "1.25rem",
                      }}
                      startIcon={<RemoveRedEyeOutlinedIcon />}
                    >
                      查看
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function DetailListTable() {
  return (
    <TableContainer sx={{ minWidth: "280px", width: "100%", px: 4 }}>
      <Table sx={{ overflow: "hidden" }}>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                border: "3px solid #5E574E",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#5E574E",
              },
            }}
          >
            <TableCell align="center">姓名</TableCell>
            <TableCell align="center">病歷號</TableCell>
            <TableCell align="center">功能</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              sx={{
                "& td": {
                  border: "3px solid #5E574E",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                },
              }}
            >
              <TableCell align="center" sx={{ width: "20%" }}>
                王大明
              </TableCell>
              <TableCell align="center" sx={{ width: "3 0%" }}>
                123456789
              </TableCell>
              <TableCell align="center" sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <Button
                      sx={{
                        color: "#647A7A",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        lineHeight: "1.25rem",
                      }}
                      startIcon={<RemoveRedEyeOutlinedIcon />}
                    >
                      查看
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        color: "#647A7A",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        lineHeight: "1.25rem",
                      }}
                      startIcon={<DriveFileRenameOutlineOutlinedIcon />}
                    >
                      修改
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        color: "#647A7A",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        lineHeight: "1.25rem",
                      }}
                      startIcon={<DeleteOutlineOutlinedIcon />}
                    >
                      刪除
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function TrashListTable() {
  return (
    <TableContainer sx={{ minWidth: "280px", width: "100%", px: 4 }}>
      <Table sx={{ overflow: "hidden" }}>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                border: "3px solid #5E574E",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#5E574E",
              },
            }}
          >
            <TableCell align="center">姓名</TableCell>
            <TableCell align="center">病歷號</TableCell>
            <TableCell align="center">功能</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              sx={{
                "& td": {
                  border: "3px solid #5E574E",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                },
              }}
            >
              <TableCell align="center" sx={{ width: "20%" }}>
                王大明
              </TableCell>
              <TableCell align="center" sx={{ width: "3 0%" }}>
                123456789
              </TableCell>
              <TableCell align="center" sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <Button
                      sx={{
                        color: "#647A7A",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        lineHeight: "1.25rem",
                      }}
                      startIcon={<RemoveRedEyeOutlinedIcon />}
                    >
                      查看
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        color: "#647A7A",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        lineHeight: "1.25rem",
                      }}
                    >
                      還原
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { CreateListTable, DetailListTable, TrashListTable };
