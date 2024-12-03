import Swal from 'sweetalert2'



const AddCoffee = () => {
          const handleAddCoffee = (e) =>{
              e.preventDefault();

              const form = e.target;

              const name = form.name.value;
              const available = form.quantity.value;
              const supplier = form.supplier.value;
              const taste = form.taste.value;
              const details = form.details.value;
              const photo = form.photo.value;
              
              const coffee = { name, available, supplier , taste, details, photo};
              

              fetch("http://localhost:5000/coffee",{
                method:"POST",
                headers:{
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(coffee)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
               if(data.insertedId){
                Swal.fire({
                  title: 'Success!',
                  text: 'Coffee added successfully',
                  icon: 'success',
                  confirmButtonText: 'Okay'
                })
               }
              })
              .catch(err => console.log(err))
          }
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-lg font-bold text-center py-6">add coffee</h2>

      <form onSubmit={handleAddCoffee} >
        <div className="flex mb-6 gap-2">
          <label className="input input-bordered flex items-center gap-2 w-full">
            Name
            <input type="text" name="name" className="grow"  required/>
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            Avaailable Quantity
            <input type="text" name="quantity" className="grow"  />
          </label>
        </div>
        <div className="flex mb-6 gap-2">
          <label className="input input-bordered flex items-center gap-2 w-full">
            Supplier Name
            <input type="text" name="supplier" className="grow"  />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            Taste
            <input type="text" name="taste" className="grow"  />
          </label>
        </div>

        <div className="flex mb-6 gap-2">
          <label className="input input-bordered flex items-center gap-2 w-full">
            Category
            <input type="text" name="category"  />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
             Details
            <input type="text" name="details"  />

          </label>
        </div>
        <div >
          <label className="input input-bordered flex items-center gap-2 w-full mb-6">
           Photo URL
            <input type="text" name="photo"  />
          </label>

          <label className="input input-bordered flex items-center justify-center bg-base-200 gap-2 w-full">
                 
            <input type="submit" value="Add Coffee" className="btn "/>
          </label>

        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
