import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  backgroundColor: theme.palette.grey[100],
  width: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "50px",
    justifyContent: "center",
    "&.expanded": {
      width: "100%",
      justifyContent: "flex-start",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1,
      padding: "10px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
    },
  },
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  fontSize: "16px",
  "& .MuiInputBase-input": {
    padding: "10px",
    borderRadius: "4px",
    transition: theme.transitions.create(["width", "border"]),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "&:focus": {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}26`,
    },
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  padding: 10,
  color: theme.palette.text.secondary,
}));

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSearchClose = () => {
    setSearchText("");
    setIsExpanded(false);
  };

  return (
    <SearchContainer ref={searchRef} className={isExpanded ? "expanded" : ""}>
      <SearchButton onClick={handleSearchClick}>
        <SearchIcon />
      </SearchButton>
      {isExpanded && (
        <SearchInput
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(false)}
        />
      )}
      {isExpanded && (
        <IconButton onClick={handleSearchClose}>
          <CloseIcon />
        </IconButton>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
