import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  Calendar,
  Filter,
  RotateCcw,
  Menu,
  X,
  AlertCircle,
} from "lucide-react";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const rfqData = [
    {
      id: 101,
      title: "Premium Ergonomic Office Chairs (Set of 50)",
      status: "Open",
      expiry: "2025-05-30",
      quotes: 4,
      category: "Office Furniture",
      description:
        "High-quality ergonomic chairs with adjustable features for corporate offices",
      image: "office-chairs",
    },
    {
      id: 102,
      title: "Enterprise Laptops (Dell/HP, 100 units)",
      status: "Pending",
      expiry: "2025-06-12",
      quotes: 2,
      category: "Electronics",
      description:
        "Latest generation business laptops with minimum 16GB RAM and 512GB SSD",
      image: "laptops",
    },
    {
      id: 103,
      title: "Eco-Friendly Stationery Package",
      status: "Closed",
      expiry: "2025-04-18",
      quotes: 6,
      category: "Office Supplies",
      description:
        "Sustainable office supplies including recycled paper and biodegradable pens",
      image: "stationery",
    },
    {
      id: 104,
      title: "HVAC Systems for Office Building",
      status: "Open",
      expiry: "2025-07-01",
      quotes: 3,
      category: "Facility Management",
      description: "Commercial HVAC systems for 20,000 sqft office space",
      image: "hvac",
    },
    {
      id: 105,
      title: "Commercial Coffee Machines (10 units)",
      status: "Open",
      expiry: "2025-06-20",
      quotes: 5,
      category: "Breakroom Equipment",
      description: "High-capacity coffee machines for office breakrooms",
      image: "coffee-machines",
    },
    {
      id: 106,
      title: "Security Camera System Installation",
      status: "Open",
      expiry: "2025-07-15",
      quotes: 2,
      category: "Security",
      description: "Complete security camera system for corporate headquarters",
      image: "security-cameras",
    },
    {
      id: 107,
      title: "Office Cleaning Services (Annual Contract)",
      status: "Pending",
      expiry: "2025-06-05",
      quotes: 3,
      category: "Services",
      description: "Daily cleaning services for 5-story office building",
      image: "cleaning-services",
    },
    {
      id: 108,
      title: "Standing Desks (30 units)",
      status: "Open",
      expiry: "2025-08-10",
      quotes: 4,
      category: "Office Furniture",
      description:
        "Electric adjustable height standing desks for ergonomic workspace",
      image: "standing-desks",
    },
    {
      id: 109,
      title: "Video Conferencing Equipment",
      status: "Open",
      expiry: "2025-07-22",
      quotes: 1,
      category: "Electronics",
      description: "High-end video conferencing systems for conference rooms",
      image: "conferencing-equipment",
    },
    {
      id: 110,
      title: "Office Plants and Maintenance",
      status: "Closed",
      expiry: "2025-03-30",
      quotes: 7,
      category: "Office Decor",
      description: "Monthly plant maintenance service for office greenery",
      image: "office-plants",
    },
    {
      id: 111,
      title: "Corporate Catering Services",
      status: "Open",
      expiry: "2025-08-01",
      quotes: 5,
      category: "Services",
      description:
        "Weekly catering for staff meetings and events (50-100 people)",
      image: "catering",
    },
    {
      id: 112,
      title: "IT Support Services (Annual Contract)",
      status: "Pending",
      expiry: "2025-06-30",
      quotes: 3,
      category: "Services",
      description: "On-site and remote IT support for 100+ employee company",
      image: "it-support",
    },
  ];

  const filteredRFQs = useMemo(() => {
    return rfqData.filter((rfq) => {
      const matchesSearch =
        rfq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rfq.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rfq.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || rfq.status === statusFilter;

      const expiryDate = new Date(rfq.expiry);
      const matchesDates =
        (!fromDate || expiryDate >= new Date(fromDate)) &&
        (!toDate || expiryDate <= new Date(toDate));

      return matchesSearch && matchesStatus && matchesDates;
    });
  }, [searchTerm, statusFilter, fromDate, toDate]);

  const handleFilter = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setFromDate("");
    setToDate("");
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Closed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const sidebarLinks = [
    "Submit RFQ",
    "Buyer Dashboard",
    "Supplier Portal",
    "Supplier Database",
    "Pricing Guide",
    "Help Center",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Hilsourcenter
              </h1>
            </div>

            <button
              className="md:hidden p-2 rounded-md hover:bg-blue-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav
              className={`${
                mobileMenuOpen ? "block" : "hidden"
              } md:block absolute md:relative top-full md:top-auto left-0 right-0 md:left-auto md:right-auto bg-blue-900 md:bg-transparent p-4 md:p-0`}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                {["Home", "Group Buying", "Contact", "About Us"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white hover:text-yellow-300 transition-colors font-medium relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
                  </a>
                ))}
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg">
                  Login / Sign Up
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Sidebar */}
          <aside className="lg:w-72">
            <div className="bg-white rounded-2xl shadow-lg p-5">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {sidebarLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 shadow-md"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Hero Banner */}
          <div className="flex-1">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1350&q=80"
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-8">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Streamline Your Procurement Process
                  </h1>
                  <p className="text-xl text-white/90 drop-shadow-md">
                    Access competitive quotes from trusted suppliers across
                    multiple industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8">
        <main className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search RFQs by product, category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="all">All Statuses</option>
              <option value="Open">Open</option>
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>

            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />

            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />

            <button
              onClick={handleFilter}
              className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center gap-2"
            >
              <Filter size={20} />
              Filter
            </button>

            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center gap-2"
            >
              <RotateCcw size={20} />
              Reset
            </button>
          </div>

          {/* RFQ Cards */}
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            </div>
          ) : filteredRFQs.length === 0 ? (
            <div className="text-center py-12">
              <AlertCircle className="mx-auto h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No RFQs found matching your criteria
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRFQs.map((rfq, index) => (
                <div
                  key={rfq.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={`https://source.unsplash.com/600x300/?${rfq.image}`}
                    alt={rfq.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getStatusColor(
                          rfq.status
                        )}`}
                      >
                        {rfq.status}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {rfq.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {rfq.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {rfq.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Expires:</span>
                        <span className="text-gray-600">
                          {formatDate(rfq.expiry)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Quotes Received:</span>
                        <span className="text-gray-600">{rfq.quotes}</span>
                      </div>
                    </div>

                    {rfq.status === "Open" ? (
                      <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg">
                        Submit Quote
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
                      >
                        {rfq.status}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-8 mt-auto">
        <p className="mb-4">
          &copy; 2025 Hilsourcenter. All rights reserved. | Designed with Royal
          Blue & Mongrel Gold.
        </p>
        <div className="flex justify-center gap-6">
          {["Terms of Service", "Privacy Policy", "Contact Support"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="hover:text-yellow-300 transition-colors"
              >
                {link}
              </a>
            )
          )}
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

