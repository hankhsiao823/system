import React, { useState, useEffect } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Box, Divider, Typography } from "@mui/material";
import EditModifyComponent from "../components/EditModifyComponent";
// import SleepService from "../services/sleep.service";
import SubmitOrResetComponent from "../components/SubmitOrResetComponent";
import { useModel } from "../hook/useModel";

const defaultValues = {
  item_one: "01:00",
  item_two: "30",
  item_three: "10:00",
  item_four: "8",
  item_four_two: "0",
  item_five: "1",
  item_six: "1",
  item_seven: "1",
  item_eight: "0",
  item_nine: "1",
  item_ten: "1",
  item_eleven: "1",
  item_twelve: "1",
  item_thirteen: "1",
  item_fourteen: "1",
  item_fifteen: "0",
  item_sixteen: "0",
  item_seventeen: "1",
  item_eighteen: "0",
};

export const SleepPage = () => {
  const [total, setTotal] = useState(false);
  const model = useModel();

  const methods = useForm({
    mode: "onBlur",
    defaultValues: React.useMemo(() => {
      return model && defaultValues;
    }, [model]),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = methods;
  const {
    item_two,
    item_four,
    item_eight,
    item_eighteen,
    item_eleven,
    item_fifteen,
    item_five,
    item_fourteen,
    item_nine,
    item_seven,
    item_seventeen,
    item_six,
    item_sixteen,
    item_ten,
    item_thirteen,
    item_twelve,
  } = watch();

  const update = React.useRef(false);

  useEffect(() => {
    if (model) {
      setTotal(handleTotal());
    }
    if (update.current) {
      setTotal(handleTotal());
    }
    return () => (update.current = true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch()]);

  function getFallAsleep(value) {
    let result;
    if (value < 30) {
      result = 0;
    } else if (30 <= value && value < 60) {
      result = 1;
    } else if (60 <= value) {
      result = 2;
    }
    return result;
  }

  function getSleepHour(value) {
    let result;
    if (7 <= value) {
      result = 0;
    } else if (6 <= value && value < 7) {
      result = 1;
    } else if (4 <= value && value <= 5) {
      result = 2;
    } else {
      result = 3;
    }
    return result;
  }

  function getSleepProblem(obj) {
    let result = 0;
    for (var prop in obj) {
      let value = parseInt(obj[prop]);
      if (isNaN(value)) {
        value = 0;
      }
      result = result + value;
    }
    return result;
  }

  function handleTotal() {
    let get_fall_asleep_score = Number(item_two);
    let get_sleep_hour_score = Number(item_four);
    let get_sleep_problem_score = {
      item_eight,
      item_eighteen,
      item_eleven,
      item_fifteen,
      item_five,
      item_fourteen,
      item_nine,
      item_seven,
      item_seventeen,
      item_six,
      item_sixteen,
      item_ten,
      item_thirteen,
      item_twelve,
    };
    get_fall_asleep_score = getFallAsleep(get_fall_asleep_score);
    get_sleep_hour_score = getSleepHour(get_sleep_hour_score);
    get_sleep_problem_score = getSleepProblem(get_sleep_problem_score);

    return (
      get_fall_asleep_score + get_sleep_hour_score + get_sleep_problem_score
    );
  }

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
    // SleepService.createSleep(data)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
    console.log(data);
    alert("????????????");
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
            ?????????????????????????????????
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
          ?????????
        </Typography>
        <Typography
          sx={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            alignSelf: "end",
          }}
        >
          ???????????????????????????
        </Typography>
        <EditModifyComponent />
      </Box>
      <Typography
        sx={{ fontSize: "1.75rem", fontWeight: "bold", mx: "49px", mb: "40px" }}
      >
        ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
      </Typography>

      <FormProvider {...methods}>
        <form
          id="myform"
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mx: "50px",
              mb: "40px",
              fontSize: "1.75rem",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              1.??????????????????,??????????????????????????????????
              <input
                disabled={model}
                type="time"
                {...register("item_one", {
                  required: "??????",
                })}
              />
              {errors.item_one && (
                <Typography color="error">{errors.item_one.message}</Typography>
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              2.??????????????????,???????????????,????????????????????????????
              <input
                disabled={model}
                type="text"
                {...register("item_two", {
                  required: "??????",
                })}
              />
              ???
              {errors.item_two && (
                <Typography color="error">{errors.item_two.message}</Typography>
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              3.??????????????????,?????????????????????????
              <input
                type="time"
                disabled={model}
                {...register("item_three", {
                  required: "??????",
                })}
              />
              {errors.item_three && (
                <Typography color="error">
                  {errors.item_three.message}
                </Typography>
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              4??????????????????,??????????????????????????????????????????????
              <input
                type="text"
                disabled={model}
                {...register("item_four", {
                  required: "??????",
                })}
              />
              ??????
              {errors.item_four && (
                <Typography color="error">
                  {errors.item_four.message}
                </Typography>
              )}
              <input
                type="text"
                disabled={model}
                {...register("item_four_two", {
                  required: "??????",
                })}
              />
              ???
              {errors.item_four_two && (
                <Typography color="error">
                  {errors.item_four_two.message}
                </Typography>
              )}
              <br />
            </Box>
            <span style={{ fontSize: "1.25rem" }}>
              (????????????????????????????????????????????????)
            </span>
          </Box>
          <Typography
            sx={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              mx: "49px",
              mb: "40px",
            }}
          >
            ??????????????????????????????????????????,???????????????????????????,????????????????????????
          </Typography>
          <Box sx={{ alignSelf: "center" }}>
            <Box
              sx={{
                textAlign: "center",
                background: "#8AA6B1",
                borderRadius: "10px",
                p: "3px",
              }}
            >
              <Box
                sx={{
                  borderCollapse: "separate",
                  borderSpacing: 0,
                  "& td": {
                    border: "4px solid #8AA6B1",
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
                        background: "#A4B6BA",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    <Box
                      component="td"
                      sx={{
                        borderTopLeftRadius: "10px",
                        width: "458px",
                        height: "105px",
                        textAlign: "start",
                        px: 1,
                        background: "#f4f4ea !important",
                        color: "#000 !important",
                        fontSize: "1.25rem !important",
                      }}
                    >
                      5.??????????????????,
                      <br />
                      ???????????????????????????????????????????
                    </Box>
                    <Box component="td" sx={{ width: "130px" }}>
                      ????????????
                    </Box>
                    <Box component="td" sx={{ width: "130px" }}>
                      ????????????
                      <br />
                      1???
                    </Box>
                    <Box component="td" sx={{ width: "130px" }}>
                      ??????
                      <br />
                      1-2???
                    </Box>
                    <Box
                      component="td"
                      sx={{ borderTopRightRadius: "10px", width: "130px" }}
                    >
                      ??????3???
                      <br />
                      ?????????
                    </Box>
                  </Box>

                  <ItemRow model={model} />
                </Box>
              </Box>
            </Box>
            <OtherTable model={model} />
            <Box
              sx={{
                display: "flex",
                fontSize: "1.5rem",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              ??????
              <Box
                sx={{
                  border: "2px solid #8AA6B1",
                  width: "128px",
                  height: "47px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  ml: 1,
                }}
              >
                {total}
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 7, alignSelf: "center" }}>
            <SubmitOrResetComponent model={model} />
          </Box>
        </form>
      </FormProvider>
    </div>
  );
};

const item = [
  { title: "a.?????????30?????????", name: "item_five" },
  { title: "b.?????????????????????", name: "item_six" },
  { title: "c.?????????????????????", name: "item_seven" },
  { title: "d.???????????????", name: "item_eight" },
  { title: "e.?????????????????????", name: "item_nine" },
  { title: "f.????????????", name: "item_ten" },
  { title: "g.????????????", name: "item_eleven" },
  { title: "h.?????????", name: "item_twelve" },
  { title: "i.??????", name: "item_thirteen" },
  { title: "j.?????????????????????:", name: "item_fourteen" },
  {
    title: "6.??????????????????,?????????????????????????????????(?????????????????????)????????????????",
    name: "item_fifteen",
  },
  {
    title:
      "7.??????????????????,??????????????????????????????????????????????????????,???????????????????????????????????????????",
    name: "item_sixteen",
  },
];

function ItemRow({ model }) {
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
              position: "relative",
              p: 1,
            },
            "& input[type='radio']": {
              appearance: "none",
              display: "none",
              "& + label": {
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                // width: "100%",
                // height: "65px",
                position: "absolute",
                left: -1,
                right: -1,
                top: -1,
                bottom: -1,
              },
              "&:checked + label": {
                background: "#A4B6BA",
              },
            },
          }}
        >
          <Box
            component="td"
            sx={{
              height: "72px",
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
          {[0, 1, 2, 3].map((value) => (
            <Box component="td" key={name + value}>
              <input
                disabled={model}
                {...register(name, {
                  required: "??????",
                })}
                type="radio"
                value={value}
                id={name + value}
              />
              <Box htmlFor={name + value} component="label"></Box>
            </Box>
          ))}
        </Box>
      ))}
    </>
  );
}

function OtherTable({ model }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          background: "#8AA6B1",
          borderRadius: "10px",
          p: "3px",
          mt: 2,
        }}
      >
        <Box
          sx={{
            borderCollapse: "separate",
            borderSpacing: 0,
            "& td": {
              border: "4px solid #8AA6B1",
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
                  background: "#A4B6BA",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                },
              }}
            >
              <Box
                component="td"
                sx={{
                  borderTopLeftRadius: "10px",
                  width: "458px",
                  textAlign: "start",
                  px: 1,
                }}
              ></Box>
              <Box component="td" sx={{ width: "130px" }}>
                ??????????????????
              </Box>
              <Box component="td" sx={{ width: "130px" }}>
                ??????????????????
              </Box>
              <Box component="td" sx={{ width: "130px" }}>
                ????????????
              </Box>
              <Box
                component="td"
                sx={{ borderTopRightRadius: "10px", width: "130px" }}
              >
                ??????????????????
              </Box>
            </Box>
            <Box
              component="tr"
              sx={{
                "& td": {
                  position: "relative",
                  p: 1,
                },
                "& input[type='radio']": {
                  appearance: "none",
                  display: "none",
                  "& + label": {
                    position: "absolute",
                    left: -1,
                    right: -1,
                    top: -1,
                    bottom: -1,
                  },
                  "&:checked + label": {
                    background: "#A4B6BA",
                  },
                },
              }}
            >
              <Box
                component="td"
                sx={{
                  height: "72px",
                  fontWeight: "bold",
                  textAlign: "start",
                  p: 2,
                }}
              >
                8.??????????????????,??????????????????
                <br />
                ?????????????????????????????????????????????????
                {errors.item_seventeen && (
                  <Typography color="error">
                    {errors.item_seventeen.message}
                  </Typography>
                )}
              </Box>
              {["??????????????????", "??????????????????", "????????????", "??????????????????"].map(
                (value, index) => (
                  <Box component="td" key={value}>
                    <input
                      disabled={model}
                      {...register("item_seventeen", {
                        required: "??????",
                      })}
                      type="radio"
                      value={index}
                      id={value}
                    />
                    <Box htmlFor={value} component="label"></Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          background: "#8AA6B1",
          borderRadius: "10px",
          p: "3px",
          my: 2,
        }}
      >
        <Box
          sx={{
            borderCollapse: "separate",
            borderSpacing: 0,
            "& td": {
              border: "4px solid #8AA6B1",
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
                  background: "#A4B6BA",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                },
              }}
            >
              <Box
                component="td"
                sx={{
                  borderTopLeftRadius: "10px",
                  width: "458px",
                  textAlign: "start",
                  px: 1,
                }}
              ></Box>
              <Box component="td" sx={{ width: "130px" }}>
                ?????????
              </Box>
              <Box component="td" sx={{ width: "130px" }}>
                ???
              </Box>
              <Box component="td" sx={{ width: "130px" }}>
                ??????
              </Box>
              <Box
                component="td"
                sx={{ borderTopRightRadius: "10px", width: "130px" }}
              >
                ????????????
              </Box>
            </Box>
            <Box
              component="tr"
              sx={{
                "& td": {
                  position: "relative",
                  p: 1,
                },
                "& input[type='radio']": {
                  appearance: "none",
                  display: "none",
                  "& + label": {
                    position: "absolute",
                    left: -1,
                    right: -1,
                    top: -1,
                    bottom: -1,
                  },
                  "&:checked + label": {
                    background: "#A4B6BA",
                  },
                },
              }}
            >
              <Box
                component="td"
                sx={{
                  height: "72px",
                  fontWeight: "bold",
                  textAlign: "start",
                  p: 2,
                }}
              >
                9.??????????????????,
                <br />
                ?????????????????????????????????????????????????
                {errors.item_eighteen && (
                  <Typography color="error">
                    {errors.item_eighteen.message}
                  </Typography>
                )}
              </Box>
              {["?????????", "???", "??????", "????????????"].map((value, index) => (
                <Box component="td" key={value}>
                  <input
                    disabled={model}
                    {...register("item_eighteen", {
                      required: "??????",
                    })}
                    type="radio"
                    value={index}
                    id={value}
                  />
                  <Box htmlFor={value} component="label"></Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
