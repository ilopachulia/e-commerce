import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router";

function Profile() {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const eneteredNewPassword = newPasswordInputRef.current.value;

    //add validation: optional

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBdXhQOZ-fkz8tbH19EnfV0erY4ZcRE3UM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: eneteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //assumption : Always succeeds!
      navigate("/");
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="new_password">New Passowrod</label>
        <input
          type="password"
          id="new_password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default Profile;
