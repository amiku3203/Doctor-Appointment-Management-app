import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import d1 from "../assets/Doctors/d1.jpg";
import d2 from "../assets/Doctors/d2.jpg";
import d3 from "../assets/Doctors/d3.jpg";
import { Link } from "react-router-dom";

const Alldoctors = () => {
  const allDoctor = [
    {
      Name: "Amit Kumar",
      Specialization: "Cardiology",
      Experience: "3 Years",
      Image: d1,
      slug:"amit-kumar"
    },
    {
      Name: "Anuj Kumar",
      Specialization: "Heart Specialist",
      Experience: "3 Years",
      Image: d2,
      slug:"anuj-kumar"
    },
    {
      Name: "Naveen Tripath",
      Specialization: "Cancer",
      Experience: "3 Years",
      Image: d3,
      slug:"naveen-tripathi"
    },
    {
      Name: "Ajay Gupta",
      Specialization: "Sucker Special",
      Experience: "3 Years",
      Image: d1,
      slug:"ajay-gupta"
    },
    {
      Name: "Deppankaj Sharma",
      Specialization: "Full Body",
      Experience: "3 Years",
      Image: d2,
      slug:"deepankaj-sharma"
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4 md:justify-center play-bold">
      {allDoctor?.map((doctor, index) => (
        <Card
          key={index}
          className="link sm:w-[30rem]"
          style={{
            width: "18rem",
            border: "1px solid #e3e3e3",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Card.Img
            variant="top"
            src={doctor.Image}
            style={{
              height: "300px",
              objectFit: "cover",
            }}
          />
          <Card.Body>
            <Card.Title className="text-center font-bold text-lg">
              {doctor.Name}
            </Card.Title>
            <Card.Text className="text-sm text-gray-600 text-center">
              <strong>Specialization:</strong> {doctor.Specialization} <br />
              <strong>Experience:</strong> {doctor.Experience}
            </Card.Text>
            <div className="flex justify-center mt-3 cursor-pointer">
              <Link to={`/appointment/${doctor.slug}`} >
              <Button
                variant="outline-primary"
                className="link"
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px",
                  borderSize: "5px",
                }}
              >
                Book Appointment
              </Button>
              </Link>
             
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Alldoctors;
