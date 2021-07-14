import React, { useState } from "react";
import { connect } from "react-redux";
import { Sidebar } from "./index";
import { searchUsers } from "../../store/utils/thunkCreators";
import { clearSearchedUsers } from "../../store/conversations";

interface Props {
  searchUsers: any;
  clearSearchedUsers: any;
}

const SidebarContainer: React.FC<Props> = ({
  searchUsers,
  clearSearchedUsers,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = async (event: any) => {
    if (event.target.value === "") {
      // clear searched convos from redux store
      clearSearchedUsers();
      setSearchTerm("");
      return;
    }
    if (searchTerm.includes(event.target.value)) {
      // if new value is included in search term, we don't need to make another API call, just need to set the search term value so the conversations can be filtered in the rendering
      setSearchTerm(event.target.value);
      return;
    }
    await searchUsers(event.target.value);
    setSearchTerm(event.target.value);
  };

  return <Sidebar handleChange={handleChange} searchTerm={searchTerm} />;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    searchUsers: (username: string) => {
      dispatch(searchUsers(username));
    },
    clearSearchedUsers: () => {
      dispatch(clearSearchedUsers());
    },
  };
};

export default connect(null, mapDispatchToProps)(SidebarContainer);