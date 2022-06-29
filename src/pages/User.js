import React from "react";
import { useParams, Link } from "react-router-dom";

function User({ users }) {
  const { name } = useParams();

  const user = users.find((user) => {
    return user.name.last === name;
  });

  return (
    <section>
      <article>
        <img src={user.picture.large} alt={user.name.last} />
        <div className="">
          <p>{`${user.name.first} ${user.name.last}`}</p>
          <p>{`Age ${user.dob.age}`}</p>
          <div className="">
            <p>{`Postcode ${user.location.postcode}`}</p>
            <p>{`${user.location.country} ${user.location.state}`}</p>
            <p>{`${user.location.city} ${user.location.street.name} ${user.location.street.number}`}</p>
          </div>
        </div>
      </article>
      <Link to="/users">Go back</Link>
    </section>
  );
}

export default User;
