import Swal from 'sweetalert2'

const AddCofee = () => {

    const handleAddCoffee=event=>{
        event.preventDefault()

        const form = event.target;
        
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const catacogy = form.catacogy.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee= {name,quantity,supplier,taste,catacogy,details,photo}
        console.log(newCoffee)

        // send data server
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Succces!',
                    text: 'addedd sucessfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl">How Spaer Coffee House</h2>
            <form onSubmit={handleAddCoffee}>
                {/* name and quantity row */}
                <div className="flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffe name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Quantity"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* supplier and taste row */}
                <div className="flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Supplier name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Taste"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* catacogu and details row */}
                <div className="flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Catacogy</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='catacogy' placeholder="Coffe name"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* add button */}
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="PhotoURL"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <input type="submit" value="Add Coffee" className="btn btn-block mt-4" />
            </form>
        </div>
    );
};

export default AddCofee;