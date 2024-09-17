import React from "react";
import "./Datepicker.scss";
import nextIcon from "../../assets/icons/next.svg";
import previousIcon from "../../assets/icons/previous.svg";

const Datepicker = () => {
  return (
    <div className="container">
      <form action="" id="my-form">
        <div className="form-group">
          <label htmlFor="my-date">Datepicker</label>
          <input
            type="text"
            className="datepicker-input"
            id="my-date"
            autoComplete="off"
          />
        </div>
        <div className="datepicker">
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
                <div className="day-unit">MON</div>
                <div className="day-unit">TUE</div>
                <div className="day-unit">WED</div>
                <div className="day-unit">THURS</div>
                <div className="day-unit">FRI</div>
                <div className="day-unit">SAT</div>
                <div className="day-unit">SUN</div>
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
                  <a href="#">22</a>
                </div>
                <div className="day-unit">
                  <a href="#">23</a>
                </div>
                <div className="day-unit">
                  <a href="#">24</a>
                </div>
                <div className="day-unit">
                  <a href="#">25</a>
                </div>
                <div className="day-unit">
                  <a href="#">26</a>
                </div>
                <div className="day-unit">
                  <a href="#">27</a>
                </div>
                <div className="day-unit">
                  <a href="#">28</a>
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
        <button id="submit">submit</button>
      </form>
    </div>
  );
};

export default Datepicker;
