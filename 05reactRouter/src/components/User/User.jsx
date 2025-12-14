import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="user mx-auto w-100% bg-gray-600 text-white text-center p-8 text-3xl font-bold">
      User : {userid}
    </div>
  );
}

export default User;
