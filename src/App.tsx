import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

interface FormData{
  username: string;
  job: string;
  age: number;
}

function App() {
  const [formData, setFormData] = useState<FormData>({username: '' , job: '',age:0});


  // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {setFormData({username: e.currentTarget.value, job: 'employee'})}
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ 
     ...formData,
     [e.currentTarget.name]: e.currentTarget.value
    })
  }
  
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement> ) =>{
    // PREVENT DEFAULT FOR AVOID REFRESH
    e.preventDefault();
    // GET ALL FORM STATE VALUES
    console.log(formData);
    // RESET FORM
    setFormData({username: '', job: '', age: 0 });
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
        <br/>
        <input
          name="age"
          type="number"
          placeholder="insert your Age"
          onChange = {onChangeHandler}
        />
         <br/>
        <select 
          name="job" 
          onChange={onChangeHandler}
          value={formData.job}
        >
          <option value=""  disabled hidden>Select your Job</option>
          <option value="freelance">Freelance</option>
          <option value="employee">Employee</option>
        </select>

        <button className="btn btn-primary ms-2" type="submit">SEND</button>
      </form>
   </div>
  );
}

export default App;
