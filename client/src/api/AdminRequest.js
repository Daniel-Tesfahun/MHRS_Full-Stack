import axios from "axios";
import apiClient from "./ApiIntercepter";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const login = (formData) => API.post("/api/authAdmin/login", formData);

export const getAdminById = (aId) =>
  apiClient.get(`/api/admin/getAdmin/${aId}`);

export const addNewHall = (formData) =>
  apiClient.post("/api/admin/addHallDetails", formData);

export const getAllReservations = () =>
  apiClient.get("/api/admin/allReservations");

export const approveReservation = (rId) =>
  apiClient.post(`/api/admin/approve/${rId}`);

export const rejectReservation = (rId) =>
  apiClient.put(`/api/admin/reject/${rId}`);
