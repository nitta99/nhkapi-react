import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { SearchArea } from "./components/SearchArea";
import { areaData, serviceData, genreData } from "./datas";

type apiResponse = {
  title: string;
  subtitle: string;
  start_time: string;
};

export const App = () => {
  // サービス
  const [service, setService] = useState("");
  // 地域
  const [area, setArea] = useState("");
  // ジャンル
  const [genre, setGenre] = useState("");
  // 日付
  const defaultDate = dayjs(new Date());
  const [date, setDate] = useState(defaultDate.format("YYYY-MM-DD"));
  // NHK番組表APIレスポンス
  const [tvSchedule, setTvSchedule] = useState<apiResponse[]>([]);
  const [title, setTitle] = useState<string>("");

  const apiExecution = async (
    area: string,
    service: string,
    genre: string,
    date: string
  ) => {
    const url = genre
      ? `https://api.nhk.or.jp/v2/pg/genre/${area}/${service}/${genre}/${
          dayjs(date).format("YYYY-MM-DD")
        }.json?key=vIwwo0nBtxJUnw5A0sSsq9is4n8O6QM3`
      : `https://api.nhk.or.jp/v2/pg/list/${area}/${service}/${
          dayjs(date).format("YYYY-MM-DD")
        }.json?key=vIwwo0nBtxJUnw5A0sSsq9is4n8O6QM3`;
    const response = await axios.get(url);
    if (service === 'g1') return response.data.list.g1;
    if (service === 'g2') return response.data.list.g2;
    if (service === 'e1') return response.data.list.e1;
    if (service === 'e2') return response.data.list.e2;
    if (service === 'e3') return response.data.list.e3;
    if (service === 'e4') return response.data.list.e4;
    if (service === 's1') return response.data.list.s1;
    if (service === 's2') return response.data.list.s2;
    if (service === 's3') return response.data.list.s3;
    if (service === 's4') return response.data.list.s4;
    if (service === 'r1') return response.data.list.r1;
    if (service === 'r2') return response.data.list.r2;
    if (service === 'r3') return response.data.list.r3;
    if (service === 'n1') return response.data.list.n1;
    if (service === 'n2') return response.data.list.n2;
    if (service === 'n3') return response.data.list.n3;
  };

  const onClick = () => {
    if (!service || !area || !date || !tvSchedule) return;
    setTitle(serviceData.find((i) => i.value === service)?.label || "");
    const getTvSchedule = async () => {
      const data = await apiExecution(area, service, genre, date);
      setTvSchedule(data);
    };
    getTvSchedule();
  };
  
  const getDate = dayjs(date);

  return (
    <Box>
      <Grid
        container
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          sx={{ background: "black", padding: "5px", marginBottom: "15px" }}
        >
          <Box sx={{ color: "white" }}>NHK番組情報検索</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchArea
            areaData={areaData}
            serviceData={serviceData}
            genreData={genreData}
            onClick={onClick}
            changeArea={setArea}
            changeService={setService}
            changeGenre={setGenre}
            changeDate={setDate}
            date={date}
          />
        </Grid>
      </Grid>
      <br />
      
{tvSchedule !== undefined && tvSchedule.length > 0 && (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >

            <Grid
              item
              xs={12}
              sx={{ background: "black", padding: "10px" }}
            >
              <Box sx={{ color: "white" }}>{`${getDate.format("YYYY年MM月DD日")} ${title}の番組表`}</Box>
            </Grid>
              {tvSchedule.map((schedule: apiResponse) => {
                return (
                      <Grid container>
                        <Grid item xs={1}
                          sx={{
                            background: "#2F4F4F",
                            color: "white",
                            borderTop: "1px solid #AAAAAA",
                          }}
                        >
                          {dayjs(schedule.start_time).format("HH:mm")}
                        </Grid>
                        <Grid item xs={11}
                          sx={{
                            borderTop: "1px dotted #AAAAAA",
                            paddingLeft: "5px"
                          }}
                        >
                          <div>{schedule.title}</div>
                          <div>{schedule.subtitle}</div>
                        </Grid>
                      </Grid>
                );
              })}
      </Grid>
        
        )}

    </Box>
  );
}
