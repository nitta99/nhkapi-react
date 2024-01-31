import { Button as MUIButton } from "@mui/material";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SearchButton = ({ onClick }: ButtonProps) => (
  <MUIButton
    variant="contained"
    sx={{ width: "150px" }}
    onClick={onClick}
  >
    検索
  </MUIButton>
);

