const serviceModel = require("../Model/serviceModel");

const createService = async (req, res) => {
  try {
    const { title, category, description, price, provider_name } = req.body;

    if (!title ||  !category || !price || !provider_name) {
      return res.status(400).json({
        success: false,
        message: "Title, category, price, and provider name are required",
      });
    }

    const newService = await serviceModel.createService(
      title,
      category,
      description,
      price,
      provider_name
    );

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: newService,
    });
  } catch (error) {
    console.error("Create service error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error while creating service",
    });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await serviceModel.getAllServices();

    res.status(200).json({
      success: true,
      message: "Services fetched successfully",
      data: services,
    });
  } catch (error) {
    console.error("Get services error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error while fetching services",
    });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await serviceModel.getServiceById(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    console.error("Get service by ID error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error while fetching service",
    });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
};