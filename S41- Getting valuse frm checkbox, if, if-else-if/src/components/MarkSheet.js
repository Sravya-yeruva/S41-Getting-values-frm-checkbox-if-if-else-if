import React, { useRef } from "react";

function MarkSheet() {
  let FirstNameInputRef = useRef();
  let LastNameInputRef = useRef();
  let TelMarksInputRef = useRef();
  let HinMarksInputRef = useRef();
  let EngMarksInputRef = useRef();
  let MathMarksInputRef = useRef();
  let SciMarksInputRef = useRef();
  let SocMarksInputRef = useRef();

  let TelMarksResultRef = useRef();
  let HinMarksResultRef = useRef();
  let EngMarksResultRef = useRef();
  let MathMarksResultRef = useRef();
  let SciMarksResultRef = useRef();
  let SocMarksResultRef = useRef();
  let stateSelectRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();

  let usergender = "";
  let usermaritualstatus = "";
  let languagesknown = {
    telugu: false,
    hindi: false,
    english: false,
  };

  let InputOnFocus = (InputRef) => {
    InputRef.current.style.backgroundColor = "yellow";
  };
  let InputonBlur = (InputRef) => {
    InputRef.current.style.backgroundColor = "orange";
  };
  let InputonChange = (InputRef, ResultRef) => {
    if (InputRef.current.value >= 0 && InputRef.current.value <= 100) {
      if (InputRef.current.value >= 35) {
        ResultRef.current.innerHTML = "Pass 😇";
        ResultRef.current.style.color = "green";
      } else {
        ResultRef.current.innerHTML = "Fail 😓";
        ResultRef.current.style.color = "red";
      }
    } else {
      ResultRef.current.innerHTML = "Invalid 🙆";
      ResultRef.current.style.color = "Brown";
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" ref={FirstNameInputRef}></input>
          <label></label>
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" ref={LastNameInputRef}></input>
          <label></label>
        </div>
        <div>
          <label>State:</label>
          <select ref={stateSelectRef}>
            <option>Select</option>
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Arunachal Pradesh</option>
            <option>Gujarat</option>
          </select>
          <label></label>
        </div>
        <div>
          <label className="gender">Gender:</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                usergender = "female";
              }
            }}
          ></input>
          <label className="gender">Female</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                usergender = "male";
              }
            }}
          ></input>
          <label className="gender">Male</label>
          <input type="radio" name="gender"></input>
          <label className="gender">Custom</label>
        </div>
        <div>
          <label>Maritual Status:</label>
          <input
            type="radio"
            name=" status"
            onChange={(eventobj) => {
              if (eventobj.target.checked == true) {
                usermaritualstatus = "single";
              }
            }}
          ></input>
          <label className="gender">Single</label>
          <input
            type="radio"
            name=" status"
            onChange={(eventobj) => {
              if (eventobj.target.checked == true) {
                usermaritualstatus = "married";
              }
            }}
          ></input>
          <label className="gender">Married</label>
        </div>
        <div>
          <label className="languages">Languages Known:</label>
          <input
            type="checkbox"
            onChange={(eventobj) => {
              if (eventobj.target.checked == true) {
                languagesknown.telugu = true;
              } else {
                languagesknown.telugu = false;
              }
            }}
          ></input>
          <label className="gender">Telugu</label>
          <input
            type="checkbox"
            onChange={(eventobj) => {
              if (eventobj.target.checked == true) {
                languagesknown.hindi = true;
              } else {
                languagesknown.hindi = false;
              }
            }}
          ></input>
          <label className="gender">Hindi</label>
          <input
            type="checkbox"
            onChange={(eventobj) => {
              if (eventobj.target.checked == true) {
                languagesknown.english = true;
              } else {
                languagesknown.english = false;
              }
            }}
          ></input>
          <label className="gender">English</label>
        </div>
        <div>
          <label>Telugu Marks:</label>
          <input
            type="number"
            ref={TelMarksInputRef}
            onFocus={() => {
              InputOnFocus(TelMarksInputRef);
            }}
            onBlur={() => {
              InputonBlur(TelMarksInputRef);
            }}
            onChange={() => {
              InputonChange(TelMarksInputRef, TelMarksResultRef);
            }}
          ></input>
          <label ref={TelMarksResultRef}></label>
        </div>
        <div>
          <label>Hindi Marks:</label>
          <input
            type="number"
            ref={HinMarksInputRef}
            onFocus={() => {
              InputOnFocus(HinMarksInputRef);
            }}
            onBlur={() => {
              InputonBlur(HinMarksInputRef);
            }}
            onChange={() => {
              InputonChange(HinMarksInputRef, HinMarksResultRef);
            }}
          ></input>
          <label ref={HinMarksResultRef}></label>
        </div>
        <div>
          <label>English Marks:</label>
          <input
            type="number"
            ref={EngMarksInputRef}
            onFocus={() => {
              InputOnFocus(EngMarksInputRef);
            }}
            onBlur={() => {
              InputonBlur(EngMarksInputRef);
            }}
            onChange={() => {
              InputonChange(EngMarksInputRef, EngMarksResultRef);
            }}
          ></input>
          <label ref={EngMarksResultRef}></label>
        </div>
        <div>
          <label>Maths Marks:</label>
          <input
            type="number"
            ref={MathMarksInputRef}
            onFocus={() => {
              InputOnFocus(MathMarksInputRef);
            }}
            onBlur={() => {
              InputonBlur(MathMarksInputRef);
            }}
            onChange={() => {
              InputonChange(MathMarksInputRef, MathMarksResultRef);
            }}
          ></input>
          <label ref={MathMarksResultRef}></label>
        </div>
        <div>
          <label>Science Marks:</label>
          <input
            type="number"
            ref={SciMarksInputRef}
            onFocus={() => {
              InputOnFocus(SciMarksInputRef);
            }}
            onBlur={() => {
              InputonBlur(SciMarksInputRef);
            }}
            onChange={() => {
              InputonChange(SciMarksInputRef, SciMarksResultRef);
            }}
          ></input>
          <label ref={SciMarksResultRef}></label>
        </div>
        <div>
          <label>Social Marks:</label>
          <input
            type="number"
            ref={SocMarksInputRef}
            onFocus={() => {
              InputOnFocus(SocMarksInputRef);
            }}
            onBlur={() => {
              InputonBlur(SocMarksInputRef);
            }}
            onChange={() => {
              InputonChange(SocMarksInputRef, SocMarksResultRef);
            }}
          ></input>
          <label ref={SocMarksResultRef}></label>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let FirstName = FirstNameInputRef.current.value;
              let LastName = LastNameInputRef.current.value;
              let TelMarks = Number(TelMarksInputRef.current.value);
              let HinMarks = Number(HinMarksInputRef.current.value);
              let EngMarks = Number(EngMarksInputRef.current.value);
              let MathMarks = Number(MathMarksInputRef.current.value);
              let SciMarks = Number(SciMarksInputRef.current.value);
              let SocMarks = Number(SocMarksInputRef.current.value);
              let state = stateSelectRef.current.value;
              let TotalMarks =
                TelMarks +
                HinMarks +
                EngMarks +
                MathMarks +
                SciMarks +
                SocMarks;
              let percentage = (TotalMarks / 600) * 100;
              let grade;
              if (percentage >= 70) {
                grade = "first class with distinction";
              } else if (percentage >= 60 && percentage <= 70) {
                grade = "first Class";
              } else if (percentage >= 50 && percentage <= 60) {
                grade = "second Class";
              } else if (percentage >= 40 && percentage <= 50) {
                grade = "third Class";
              } else {
                grade = "pass";
              }

              let salutation = "";
              if (usergender == "female") {
                if (usermaritualstatus == "single") {
                  salutation = "Miss.";
                }
                if (usermaritualstatus == "married") {
                  salutation = "Mrs.";
                }
              }

              if (usergender == "male") {
                salutation = "Mr.";
              }

              alert(
                `${salutation} ${FirstName} ${LastName} from ${state} known ${
                  languagesknown.telugu == true ? "telugu " : ""
                },${languagesknown.hindi == true ? "hindi " : ""},${
                  languagesknown.english == true ? "english " : ""
                } got total Marks ${TotalMarks} with ${percentage.toFixed(2)}% and ${grade}`
              );
            }}
          >
            Result
          </button>
        </div>
      </form>
    </div>
  );
}

export default MarkSheet;
