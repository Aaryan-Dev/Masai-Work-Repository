import style from "./userDetails.module.css";
const UserDetails = (props) => {

  const { id, avatar, first_name, last_name, address, karma, followers, posts, is_following, change } = props

  let state;
  if (is_following!==false) {
    state = "Unfollow"
  } else {
    state = "Follow"
   }

  return (
    <>
      <div data-testid="user-container" className={style.main} >
        <img src={ avatar} width="60px" alt="user"/>

        <div className={style.second} >
          <div className={ style.insecond }>
            <h3 data-testid="user-fname">{ first_name}</h3>
            <h3 data-testid="user-lname">  { last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">{ address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{karma }</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{followers }</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{ posts}</h3>
        </div>
        <button data-testid="follow-btn" onClick={() => change(id)} >{state }</button>
      </div>
    </>
  );
};
export default UserDetails;
