import { connect } from "react-redux";

const Leaderboard = (props) => {
  return (
    <div className="leaderboard">
      <table className="styled-table table">
          <thead>
          <tr>
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
          </tr>
          </thead>
          <tbody>
            {props.orderedUsers.map((user) => (
              <tr key={user.id}>
                  {console.log(user)}
                  <td>
                    <table>
                    <tbody>
                      <tr>
                        <td>
                          <img src={user.avatarURL} className="avatar" style={{width: '30px'}}/>
                        </td>
                        <td>
                          <span className="name">{user.name}</span>
                          <br></br>
                          <span className="username">{user.id}</span>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>{Object.keys(user.answers).length}</td>
                  <td>{user.questions.length}</td>
              </tr>
            ))}              
          </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {

  let orderedUsers = [];

  for (const user in users){
    orderedUsers = [...orderedUsers, users[user]];
  }

  orderedUsers.sort(function(a, b){
    
    let totalA = Object.keys(a.answers).length + a.questions.length;
    let totalB = Object.keys(b.answers).length + b.questions.length;

    if (totalA > totalB) return -1;
    if (totalA < totalB) return 1; 

  });

  return {
    orderedUsers
  };
};

export default connect(mapStateToProps)(Leaderboard);