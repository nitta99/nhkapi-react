import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from "@mui/material";

type SelectProps = {
  id: string;
  label: string;
  itemList: { value: string; label: string }[];
  onChange: any;
};

export const Select = ({
  id,
  label,
  itemList,
  onChange
}: SelectProps) => {
  return (
    <>
      <FormControl>
        <InputLabel id={id}>{label}</InputLabel>
        <MUISelect
          id={id}
          label={label}
          onChange={(e) => onChange(e.target.value)}
          defaultValue=""
          sx={{ width: "200px" }}
        >
          {itemList.map((i, index) => (
            <MenuItem key={index} value={i.value}>
              {i.label}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    </>
  );
};
