// import AddAssistantButton from "./AddAssistantButton";
// import Searchbar from "./Searchbar";

import "../Group.scss"


const Assistants = () => {

    const AddAssistantButton = () => {
        return (
        <div className='addButton'>
            <i className="pi pi-plus"></i>
            <img src="/assets/icons/common/user.svg" alt='Vector'></img>
            <div className="label">Add Assistant</div>
        
        </div>
        )
    }

    const Searchbar = () => {
        return (
          <div className="searchBar">
              <input type="text" />
                  <div className="searchIcon">
                          <i className="pi pi-search"></i>
                  </div>
          </div>
        )
      }

    const Table = () => {
        return (
            <table>
            <thead>
                <tr>
                <th>Month</th>
                <th>Savings</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>January</td>
                <td>$100</td>
                </tr>
                <tr>
                <td>February</td>
                <td>$80</td>
                </tr>
            </tbody>
            </table>
        )
    }

    return (
        <div className="assistant">
            { AddAssistantButton() }
            { Searchbar() }
            { Table() }
        </div>
    );
}

export default Assistants;