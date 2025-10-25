import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner,Alert } from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
const API_URL = 'https://68fcdcec96f6ff19b9f68617.mockapi.io/crud';
function Read(){

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await Axios.get(API_URL);
      setUserData(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch user data. Please check the API endpoint.");
    } finally {
      setLoading(false);
    }
  };
  // useEffect Hook to call fetchUsers once when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []); // The empty dependency array [] ensures this runs only on mount

  // --- Placeholder Handler Functions (for future CRUD operations) ---
  const handleEdit = (id) => {
    alert(`Editing user with ID: ${id}`);
    // Real logic to navigate or open a modal
  };

  const handleDelete = async (id) => {
    if (window.confirm(`Are you sure you want to delete user with ID: ${id}?`)) {
      try {
        await Axios.delete(`${API_URL}/${id}`);
        // If successful, re-fetch the data to update the table
        fetchUsers(); 
        alert(`User ${id} deleted successfully!`);
      } catch (err) {
        console.error("Error deleting data:", err);
        alert("Failed to delete user.");
      }
    }
  };

  if (loading) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" role="status" className="me-2" />
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="m-4">
        {error}
      </Alert>
    );
  }

return (
    <div className="p-4">
        <h2 className="mb-4">User Management Table</h2>
        <Link to="/create">
                    <Button variant="success">
                        Create New User ➕
                    </Button>
        </Link>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 ? (
            userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <Button 
                    variant="warning" 
                    size="sm" 
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit ✏️
                  </Button>
                </td>
                <td>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete 🗑️
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
)
}

export default Read