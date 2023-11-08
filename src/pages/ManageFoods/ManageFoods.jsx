/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useTable } from "react-table";
import axios from "axios";
import Swal from "sweetalert2";

const ManageFoods = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();
  const url = `http://localhost:5000/foods?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [url]);
  

  const data = React.useMemo(() => foods, [foods]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "Food Name",
        accessor: "foodName",
      },
      {
        Header: "Donator Name",
        accessor: "donatorName",
      },
      {
        Header: "Email",
        accessor: "email",
      },

      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div>
            <Link
              to={`/update/${row.original._id}`}
              className="btn btn-sm btn-neutral"
            >
              Edit
            </Link>
            <br />
            <button
              className="btn btn-sm btn-neutral my-2"
              onClick={() => handleDelete(row.original._id)}
            >
              Delete
            </button>
            <br />
            <Link to={`/manage/${row.original._id}`}>
              <button className="btn btn-sm btn-neutral">Manage</button>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/foods/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your request has been deleted.", "success");
            setFoods((prevFoods) =>
              prevFoods.filter((food) => food._id !== _id)
            );
          }
        });
      }
    });
  };

  useEffect(() => {
    document.title = 'FoodUnity | Manage Foods';
  }, []);

  return (
    <div className="my-10">
      <div className="container mx-auto p-4">
        <table className="table-auto  w-full" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="px-4 py-2 mx-auto text-justify bg-gray-200"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      className="px-4 py-2 text-justify"
                      {...cell.getCellProps()}
                    >
                      {" "}
                      {cell.render("Cell")}{" "}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageFoods;
