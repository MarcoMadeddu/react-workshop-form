import React, {useState} from 'react';
import './App.css';
import classnames from 'classnames';

interface FormData{
  username: string;
  job: string;
  age: number | string;
  city: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({username: '' , job: 'Select a Job',age:'',city: ''});
  const [dirty, setDirty] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);

  const isUserNameValid = formData.username.length > 3;
  const isJobValid = formData.job.length > 0 && formData.job !== 'Select a Job';
  const isAgeValid = formData.age !==  0 && formData.age !== '';
  const isCityValid = formData.city.length > 2;
  const isValid = isUserNameValid && isJobValid && isAgeValid && isCityValid;
 

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ 
     ...formData,
     [e.currentTarget.name]: e.currentTarget.value
    })

    setDirty(true);
  }

  function onBlurHandler(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
    console.log(touched)
    setTouched(!touched);
  }
  

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement> ) =>{
    // PREVENT DEFAULT FOR AVOID REFRESH
    e.preventDefault();
    // GET ALL FORM STATE VALUES
    if(isValid){
      console.log(formData);
      // RESET FORM
      setFormData({username: '', job: '', age: '',city: ''});
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
          onBlur = {onBlurHandler}
          className ={classnames(
            'form-control mt-2',
            {'is-valid' : isUserNameValid},
            {'is-invalid' : !isUserNameValid && touched}
          )}
          value = {formData.username}
        />
        <br/>
        <input
          name="age"
          type="number"
          placeholder="insert your Age"
          className ={classnames(
            'form-control mt-2',
            {'is-valid' : isAgeValid},
            {'is-invalid' : !isAgeValid && touched}
          )}
          onChange = {onChangeHandler}
          onBlur = {onBlurHandler}
          value = {formData.age}
        />
        <br/>
        <input
          name="city"
          type="string"
          placeholder="insert your City"
          className ={classnames(
            'form-control mt-2',
            {'is-valid' : isCityValid},
            {'is-invalid' : !isCityValid && touched}
          )}
          onChange = {onChangeHandler}
          onBlur ={onBlurHandler}
          value = {formData.city}
        />
         <br/>
        <select 
          name="job" 
          onChange={onChangeHandler}
          onBlur = {onBlurHandler}
          className ={classnames(
            'form-control mt-2',
            {'is-valid' : isJobValid},
            {'is-invalid' : !isJobValid && touched}
          )}
          value={formData.job}
        >
          {/* HOW TO INSERT A DEFAULT VALUE TAKEN IT FROM THE FORMDATA.JOB? */}
          <option  hidden disabled>{formData.job}</option>
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
