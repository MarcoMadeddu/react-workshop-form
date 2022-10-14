import React, {useState} from 'react';
import './App.css';

interface FormData{
  username: string;
  job: string;
  age: number | string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({username: '' , job: 'Select your Job',age:''});

  const isUserNameValid = formData.username.length > 3;
  const isJobValid = formData.job.length > 0;
  const isAgeValid = formData.age !==  0;
  const isValid = isUserNameValid && isJobValid && isAgeValid;



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
    if(isValid){
      console.log(formData);
      // RESET FORM
      setFormData({username: '', job: '', age: 0 });
    }else{
      alert('Compila tutti i campi');
    }
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
          className="form-control mt-2"
          value = {formData.username}
        />
        <br/>
        <input
          name="age"
          type="number"
          placeholder="insert your Age"
          className="form-control mt-2"
          onChange = {onChangeHandler}
          value = {formData.age}
        />
         <br/>
        <select 
          name="job" 
          onChange={onChangeHandler}
          className="form-control mt-2"
        >
          <option value={formData.job} hidden disabled></option>
          <option value="freelance">Freelance</option>
          <option value="employee">Employee</option>
        </select>
        <br/>
        <button
          disabled = {!isValid} 
          className="btn btn-primary mt-2" 
          type="submit"
        >
          SEND
        </button>
      </form>
   </div>
  );
}

export default App;
