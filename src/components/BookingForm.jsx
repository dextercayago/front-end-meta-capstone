import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function BookingForm({availableTimes, dispatch, submitForm}) {
    console.log(dispatch)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
    })

    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }

    const handleDateChange = async (event) => {
      const { name, value } = event.target
      
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
     dispatch({ type: 'UPDATE_TIMES', payload: value })
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      submitForm(formData)
    }

    const currentDate = new Date().toISOString().split("T")[0]
    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    return (
      <main className="bg-primary-gray">
        <button className='bg-primary-yellow w-[500px] rounded-50 font-medium text-2xl my-6 mx-auto py-3 text-highlight-dark'>Reserve your table NOW!</button>
        <form className="bg-secondary-light" onSubmit={handleSubmit}>
          <div className="seperate">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleFormChange} required />
          </div>
          <div className="seperate">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleFormChange} required />
          </div>
          <div className="seperate">
            <label htmlFor="contact-number">Contact Number</label>
            <input type="text" id="contact-number" name="contactNumber" placeholder="123-456-7890"
            value={formData.contactNumber} onChange={handleFormChange} 
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
          </div>
          <div className="seperate date-time">
            <div className="seperate">
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate}/>
            </div>
            <div className="seperate">
              <label htmlFor="res-time">Choose time</label>
              <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>
                {options}
              </select>
            </div>
          </div>
          <div className="seperate guests-occasion">
            <div className="seperate">
              <label htmlFor="guests">Number of guests</label>
              <input type="number" placeholder="1" min="1" max="10" required id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={handleFormChange}/>
            </div>
            <div className="seperate">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>
          <input className="submit" type="submit" value="Reserve" aria-label="submit button"/>
      </form>
      </main>
    )
  }
  

  