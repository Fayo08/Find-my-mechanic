import "./ScheduleService.scss";
import Header from "../../components/Header/Header";
import dateIcon from "../../assets/icons/date.svg";
import editIcon from "../../assets/icons/edit.svg";
import carPhoto from "../../assets/images/Car.png";
import { useState, useEffect } from "react";
import { api_URL } from "../../../utils.js";
import axios from "axios";
import Buttons from "../../components/Buttons/Buttons";
import Datepicker from "../../components/Datepicker/Datepicker.jsx";
import "react-datepicker/dist/react-datepicker.css";
import LocationsMap from "../../components/Map/LocationsMap";
import { useNavigate, useParams } from "react-router-dom";

function BookService() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${api_URL}/api/services`);

        setServices(response.data);
      } catch (error) {
        alert("Failure fetching services ");
      }
    };
    fetchServices();
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    const selectedService = services.find(
      (service) => service.type === selectedOption
    );

    setSelectedService(selectedService);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService && selectedService.category) {
      navigate(`/services/category/${selectedService.category}/mechanics`);
    } else {
      alert("Please select a service");
    }
  };

  return (
    <main>
      <Header
        onGetCurrentLocation={() => window.GetCurrentLocation()}
        originalMessage="Edmonton, Alberta"
        Backlink="/get-location"
      />
      <section className="bookservice">
        <div className="bookservice__content">
          <div className="bookservice__title">
            <h3>Schedule a service</h3>
            <p>Quick fix</p>
          </div>

          <div className="bookservice__card">
            <div className="bookservice__car-details">
              <img src={carPhoto} alt="This is the photo of a car" />
              <p> BMW iX M60 2022</p>
              <img src={editIcon} alt="This is an edit icon" />
            </div>
            <div className="bookservice__services">
              <div className="dropdown">
                <label
                  onClick={toggleDropdown}
                  className="dropdown-toggle"
                  htmlFor="service"
                >
                  {selectedService ? selectedService.type : "Select a service"}
                </label>

  
   
      <Datepicker/>
     
                {isOpen && (
                  <select
                    name="service"
                    className="dropdown-menu"
                    onChange={handleSelectChange}
                    value={selectedService ? selectedService.type : ""}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.type}>
                        {service.type}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            <Buttons
              onClick={handleSubmit}
              buttonText="Request Mechanic"
              colorClass={"pri-button"}
            />
          </div>
        </div>
        <LocationsMap />
      </section>
    </main>
  );
}

export default BookService;
