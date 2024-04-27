import { Switch, Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { students } from "../../../data";

const Table = ({ data }) => {
  const [studentStatus, setStudentStatus] = useState(
    data.data.map((student) => student[2] === "Accepted")
  );
  const [profileIndex, setProfileIndex] = useState(null);

  const toggleStatus = (index) => {
    const updatedStatus = [...studentStatus];
    updatedStatus[index] = !updatedStatus[index];
    setStudentStatus(updatedStatus);
  };

  const handleViewProfile = (index) => {
    setProfileIndex(index === profileIndex ? null : index);
  };

  const handleCloseProfile = () => {
    setProfileIndex(null);
  };

  return (
    <div className="p-4 rounded-lg overflow-hidden">
      <div className="table w-full">
        <p className="bg-gray-900 text-white text-center text-lg font-semibold py-2">
          {data.heading}
        </p>
        <div className="flex bg-yellow-300">
          {data.colHeading.map((col, idx) => (
            <p key={idx} className="flex-1 text-center py-2">
              {col}
            </p>
          ))}
          <p className="flex-1 text-center py-2">Actions</p>
        </div>

        {data.data.map((row, idx) => (
          <div
            key={idx}
            className={`flex ${idx % 2 === 0 ? "bg-gray-200" : "bg-white"}`}
          >
            {row.map((col, colIdx) => (
              <p key={colIdx} className="flex-1 text-center py-2">
                {colIdx === 2 ? (
                  <Switch
                    checked={studentStatus[idx]}
                    onChange={() => toggleStatus(idx)}
                    color="primary"
                    inputProps={{ "aria-label": "accept or reject student" }}
                  />
                ) : (
                  col
                )}
              </p>
            ))}
            <p className="flex-1 text-center py-2">
              <Button
                variant="contained"
                onClick={() => handleViewProfile(idx)}
                size="small"
              >
                {profileIndex === idx ? "Close Profile" : "View Profile"}
              </Button>
            </p>
          </div>
        ))}
      </div>
      <Modal
        open={profileIndex !== null}
        onClose={handleCloseProfile}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Profile of {data.data[profileIndex]?.[1]}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Add profile details here */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const StudentList = () => {
  return (
    <>
      <Table data={students} />
    </>
  );
};

export default StudentList;
