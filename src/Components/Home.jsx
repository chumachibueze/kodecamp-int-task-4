import React from 'react';
import {useState, useEffect} from 'react';
import Userprofile from './Userprofile';
const Home = () => {

  const[userlist, setUserlist] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if(!response.ok){
          throw Error('could not fetch the data from the resource, check the URL')
        }
        return response.json();
      })
      .then((data) => {
        setUserlist(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      })
  }, []);


  return (
    <div className='container-fluid'>
      <div className="container">
        {error && <div className='my-5 text-center'>{error}</div>}
        {loading && <div className='my-5 text-center'>LOADING...</div>}
        {userlist && <Userprofile userlist = {userlist}/>}
      </div>
    </div>
  )
}

export default Home;