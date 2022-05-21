import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { ReactComponent as ListOpenIcon } from "./../svg/listOpencon.svg";
import { ReactComponent as ListCloseIcon } from "./../svg/listCloseIcon.svg";

const list = [
  {
    title: "收案紀錄表",
    item: [
      { name: "收案紀錄表", url: "/detail-list", editUrl: "/edit/detail" },
      { name: "新冠肺炎症狀評估表", url: "", editUrl: "" },
    ],
  },
  {
    title: "身心壓力表",
    item: [
      { name: "困擾溫度計(DT)", url: "", editUrl: "" },
      { name: "身心調適摘要表", url: "", editUrl: "/edit/psychosomatic-summary " },
      { name: "創傷篩檢問卷", url: "/trauma-list", editUrl: "" },
      { name: "焦慮自我評估量表", url: "", editUrl: "" },
      { name: "病人健康問卷", url: "", editUrl: "" },
      { name: "匹茲堡睡眠品質量表", url: "", editUrl: "" },
      { name: "身心壓力評估紀錄表", url: "", editUrl: "" },
    ],
  },
  {
    title: "社會心理表",
    item: [{ name: "社會心理資料評估", url: "", editUrl: "" }],
  },
  { title: "電話追蹤表", item: [{ name: "電話追蹤表", url: "", editUrl: "" }] },
  { title: "匯入", item: [{ name: "匯入資料", url: "", editUrl: "" }] },
];

const Layout = () => {
  const { pathname } = useLocation();
  const [layout, setLayout] = React.useState(true);

  React.useEffect(() => {
    if (!pathname.includes("/edit")) {
      setLayout(true);
    } else {
      setLayout(false);
    }
  }, [pathname]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {layout ? <SideComponent /> : <EditSideComponent />}
      {/* <SideComponent /> */}
      {/* <EditSideComponent /> */}
      <Outlet />
    </Box>
  );
};

function SideComponent() {
  const [open, setOpen] = React.useState();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (name) => {
    setOpen(name);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "290px",
        bgcolor: "#E4E4D7",
        minHeight: "100vh",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <List sx={{ pt: "165px" }}>
        {list.map(({ title, item }) => (
          <Box key={title}>
            <ListItemButton onClick={() => handleClick(title)}>
              <ListItemIcon
                sx={{ minWidth: "21px", padding: "0px 20px 0px 4px" }}
              >
                {open === title ? <ListOpenIcon /> : <ListCloseIcon />}
              </ListItemIcon>
              <ListItemText
                primary={title}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1.5rem",
                    color: "#425B99",
                    fontWeight: "bold",
                  },
                }}
              />
            </ListItemButton>
            <Collapse in={open === title} timeout="auto" unmountOnExit>
              {item.map(({ name, url }) => (
                <List
                  key={name}
                  component="div"
                  disablePadding
                  sx={{
                    background: location.pathname === url ? "#f4f4ea" : null,
                  }}
                >
                  <ListItemButton sx={{ pl: 8 }} onClick={() => navigate(url)}>
                    <ListItemText
                      primary={name}
                      sx={{
                        "& .MuiListItemText-primary": { fontSize: "1.25rem" },
                      }}
                    />
                  </ListItemButton>
                </List>
              ))}
            </Collapse>
          </Box>
        ))}
      </List>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Button
          sx={{ fontSize: "1.5rem", color: "#000", fontWeight: "bold" }}
          onClick={() => navigate("/trash")}
        >
          垃圾桶
        </Button>
        <Button sx={{ fontSize: "1.5rem", color: "#000", fontWeight: "bold" }}>
          登出
        </Button>
      </Box>
    </Box>
  );
}

const init = {
  edit: true,
  preview: false,
};

