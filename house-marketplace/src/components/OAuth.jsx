import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import gooogleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //if user doesnt exist create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Could not authorize with Google");
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} With</p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={gooogleIcon} alt="" />
      </button>
    </div>
  );
}

export default OAuth;
