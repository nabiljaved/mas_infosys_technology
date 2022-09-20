const getLocations = async () => {
 
    //let locations = ['Missisaga', 'brampton', 'calgery', 'Toronto', 'Otawa'];

    let locations = [];

     try {
       
      const res = await fetch('/driving-school-location', { 
        method: 'GET', 
      });
      const data = await res.json();
      locations = data;
       
      if (data.errors) {
     
      }
      if (data) {
        // location.assign('/admin-dashboard');
        const containers = document.querySelectorAll('#show_locations')
        console.log(containers)

        containers.forEach(container => {

             //console.log(locations)
        locations.map(location => {

        container.innerHTML += `
        <option>${location.location}</option>
        `
    })

})


      }


     } catch (error) {
       
     }
    
}


module.exports = getLocations;