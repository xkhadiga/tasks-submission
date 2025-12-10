"use client";
import React from "react";
import { useEffect, useState } from "react";

import Card from "./SearchCard";
import { fetchUsers } from "../api/api";
import HomeButton from "@/components/shared/HomeButton";

// user type
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function SearchForm() {
  // search input state
  const [searchTerm, setSearchTerm] = useState("");

  // state for users list
  const [users, setUsers] = useState([]);
  // state to show loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers();

        // 1 second fake delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // save users to state
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        // hide loading
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  // filter users by search term 
  const filteredUsers = users.filter((user: User) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // show loading on each key press
    setLoading(true);
    //  delay effect for 1s then hide loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };


  return (
     <div className="w-full min-h-screen overflow-x-hidden flex  relative">
        <span className="absolute top-4 left-4 md:top-12 md:left-12">
              <HomeButton />
              </span> 
    <div
      className="mt-[10] flex flex-col items-center mx-auto md:w-[70dvw] gap-4
      "
    >
      <form className="relative mx-auto" onSubmit={(e) => e.preventDefault()}>
        {/* Search Input Form*/}
        <div className=" mt-20 mx-auto relative">
          <div className="flex   absolute inset-y-0 left-0 items-center pl-3 ">
            {/* Search Icon */}
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          {/*  Input */}
          <input
            type="search"
            className=" p-4 pl-10 w-full text-sm border border-[#588157] rounded-xl"
            placeholder="Search..."
            required
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* Search Button */}
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5  rounded-lg text-sm px-4 py-2 bg-[#344e41] hover:bg-[#16221c] cursor-pointer "
          >
            Search
          </button>
        </div>
      </form>

      {/* Results */}
      {loading?(
        // loading
        <div className="loader mt-10 border-3 border-[#16221c]"></div>
      )
      :
    //     cards grid with users
      <div className="my-4  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 border border-[#588157] rounded-xl  relative">
      {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <Card key={user.id} user={user} />)
      ): (
        // no results case
        <p className="text-gray-500 text-center col-span-full">
          No users found
        </p>
      )}
</div>
      }

    </div>
    </div>
  );
}

export default SearchForm;