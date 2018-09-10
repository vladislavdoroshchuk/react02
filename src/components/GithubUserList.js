import React from 'react';

const adminBadge = (site_admin) => {
  return site_admin ? <isAdmin className={`badge badge-secondary`}>Admin</isAdmin> : ""
};

const GithubProfile = ({ login, html_url, avatar_url, site_admin}) => (
  <div className="col-md-9">
    <div className="user">
      <img
        className="user-img-top col-md-2 float-left mb-4"
        src={avatar_url}
        alt={login}
      />
      <div className="user-body">
        <h4 className="user-name">{login} {adminBadge(site_admin)} </h4>
        <a href="{html_url}">{html_url}</a>
        <p>{site_admin}</p>
      </div>
    </div>
  </div>
);

export default GithubProfile;
