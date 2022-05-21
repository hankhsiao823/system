import { useEffect } from "react";
import { data } from "../data";
import { useLocation } from "react-router-dom";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

export const Table = ({ tableRef }) => {
  const location = useLocation();
  $.DataTable = require("datatables.net");

  window.clickHandle = (data) => {
    console.log(data);
  };

  useEffect(() => {
    function genTableFuncHTML(data, type, row, meta) {
      switch (location.pathname) {
        case "/information":
          return `<div class='func' data-pid=${row[0]}>
                    <div class='item'>
                      <img src='assets/images/eye.svg' width='22' height='22'/>
                      <button class='detail' onclick="clickHandle('detail:${row[0]}')">查看</button>
                    </div>
                    <div class='item'>
                      <img src='assets/images/edit.svg' width='14' height='14'/>
                      <button class='edit' onclick="clickHandle('edit:${row[0]}')">修改</button>
                    </div>
                    <div class='item'>
                      <img src='assets/images/remove.svg' width='14' height='14'/>
                      <button class='remove' onclick="clickHandle('remove:${row[0]}')">刪除</button>
                    </div>
                  </div>
                  `;
        case "/trash":
          return `<div class='func' data-pid=${row[0]}>
                    <div class='item'>
                      <img src='assets/images/eye.svg' width='22' height='22'/>
                      <button class='detail' onclick="clickHandle('detail:${row[0]}')">查看</button>
                    </div>
                    <div class='item'>
                      <img src='assets/images/recover.svg' width='14' height='14'/>
                      <button class='recover' onclick="clickHandle('recover:${row[0]}')">還原</button>
                    </div>
                  </div>`;
        default:
          break;
      }
    }
    $(tableRef.current).DataTable({
      data,
      columns: [
        { title: "病歷號" },
        { title: "姓名" },
        { title: "就診日期" },
        {
          title: "註記",
          orderable: false,
        },
        {
          title: "功能",
          render: genTableFuncHTML,

          orderable: false,
        },
      ],
      // searching: false,
      paging: false,
      info: false,
      destroy: true,
    });
  }, [tableRef, location.pathname]);
};
