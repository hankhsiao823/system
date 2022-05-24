import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Box, Button, Divider, Typography } from "@mui/material";
import { ReactComponent as Edit } from "./../svg/edit.svg";

export const TraumaPage = () => {
  const methods = useForm({ mode: "onBlur" });

  const { handleSubmit } = methods;

  // const onSubmit = async (data) => {
  //   await fetch(
  //     "https://1e01-2001-b011-4007-19c5-5092-66f9-5015-4a08.ngrok.io/api/createcase",
  //     {
  //       method: "POST",
  //       mode: "cors",
  //       body: JSON.stringify(data),
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   alert(data);
  // };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ flex: 1, overflowY: "scroll", padding: "0px 0px 56px 0px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          lineHeight: 1,
          padding: "56px 0 12px 39px",
        }}
      >
        <div>
          <Typography
            sx={{
              margin: 0,
              color: "#5e574d",
              fontSize: { xs: "1.5rem", sm: "2.5rem" },
              fontWeight: "bold",
            }}
            component="h1"
          >
            後新冠特別門診管理系統
          </Typography>
        </div>
      </Box>
      <Divider sx={{ width: "calc(100% - 39px)" }} />
      <Box sx={{ display: "flex", alignItems: "center", my: "33px" }}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            lineHeight: "2.5rem",
            ml: "39px",
            mr: "23px",
          }}
        >
          王大明
        </Typography>
        <Typography
          sx={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            alignSelf: "end",
          }}
        >
          創傷篩檢問卷
        </Typography>
        <Button
          startIcon={<Edit />}
          sx={{ fontSize: "1.5rem", color: "#6A594F", ml: "auto", mr: "61px" }}
        >
          修改
        </Button>
      </Box>
      <Typography
        sx={{ fontSize: "1.5rem", fontWeight: "bold", mx: "49px", mb: "40px" }}
      >
        請你思考下列創傷事件後有時會出現的反應，本問卷的目的是關心你在經歷這項發生在身上的創傷事件後所出現的反應。請你判斷在過去一週是否曾經歷以下所列列出的任何情形至少兩次。
      </Typography>
      <Typography
        sx={{ fontSize: "1.5rem", fontWeight: "bold", mx: "49px", mb: "40px" }}
      >
        如果任一題敘述的情形在過去一週至少出現兩次，勾選「是」
        ；若此情形只出現一次或完全沒有出現，勾選「否」。
      </Typography>
      <Typography
        sx={{ fontSize: "1.5rem", fontWeight: "bold", mx: "49px", mb: "40px" }}
      >
        （是 = 過去一週至少兩次；否 = 過去一週僅一次或未出現）
      </Typography>
      <FormProvider {...methods}>
        <form
          id="myform"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                textAlign: "center",
                background: "#A5807B",
                borderRadius: "10px",
                p: "3px",
              }}
            >
              <Box
                sx={{
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  "& td": {
                    border: "4px solid #A5807B",
                    background: "#f4f4ea",
                    fontSize: "1.25rem",
                  },
                }}
                component="table"
              >
                <Box component="tbody">
                  <Box
                    component="tr"
                    sx={{
                      "& td": {
                        color: "#fff",
                        background: "#B89E9B",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    <Box
                      component="td"
                      sx={{
                        borderTopLeftRadius: "10px",
                        width: "74px",
                        height: "53px",
                      }}
                    >
                      是
                    </Box>
                    <Box component="td" sx={{ width: "74px" }}>
                      否
                    </Box>
                    <Box component="td" sx={{ width: "800px" }}>
                      症狀
                    </Box>
                  </Box>

                  <ItemRow />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 7 }}>
            <Button
              sx={{
                color: "#fff",
                background: "#95B2B5",
                width: "100px",
                height: "35px",
                borderRadius: "15px",
                mr: 5,
                "&:hover": { background: "#95B2B5", opacity: 0.9 },
              }}
              type="submit"
            >
              儲存變更
            </Button>
            <Button
              sx={{
                color: "#fff",
                background: "#E2A086",
                width: "100px",
                height: "35px",
                borderRadius: "15px",
                "&:hover": { background: "#E2A086", opacity: 0.9 },
              }}
              type="reset"
            >
              清除重填
            </Button>
          </Box>
        </form>
      </FormProvider>
    </div>
  );
};

const item = [
  {
    title: "與該事件相關且令人不舒服的想法和記憶，會在你不想要的時候。",
    name: "item_one",
  },
  { title: "進入你心中。作與該事件相關令人不舒服的夢。", name: "item_two" },
  { title: "出現彷彿該事件又重新發生般的舉動或感覺。", name: "item_three" },
  { title: "遇到與該事件相關的事物而感覺不舒服。", name: "item_four" },
  {
    title: "回想該事件時出現身體反應(如心跳加速、胃部劇烈攪動、冒汗、暈眩)。",
    name: "item_five",
  },
  { title: "難以入睡或保持安睡。", name: "item_six" },
  { title: "躁動不安或爆發憤恕。", name: "item_seven" },
  { title: "難以專注。", name: "item_eight" },
  { title: "對可能威脅自己與他人的危險提高警覺。", name: "item_nine" },
  { title: "對出乎意料的事物提心吊膽或驚嚇。", name: "item_ten" },
];

function ItemRow() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {item.map(({ title, name }) => (
        <Box
          component="tr"
          key={name}
          sx={{
            "& td": {
              p: 0,
            },
            "& input[type='radio']": {
              appearance: "none",
              display: "none",
              "& + label": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "65px",
              },
              "&:checked + label": {
                background: "#B89E9B",
              },
            },
          }}
        >
          <Box component="td">
            <input
              {...register(name, {
                required: "必填",
              })}
              type="radio"
              value="1"
              id={name}
            />
            <Box htmlFor={name} component="label"></Box>
          </Box>
          <Box component="td">
            <input
              {...register(name, {
                required: "必填",
              })}
              type="radio"
              value="0"
              id={name + 1}
            />
            <Box htmlFor={name + 1} component="label"></Box>
          </Box>
          <Box
            component="td"
            sx={{
              height: "53px",
              fontWeight: "bold",
              textAlign: "start",
              p: 2,
            }}
          >
            {title}
            {errors[name] && (
              <Typography color="error">{errors[name].message}</Typography>
            )}
          </Box>
        </Box>
      ))}
    </>
  );
}
