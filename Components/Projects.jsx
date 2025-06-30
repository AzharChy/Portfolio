import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import A9 from "../src/assets/Projects/Screenshot 2025-06-30 182510.png";
import A10 from "../src/assets/Projects/A-10.png";
import A11 from "../src/assets/Projects/A-11.png";

const projects = [
  
  {
    id: 1,
    name: "My Plant Care App",
    image: A10,
    description:
      "My Plant Care App is a responsive and intuitive plant care management web app that helps users effortlessly track and maintain their plants' health. Designed to support both casual plant owners and enthusiasts, the app allows users to mark watering schedules, receive reminders, and organize multiple plants with ease.\n\n🔑 Key Features:\n- User Authentication: Secure sign-up and login using Firebase and JWT.\n- Watering Schedule Tracking: Add custom plants, set watering intervals, and view upcoming care tasks.\n- Automated Reminders: Notification system alerts users when a plant needs watering.\n- Admin Dashboard: Admin users can manage all users, view plant data, and perform maintenance tasks.\n\n💻 Tech Stack:\n- Frontend: React.js\n- Backend: Node.js + Express.js\n- Database: MongoDB\n- Authentication: Firebase Authentication\n\n🚀 Additional Highlights:\n- CRUD operations for managing plants\n- Plant-specific watering frequency and last watered timestamp\n- Role-based access for admins\n- Clean and minimal UI for an easy plant management experience",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://my-plant-app-c0fd4.web.app",
    githubClient: "https://github.com/AzharChy/Plant-App-Clinet",
    githubServer: "https://github.com/AzharChy/Plant-App-Clinet",
  },
  {
    id: 2,
    name: "Tourist Package",
    image: A11,
    description:
      "ExploreEase – Full-Stack Tour Booking Platform\n\nExploreEase is a dynamic, full-featured tour booking web platform where users can browse travel packages, reserve tours, book transport options, and access helpful travel guides. Designed with both customers and administrators in mind, it offers smooth and secure booking experiences through a responsive user interface.\n\n✨ User Features:\n- Tour Package Booking: Users can browse, filter, and book travel packages with details like destination, price, and availability.\n- Transport Reservation: Seamless integration to allow booking of transport services (bus, car, etc.) alongside tours.\n- Travel Guide Access: View guides and itineraries for each destination to plan trips with confidence.\n- User Accounts: Secure authentication and session management using Firebase Authentication.\n\n🔐 Admin Capabilities:\n- Admins can post, update, and remove tour offers.\n- Manage bookings, monitor user activity, and maintain the tour catalog from a dedicated admin panel.\n\n⚙️ Tech Stack:\n- Frontend: Built with React.js for a fast, responsive UI.\n- Backend: Developed with Node.js and Express.js to handle routing and business logic.\n- Database: MongoDB for flexible storage of user, tour, and booking data.\n- Authentication: Powered by Firebase for secure, scalable login and account management.\n\n📌 Extras:\n- Real-time booking updates\n- Role-based access for users and admins\n- Responsive across all devices",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://assignment-payment.web.app/",
    githubClient: "https://github.com/AzharChy/Tourist-Package-Client",
    githubServer: "https://github.com/AzharChy/Touris-App-Server",
  },
  {
    id: 3,
    name: "Bill Pay Koro",
    image: A9,
    description:
      "Bill Pay Koro is a responsive full-stack web application that allows users to manage and track their utility bills, including electricity, gas, and water. The app offers a user-friendly dashboard where users can view current and past bills, receive timely reminders for upcoming due dates, and stay on top of their monthly utility expenses.\n\n🔐 User Authentication:\n- Secure user login and registration implemented via Firebase Authentication.\n- Users can create personal accounts, ensuring their data is protected and accessible only to them.\n\n🧾 Bill Management Features:\n- Users can add, edit, and delete bills for electricity, gas, and water.\n- Each bill includes fields such as amount, due date, status (paid/unpaid), and provider name.\n- Reminders and notifications are automatically triggered as due dates approach.\n\n📱 Responsive UI:\n- The app is fully responsive, providing a seamless experience across desktop, tablet, and mobile devices.\n- Designed with usability and clarity in mind, so users can quickly find and act on important billing information.\n\n🌐 Tech Stack:\n- Frontend: Built with React.js\n- Backend: Node.js and Express.js\n- Database: MongoDB\n- Authentication: Firebase Authentication\n\n🧩 Additional Features:\n- Bill status filtering (e.g., show only unpaid bills)\n- Visual indicators (e.g., color coding for overdue vs upcoming bills)\n- Option to export billing history (PDF/CSV)\n- Email or push notification support",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://assignment-payment.web.app/",
    githubClient: "https://github.com/AzharChy/Phudu",
    githubServer: "https://github.com/AzharChy/Phudu",
  }

];

const Projects = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-slate-800 text-center mb-12 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          My Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col lg:flex-row  bg-white shadow-md rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full lg:w-1/2 object-cover h-64 lg:h-auto"
              />
              <div className="p-6 flex flex-col justify-between w-full">
                <div>
                  <h3
                    className="text-2xl font-semibold text-indigo-700 p-5 mb-2 cursor-pointer hover:underline"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    {project.name}
                  </h3>
                  <p className="text-slate-700 mb-4 p-5">{project.description}</p>
                  <p className="text-sm text-slate-500 p-5">
                    <strong>Tech Stack:</strong> {project.tech.join(", ")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600 transition"
                  >
                    <FaExternalLinkAlt /> Live Site
                  </a>
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-300 text-slate-700 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-slate-100 transition"
                  >
                    <FaGithub /> Client Repo
                  </a>
                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-slate-300 text-slate-700 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-slate-100 transition"
                    >
                      <FaGithub /> Server Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
