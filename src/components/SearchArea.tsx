import { Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SearchButton } from "../elements/SearchButton";
import { Select } from "../elements/Select";

type SearchAreaProps = {
  areaData: { value: string; label: string }[];
  serviceData: { value: string; label: string }[];
  genreData: { value: string; label: string }[];
  onClick: any;
  changeArea: any;
  changeService: any;
  changeGenre: any;
  changeDate: any;
  date: any;
};

export const SearchArea = ({
  areaData,
  serviceData,
  genreData,
  onClick,
  changeArea,
  changeService,
  changeGenre,
  changeDate,
  date,
}: SearchAreaProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid
          item
          xs={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Select
            id="area"
            label="地域"
            onChange={changeArea}
            itemList={areaData}
          />
        </Grid>
        <Grid
          item
          xs={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Select
            id="service"
            label="サービス"
            onChange={changeService}
            itemList={serviceData}
          />
        </Grid>
        <Grid
          item
          xs={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Select
            id="genre"
            label="ジャンル"
            onChange={changeGenre}
            itemList={genreData}
          />
        </Grid>
        <Grid
          item
          xs={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DatePicker
            inputFormat="YYYY/MM/DD"
            value={date || new Date()}
            renderInput={(params: any) => (
              <TextField
                {...params}
                sx={{ width: "200px" }}
              />
            )}
            onChange={(newValue) => {
              changeDate(newValue);
            }}
          /> 
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{marginTop: "50px"}}
        >
          <SearchButton onClick={onClick} />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};
