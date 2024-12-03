import Swal from "sweetalert2";

const Coffee = ({ coffee }) => {
  const { _id, name, available, details, photo, supplier, taste } = coffee;


  const handleDelete = (id) =>{
    console.log(id)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <button  
             onClick={() => handleDelete(_id)}
             className="btn btn-primary"  >Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
