import EmployeesListItem from '../employers-list-item/employers-list-item';

import './employers-list.css'
const EmployersList = ({data}) => {
    const elements = data.map(item  => {
         return (
           <EmployeesListItem {...item}/>
        )
    })
    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}
export default EmployersList;