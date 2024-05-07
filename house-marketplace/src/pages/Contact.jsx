import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

function Contact() {
  const [message, setMessage] = useState('');
  const [landlord, setlandlord] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useParams();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, 'users', params.landlordId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setlandlord(docSnap.data());
      } else {
        toast.error('Could not get landlord data');
      }
    };
    getLandlord();
  }, [params.landlordId]);

  const onChange = (e) => setMessage(e.target.value);

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Contact Landlord</p>
      </header>
      {landlord !== null && (
        <main>
          <div className='contactlandlord'>
            <p className='landlordName'>Contact {landlord?.name}</p>
          </div>
          <form className='messageForm'>
            <div className='messageDiv'>
              <div className='message'>
                <label htmlFor='message' className='messageLabel'>
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  value={message}
                  className='textarea'
                  onChange={onChange}
                ></textarea>
              </div>
              <a
                href={`mailto:${landlord.email}?Subject=${searchParams.get(
                  'listingName'
                )}&bod=${message}`}
              >
                <button type='button' className='primaryButton'>
                  Send Message
                </button>
              </a>
            </div>
          </form>
        </main>
      )}
    </div>
  );
}

export default Contact;
