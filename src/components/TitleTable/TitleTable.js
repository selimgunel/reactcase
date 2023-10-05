const Titletable = ({selectedItemData}) => {

    console.log(selectedItemData);
    console.log("deneme");
  
  
      return ( 
          <div className="titletable">
              <table className="table" >
                      <thead>
                        <tr>
                          <th scope="col" >Name</th>
                          <th scope="col" >Status</th>
                          <th scope="col" >Size</th>
                          <th scope="col" >Date</th>
                          <th scope="col" >Time</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                    <td scope="row" ></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
              
                  </tr>
                  
                </tbody>
              </table>
          </div>
       );
  }
   
  export default Titletable;