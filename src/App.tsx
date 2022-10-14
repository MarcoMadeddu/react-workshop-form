import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface FormData{
  username: string;
  job: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({username: '' , job: 'freelance'});


  // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {setFormData({username: e.currentTarget.value, job: 'employee'})}
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ username: e.currentTarget.value, job: 'employee'})
  }
  
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) =>{
    // PREVENT DEFAULT FOR AVOID REFRESH
    e.preventDefault();
    // GET ALL FORM STATE VALUES
    console.log(formData);
    // RESET FORM
    setFormData({username: '', job: ''});
  }

  return (
   <div className="container mt-2">
      <pre>{JSON.stringify(formData)}</pre>   
      {
        /*
            NEW: This input is always in sync with formData.username
              and updates its value when you write 
            */
      }
      <form onSubmit={onSubmitHandler}>
        <input
          name="username"
          type="text"
          placeholder="Write your username"
          onChange = {onChangeHandler}
          value={formData.username}
        />

        <button className="btn btn-primary ms-2" type="submit">SEND</button>
      </form>
   </div>
  );
}

export default App;
