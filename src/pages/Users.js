import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/UI/Background";
import Card from "../components/UI/Card";

function Users({ users }) {
  return (
    <Background>
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
        {users.map((user) => {
          return (
            <Card key={user.dob.date} classStyle="p-2">
              <div className="flex items-center p-2 md:p-4">
                <img
                  className="h-10 w-10 flex-none rounded-full md:h-20 md:w-20"
                  src={user.picture.medium}
                  alt={`${user.name.first} ${user.name.last}`}
                />
                <div className="mx-2 flex-auto ">
                  <h3 className="font-medium">{`${user.name.first} ${user.name.last}`}</h3>
                  <p className="mt-1 text-slate-500">{user.location.country}</p>
                </div>{" "}
                <Link
                  className="flex-none inline-block pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
                  to={`/users/${user.name.last}`}
                >
                  More info
                </Link>
              </div>
            </Card>
          );
        })}
      </section>
    </Background>
  );
}

export default Users;
