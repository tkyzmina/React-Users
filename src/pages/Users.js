import React from "react";
import { Link } from "react-router-dom";

function Users({ users }) {
  return (
    <section>
      {users.map((user) => {
        return (
          <article key={user.dob.date}>
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <div className="">
              <h3>{`${user.name.first} ${user.name.last}`}</h3>
              <p>{user.location.country}</p>
            </div>
            <Link to={`/users/${user.name.last}`}>More info</Link>
          </article>
        );
      })}
    </section>
  );
}

export default Users;
