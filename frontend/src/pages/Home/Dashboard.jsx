import React, { useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import toast from 'react-hot-toast';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { apiPath } from '../../utils/apiPath';
import SummaryCard from '../../components/Cards/SummaryCard'
import { CARD_BG } from '../../utils/data'; 
import moment from 'moment'; 
import CreateSessionForm from './CreateSessionForm';
import Modal from '../../components/Modal'
const Dashboard = () => {
  const navigate = useNavigate();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({ open: false, data: null });

  const fetchAllSessions = async () => {
    try {
      const response = await axiosInstance.get(apiPath.getMySessions);
      setSessions(response.data.sessions); // assuming response contains { success, sessions }
    } catch (error) {
      console.error("Error Fetching session data");
    }
  };

  const deleteSession = async (sessionData) => {
    // logic for deleting a session if needed
  };

 useEffect(() => {
  fetchAllSessions();
}, []);

useEffect(() => {
  console.log("Sessions state updated:", sessions);
}, [sessions]);


  return (
    <DashboardLayout>
      <div className="p-4">
        <div className="flex justify-end mb-4">
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setOpenCreateModal(true)}
          >
            <LuPlus className="text-xl" />
            Add New
          </button>
        </div>

        <div className="grid gap-4">
  {sessions.length === 0 ? (
    <div className="text-gray-500 text-center text-sm mt-4">
      No sessions found. Click "Add New" to create your first session.
    </div>
  ) : (
    sessions.map((data, index) => (
      <SummaryCard
        key={data?._id}
        colors="bg-white"
        role={data?.role || ""}
        topicsToFocus={data?.topicsToFocus || ""}
        experience={data?.experience || ""}
        questions={data?.questions?.length || 0}
        description={data?.description || ""}
        lastUpdated={
          data?.updatedAt
            ? moment(data.updatedAt).format("DD MMM YYYY")
            : ""
        }
        onSelect={() => navigate(`/interview-prep/${data?._id}`)}
        onDelete={() => setOpenDeleteAlert({ open: true, data })}
      />
    ))
  )}
</div>

      </div>
      <Modal isOpen={openCreateModal} onClose={()=>{
        setOpenCreateModal(false);
      }} hideHeader>
        <div><CreateSessionForm/></div>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
