import React from "react";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import d1 from "../assets/Doctors/d1.jpg";
import d2 from "../assets/Doctors/d2.jpg";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import QRCode from "react-qr-code";
const allDoctor = [
  {
    Name: "Amit Kumar",
    Specialization: "Cardiology",
    Experience: "3 Years",
    Education:
      "Dr. Amit Kumar holds an MBBS degree from AIIMS and an MD in Cardiology from PGIMER Chandigarh. He is highly skilled in diagnosing and treating various cardiovascular diseases and has been recognized for his research in preventive cardiology.",
    Fees: "₹500",
    About:
      "Dr. Amit Kumar is a passionate cardiologist with a mission to provide personalized care to his patients. With three years of hands-on experience, he focuses on improving patient outcomes through innovative techniques.",
    AvailableSlots: [
      { date: "2024-01-02", time: "10:00 AM - 11:00 AM" },
      { date: "2024-01-03", time: "3:00 PM - 4:00 PM" },
      { date: "2024-01-04", time: "6:00 PM - 7:00 PM" },
    ],
    Image: d1,
    slug: "amit-kumar",
  },
  {
    Name: "Anuj Kumar",
    Specialization: "Heart Specialist",
    Experience: "3 Years",
    Education:
      "Dr. Anuj Kumar completed his MBBS from KGMU and pursued a DM in Cardiology from the prestigious Narayana Health Institute. His expertise lies in handling complex heart conditions with precision and care.",
    Fees: "₹600",
    About:
      "Dr. Anuj Kumar is dedicated to ensuring his patients live healthier lives by providing advanced treatment plans for heart-related issues. His patient-first approach has earned him wide recognition in the field.",
    AvailableSlots: [
      { date: "2024-01-02", time: "11:00 AM - 12:00 PM" },
      { date: "2024-01-03", time: "2:00 PM - 3:00 PM" },
      { date: "2024-01-04", time: "5:00 PM - 6:00 PM" },
    ],
    Image: d2,
    slug: "anuj-kumar",
  },
];

const Appointment = () => {
  const { slug } = useParams();
  const [show, setShow] = useState(false);
  const [problem, setProblem] = useState("");
  const [paymentOption, setPaymentOption] = useState("online");
  const [confirmationShow, setConfirmationShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirmationClose = () => setConfirmationShow(false); // Close confirmation modal
  const handleConfirmationShow = () => setConfirmationShow(true); // Show confirmation modal
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Problem:", problem);
    console.log("Payment Option:", paymentOption);
    handleClose();
    setConfirmationShow(true);
  };
  const doctor = allDoctor.find((doc) => doc.slug === slug);

  if (!doctor) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 text-lg">
        Doctor not found
      </div>
    );
  }
  const generateQRCode = () => {
    const phoneNumber = "6391609881"; // Patient's phone number (example)
    if (paymentOption === "online") {
      // URL for online payment with phone number and doctor's fee
      return `https://pay-online.com/confirm?phone=${phoneNumber}&amount=${encodeURIComponent(
        doctor.Fees
      )}&appointment=${encodeURIComponent(problem)}`;
    } else if (paymentOption === "offline") {
      // URL for offline payment (you can adjust as needed)
      return `https://offline-payment.com/confirm?appointment=${encodeURIComponent(
        doctor.fees
      )}`;
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-md shadow-md play-bold">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={doctor.Image}
          alt={doctor.Name}
          className="w-60 h-60 object-cover  border-2 border-teal-500 shadow-md link"
        />
        <div className="text-center md:text-center">
          <h1 className="text-2xl font-bold text-gray-700">{doctor.Name}</h1>
          <p className="text-teal-600 font-medium">{doctor.Specialization}</p>
          <p className="text-gray-500 mt-2">
            {doctor.Experience} Experience | Fees:{" "}
            <span className="font-semibold">{doctor.Fees}</span>
          </p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Patient Problem Field */}
            <Form.Group className="mb-3" controlId="problem">
              <Form.Label>Describe Your Problem</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your problem or symptoms here"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
              />
            </Form.Group>

            {/* Payment Options */}
            <Form.Group className="mb-3" controlId="paymentOption">
              <Form.Label>Payment Option</Form.Label>
              <div className="d-flex flex-column gap-2">
                <Form.Check
                  type="radio"
                  label="Online Payment"
                  name="paymentOption"
                  value="online"
                  checked={paymentOption === "online"}
                  onChange={(e) => setPaymentOption(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Offline Payment"
                  name="paymentOption"
                  value="offline"
                  checked={paymentOption === "offline"}
                  onChange={(e) => setPaymentOption(e.target.value)}
                />
              </div>
            </Form.Group>
          </Form>

          {/* Display QR code based on the payment option */}
          {paymentOption === "online" && (
            <div className="mt-4 text-center">
              <h5>Scan to Confirm Your Appointment</h5>
              <QRCode value={generateQRCode()} />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!problem || !paymentOption}
          >
            Confirm Appointment
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={confirmationShow} onHide={handleConfirmationClose} centered>
        <Modal.Header closeButton className="bg-teal-600 text-white">
          <Modal.Title>Appointment Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="  p-6 text-center  0 rounded-lg">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">
              Your Appointment is Booked!
            </h3>
            <p className="mt-2 text-lg">
              You will receive a confirmation shortly via email.
            </p>
            <p className="mt-4 text-xl font-medium">
              Your Queue Number:{" "}
              <span className="bg-teal-600 text-white rounded-md px-4 py-2">
                {Math.floor(Math.random() * 1000) + 1}{" "}
                {/* Random Queue Number */}
              </span>
            </p>
          </div>
          <p className="text-sm mt-4">
            Please visit the hospital at your scheduled time.
          </p>
        </Modal.Body>
        <Modal.Footer className="bg-teal-600">
          <Button
            variant="secondary"
            onClick={handleConfirmationClose}
            className="w-full py-2 text-white"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="mt-8">
        <AccordionSection doctor={doctor} />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Available Slots <span aria-hidden="true">&rarr;</span>
        </h2>
        <div className="border-b border-gray-400 border-2 mb-2"></div>
        <ul className="grid md:grid-cols-2 gap-4">
          {doctor.AvailableSlots.map((slot, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-md flex-wrap"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
                <p className="text-gray-700">{slot.date}</p>
                <p className="text-gray-500">{slot.time}</p>
              </div>
              <button
                onClick={handleShow}
                className="mt-2 link sm:mt-0 px-4 py-2 border-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
              >
                Book
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointment;

function AccordionSection({ doctor }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className="font-semibold text-gray-700">Education</span>
        </Accordion.Header>
        <Accordion.Body className="text-gray-600">
          {doctor.Education}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span className="font-semibold text-gray-700">About</span>
        </Accordion.Header>
        <Accordion.Body className="text-gray-600">
          {doctor.About}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
