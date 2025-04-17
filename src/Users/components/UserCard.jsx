export const UserCard = ({ users = [] }) => {
  return (
    /*<div className="row row-cols-1 row-cols-md-3 g-4">
      {users.map((user) => (
        <div className="col" key={user.id}>
          <div className="card h-100">
            <div className="text-center">
              <img
                src={user.avatar}
                className="img-fluid"
                alt={user.first_name}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#64A50B" }}>
                {user.first_name}
              </h5>
              <p className="card-text">
                <b>Email:</b> {user.email}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>*/
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {users.map((user) => (
      <div className="col" key={user.id}>
        <div className="card h-100">
          <div className="d-flex align-items-center g-0">
            <div className="col-auto p-2">
              <img
                src={user.avatar}
                className="rounded-start"
                alt={user.first_name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain"
                }}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#64A50B', fontSize: '1rem' }}>
                {user.first_name} {user.last_name}
              </h5>
              <p className="card-text small text-muted mb-0">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};
