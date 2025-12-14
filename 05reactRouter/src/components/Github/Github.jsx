import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mr-sf-khan")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center bg-gray-600 text-white p-8 text-3xl">
      Github Follower : {data.followers}
      <img src={data.avatar_url} alt="Github Image" />
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/mr-sf-khan");
  const data = await response.json();
  return data;
};
