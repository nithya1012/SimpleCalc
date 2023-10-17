
// // import React, { Component } from 'react';
// // import "./App.css"

// // class Calculator extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       num1: '',
// //       num2: '',
// //       result: 0,
// //     };
// //   }

// //   handleNum1Change = (e) => {
// //     this.setState({ num1: e.target.value });
// //   };

// //   handleNum2Change = (e) => {
// //     this.setState({ num2: e.target.value });
// //   };

// //   addNumbers = () => {
// //     const { num1, num2 } = this.state;
// //     const result = parseFloat(num1) + parseFloat(num2);
// //     this.setState({ result });
  
// //   };
// //   render() {
// //     return (
// //       <div class="calc">
// //         <h3>Simple Calculator for Addition</h3>
// //         <div className='input1'><input
// //           type="number"
// //           placeholder="Enter first number"
// //           value={this.state.num1}
// //           onChange={this.handleNum1Change}
// //         /></div>
// //         <div className='input2'><input
// //           type="number"
// //           placeholder="Enter second number"
// //           value={this.state.num2}
// //           onChange={this.handleNum2Change}
// //         /></div>
// //         <button onClick={this.addNumbers}>Add</button>
// //         {/* <button className='button clear-button' onClick={this.handleClear}>Clear</button> */}

// //         <p>Result: {this.state.result}</p>
// //       </div>
// //     );
// //   }
// // }

// // export default Calculator;

// import React, {useState} from 'react';
// const App=()=>{
//     const[email,setEmail]=useState('');
//     const [isValidEmail,setIsValidEmail]=useState(true);
//     const [name,setName]=useState('');
//     const [isValidName,setIsValidName]=useState(true);
//     const handleNameChange=(e)=>{
//         setName(e.target.value);
//         setIsValidName(e.target.value?.Length > 0)
//     }
//     const handleEmailChange=(e)=>{
//         const inputEmail=e.target.value;
//         const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
//         setIsValidEmail(emailPattern.test(inputEmail))
//         setEmail(inputEmail)
//     }
//     const handleSubmit =(e)=>{
//         e.preventDefault();
//         const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
//         setIsValidEmail(emailPattern.test(email))
//         setIsValidName(name.length >0)
//         isValidEmail && isValidName ? alert('Form submitted'):
//         alert('Form validation failed');
    
    
//     }
//     return(
//         <div className='App'>
//             <h1>React form Validation</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-group'>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                     type='text'
//                     id='email'
//                     name='email'
//                     value={email}
//                     onChange={handleEmailChange}
//                     className={isValidEmail? 'valid':'invalid'}></input>
                    
//                 </div>
//                 <div className='form-feedback'>
//                     {
//                         !isValidEmail && (<span className='invalid-email'>Enter valid email</span>)

//                     }
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='name'>Name</label>
//                     <input
//                     type='text'
//                     id='name'
//                     value={name}
//                     onChange={handleNameChange}
//                     className={isValidName? 'valid':'invalid'}
//                     />
//                 </div>
//                 <div className='form-feedback'>
//                     {
//                         !isValidEmail && (<span className='invalid-name'>Enter valid name</span>)

//                     }
//                 </div>
//                 <br></br>
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
    
// }
// export default App;
import React, { useState } from 'react';


const App=()=>{
  const [email, setEmail]=useState('');
  const[isValidEmail, setIsValidEmail]=useState(true);
  
  const [name,setName]=useState('');
  const [isValidName, setIsValidName]=useState(true);
  

const handleNameChange=(e)=>{
  setName(e.target.value);
  setIsValidName(e.target.value?.length > 0)
}
const handleEmailChange=(e)=>{
  const inputEmail=e.target.value;
  const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  setIsValidName(emailPattern.test(inputEmail));
  setEmail(inputEmail);
  
}
const handleSubmit=(e)=>{
  e.preventDefault();

  const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  setIsValidEmail(emailPattern.test(email))

  setIsValidName(name.length >0 )
  isValidEmail && isValidName ? alert('Form submitted'):
  alert('Form validation failed');
}


  return (
    <div className='App'>
      <h1> Form validation Using React</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email  : </label>
          <input
          type='text'
          value={email}
          id='email'
          onChange={handleEmailChange}
          className={isValidEmail? 'valid' : 'invalid'}>
            
          </input>
        </div>
        <div className='form-feedback'>
          {
            !isValidEmail && (<span className='invalid-email'>Enter valid email</span>)
          }
        </div>

        <div className='form-group'>
          <label htmlFor='name'>Name :  </label>
          <input
          type='text'
          value={name}
          id='name'
          onChange={handleNameChange}
          className={isValidName? 'valid' : 'invalid'}>
            
          </input>
        </div>
        <div className='form-feedback'>
          {
            !isValidName && (<span className='invalid-name'>Enter valid name</span>)
          }
        </div>
          <br></br>
        <button type='submit'>submit</button>
      </form>
    </div>
  );

}

export default App;