function EditSideComponent() {
  const [listOpen, setListOpen] = React.useState(init);
  const [listItemOpen, setListItemOpen] = React.useState();

  const navigate = useNavigate();
  const location = useLocation();

  const handleEditListClick = () => {
    setListOpen({ ...listOpen, edit: !listOpen.edit });
  };

  const handlePreviewListClick = () => {
    setListOpen({ ...listOpen, preview: !listOpen.preview });
  };

  const handleClick = (name) => {
    setListItemOpen(name);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "290px",
        bgcolor: "#E4E4D7",
        minHeight: "100vh",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <List sx={{ pt: "165px" }}>
        <ListItemButton onClick={handleEditListClick}>
          <ListItemIcon sx={{ minWidth: "21px", padding: "0px 20px 0px 4px" }}>
            {listOpen.edit ? <ListOpenIcon /> : <ListCloseIcon />}
          </ListItemIcon>
          <ListItemText
            primary="編輯"
            sx={{
              "& .MuiListItemText-primary": {
                fontSize: "1.5rem",
                color: "#994242",
                fontWeight: "bold",
              },
            }}
          />
        </ListItemButton>
        <Collapse in={listOpen.edit} timeout="auto" unmountOnExit>
          {list
            .filter((data) => data.title === "收案紀錄表")[0]
            .item.map(({ name, editUrl }) => (
              <List
                key={name}
                component="div"
                disablePadding
                sx={{
                  background: location.pathname === editUrl ? "#f4f4ea" : null,
                }}
              >
                <ListItemButton
                  sx={{ pl: 8 }}
                  onClick={() => navigate(editUrl)}
                >
                  <ListItemText
                    primary={name}
                    sx={{
                      "& .MuiListItemText-primary": { fontSize: "1.25rem" },
                    }}
                  />
                </ListItemButton>
              </List>
            ))}
        </Collapse>
        <ListItemButton onClick={handlePreviewListClick}>
          <ListItemIcon sx={{ minWidth: "21px", padding: "0px 20px 0px 4px" }}>
            {listOpen.preview ? <ListOpenIcon /> : <ListCloseIcon />}
          </ListItemIcon>
          <ListItemText
            primary="預覽"
            sx={{
              "& .MuiListItemText-primary": {
                fontSize: "1.5rem",
                color: "#994242",
                fontWeight: "bold",
              },
            }}
          />
        </ListItemButton>
        <Collapse in={listOpen.preview} timeout="auto" unmountOnExit>
          {list
            .filter(({ title }) => title !== "收案紀錄表")
            .map(({ title, item }) => (
              <Box key={title}>
                <ListItemButton onClick={() => handleClick(title)}>
                  <ListItemIcon
                    sx={{
                      minWidth: "21px",
                      padding: "0px 10px 0px 40px",
                      fontSize: "10px",
                    }}
                  >
                    {listItemOpen === title ? (
                      <ListOpenIcon width="15" />
                    ) : (
                      <ListCloseIcon width="15" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: "1.25rem",
                        color: "#A5807B",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItemButton>
                <Collapse
                  in={listItemOpen === title}
                  timeout="auto"
                  unmountOnExit
                >
                  {item.map(({ name, editUrl }) => (
                    <List
                      key={name}
                      component="div"
                      disablePadding
                      sx={{
                        background:
                          location.pathname === editUrl ? "#f4f4ea" : null,
                      }}
                    >
                      <ListItemButton
                        sx={{ pl: 11 }}
                        onClick={() => navigate(editUrl)}
                      >
                        <ListItemText
                          primary={name}
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontSize: "1rem",
                              fontWeight: "bold",
                            },
                          }}
                        />
                      </ListItemButton>
                    </List>
                  ))}
                </Collapse>
              </Box>
            ))}
        </Collapse>
      </List>
      <Box sx={{ display: "flex", justifyContent: "center", px: 2 }}>
        <Button
          sx={{ fontSize: "2rem", color: "#000", fontWeight: "bold" }}
          // onClick={() => navigate("/trash")}
        >
          結案
        </Button>
      </Box>
    </Box>
  );
}

export default Layout;