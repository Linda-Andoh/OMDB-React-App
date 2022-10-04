import { useState } from "react"

export default (props) => {

    const [formData, setFormData] = useState({
        searchterm: ""
    });

      //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }; // This Format is the same everytime you use this except for the setFormdata.

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    props.moviesearch(formData.searchterm);
  };

  //The component must return some JSX
    return (
        <>
         <form onSubmit={handleSubmit}>
            <input type="test" name="searchterm" onChange={handleChange} value={formData.searchterm} /> 
            <input type="submit" />
         </form>     
        </>
    )
}