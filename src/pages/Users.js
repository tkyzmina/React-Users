import React from "react";
import { Link } from "react-router-dom";

function Users({ users }) {
  return (
    <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
      {users.map((user) => {
        return (
          <article
            className="rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10"
            key={user.dob.date}
          >
            <div className="flex items-center p-2 md:p-4">
              <img
                className="h-10 w-10 flex-none rounded-full md:h-20 md:w-20"
                src={user.picture.medium}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <div className="ml-4 flex-auto">
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
          </article>
        );
      })}
    </section>
  );
}

export default Users;
