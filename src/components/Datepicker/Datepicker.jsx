import React from "react";
import "./Datepicker.scss";
import { useState } from "react";
import nextIcon from "../../assets/icons/next.svg";
import previousIcon from "../../assets/icons/previous.svg";

const Datepicker = () => {

  const [isFocused, setIsFocused] = useState(false)

  
  const handleShowChange = (e) =>{
    const { id } = e.target;

    const inputClasses = classNames("datepicker-input", {
      "datepicker-input__focused": isFocused
    });
    

  }

  console.log('hello')
  return (
    <div className="container">
      <form action="" id="my-form">
        <div className="form-group">
          <label htmlFor="from">Select the "from" date</label>
          <input
            type="text"
            className="datepicker-input"
            id="from"
            autoComplete="off"
          />
          <div className="datepicker" id="datepicker-from">
          <div className="datepicker-calendar">
            <div className="datepicker-calendar--header">
              <div className="datepicker-calendar--header__dates">
                <button className="month-change-to-previous-month">
                  <img src={previousIcon} alt="" />
                </button>
                <span className="datepicker-calendar--header__dates year-and-month">
                  <span className="pick-year">
                    <select name="" id="" className="pick-year-select">
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </span>
                  <span className="pick-month">
                    <select name="" id="" className="pick-month-select">
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                    </select>
                  </span>
                </span>
                <button className="month-change-to-next-month">
                  <img src={nextIcon} alt="" />
                </button>
              </div>
              <div className="datepicker-calendar--header__days-row">
                <div className="day-unit">M</div>
                <div className="day-unit">T</div>
                <div className="day-unit">W</div>
                <div className="day-unit">T</div>
                <div className="day-unit">F</div>
                <div className="day-unit">S</div>
                <div className="day-unit">S</div>
              </div>
            </div>
            <div className="datepicker-calendar--body">
              <div className="datepicker-calendar--body__days-row">
                <div className="day-unit">
                  <a href="#">1</a>
                </div>
                <div className="day-unit">
                  <a href="#">2</a>
                </div>
                <div className="day-unit">
                  <a href="#">3</a>
                </div>
                <div className="day-unit">
                  <a href="#">4</a>
                </div>
                <div className="day-unit">
                  <a href="#">5</a>
                </div>
                <div className="day-unit">
                  <a href="#">6</a>
                </div>
                <div className="day-unit">
                  <a href="#">7</a>
                </div>
              </div>

              <div className="datepicker-calendar--body__days-row">
                <div className="day-unit">
                  <a href="#">8</a>
                </div>
                <div className="day-unit">
                  <a href="#">9</a>
                </div>
                <div className="day-unit">
                  <a href="#">10</a>
                </div>
                <div className="day-unit">
                  <a href="#">11</a>
                </div>
                <div className="day-unit">
                  <a href="#">12</a>
                </div>
                <div className="day-unit">
                  <a href="#">13</a>
                </div>
                <div className="day-unit">
                  <a href="#">14</a>
                </div>
              </div>

              <div className="datepicker-calendar--body__days-row">
                <div className="day-unit">
                  <a href="#">15</a>
                </div>
                <div className="day-unit">
                  <a href="#">16</a>
                </div>
                <div className="day-unit">
                  <a href="#">17</a>
                </div>
                <div className="day-unit">
                  <a href="#">18</a>
                </div>
                <div className="day-unit">
                  <a href="#">19</a>
                </div>
                <div className="day-unit">
                  <a href="#">20</a>
                </div>
                <div className="day-unit">
                  <a href="#">21</a>
                </div>
              </div>

            

              <div className="datepicker-calendar--body__days-row">
                <div className="day-unit">
                  <a href="#">29</a>
                </div>
                <div className="day-unit">
                  <a href="#">30</a>
                </div>
                <div className="day-unit">
                  <a href="#">31</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <button id="submit">submit</button>
      </form>

      <form action="" id="my-form">
        <div className="form-group">
          <label htmlFor="from">Select the "to" date</label>
          <input
            type="text"
            className="datepicker-input"
            id="from"
            autoComplete="off"
          />
          <div className="datepicker" id="datepicker-to" >
          <div className="datepicker-calendar">
            <div className="datepicker-calendar--header">
              <div className="datepicker-calendar--header__dates">
                <button className="month-change-to-previous-month">
                  <img src={previousIcon} alt="" />
                </button>
                <span className="datepicker-calendar--header__dates year-and-month">
                  <span className="pick-year">
                    <select name="" id="" className="pick-year-select">
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </span>
                  <span className="pick-month">
                    <select name="" id="" className="pick-month-select">
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                    </select>
                  </span>
                </span>
                <button className="month-change-to-next-month">
                  <img src={nextIcon} alt="" />
                </button>
              </div>
              <div className="datepicker-calendar--header__days-row">
                <div className="day-unit">M</div>
                <div className="day-unit">T</div>
                <div className="day-unit">W</div>
                <div className="day-unit">T</div>
                <div className="day-unit">F</div>
                <div className="day-unit">S</div>
                <div className="day-unit">S</div>
              </div>
            </div>
            <div className="datepicker-calendar--body">
              <div className="datepicker-calendar--body__days-row">
                <div className="day-unit">
                  <a href="#">1</a>
                </div>
                <div className="day-unit">
                  <a href="#">2</a>
                </div>
                <div className="day-unit">
                  <a href="#">3</a>
                </div>
                <div className="day-unit">
                  <a href="#">4</a>
                </div>
                <div className="day-unit">
                  <a href="#">5</a>
                </div>
                <div className="day-unit">
                  <a href="#">6</a>
                </div>
                <div className="day-unit">
                  <a href="#">7</a>
                </div>
              </div>

              <div className="datepicker-calendar--body__days-row">
                <div className="day-unit">
                  <a href="#">8</a>
                </div>
                <div className="day-unit">
                  <a href="#">9</a>
                </div>
                <div className="day-unit">
                  <a href="#">10</a>
                </div>
                <div className="day-unit">
                  <a href="#">11</a>
                </div>
                <div className="day-unit">
                  <a href="#">12</a>
                </div>
                <div className="day-unit">
                  <a href="#">13</a>
                </div>
                <div className="day-unit">
                  <a href="#">14</a>
                </div>
              </div>

              <div className="datepicker-calendar--body__days-row">
                <div className="day-unit">
                  <a href="#">15</a>
                </div>
                <div className="day-unit">
                  <a href="#">16</a>
                </div>
                <div className="day-unit">
                  <a href="#">17</a>
                </div>
                <div className="day-unit">
                  <a href="#">18</a>
                </div>
                <div className="day-unit">
                  <a href="#">19</a>
                </div>
                <div className="day-unit">
                  <a href="#">20</a>
                </div>
                <div className="day-unit">
                  <a href="#">21</a>
                </div>
              </div>

            

              <div className="datepicker-calendar--body__days-row">
                <div className="day-unit">
                  <a href="#">29</a>
                </div>
                <div className="day-unit">
                  <a href="#">30</a>
                </div>
                <div className="day-unit">
                  <a href="#">31</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <button id="submit">submit</button>
      </form>
    </div>
  );
};

export default Datepicker;
