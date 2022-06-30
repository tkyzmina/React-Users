import React from "react";
import { useParams, Link } from "react-router-dom";
import Box from "../components/UI/Box";
import Background from "../components/UI/Background";
import Card from "../components/UI/Card";

function User({ users }) {
  const { name } = useParams();

  const user = users.find((user) => {
    return user.name.last === name;
  });

  const location = [
    `PostCode ${user.location.postcode}`,
    `${user.location.country} ${user.location.state}`,
    `${user.location.city}, ${user.location.street.name}, ${user.location.street.number}`,
  ];

  return (
    <Background>
      <section className="container mx-auto px-4 flex flex-col items-center">
        <Card classStyle="w-full mb-4 md:w-3/4 lg:w-1/2 p-4">
          <div className="flex items-center">
            <img
              className="flex-none rounded-full h-20 w-20 md:h-28 md:w-28"
              src={user.picture.large}
              alt={user.name.last}
            />
            <div className="ml-4">
              <h3 className="text-xl">{`${user.name.first} ${user.name.last}`}</h3>
              <p>{`Age ${user.dob.age}`}</p>
            </div>
          </div>{" "}
          <div className="border-t border-gray-200 pt-4">
            {location.map((place, index) => {
              return <Box text={place} key={index} />;
            })}
          </div>
        </Card>
        <Link
          className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
          to="/users"
        >
          Go back
        </Link>
      </section>
    </Background>
  );
}

export default User;
