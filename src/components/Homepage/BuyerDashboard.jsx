import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const BuyerDashboard = () => {
  const navigate = useNavigate();

  const [rfqData, setRfqData] = useState([
    {
      id: 1,
      title: "Premium Ergonomic Office Chairs",
      status: "Open",
      expiry: "2025-05-30",
      quotes: 4,
      category: "Office Furniture",
    },
    {
      id: 2,
      title: "Enterprise Laptops",
      status: "Pending",
      expiry: "2025-06-12",
      quotes: 2,
      category: "Electronics",
    },
    {
      id: 3,
      title: "Eco-Friendly Stationery Package",
      status: "Closed",
      expiry: "2025-04-18",
      quotes: 6,
      category: "Office Supplies",
    },
    // Add more RFQ data as needed
  ]);

  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRFQs = useMemo(() => {
    return rfqData.filter((rfq) => {
      return statusFilter === "all" || rfq.status === statusFilter;
    });
  }, [statusFilter, rfqData]);

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleViewDetails = (id) => {
    navigate(`/rfq-details/${id}`); // Navigate to RFQ details page
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Buyer Dashboard</h1>
        <div className="filter-section">
          <label htmlFor="statusFilter">Filter by Status:</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={handleStatusChange}
          >
            <option value="all">All</option>
            <option value="Open">Open</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div className="rfq-list">
          {filteredRFQs.length === 0 ? (
            <p>No RFQs found.</p>
          ) : (
            <table className="rfq-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Expiry Date</th>
                  <th>Quotes Received</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRFQs.map((rfq) => (
                  <tr key={rfq.id}>
                    <td>{rfq.title}</td>
                    <td>{rfq.status}</td>
                    <td>{rfq.expiry}</td>
                    <td>{rfq.quotes}</td>
                    <td>
                      <button onClick={() => handleViewDetails(rfq.id)}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <style>{`
        .dashboard-page {
          min-height: 100vh;
          padding: 2rem;
          background: #f9f9f9;
          font-family: 'Poppins', sans-serif;
        }
        .dashboard-container {
          max-width: 800px;
          margin: auto;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 2rem;
        }
        .dashboard-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #003366;
        }
        .filter-section {
          margin-bottom: 1.5rem;
        }
        .filter-section label {
          margin-right: 0.5rem;
        }
        .rfq-table {
          width: 100%;
          border-collapse: collapse;
        }
        .rfq-table th,
        .rfq-table td {
          border: 1px solid #ddd;
          padding: 0.8rem;
          text-align: left;
        }
        .rfq-table th {
          background-color: #003366;
          color: white;
        }
        .rfq-table tr:hover {
          background-color: #f1f1f1;
        }
        button {
          background-color: #d4af37;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.3rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #b5942a;
        }
      `}</style>
    </div>
  );
};

export default BuyerDashboard;
