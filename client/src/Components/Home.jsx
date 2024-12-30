import React, { useState } from "react";
import HomeImage from "../assets/Home.jpg";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Select from "react-select";
import UncontrolledExample from "./Alldoctors";
import Alldoctors from "./Alldoctors";

const Home = () => {
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchDoctor, setSearchDoctor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Diseases:", selectedDiseases);
    console.log("Selected Doctor:", selectedDoctor);
    console.log("Searched Doctor Name:", searchDoctor);
  };

  const diseases = [
    { value: "diabetes", label: "Diabetes" },
    { value: "hypertension", label: "Hypertension" },
    { value: "asthma", label: "Asthma" },
    { value: "arthritis", label: "Arthritis" },
    { value: "cancer", label: "Cancer" },
    { value: "heart_disease", label: "Heart Disease" },
  ];

  const doctors = [
    { value: "doctor1", label: "Dr. John Doe (Diabetes, Heart Disease)" },
    { value: "doctor2", label: "Dr. Jane Smith (Asthma, Arthritis)" },
    { value: "doctor3", label: "Dr. William Brown (Hypertension, Cancer)" },
    { value: "doctor4", label: "Dr. Emma Wilson (All Diseases)" },
    { value: "doctor5", label: "Dr. James Taylor (Asthma, Diabetes)" },
  ];

  const handleDiseaseChange = (selectedOptions) => {
    setSelectedDiseases(selectedOptions);
    setSearchDoctor(""); // Clear the search field when diseases change
  };

  // Filter doctors based on selected diseases
  const filteredDoctors = doctors.filter((doctor) =>
    selectedDiseases.some((disease) =>
      doctor.label.toLowerCase().includes(disease.label.toLowerCase())
    )
  );

  const handleDoctorChange = (selectedOption) => {
    setSelectedDoctor(selectedOption);
    setSearchDoctor(""); // Clear the search field when a doctor is selected from the dropdown
  };

  const handleSearchChange = (event) => {
    setSearchDoctor(event.target.value);
  };

  return (
    <>
      <div className="flex w-full md:flex-row flex-col play-regular p-4 ">
        <div className="md:w-1/2 w-full">
          <img src={HomeImage} className="w-full h-full" alt="" />
        </div>

        <div className="w-full md:w-1/2  ">
          <div>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="diseases"
                className="block text-xl font-medium text-gray-700  "
              >
                Select Diseases
              </label>
              <Select
                id="diseases"
                name="diseases"
                options={diseases}
                isMulti
                onChange={handleDiseaseChange}
                className="mt-2"
              />

              <label
                htmlFor="doctor"
                className="block text-xl font-medium text-gray-700 mt-4"
              >
                Select Doctor
              </label>
              <Select
                id="doctor"
                name="doctor"
                options={filteredDoctors}
                onChange={handleDoctorChange}
                className="mt-2"
                value={selectedDoctor}
                isDisabled={filteredDoctors.length === 0} // Disable dropdown if no doctors are found
              />

              {filteredDoctors.length === 0 && (
                <div className="mt-4">
                  <span className="text-blue-600 text-sm">
                    Hey if your decease is not in given list search direct
                    through doctor
                  </span>
                  <label
                    htmlFor="searchDoctor"
                    className="block text-xl mt-1 font-medium text-gray-700"
                  >
                    Search for Doctor
                  </label>
                  <input
                    type="text"
                    id="searchDoctor"
                    name="searchDoctor"
                    value={searchDoctor}
                    onChange={handleSearchChange}
                    className="mt-2 border link border-gray-300 rounded px-4 py-2 w-full"
                    placeholder="Enter doctor name..."
                  />
                </div>
              )}

              <Button
                type="submit"
                variant="outline-primary"
                className="mt-4 link text-xl  rounded px-4 py-2 "
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className=" p-10 play-bold">
        <h1>Our Specialist <span aria-hidden="true">&rarr;</span></h1> 
        <div className="border border-b-2 border-gray-700"></div>
        <Alldoctors />
      </div>
    </>
  );
};

export default Home;
